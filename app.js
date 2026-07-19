/*
 * Seattle Office Space Finder — app logic
 * ------------------------------------------------------------
 * Renders the listing sidebar, an interactive Leaflet map with
 * clickable markers, and a detail panel. Consumes the global
 * OFFICES array defined in data.js.
 */

(function () {
  "use strict";

  // ---- DOM handles ----------------------------------------------------
  const listingsEl = document.getElementById("listings");
  const detailEmptyEl = document.getElementById("detail-empty");
  const detailContentEl = document.getElementById("detail-content");
  const neighborhoodSelect = document.getElementById("filter-neighborhood");
  const priceSelect = document.getElementById("filter-price");

  // Colman Dock (Pier 52) — the ferry reference point.
  const COLMAN_DOCK = { lat: 47.60254, lng: -122.33935 };

  let map;
  const markers = new Map(); // office.id -> Leaflet marker
  let activeId = null;

  // ---- Helpers --------------------------------------------------------
  const money = (n) =>
    "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  function currentFilters() {
    return {
      neighborhood: neighborhoodSelect.value,
      maxPrice: priceSelect.value
    };
  }

  function matchesFilters(office, filters) {
    if (filters.neighborhood !== "all" && office.neighborhood !== filters.neighborhood) {
      return false;
    }
    if (filters.maxPrice !== "all" && office.price > Number(filters.maxPrice)) {
      return false;
    }
    return true;
  }

  // ---- Filter population ----------------------------------------------
  function populateNeighborhoods() {
    const names = [...new Set(OFFICES.map((o) => o.neighborhood))].sort();
    for (const name of names) {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      neighborhoodSelect.appendChild(opt);
    }
  }

  // ---- Listing cards --------------------------------------------------
  function buildCard(office) {
    const card = document.createElement("article");
    card.className = "office-card";
    card.dataset.id = office.id;

    const parkingChip = office.parking.available
      ? `<span class="chip">🚗 Parking</span>`
      : `<span class="chip">🚗 No parking</span>`;

    card.innerHTML = `
      <h3>${escapeHtml(office.name)}</h3>
      <p class="card-hood">${escapeHtml(office.neighborhood)}</p>
      <div class="card-meta">
        <span class="chip price">${money(office.price)}/mo</span>
        <span class="chip">${office.sqft.toLocaleString()} sqft</span>
        <span class="chip">${office.seats} seats</span>
        <span class="chip">⛴ ${office.ferry.minutesWalk} min</span>
        ${parkingChip}
      </div>
    `;

    card.addEventListener("click", () => selectOffice(office.id, { pan: true }));
    return card;
  }

  function renderListings() {
    const filters = currentFilters();
    listingsEl.innerHTML = "";

    const visible = OFFICES.filter((o) => matchesFilters(o, filters));

    if (visible.length === 0) {
      const empty = document.createElement("p");
      empty.className = "card-hood";
      empty.style.padding = "8px 4px";
      empty.textContent = "No offices match these filters.";
      listingsEl.appendChild(empty);
    } else {
      for (const office of visible) {
        listingsEl.appendChild(buildCard(office));
      }
    }

    // Sync marker visibility with the filtered set.
    const visibleIds = new Set(visible.map((o) => o.id));
    for (const [id, marker] of markers) {
      const onMap = map.hasLayer(marker);
      if (visibleIds.has(id) && !onMap) marker.addTo(map);
      else if (!visibleIds.has(id) && onMap) map.removeLayer(marker);
    }

    // If the active office was filtered out, clear the detail panel.
    if (activeId && !visibleIds.has(activeId)) {
      clearSelection();
    } else {
      highlightActiveCard();
    }
  }

  // ---- Map ------------------------------------------------------------
  function initMap() {
    map = L.map("map", { scrollWheelZoom: true }).setView([47.6101, -122.3344], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Ferry terminal marker (reference point).
    const ferryIcon = L.divIcon({
      className: "",
      html: `<div class="marker-pin" style="background:#5b6b7a"><span>⛴</span></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -28]
    });
    L.marker([COLMAN_DOCK.lat, COLMAN_DOCK.lng], { icon: ferryIcon })
      .addTo(map)
      .bindPopup("<strong>Colman Dock (Pier 52)</strong><br>Ferry terminal");

    OFFICES.forEach((office, i) => {
      const marker = L.marker([office.lat, office.lng], {
        icon: makeOfficeIcon(i + 1, false)
      });
      marker.officeIndex = i + 1;
      marker.bindPopup(
        `<strong>${escapeHtml(office.name)}</strong><br>${money(office.price)}/mo · ${office.sqft.toLocaleString()} sqft`
      );
      marker.on("click", () => selectOffice(office.id, { pan: false }));
      marker.addTo(map);
      markers.set(office.id, marker);
    });
  }

  function makeOfficeIcon(label, active) {
    return L.divIcon({
      className: "",
      html: `<div class="marker-pin${active ? " active" : ""}"><span>${label}</span></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -28]
    });
  }

  function refreshMarkerIcons() {
    for (const [id, marker] of markers) {
      marker.setIcon(makeOfficeIcon(marker.officeIndex, id === activeId));
    }
  }

  // ---- Selection ------------------------------------------------------
  function selectOffice(id, opts = {}) {
    const office = OFFICES.find((o) => o.id === id);
    if (!office) return;

    activeId = id;
    renderDetail(office);
    highlightActiveCard();
    refreshMarkerIcons();

    const marker = markers.get(id);
    if (marker) {
      marker.openPopup();
      if (opts.pan) map.panTo([office.lat, office.lng], { animate: true });
    }
  }

  function clearSelection() {
    activeId = null;
    detailContentEl.hidden = true;
    detailContentEl.innerHTML = "";
    detailEmptyEl.hidden = false;
    highlightActiveCard();
    refreshMarkerIcons();
  }

  function highlightActiveCard() {
    const cards = listingsEl.querySelectorAll(".office-card");
    cards.forEach((card) => {
      card.classList.toggle("active", card.dataset.id === activeId);
    });
  }

  // ---- Detail panel ---------------------------------------------------
  function renderDetail(office) {
    const gallery = office.photos
      .map(
        (src) =>
          `<img src="${encodeURI(src)}" alt="${escapeHtml(office.name)} interior" loading="lazy" />`
      )
      .join("");

    const parkingValue = office.parking.available
      ? office.parking.monthly != null
        ? `${money(office.parking.monthly)}/mo`
        : "Available"
      : "None";

    const amenities = [
      { on: office.parking.available, ico: "🚗", txt: "Parking" },
      { on: office.bike, ico: "🚲", txt: "Bike storage" },
      { on: office.gym, ico: "🏋", txt: "Gym" },
      { on: office.kitchen, ico: "🍽", txt: "Kitchen" }
    ]
      .map(
        (a) => `
        <div class="amenity${a.on ? "" : " no"}">
          <span class="ico">${a.on ? a.ico : "✕"}</span>
          <span class="txt">${a.txt}</span>
        </div>`
      )
      .join("");

    const restaurants = office.restaurants
      .map(
        (r) =>
          `<li><span>${escapeHtml(r.name)}</span><span class="dist">${escapeHtml(r.dist)}</span></li>`
      )
      .join("");

    const coffee = office.coffee
      .map(
        (c) =>
          `<li><span>${escapeHtml(c.name)}</span><span class="dist">${escapeHtml(c.dist)}</span></li>`
      )
      .join("");

    detailContentEl.innerHTML = `
      <div class="detail-gallery">${gallery}</div>
      <div class="detail-body">
        <div class="detail-title">
          <div>
            <h2>${escapeHtml(office.name)}</h2>
            <p class="detail-hood">${escapeHtml(office.neighborhood)} · ${escapeHtml(office.address)}</p>
          </div>
          <div class="detail-price">${money(office.price)}<small>per month</small></div>
        </div>

        <div class="ferry-line">
          <span>⛴</span>
          <span>${office.ferry.minutesWalk} min walk to Colman Dock · ${office.ferry.miles} mi</span>
        </div>

        <div class="detail-stats">
          <div class="stat">
            <p class="label">Square feet</p>
            <p class="value">${office.sqft.toLocaleString()} sqft</p>
          </div>
          <div class="stat">
            <p class="label">Capacity</p>
            <p class="value">${office.seats} seats</p>
          </div>
          <div class="stat">
            <p class="label">Price / sqft</p>
            <p class="value">${money(office.price / office.sqft)} /mo</p>
          </div>
          <div class="stat">
            <p class="label">Parking</p>
            <p class="value">${parkingValue}</p>
          </div>
        </div>

        <div class="detail-section">
          <h4>Amenities</h4>
          <div class="amenity-grid">${amenities}</div>
        </div>

        <div class="detail-section">
          <h4>Parking notes</h4>
          <p class="parking-note">${escapeHtml(office.parking.note)}</p>
        </div>

        <div class="detail-section">
          <h4>Nearby restaurants</h4>
          <ul class="nearby-list">${restaurants}</ul>
        </div>

        <div class="detail-section">
          <h4>Nearby coffee</h4>
          <ul class="nearby-list">${coffee}</ul>
        </div>
      </div>
    `;

    detailEmptyEl.hidden = true;
    detailContentEl.hidden = false;
    detailContentEl.scrollTop = 0;
  }

  // ---- Wire up --------------------------------------------------------
  function init() {
    populateNeighborhoods();
    initMap();
    renderListings();

    neighborhoodSelect.addEventListener("change", renderListings);
    priceSelect.addEventListener("change", renderListings);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
