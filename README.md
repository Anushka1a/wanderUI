# WanderUI — Find your somewhere

A responsive travel discovery website with a vanilla HTML/CSS/JavaScript frontend and an optional Node.js + Express API backend.
 **Live Demo:** https://wanderui.onrender.com/

## Features
- Search the global OpenStreetMap-based place index through Photon (not limited to the curated starter destinations)
- Search results include place name, country/region where mapped, and coordinates when available
- Destination detail enrichment using Wikipedia/Wikimedia descriptions and thumbnails where available
- Nearby mapped attractions from OpenStreetMap Overpass where coordinates and local mapping data are available
- Server-side API proxy with basic in-memory caching, timeout handling, and alternate Overpass endpoint
- Curated destination cards, filters/sorting, destination details, favorites, trip planner, themes, and responsive navigation

## Run with the Node.js backend (recommended for development)
Requires Node.js 18 or newer.

1. Open this folder in VS Code.
2. Open Terminal in this folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm start
   ```

5. Open http://localhost:3000
6. Test the API directly at http://localhost:3000/api/health or http://localhost:3000/api/search?q=Haridwar.

The frontend automatically uses `/api/search` and `/api/details` on localhost. If opened from a static host such as GitHub Pages, it falls back to calling the public APIs directly.

## Important data limits
No public source contains complete, verified information about literally every place. Photon search coverage depends on OpenStreetMap mapping and may return towns, villages, neighborhoods, landmarks, or duplicate/multiple matches. Wikipedia summaries and photos may not exist for every result. Attractions depend on what local contributors have mapped. This app does not currently provide live hotel availability/prices, transport fares, or verified real-time budgets; do not treat its indicative budgets as quotes.

Public APIs can be rate-limited or temporarily unavailable. Keep caching enabled and avoid excessive requests. OpenStreetMap data attribution: https://www.openstreetmap.org/copyright. Wikimedia/Wikipedia content and images are subject to their respective licenses and attribution requirements.

## Deploy
GitHub Pages can host the static frontend, but **cannot run this Express server**. For the full backend experience, deploy this folder to a Node.js hosting service and configure the frontend to use that backend URL (and enable appropriate CORS/security settings if frontend and backend use different domains). The static frontend remains usable with its direct public-API fallback on GitHub Pages.
