/*
 * Seattle Office Space Finder — listing data
 * ------------------------------------------------------------
 * Distances/times noted for the ferry are measured from
 * Colman Dock (Pier 52), the main downtown Seattle terminal.
 *
 * NOTE: These are illustrative sample listings assembled for a
 * team office search. Verify pricing, square footage, and
 * amenities directly with each building before signing.
 */

const OFFICES = [
  {
    id: "pioneer-square-occidental",
    name: "Occidental Workspace",
    neighborhood: "Pioneer Square",
    address: "115 Occidental Ave S, Seattle, WA 98104",
    lat: 47.60013,
    lng: -122.33359,
    price: 12800,
    sqft: 3400,
    seats: 28,
    photos: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Occidental garage across the street",
      monthly: 285
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 6, miles: 0.3 },
    restaurants: [
      { name: "Il Corvo Pasta", dist: "2 min walk" },
      { name: "Delicatus", dist: "3 min walk" },
      { name: "The London Plane", dist: "4 min walk" }
    ],
    coffee: [
      { name: "Zeitgeist Coffee", dist: "2 min walk" },
      { name: "Caffe Umbria", dist: "4 min walk" }
    ]
  },
  {
    id: "belltown-2nd-ave",
    name: "Belltown Creative Loft",
    neighborhood: "Belltown",
    address: "2200 2nd Ave, Seattle, WA 98121",
    lat: 47.61438,
    lng: -122.34637,
    price: 21500,
    sqft: 5200,
    seats: 44,
    photos: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Attached garage, reserved stalls",
      monthly: 325
    },
    bike: true,
    gym: true,
    kitchen: true,
    ferry: { minutesWalk: 18, miles: 1.0 },
    restaurants: [
      { name: "Tilikum Place Cafe", dist: "3 min walk" },
      { name: "Local 360", dist: "5 min walk" },
      { name: "Six Seven at Edgewater", dist: "9 min walk" }
    ],
    coffee: [
      { name: "Caffe Ladro", dist: "2 min walk" },
      { name: "Ancient Grounds", dist: "6 min walk" }
    ]
  },
  {
    id: "slu-terry-ave",
    name: "South Lake Union Tech Suite",
    neighborhood: "South Lake Union",
    address: "500 Terry Ave N, Seattle, WA 98109",
    lat: 47.62376,
    lng: -122.33665,
    price: 38900,
    sqft: 8800,
    seats: 72,
    photos: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Underground garage + EV charging",
      monthly: 350
    },
    bike: true,
    gym: true,
    kitchen: true,
    ferry: { minutesWalk: 32, miles: 1.8 },
    restaurants: [
      { name: "Cactus SLU", dist: "3 min walk" },
      { name: "Re:public", dist: "4 min walk" },
      { name: "Din Tai Fung", dist: "6 min walk" }
    ],
    coffee: [
      { name: "Starbucks Reserve", dist: "5 min walk" },
      { name: "Victrola Coffee", dist: "3 min walk" }
    ]
  },
  {
    id: "downtown-columbia",
    name: "Columbia Center Sublease",
    neighborhood: "Downtown Core",
    address: "701 5th Ave, Seattle, WA 98104",
    lat: 47.60453,
    lng: -122.33052,
    price: 46500,
    sqft: 9600,
    seats: 80,
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
    ferry: { minutesWalk: 9, miles: 0.5 },
    restaurants: [
      { name: "Metropolitan Grill", dist: "3 min walk" },
      { name: "Wild Ginger", dist: "5 min walk" },
      { name: "Tavolàta", dist: "7 min walk" }
    ],
    coffee: [
      { name: "Seattle Coffee Works", dist: "4 min walk" },
      { name: "Storyville Coffee", dist: "6 min walk" }
    ]
  },
  {
    id: "capitol-hill-pike",
    name: "Pike/Pine Studio",
    neighborhood: "Capitol Hill",
    address: "1525 11th Ave, Seattle, WA 98122",
    lat: 47.61439,
    lng: -122.31815,
    price: 14200,
    sqft: 3900,
    seats: 32,
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: false,
      note: "Street + nearby lots only",
      monthly: null
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 26, miles: 1.5 },
    restaurants: [
      { name: "Stateside", dist: "2 min walk" },
      { name: "Altura", dist: "4 min walk" },
      { name: "Kedai Makan", dist: "5 min walk" }
    ],
    coffee: [
      { name: "Espresso Vivace", dist: "2 min walk" },
      { name: "Analog Coffee", dist: "4 min walk" }
    ]
  },
  {
    id: "fremont-canal",
    name: "Fremont Canalside Offices",
    neighborhood: "Fremont",
    address: "155 N 35th St, Seattle, WA 98103",
    lat: 47.64901,
    lng: -122.35061,
    price: 18900,
    sqft: 4800,
    seats: 40,
    photos: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70"
    ],
    parking: {
      available: true,
      note: "Surface lot, free after 6pm",
      monthly: 195
    },
    bike: true,
    gym: false,
    kitchen: true,
    ferry: { minutesWalk: 45, miles: 4.2 },
    restaurants: [
      { name: "Manolin", dist: "3 min walk" },
      { name: "Brimmer & Heeltap", dist: "4 min walk" },
      { name: "Paseo", dist: "6 min walk" }
    ],
    coffee: [
      { name: "Milstead & Co.", dist: "2 min walk" },
      { name: "Lighthouse Roasters", dist: "7 min walk" }
    ]
  }
];
