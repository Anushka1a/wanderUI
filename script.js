let destinations = [
  { id:"cinque-terre", name:"Cinque Terre", country:"Italy", region:"Europe", category:"Coast", vibe:"Sea air & slow days", budget:95, tag:"Coastal escape", image:"https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=900&q=82", description:"Pastel villages, cliffside paths, and long lunches by the water.", location:"Liguria, Italy" },
  { id:"kyoto", name:"Kyoto", country:"Japan", region:"Asia", category:"Culture", vibe:"Quiet & considered", budget:80, tag:"Culture & calm", image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=82", description:"Temple gardens, tiny tea houses, and beautiful everyday rituals.", location:"Kyoto, Japan" },
  { id:"dolomites", name:"The Dolomites", country:"Italy", region:"Europe", category:"Nature", vibe:"Big skies & fresh air", budget:110, tag:"Mountain mood", image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=82", description:"Alpine lakes, dramatic peaks, and trails that reset your pace.", location:"South Tyrol, Italy" },
  { id:"marrakech", name:"Marrakech", country:"Morocco", region:"Africa", category:"Culture", vibe:"Color & character", budget:65, tag:"Sensory city", image:"https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=82", description:"Sun-warmed courtyards, lively souks, and hidden riad gardens.", location:"Marrakech, Morocco" },
  { id:"bali", name:"Ubud", country:"Indonesia", region:"Asia", category:"Slow", vibe:"Green & grounded", budget:55, tag:"Slow living", image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=82", description:"Jungle mornings, rice terraces, and time to simply breathe.", location:"Bali, Indonesia" },
  { id:"algarve", name:"The Algarve", country:"Portugal", region:"Europe", category:"Coast", vibe:"Sunshine & salty hair", budget:75, tag:"Coastal escape", image:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=82", description:"Golden coves, sleepy fishing towns, and sunset walks on the sand.", location:"Southern Portugal" },
  { id:"patagonia", name:"Patagonia", country:"Argentina", region:"South America", category:"Nature", vibe:"Wild & wide open", budget:120, tag:"Wild places", image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=82", description:"Glacier-blue lakes and enormous landscapes made for wandering.", location:"Patagonia, Argentina" },
  { id:"pondicherry", name:"Pondicherry", country:"India", region:"Asia", category:"Slow", vibe:"Pastel & unhurried", budget:35, tag:"Slow living", image:"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=82", description:"French-colonial lanes, sea-facing cafés, and gentle mornings.", location:"Puducherry, India" }

  ,{ id:"vrindavan", name:"Vrindavan", country:"India", region:"Asia", category:"Culture", vibe:"Spiritual & peaceful", budget:25, tag:"Sacred city", image:"https://images.unsplash.com/photo-1606293926075-69a00dbadres?auto=format&fit=crop&w=900&q=82", description:"Temples, ghats, and the devotional atmosphere of Braj.", location:"Uttar Pradesh, India" }
  ,{ id:"agra", name:"Agra", country:"India", region:"Asia", category:"Culture", vibe:"Romantic & historic", budget:30, tag:"World wonder", image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=82", description:"Discover the Taj Mahal and the stories of the Mughal era.", location:"Uttar Pradesh, India" }
  ,{ id:"jaipur", name:"Jaipur", country:"India", region:"Asia", category:"Culture", vibe:"Colorful & royal", budget:35, tag:"Pink City", image:"https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=82", description:"Palaces, lively bazaars, forts, and Rajasthani flavors.", location:"Rajasthan, India" }
  ,{ id:"varanasi", name:"Varanasi", country:"India", region:"Asia", category:"Culture", vibe:"Spiritual & soulful", budget:25, tag:"River city", image:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=82", description:"Sunrise boat rides and ancient lanes beside the Ganges.", location:"Uttar Pradesh, India" }
  ,{ id:"goa", name:"Goa", country:"India", region:"Asia", category:"Coast", vibe:"Sunny & carefree", budget:40, tag:"Beach days", image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=82", description:"Palm-lined shores, seafood, Portuguese heritage, and sunsets.", location:"Goa, India" }
  ,{ id:"manali", name:"Manali", country:"India", region:"Asia", category:"Nature", vibe:"Mountain & adventure", budget:35, tag:"Mountain escape", image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=82", description:"Pine forests, mountain views, and fresh Himalayan air.", location:"Himachal Pradesh, India" }
  ,{ id:"srinagar", name:"Srinagar", country:"India", region:"Asia", category:"Nature", vibe:"Peaceful & scenic", budget:45, tag:"Lake & mountains", image:"https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=82", description:"Houseboats, gardens, and the mountain-framed Dal Lake.", location:"Jammu and Kashmir, India" }
  ,{ id:"munnar", name:"Munnar", country:"India", region:"Asia", category:"Nature", vibe:"Green & peaceful", budget:35, tag:"Tea country", image:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=82", description:"Rolling tea gardens, misty hills, and winding scenic roads.", location:"Kerala, India" }
  ,{ id:"udaipur", name:"Udaipur", country:"India", region:"Asia", category:"Culture", vibe:"Romantic & relaxed", budget:40, tag:"City of lakes", image:"https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=900&q=82", description:"Lake palaces, rooftop views, and winding old-city streets.", location:"Rajasthan, India" }
  ,{ id:"rishikesh", name:"Rishikesh", country:"India", region:"Asia", category:"Nature", vibe:"Wellness & adventure", budget:30, tag:"River & retreat", image:"https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=900&q=82", description:"Riverside cafés, yoga, forest walks, and outdoor adventure.", location:"Uttarakhand, India" }
  ,{ id:"haridwar", name:"Haridwar", country:"India", region:"Asia", category:"Culture", vibe:"Sacred & riverside", budget:25, tag:"Ganga & heritage", image:"https://images.unsplash.com/photo-1606293926075-69a00dbadres?auto=format&fit=crop&w=900&q=82", description:"A sacred Ganga-side city known for evening aarti, temples, and lively local bazaars.", location:"Uttarakhand, India" }
  ,{ id:"amritsar", name:"Amritsar", country:"India", region:"Asia", category:"Culture", vibe:"Warm & meaningful", budget:25, tag:"Heritage city", image:"https://images.unsplash.com/photo-1588096344356-7b7c7f0b9c6e?auto=format&fit=crop&w=900&q=82", description:"Visit the Golden Temple and experience Punjabi hospitality.", location:"Punjab, India" }
  ,{ id:"andaman", name:"Andaman Islands", country:"India", region:"Asia", category:"Coast", vibe:"Tropical & adventurous", budget:65, tag:"Island escape", image:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=82", description:"Clear waters, coral reefs, and quiet tropical beaches.", location:"Andaman and Nicobar Islands, India" }
  ,{ id:"hampi", name:"Hampi", country:"India", region:"Asia", category:"Culture", vibe:"Ancient & exploratory", budget:25, tag:"Ruins & stories", image:"https://images.unsplash.com/photo-1600100397608-f010a4b1e5b8?auto=format&fit=crop&w=900&q=82", description:"Explore monumental ruins and surreal boulder-strewn landscapes.", location:"Karnataka, India" }
  ,{ id:"darjeeling", name:"Darjeeling", country:"India", region:"Asia", category:"Nature", vibe:"Cozy & misty", budget:35, tag:"Himalayan views", image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=82", description:"Tea gardens, toy-train rides, and Himalayan sunrises.", location:"West Bengal, India" }
  ,{ id:"meghalaya", name:"Meghalaya", country:"India", region:"Asia", category:"Nature", vibe:"Lush & adventurous", budget:40, tag:"Green escape", image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82", description:"Waterfalls, living root bridges, caves, and cloud-wrapped hills.", location:"Meghalaya, India" }
];

const STORAGE = { saved:"wanderui-saved-v1", theme:"wanderui-theme-v1", plan:"wanderui-plan-v1" };
let activeFilter = "All";
let searchTerm = "";
let sortMode = "featured";
let toastTimer;
let remoteResults = [];
let searchRequestId = 0;
let searchDebounce;
const moodTerms = { beach:["coast","beach","sea","island","tropical"], beaches:["coast","beach","sea","island","tropical"], mountain:["nature","mountain","himalayan","alpine"], mountains:["nature","mountain","himalayan","alpine"], peaceful:["peaceful","quiet","calm","slow","spiritual","relaxed"], peace:["peaceful","quiet","calm","slow","spiritual","relaxed"], adventure:["adventure","wild","mountain","exploratory"], romantic:["romantic","sunset","couple"], spiritual:["spiritual","sacred","temple","soulful"], nature:["nature","green","forest","wild","mountain"], culture:["culture","historic","heritage","temple","city"], food:["food","cafe","flavor","seafood"] };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function readStorage(key, fallback) {
  try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
  catch { return fallback; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { showToast("Browser storage is unavailable in this session."); return false; }
}
function getSaved() { return readStorage(STORAGE.saved, []); }
function isSaved(id) { return getSaved().includes(id); }

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function allDestinations() { return [...destinations, ...remoteResults]; }

const destinationGuides = {
  "vrindavan": { cost:"₹1,500–₹3,500/person/day", duration:"1–2 days", highlights:["Banke Bihari Temple","Prem Mandir (especially illuminated evenings)","ISKCON Krishna Balaram Mandir","Yamuna ghats and local sweets"], bestTime:"October–March" },
  "agra": { cost:"₹2,000–₹4,500/person/day", duration:"1–2 days", highlights:["Taj Mahal","Agra Fort","Mehtab Bagh","Local Mughlai food"], bestTime:"October–March" },
  "jaipur": { cost:"₹2,000–₹5,000/person/day", duration:"2–3 days", highlights:["Amber Fort","Hawa Mahal","City Palace","Local bazaars and Rajasthani food"], bestTime:"October–March" },
  "varanasi": { cost:"₹1,500–₹4,000/person/day", duration:"2–3 days", highlights:["Dashashwamedh Ghat","Kashi Vishwanath Temple","Sunrise boat ride on the Ganges","Old-city lanes and local food"], bestTime:"October–March" },
  "goa": { cost:"₹2,500–₹6,000/person/day", duration:"3–5 days", highlights:["Beaches and sunset viewpoints","Old Goa churches","Local markets","Portuguese-influenced neighbourhoods"], bestTime:"November–February" },
  "manali": { cost:"₹2,000–₹5,000/person/day", duration:"3–4 days", highlights:["Old Manali","Hadimba Devi Temple","Solang Valley","Mountain viewpoints and cafés"], bestTime:"March–June or December–February" },
  "srinagar": { cost:"₹2,500–₹6,000/person/day", duration:"3–4 days", highlights:["Dal Lake","Mughal gardens","Old Srinagar markets","Local Kashmiri cuisine"], bestTime:"March–October" },
  "munnar": { cost:"₹2,000–₹5,000/person/day", duration:"2–3 days", highlights:["Tea gardens and tea museum","Eravikulam National Park","Mattupetty Dam","Scenic hill viewpoints"], bestTime:"September–March" },
  "udaipur": { cost:"₹2,000–₹5,000/person/day", duration:"2–3 days", highlights:["City Palace","Lake Pichola","Jagdish Temple","Old-city lanes and rooftop views"], bestTime:"October–March" },
  "rishikesh": { cost:"₹1,500–₹4,000/person/day", duration:"2–3 days", highlights:["Ram Jhula and Lakshman Jhula area","Triveni Ghat evening aarti","Riverside cafés","Yoga and riverside walks"], bestTime:"September–November or February–April" },
  "haridwar": { cost:"₹1,200–₹3,000/person/day", duration:"1–2 days", highlights:["Har Ki Pauri and Ganga aarti","Mansa Devi Temple (check ropeway status)","Maya Devi Temple","Local bazaars and North Indian food"], bestTime:"October–March" },
  "amritsar": { cost:"₹1,500–₹3,500/person/day", duration:"1–2 days", highlights:["Golden Temple","Jallianwala Bagh","Partition Museum","Punjabi food and local markets"], bestTime:"October–March" },
  "pondicherry": { cost:"₹2,000–₹5,000/person/day", duration:"2–3 days", highlights:["French Quarter","Promenade Beach","Cafés and heritage streets","Auroville area (check visitor access)"], bestTime:"November–February" },
  "hampi": { cost:"₹1,500–₹3,500/person/day", duration:"2–3 days", highlights:["Virupaksha Temple","Vijaya Vittala Temple complex","Hampi Bazaar area","Boulder landscapes and ruins"], bestTime:"October–February" },
  "darjeeling": { cost:"₹2,000–₹5,000/person/day", duration:"2–3 days", highlights:["Tiger Hill sunrise","Batasia Loop","Tea gardens","Darjeeling Himalayan Railway"], bestTime:"March–May or October–November" },
  "meghalaya": { cost:"₹2,500–₹6,000/person/day", duration:"4–6 days", highlights:["Shillong viewpoints","Waterfalls around Cherrapunji/Sohra","Living root bridges (guided/local advice recommended)","Caves and local markets"], bestTime:"October–April" },
  "cinque-terre": { cost:"€120–€220/person/day", duration:"2–4 days", highlights:["Five colourful coastal villages","Coastal walking trails","Harbour viewpoints","Local Ligurian food"], bestTime:"April–June or September" },
  "kyoto": { cost:"¥12,000–¥25,000/person/day", duration:"3–4 days", highlights:["Fushimi Inari Shrine","Arashiyama bamboo area","Kiyomizu-dera","Traditional streets and tea houses"], bestTime:"March–May or October–November" },
  "marrakech": { cost:"€50–€120/person/day", duration:"2–4 days", highlights:["Jemaa el-Fnaa square","Medina souks","Majorelle Garden (check tickets)","Traditional riad courtyards"], bestTime:"March–May or September–November" },
  "ubud": { cost:"IDR 600k–1.5m/person/day", duration:"3–5 days", highlights:["Rice terraces","Ubud art market","Temple and cultural sites","Jungle walks and local cafés"], bestTime:"April–October" }
};

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function openDestinationDetails(id) {
  const place = allDestinations().find(item => item.id === id);
  if (!place) return;
  const guide = destinationGuides[place.id] || {};
  const curated = Boolean(guide.cost);
  const cost = guide.cost || (place.country === "India" ? "₹1,500–₹5,000/person/day*" : "Not available yet");
  const highlights = guide.highlights || [
    `Explore well-known sights in ${place.name}`,
    `Try local food and visit local markets in ${place.name}`,
    `Check nearby nature, cultural or heritage attractions`
  ];
  $("#detailsImage").src = place.image;
  $("#detailsImage").alt = `${place.name} travel inspiration`;
  $("#detailsEyebrow").textContent = `${place.tag || "DESTINATION GUIDE"} · ${place.category || "Explore"}`;
  $("#detailsTitle").textContent = place.name;
  $("#detailsLocation").textContent = `⌖ ${place.location || [place.region, place.country].filter(Boolean).join(", ")}`;
  $("#detailsDescription").textContent = place.description || `Explore ${place.name}, discover local highlights, and plan a trip that suits your pace.`;
  $("#detailsCost").textContent = cost;
  $("#detailsCostNote").textContent = curated ? `Rough planning range · best time: ${guide.bestTime || "varies by season"}` : "No live prices available · check current local rates";
  $("#detailsMood").textContent = place.vibe || place.category || "Discovery";
  $("#detailsDuration").textContent = `Suggested stay: ${guide.duration || "1–3 days (adjust to your plans)"}`;
  $("#detailsHighlights").innerHTML = highlights.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  $("#detailsNote").textContent = curated ? "Indicative per-person daily budget, not a live quote. Transport to the destination, shopping and special activities may cost extra; prices change by season and travel style." : "This is a global search result. Exact attraction suggestions and a trustworthy local budget are not yet available for every place, so confirm current details before booking.";
  $("#addDetailsToPlan").dataset.destinationId = place.id;
  $("#saveDetailsPlace").dataset.destinationId = place.id;
  $("#saveDetailsPlace").textContent = isSaved(place.id) ? "♥ Saved" : "♡ Save place";
  $("#detailsModal").hidden = false;
  $("#closeDetails").focus();
  // Global search results get live encyclopedia context and nearby mapped attractions.
  // Curated destinations keep their reviewed guide and indicative budget.
  if (place.id.startsWith("world-")) loadLiveDestinationInfo(place);
}


const liveDetailsCache = new Map();

async function loadLiveDestinationInfo(place) {
  const title = place.name;
  const cacheKey = `${place.id}:${place.coordinates?.join(",") || "no-coordinates"}`;
  if (liveDetailsCache.has(cacheKey)) {
    applyLiveDestinationInfo(liveDetailsCache.get(cacheKey), place);
    return;
  }
  $("#detailsDescription").textContent = `Loading available public information for ${title}…`;
  $("#detailsHighlights").innerHTML = "<li>Looking for nearby mapped attractions…</li>";
  const result = { description: "", image: "", wikiUrl: "", attractions: [] };
  const tasks = [];

  // Prefer our Node/Express API while running locally/deployed with the backend.
  // Static GitHub Pages falls back to the public APIs below.
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    try {
      const apiResponse = await fetch(`/api/details?name=${encodeURIComponent(place.name)}&country=${encodeURIComponent(place.country || "")}&lat=${encodeURIComponent(place.coordinates?.[1] ?? "")}&lon=${encodeURIComponent(place.coordinates?.[0] ?? "")}`);
      if (apiResponse.ok) {
        const apiData = await apiResponse.json();
        const apiResult = { description: apiData.description || "", image: apiData.image || "", wikiUrl: apiData.wikiUrl || "", attractions: apiData.attractions || [] };
        liveDetailsCache.set(cacheKey, apiResult);
        applyLiveDestinationInfo(apiResult, place);
        return;
      }
    } catch (_) { /* Local API is not running; use direct public API fallback. */ }
  }

  // Wikipedia search + summary: no API key required; coverage varies by place.
  tasks.push((async () => {
    try {
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(title + (place.country ? " " + place.country : ""))}&format=json&origin=*&srlimit=1`;
      const searchResponse = await fetch(searchUrl);
      if (!searchResponse.ok) return;
      const searchData = await searchResponse.json();
      const pageTitle = searchData.query?.search?.[0]?.title;
      if (!pageTitle) return;
      const summaryResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle.replace(/ /g, "_"))}`);
      if (!summaryResponse.ok) return;
      const summary = await summaryResponse.json();
      if (summary.type === "disambiguation") return;
      result.description = summary.extract || "";
      result.image = summary.thumbnail?.source || "";
      result.wikiUrl = summary.content_urls?.desktop?.page || "";
    } catch (_) { /* Keep the place usable when this public service is unavailable. */ }
  })());

  // Nearby points of interest from OpenStreetMap. Only called when a user opens details.
  if (Array.isArray(place.coordinates) && place.coordinates.length === 2) {
    const [lon, lat] = place.coordinates;
    if (Number.isFinite(lat) && Number.isFinite(lon)) {
      tasks.push((async () => {
        try {
          const query = `[out:json][timeout:12];(node(around:8000,${lat},${lon})[tourism~"^(attraction|museum|viewpoint|zoo|theme_park)$"];way(around:8000,${lat},${lon})[tourism~"^(attraction|museum|viewpoint|zoo|theme_park)$"];node(around:8000,${lat},${lon})[historic];way(around:8000,${lat},${lon})[historic];node(around:8000,${lat},${lon})[amenity~"^(place_of_worship|arts_centre)$"];);out center tags 35;`;
          const response = await fetch("https://overpass-api.de/api/interpreter", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }, body: `data=${encodeURIComponent(query)}` });
          if (!response.ok) return;
          const data = await response.json();
          const seen = new Set();
          result.attractions = (data.elements || []).map(item => item.tags?.name).filter(name => {
            if (!name) return false;
            const key = name.toLowerCase();
            if (seen.has(key) || key === title.toLowerCase()) return false;
            seen.add(key); return true;
          }).slice(0, 8);
        } catch (_) { /* Overpass may be busy or have no nearby mapped attractions. */ }
      })());
    }
  }

  await Promise.all(tasks);
  liveDetailsCache.set(cacheKey, result);
  applyLiveDestinationInfo(result, place);
}

function applyLiveDestinationInfo(info, place) {
  // Avoid changing a modal that the user has already closed or switched to another place.
  if ($("#detailsModal").hidden || $("#detailsTitle").textContent !== place.name) return;
  if (info.description) $("#detailsDescription").textContent = info.description;
  if (info.image) { $("#detailsImage").src = info.image; $("#detailsImage").alt = `${place.name} — image from Wikipedia`; }
  if (info.attractions.length) {
    $("#detailsHighlights").innerHTML = info.attractions.map(name => `<li>${escapeHtml(name)}</li>`).join("");
  } else {
    $("#detailsHighlights").innerHTML = `<li>Search a local tourism website for verified attractions in ${escapeHtml(place.name)}</li><li>Explore nearby heritage, nature and cultural sites</li>`;
  }
  const sources = [];
  if (info.wikiUrl) sources.push(`<a href="${escapeHtml(info.wikiUrl)}" target="_blank" rel="noopener noreferrer">Wikipedia description</a>`);
  sources.push('<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap data</a>');
  $("#detailsNote").innerHTML = `Live public data when available. No verified live hotel prices or trip budget are provided for this result. ${sources.join(" · ")}`;
}

function closeDestinationDetails() {
  $("#detailsModal").hidden = true;
}
function renderDestinations() {
  const grid = $("#destinationGrid");
  const all = allDestinations();
  const query = searchTerm.toLowerCase();
  const moodMatches = Object.entries(moodTerms).filter(([key]) => query.includes(key)).flatMap(([,values]) => values);
  let list = all.filter(place => {
    const matchesFilter = activeFilter === "All" || place.category === activeFilter;
    const haystack = `${place.name} ${place.country} ${place.region} ${place.category} ${place.vibe} ${place.description} ${place.location} ${place.tag} ${(place.tags || []).join(" ")}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query) || moodMatches.some(term => haystack.includes(term));
    return matchesFilter && matchesSearch;
  });
  if (sortMode === "budget") list.sort((a,b) => (a.budget ?? 999) - (b.budget ?? 999));
  if (sortMode === "name") list.sort((a,b) => a.name.localeCompare(b.name));
  const remoteLoading = Boolean(query.length >= 2 && window.__wanderSearchLoading);
  $("#resultsLabel").textContent = `Showing ${list.length} ${list.length === 1 ? "destination" : "destinations"}${remoteLoading ? " · searching the world…" : ""}`;
  $("#emptyState").hidden = list.length !== 0;
  grid.innerHTML = list.map((place, index) => `
    <article class="destination-card" style="animation-delay:${index * 35}ms">
      <div class="card-image-wrap">
        <img class="card-image" src="${place.image}" alt="${place.name}, ${place.location}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=82'">
        <span class="card-tag">${place.tag || "Worth discovering"}</span>
        <button class="favorite-button ${isSaved(place.id) ? "is-saved" : ""}" data-favorite="${place.id}" aria-label="${isSaved(place.id) ? "Remove" : "Save"} ${place.name}" aria-pressed="${isSaved(place.id)}">${isSaved(place.id) ? "♥" : "♡"}</button>
      </div>
      <div class="card-content">
        <div class="card-location"><span>⌖</span>${place.location}</div>
        <div class="card-title-row"><h3><button class="card-title-button" data-details="${place.id}" aria-label="View details for ${place.name}">${place.name}</button></h3><span class="card-price">${place.budget ? `from <b>$${place.budget}</b>/day` : "Explore"}</span></div>
        <p class="card-description">${place.description || `Find local highlights, places to visit, and travel inspiration for ${place.name}.`}</p>
        <div class="card-bottom"><span class="card-vibe">${place.vibe || place.category || "Explore"}</span><button class="card-details" data-details="${place.id}">Discover <span>↗</span></button></div>
      </div>
    </article>`).join("");
  updateSavedCount();
}

async function searchWorldPlaces(query) {
  const requestId = ++searchRequestId;
  const normalizedQuery = query.trim().toLowerCase();
  const moodOnlyTerms = new Set([
    "beach", "beaches", "mountain", "mountains", "peaceful", "peace", "adventure",
    "romantic", "spiritual", "nature", "culture", "food", "relaxing", "relaxation",
    "slow", "slow living", "wildlife", "hiking", "historic", "history"
  ]);
  // Mood searches use the curated destination metadata rather than searching a place-name database.
  if (normalizedQuery.length < 2 || moodOnlyTerms.has(normalizedQuery)) {
    remoteResults = [];
    window.__wanderSearchLoading = false;
    renderDestinations();
    return;
  }
  window.__wanderSearchLoading = true;
  renderDestinations();
  try {
    // Photon is a public OpenStreetMap-based place search API; no API key is needed.
    let response;
    let data;
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      try {
        response = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=12`);
        if (response.ok) data = await response.json();
      } catch (_) { /* Continue with direct Photon fallback. */ }
    }
    if (!data) {
      response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=12&lang=en`);
      if (!response.ok) throw new Error("Place search is temporarily unavailable");
      data = await response.json();
    }
    if (requestId !== searchRequestId) return;
    const existingNames = new Set(destinations.map(place => place.name.toLowerCase()));
    remoteResults = (data.features || []).map((feature, index) => {
      const props = feature.properties || {};
      const name = props.name || props.city || props.town || props.village || props.county;
      if (!name) return null;
      const country = props.country || "Location";
      const region = props.state || props.region || country;
      const location = [props.state, country].filter(Boolean).join(", ");
      const id = `world-${String(props.osm_type || "place")}-${props.osm_id || `${name}-${index}`}`.toLowerCase().replace(/[^a-z0-9-]/g, "-");
      if (existingNames.has(name.toLowerCase())) return null;
      const type = `${props.type || ""} ${props.osm_value || ""}`.toLowerCase();
      const category = /beach|coast|island|sea/.test(type) ? "Coast" : /park|forest|mountain|peak|waterfall|nature/.test(type) ? "Nature" : /temple|museum|historic|monument|church|castle/.test(type) ? "Culture" : "Slow";
      return { id, name, country, region, category, vibe:category === "Nature" ? "Fresh air & discovery" : category === "Coast" ? "Sea air & slow days" : category === "Culture" ? "Stories & heritage" : "Local life & slow travel", tag:"World search", image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=82", description:`Explore ${name}${country ? ` in ${country}` : ""}. Discover local sights, culture, and travel ideas.`, location, budget:null, tags:[props.type, props.osm_value].filter(Boolean), coordinates:feature.geometry?.coordinates };
    }).filter(Boolean);
  } catch (error) {
    if (requestId === searchRequestId) showToast("World search unavailable right now. Showing saved destinations.");
  } finally {
    if (requestId === searchRequestId) { window.__wanderSearchLoading = false; renderDestinations(); }
  }
}

function toggleSaved(id) {
  const saved = getSaved();
  const exists = saved.includes(id);
  const next = exists ? saved.filter(item => item !== id) : [...saved, id];
  writeStorage(STORAGE.saved, next);
  renderDestinations();
  if ($("#savedModal").hidden === false) renderSavedModal();
  const place = allDestinations().find(item => item.id === id);
  showToast(exists ? `${place.name} removed from saved places.` : `${place.name} added to your collection.`);
}

function updateSavedCount() {
  $("#savedCount").textContent = getSaved().length;
}
function renderSavedModal() {
  const list = $("#savedList");
  const savedPlaces = getSaved().map(id => allDestinations().find(place => place.id === id)).filter(Boolean);
  if (!savedPlaces.length) {
    list.innerHTML = '<div class="saved-empty">Your collection is waiting for its first place.<br>Tap a heart on any destination to save it.</div>';
    return;
  }
  list.innerHTML = savedPlaces.map(place => `<div class="saved-item"><img src="${place.image}" alt="" loading="lazy"><div class="saved-item-copy"><b>${place.name}</b><small>${place.location} · from $${place.budget}/day</small></div><button class="remove-saved" data-remove-saved="${place.id}" aria-label="Remove ${place.name}">×</button></div>`).join("");
}

function openSavedModal() {
  renderSavedModal();
  $("#savedModal").hidden = false;
  $("#closeSaved").focus();
}
function closeSavedModal() {
  $("#savedModal").hidden = true;
  $("#showSaved").focus();
}

function chooseSurprise() {
  const pool = allDestinations().filter(place => !isSaved(place.id));
  const options = pool.length ? pool : allDestinations();
  const pick = options[Math.floor(Math.random() * options.length)];
  $("#destinationSearch").value = "";
  searchTerm = "";
  activeFilter = "All";
  $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.filter === "All"));
  renderDestinations();
  const card = $(`[data-details="${pick.id}"]`);
  card?.closest(".destination-card")?.scrollIntoView({ behavior:"smooth", block:"center" });
  showToast(`Your surprise destination: ${pick.name} ✨`);
}

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  $("#themeToggle").textContent = theme === "dark" ? "☾" : "☼";
  $("#themeToggle").setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  try { localStorage.setItem(STORAGE.theme, theme); } catch {}
}
function initTheme() {
  let theme = "light";
  try { theme = localStorage.getItem(STORAGE.theme) || "light"; } catch {}
  setTheme(theme);
}

function loadPlan() {
  const plan = readStorage(STORAGE.plan, { name:"The someday list", notes:"" });
  $("#tripName").value = plan.name === "The someday list" ? "" : plan.name;
  $("#tripNotes").value = plan.notes || "";
  $("#plannerTitle").textContent = plan.name || "The someday list";
}
function savePlan(showMessage = true) {
  const name = $("#tripName").value.trim() || "The someday list";
  const notes = $("#tripNotes").value.trim();
  const saved = writeStorage(STORAGE.plan, { name, notes });
  $("#plannerTitle").textContent = name;
  $("#planStatus").textContent = saved ? "Saved in this browser" : "Could not save right now";
  if (showMessage && saved) {
    $("#planConfirmation").textContent = "Your trip notes are saved. Future you says thanks.";
    showToast("Your trip plan is saved.");
  }
}

function handleGridClick(event) {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) { toggleSaved(favorite.dataset.favorite); return; }
  const details = event.target.closest("[data-details]");
  if (details) { openDestinationDetails(details.dataset.details); return; }
  const card = event.target.closest(".destination-card");
  if (card) {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (!favoriteButton) {
      const detailsButton = card.querySelector("[data-details]");
      if (detailsButton) openDestinationDetails(detailsButton.dataset.details);
    }
  }
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  initTheme();
  loadPlan();
  renderDestinations();

  $("#destinationSearch").addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    renderDestinations();
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => searchWorldPlaces(searchTerm), 350);
  });
  $("#filterRow").addEventListener("click", event => {
    const chip = event.target.closest("[data-filter]");
    if (!chip) return;
    activeFilter = chip.dataset.filter;
    $$(".filter-chip").forEach(item => item.classList.toggle("active", item === chip));
    renderDestinations();
  });
  $("#sortSelect").addEventListener("change", event => { sortMode = event.target.value; renderDestinations(); });
  $("#destinationGrid").addEventListener("click", handleGridClick);
  $("#closeDetails").addEventListener("click", closeDestinationDetails);
  $("#detailsModal").addEventListener("click", event => { if (event.target === $("#detailsModal")) closeDestinationDetails(); });
  $("#addDetailsToPlan").addEventListener("click", event => {
    const place = allDestinations().find(item => item.id === event.currentTarget.dataset.destinationId);
    if (!place) return;
    $("#tripName").value = `A trip to ${place.name}`;
    $("#tripNotes").value = `${place.name}, ${place.location || place.country}\nMood: ${place.vibe || place.category || "Explore"}\nIdeas: ${place.description || "Research local highlights and current travel costs."}`;
    savePlan(false);
    closeDestinationDetails();
    $("#planner").scrollIntoView({ behavior:"smooth", block:"center" });
    showToast(`${place.name} added to your trip plan.`);
  });
  $("#saveDetailsPlace").addEventListener("click", event => {
    const id = event.currentTarget.dataset.destinationId;
    toggleSaved(id);
    event.currentTarget.textContent = isSaved(id) ? "♥ Saved" : "♡ Save place";
  });
  $("#clearFilters").addEventListener("click", () => {
    activeFilter = "All"; searchTerm = ""; $("#destinationSearch").value = "";
    $$(".filter-chip").forEach(item => item.classList.toggle("active", item.dataset.filter === "All"));
    renderDestinations();
  });
  $("#surpriseMe").addEventListener("click", chooseSurprise);
  $("#showSaved").addEventListener("click", openSavedModal);
  $("#closeSaved").addEventListener("click", closeSavedModal);
  $("#savedModal").addEventListener("click", event => { if (event.target === $("#savedModal")) closeSavedModal(); });
  $("#savedList").addEventListener("click", event => {
    const button = event.target.closest("[data-remove-saved]");
    if (button) toggleSaved(button.dataset.removeSaved);
  });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !$("#savedModal").hidden) closeSavedModal(); if (event.key === "Escape" && !$("#detailsModal").hidden) closeDestinationDetails(); });
  $("#themeToggle").addEventListener("click", () => setTheme(document.body.classList.contains("dark") ? "light" : "dark"));
  $("#savePlan").addEventListener("click", () => savePlan(true));
  $("#tripName").addEventListener("input", () => { $("#plannerTitle").textContent = $("#tripName").value.trim() || "The someday list"; savePlan(false); });
  $("#tripNotes").addEventListener("input", () => savePlan(false));
  $("#postcardForm").addEventListener("submit", event => {
    event.preventDefault();
    $("#emailMessage").textContent = "Thanks for the interest! This demo doesn't send or store email addresses.";
    $("#emailInput").value = "";
    showToast("Thanks for stopping by ✨");
  });
  $("#menuToggle").addEventListener("click", () => {
    const nav = $(".desktop-nav");
    const open = nav.classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
    $("#menuToggle").textContent = open ? "×" : "☰";
  });
  $$(".desktop-nav a").forEach(link => link.addEventListener("click", () => {
    $(".desktop-nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").textContent = "☰";
  }));
  $("#backToTop").addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}
document.addEventListener("DOMContentLoaded", init);
