# Seattle Office Space Finder

An interactive, shareable web page for evaluating candidate office spaces in
Seattle. Click a location on the map (or a card in the sidebar) to see photos,
pricing, square footage, amenities, parking, nearby restaurants/coffee, and
walking distance to the downtown ferry terminal.

## Features

- **Interactive map** (Leaflet + OpenStreetMap) with clickable, numbered office markers
- **Detail panel** per listing: photo gallery, price, square footage, seat capacity, price/sqft
- **Amenities** at a glance: parking (with monthly cost), bike storage, gym, kitchen
- **Ferry proximity** — walking time and distance measured from **Colman Dock (Pier 52)**
- **Nearby** restaurants and coffee shops with walking distances
- **Filters** by neighborhood and max monthly price
- **Responsive** layout that collapses to a single column on smaller screens

## Running locally

This is a static site with no build step. Any static file server works:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` directly in a browser.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell, header, three-column layout, script/style includes |
| `styles.css` | All styling and responsive breakpoints |
| `data.js` | `OFFICES` array — the listing data (edit this to update listings) |
| `app.js` | Rendering logic: map, markers, listing cards, detail panel, filters |

## Editing listings

All listing content lives in `data.js`. Each office is an object:

```js
{
  id, name, neighborhood, address,
  lat, lng,                                 // map marker position
  price, sqft, seats,
  photos: [url, url, url],
  parking: { available, note, monthly },    // monthly can be null
  bike, gym, kitchen,                        // booleans
  ferry: { minutesWalk, miles },             // from Colman Dock (Pier 52)
  restaurants: [{ name, dist }],
  coffee: [{ name, dist }]
}
```

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute the site is available at
   `https://<username>.github.io/seattleofficespace/`.

## Note on data

The listings included here are **illustrative samples** assembled for an office
search. Verify pricing, square footage, availability, and amenities directly
with each building before making any commitments.
