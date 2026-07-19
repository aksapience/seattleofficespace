/*
 * Seattle Office Space Finder — listing data
 * ------------------------------------------------------------
 * Distances/times noted for the ferry are measured from
 * Colman Dock (Pier 52), the main downtown Seattle terminal.
 *
 * These are the buildings on our shortlist (sourced from the
 * listing links the team provided). Data confidence varies:
 *
 *   CONFIRMED from the building's own leasing site:
 *     - Smith Tower (smithtower.com)
 *     - Columbia Center (columbiacenterseattle.com)
 *     - The Pioneer Collective — Belltown (thepioneercollective.com)
 *
 *   ESTIMATED — the aggregator/brokerage listings (LoopNet,
 *   CommercialCafe, CBRE) block automated fetches, so price,
 *   square footage, seat counts, parking rates, amenity flags,
 *   and photos for those buildings are ballpark placeholders
 *   derived from the address and building type.
 *
 * Photos are representative Unsplash stock images, NOT actual
 * photos of these buildings. VERIFY every figure with the
 * broker/landlord before acting on it.
 */

const OFFICES = [
  {
    id: "belltown-2800-1st",
    name: "2800 1st Ave",
    neighborhood: "Belltown",
    address: "2800 1st Ave, Seattle, WA 98121",
    lat: 47.6178,
    lng: -122.3527,
    price: 18000,
    sqft: 6000,
    seats: 50,
    photos: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Nearby garages (estimate — verify)",
      monthly: 275
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 26, miles: 1.3 },
    restaurants: [
      { name: "Tilikum Place Cafe", dist: "4 min walk" },
      { name: "Local 360", dist: "6 min walk" },
      { name: "Macrina Bakery", dist: "5 min walk" }
    ],
    coffee: [
      { name: "Caffe Ladro", dist: "3 min walk" },
      { name: "Cherry Street Coffee", dist: "5 min walk" }
    ]
  },
  {
    id: "pioneer-81-columbia",
    name: "81-85 Columbia St",
    neighborhood: "Pioneer Square",
    address: "81-85 Columbia St, Seattle, WA 98104",
    lat: 47.60300,
    lng: -122.33630,
    price: 12600,
    sqft: 4200,
    seats: 35,
    photos: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Waterfront lots nearby (estimate — verify)",
      monthly: 260
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 3, miles: 0.15 },
    restaurants: [
      { name: "Il Corvo Pasta", dist: "5 min walk" },
      { name: "Taylor Shellfish Oyster Bar", dist: "6 min walk" },
      { name: "The London Plane", dist: "6 min walk" }
    ],
    coffee: [
      { name: "Zeitgeist Coffee", dist: "3 min walk" },
      { name: "Cherry Street Coffee", dist: "4 min walk" }
    ]
  },
  {
    id: "downtown-720-3rd",
    name: "720 3rd Ave",
    neighborhood: "Downtown Core",
    address: "720 3rd Ave, Seattle, WA 98104",
    lat: 47.60360,
    lng: -122.33120,
    price: 22500,
    sqft: 7500,
    seats: 62,
    photos: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Building garage (estimate — verify)",
      monthly: 320
    },
    bike: true,
    gym: true,
    kitchen: true,
    ferry: { minutesWalk: 9, miles: 0.45 },
    restaurants: [
      { name: "Metropolitan Grill", dist: "4 min walk" },
      { name: "Wild Ginger", dist: "6 min walk" },
      { name: "Fados Irish Pub", dist: "2 min walk" }
    ],
    coffee: [
      { name: "Seattle Coffee Works", dist: "5 min walk" },
      { name: "Storyville Coffee", dist: "6 min walk" }
    ]
  },
  {
    id: "downtown-columbia-center",
    name: "Columbia Center",
    neighborhood: "Downtown Core",
    address: "701 5th Ave, Seattle, WA 98104",
    lat: 47.60453,
    lng: -122.33052,
    price: 37500,
    sqft: 10000,
    seats: 84,
    photos: [
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Tower garage, valet available",
      monthly: 415
    },
    bike: true,
    gym: true,
    kitchen: true,
    ferry: { minutesWalk: 10, miles: 0.5 },
    restaurants: [
      { name: "Metropolitan Grill", dist: "3 min walk" },
      { name: "Charlotte Restaurant & Lounge", dist: "on-site" },
      { name: "Sushi Kudasai", dist: "on-site" }
    ],
    coffee: [
      { name: "Starbucks (Sky Lobby)", dist: "on-site" },
      { name: "Storyville Coffee", dist: "5 min walk" }
    ]
  },
  {
    id: "pioneer-600-1st",
    name: "600 1st Ave",
    neighborhood: "Pioneer Square",
    address: "600 1st Ave, Seattle, WA 98104",
    lat: 47.60270,
    lng: -122.33490,
    price: 10800,
    sqft: 3800,
    seats: 32,
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Nearby lots (estimate — verify)",
      monthly: 245
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 6, miles: 0.3 },
    restaurants: [
      { name: "Il Terrazzo Carmine", dist: "4 min walk" },
      { name: "Delicatus", dist: "3 min walk" },
      { name: "Salumi", dist: "5 min walk" }
    ],
    coffee: [
      { name: "Zeitgeist Coffee", dist: "3 min walk" },
      { name: "Caffe Umbria", dist: "5 min walk" }
    ]
  },
  {
    id: "pioneer-smith-tower",
    name: "Smith Tower",
    neighborhood: "Pioneer Square",
    address: "506 2nd Ave, Seattle, WA 98104",
    lat: 47.60193,
    lng: -122.33200,
    price: 8000,
    sqft: 2200,
    seats: 18,
    photos: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "1/1,000 RSF in nearby garage",
      monthly: 300
    },
    bike: true,
    gym: true,
    kitchen: true,
    ferry: { minutesWalk: 7, miles: 0.35 },
    restaurants: [
      { name: "Il Corvo Pasta", dist: "3 min walk" },
      { name: "Delicatus", dist: "2 min walk" },
      { name: "Damn the Weather", dist: "4 min walk" }
    ],
    coffee: [
      { name: "Zeitgeist Coffee", dist: "2 min walk" },
      { name: "Caffe Umbria", dist: "4 min walk" }
    ]
  },
  {
    id: "downtown-qualtrics-2u",
    name: "Qualtrics Tower (2+U)",
    neighborhood: "Downtown Core",
    address: "1201 2nd Ave, Seattle, WA 98101",
    lat: 47.60660,
    lng: -122.33490,
    price: 48000,
    sqft: 12000,
    seats: 100,
    photos: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Underground garage (estimate — verify)",
      monthly: 400
    },
    bike: true,
    gym: true,
    kitchen: true,
    ferry: { minutesWalk: 11, miles: 0.55 },
    restaurants: [
      { name: "The Diller Room", dist: "3 min walk" },
      { name: "Wild Ginger", dist: "4 min walk" },
      { name: "Tavolàta", dist: "8 min walk" }
    ],
    coffee: [
      { name: "Storyville Coffee", dist: "4 min walk" },
      { name: "Seattle Coffee Works", dist: "5 min walk" }
    ]
  },
  {
    id: "downtown-securities-bldg",
    name: "Securities Building",
    neighborhood: "Downtown Core",
    address: "1904 3rd Ave, Seattle, WA 98101",
    lat: 47.61099,
    lng: -122.33849,
    price: 13500,
    sqft: 5000,
    seats: 42,
    photos: [
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: false,
      note: "Street + nearby lots only (estimate — verify)",
      monthly: null
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 18, miles: 0.9 },
    restaurants: [
      { name: "Le Pichet", dist: "3 min walk" },
      { name: "Biscuit Bitch", dist: "2 min walk" },
      { name: "Pike Place Chowder", dist: "6 min walk" }
    ],
    coffee: [
      { name: "Moore Coffee Shop", dist: "3 min walk" },
      { name: "Ghost Alley Espresso", dist: "6 min walk" }
    ]
  },
  {
    id: "downtown-decatur-bldg",
    name: "The Decatur Building",
    neighborhood: "Downtown Core",
    address: "1511 3rd Ave, Seattle, WA 98101",
    lat: 47.60856,
    lng: -122.33745,
    price: 12000,
    sqft: 4500,
    seats: 38,
    photos: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: false,
      note: "Nearby garages only (estimate — verify)",
      monthly: null
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 15, miles: 0.75 },
    restaurants: [
      { name: "Pike Place Market eateries", dist: "5 min walk" },
      { name: "Beecher's Handmade Cheese", dist: "6 min walk" },
      { name: "Il Bistro", dist: "7 min walk" }
    ],
    coffee: [
      { name: "Moore Coffee Shop", dist: "4 min walk" },
      { name: "Storyville Coffee", dist: "6 min walk" }
    ]
  },
  {
    id: "belltown-collective",
    name: "The Belltown Collective",
    neighborhood: "Belltown",
    address: "Belltown, Seattle, WA 98121 (verify exact address)",
    lat: 47.61380,
    lng: -122.34780,
    price: 9800,
    sqft: 3500,
    seats: 30,
    photos: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Nearby garages (estimate — verify)",
      monthly: 265
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 24, miles: 1.2 },
    restaurants: [
      { name: "Local 360", dist: "4 min walk" },
      { name: "Rione XIII", dist: "6 min walk" },
      { name: "Belltown Pizza", dist: "3 min walk" }
    ],
    coffee: [
      { name: "Caffe Ladro", dist: "3 min walk" },
      { name: "Cherry Street Coffee", dist: "5 min walk" }
    ]
  },
  {
    id: "belltown-terminal-sales",
    name: "Terminal Sales Building",
    neighborhood: "Belltown",
    address: "1932 1st Ave, Seattle, WA 98101",
    lat: 47.61076,
    lng: -122.34186,
    price: 11000,
    sqft: 4000,
    seats: 34,
    photos: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: false,
      note: "Street + nearby lots only (estimate — verify)",
      monthly: null
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 19, miles: 0.95 },
    restaurants: [
      { name: "Pike Place Market eateries", dist: "4 min walk" },
      { name: "The Pink Door", dist: "5 min walk" },
      { name: "Il Bistro", dist: "6 min walk" }
    ],
    coffee: [
      { name: "Ghost Alley Espresso", dist: "4 min walk" },
      { name: "Storyville Coffee", dist: "5 min walk" }
    ]
  },
  {
    id: "belltown-pioneer-collective",
    name: "The Pioneer Collective — Belltown",
    neighborhood: "Belltown",
    address: "92 Lenora St, Seattle, WA 98121",
    lat: 47.61270,
    lng: -122.34440,
    price: 1500,
    sqft: 1200,
    seats: 10,
    photos: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: false,
      note: "No dedicated parking; nearby lots",
      monthly: null
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 22, miles: 1.1 },
    restaurants: [
      { name: "Local 360", dist: "5 min walk" },
      { name: "Tilikum Place Cafe", dist: "6 min walk" },
      { name: "Macrina Bakery", dist: "4 min walk" }
    ],
    coffee: [
      { name: "Caffe Ladro", dist: "4 min walk" },
      { name: "Cherry Street Coffee", dist: "3 min walk" }
    ]
  }
];
