# WanderUI — Find your somewhere

A responsive, premium-style travel discovery website built with **HTML, CSS, and vanilla JavaScript**.

## Features
- Search the curated collection by destination, country, region, category, or travel mood
- World place search using the public Photon/OpenStreetMap geocoding service (no API key; internet required; results depend on service availability and coverage)
- Clickable destination cards with a detail panel, suggested attractions, stay duration, and indicative daily budget for selected curated destinations
- Destination cards with search, category filters, and sorting
- Surprise Me destination picker
- Save/remove favorite destinations
- Saved places modal
- Trip planner with auto-saving notes
- Light/dark theme toggle
- Responsive mobile navigation
- Demo postcard form (does not send emails)
- Browser `localStorage` for favorites, theme, and trip plan

## Run locally
Open `index.html` in a browser. For a local server, open the folder in VS Code and use the Live Server extension.

## Deploy with GitHub Pages
1. Create a GitHub repository named `wanderui` (or another name you prefer).
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then click **Save**.
6. Wait a minute and refresh the Pages settings; GitHub will show the published URL.

Images and fonts are loaded from external services, so an internet connection is needed for those assets. All interactive behavior is client-side. Destination costs are indicative planning ranges for selected curated destinations, not live quotes. Global search results may not have verified costs or attraction lists.
