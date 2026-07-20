# Seattle Office Search — Sapience AI
 
An interactive, shareable map + list for comparing downtown Seattle office spaces
for Sapience AI's office search. Built as a single `index.html` — no build step,
no framework, no API key.
 
Styled to the **Sapience AI brand system**: Sand background, Imperial Plum for
identity, Charcoal Grey text, Sage/Violet accents used sparingly. Libre Baskerville
carries the headings; Inter carries every functional surface.
 
**Live features**
- Map of all 13 spaces (Leaflet + OpenStreetMap) with the Colman Dock ferry terminal marked
- Click any pin or card to open a full detail drawer
- Sort by: nearest ferry, price, size, neighborhood, name
- Filter by neighborhood and by must-have amenities (gym, bike, kitchen, parking, private offices, ≤0.5mi to ferry)
- Every card links out to its source listing
- Responsive down to mobile; keyboard accessible; respects reduced-motion
---
 
## Put it on GitHub Pages
 
1. Create a repo named **`seattleofficespace`**.
2. Add `index.html` (and optionally `properties.json`, this `README.md`) to the root.
3. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `root`, Save.
4. Your site goes live at
   `https://<your-username>.github.io/seattleofficespace/`
   (You mentioned `aksapience.github.io/seattleofficespace/` — matches this setup.)
The map and fonts load from public CDNs (Leaflet, CARTO tiles, Google Fonts),
so they work automatically once served over `https://` — nothing to configure.
 
---
 
## Adding real photos
 
Photos are **not** embedded from the listing sites — LoopNet / CommercialCafe / CBRE
block hotlinking and rotate their image URLs, so embeds would show as broken.
For now each space shows a placeholder and links to its source listing.
 
To add your own images:
 
1. Make an `images/` folder in the repo.
2. Drop in a photo per space, e.g. `images/labour-temple.jpg`.
3. In `index.html`, find the property in the `DATA` block (search its `"id"`)
   and add an `"image"` key:
```json
   { "id": "labour-temple", "image": "images/labour-temple.jpg", ... }
```
 
The card and drawer pick it up automatically, and fall back to the placeholder
if the file is missing.
 
---
 
## Editing the data
 
All 13 spaces live in the `const DATA = {...}` block near the bottom of `index.html`.
Each property has consistent keys (`price_per_sf`, `available_sf`, `parking`,
`gym`, `kitchen`, `bike_storage`, `lat`, `lng`, `ferry_mi`, a `spaces` array, and a
`nearby` object with `coffee` and `food` lists, etc.).
`null` renders as "Not listed." `properties.json` is the same data (including
`nearby`) without the map coordinates, kept alongside as a clean source of truth.
 
The `nearby` coffee and food spots are real places pulled from Google Places
(name, one-line note, star rating). Each drawer shows the two closest, best-rated
of each near that building.
 
To move a pin, edit that property's `lat` / `lng`.
To recompute walk-to-ferry, update `ferry_mi` (miles from Colman Dock, 47.6027, -122.3387).
 
---
 
## Switching to Google Maps later
 
The map is intentionally isolated in one `try{...}` block near the top of the script.
If you set up a Google Maps API key (Google Cloud account + billing + a
**domain-restricted** key), that block is the only part to swap. Leaflet is the
safer default for a public repo because it needs no key and can't run up a bill.
 
---
 
*Data compiled July 19, 2026 from public listings. Rates and availability change —
verify with the listing broker before acting. Rate types differ (coworking all-in,
NNN excludes operating costs, full-service includes them), so compare within type.*
