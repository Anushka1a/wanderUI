const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const cache = new Map();
const CACHE_TTL_MS = 1000 * 60 * 30;

app.disable('x-powered-by');
app.use(express.static(ROOT, { extensions: ['html'] }));

function cached(key) {
  const entry = cache.get(key);
  if (!entry || Date.now() - entry.savedAt > CACHE_TTL_MS) return null;
  return entry.value;
}
function saveCache(key, value) { cache.set(key, { value, savedAt: Date.now() }); }
async function fetchJson(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { 'User-Agent': 'WanderUI/1.0 (travel discovery demo)', ...(options.headers || {}) }, signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Upstream service returned ${response.status}`);
  return response.json();
}

// Worldwide place search powered by Photon/OpenStreetMap. Search results are live and not a fixed city list.
app.get('/api/search', async (req, res) => {
  const q = String(req.query.q || '').trim().slice(0, 120);
  const limit = Math.min(20, Math.max(1, Number.parseInt(req.query.limit || '12', 10) || 12));
  if (q.length < 2) return res.json({ type: 'FeatureCollection', features: [] });
  const key = `search:${q.toLowerCase()}:${limit}`;
  const existing = cached(key);
  if (existing) return res.json(existing);
  try {
    const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=${limit}&lang=en`;
    const data = await fetchJson(url);
    saveCache(key, data);
    res.set('Cache-Control', 'public, max-age=60').json(data);
  } catch (error) {
    res.status(502).json({ error: 'Place search is temporarily unavailable', message: error.message });
  }
});

// Enrich any searched place with a Wikipedia summary/image and nearby mapped points of interest.
app.get('/api/details', async (req, res) => {
  const name = String(req.query.name || '').trim().slice(0, 120);
  const country = String(req.query.country || '').trim().slice(0, 100);
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);
  if (!name) return res.status(400).json({ error: 'A place name is required' });
  const cacheKey = `details:${name.toLowerCase()}:${country.toLowerCase()}:${Number.isFinite(lat) ? lat.toFixed(3) : ''}:${Number.isFinite(lon) ? lon.toFixed(3) : ''}`;
  const existing = cached(cacheKey);
  if (existing) return res.json(existing);
  const result = { name, description: '', image: '', wikiUrl: '', attractions: [], sources: [] };

  const tasks = [];
  tasks.push((async () => {
    try {
      const search = await fetchJson(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(`${name} ${country}`.trim())}&format=json&srlimit=1`);
      const title = search.query?.search?.[0]?.title;
      if (!title) return;
      const summary = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`);
      if (summary.type === 'disambiguation') return;
      result.description = summary.extract || '';
      result.image = summary.thumbnail?.source || '';
      result.wikiUrl = summary.content_urls?.desktop?.page || '';
      if (result.description || result.image) result.sources.push('Wikimedia/Wikipedia');
    } catch (_) { /* An unavailable encyclopedia should not break search. */ }
  })());

  if (Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180) {
    tasks.push((async () => {
      const query = `[out:json][timeout:12];(node(around:8000,${lat},${lon})[tourism~"^(attraction|museum|viewpoint|zoo|theme_park)$"];way(around:8000,${lat},${lon})[tourism~"^(attraction|museum|viewpoint|zoo|theme_park)$"];node(around:8000,${lat},${lon})[historic];way(around:8000,${lat},${lon})[historic];node(around:8000,${lat},${lon})[amenity="place_of_worship"];);out center tags 40;`;
      for (const endpoint of ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter']) {
        try {
          const data = await fetchJson(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body: `data=${encodeURIComponent(query)}` });
          const seen = new Set();
          result.attractions = (data.elements || []).map(item => item.tags?.name).filter(item => {
            if (!item) return false;
            const k = item.toLowerCase();
            if (seen.has(k) || k === name.toLowerCase()) return false;
            seen.add(k); return true;
          }).slice(0, 10);
          if (result.attractions.length) result.sources.push('OpenStreetMap');
          break;
        } catch (_) { /* Try the alternate public Overpass endpoint. */ }
      }
    })());
  }
  await Promise.all(tasks);
  saveCache(cacheKey, result);
  res.set('Cache-Control', 'public, max-age=300').json(result);
});

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'WanderUI API', endpoints: ['/api/search?q=Haridwar', '/api/details?name=Haridwar&lat=29.9457&lon=78.1642'] }));

app.get('*', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));
app.listen(PORT, () => console.log(`WanderUI running at http://localhost:${PORT}`));
