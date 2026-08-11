const PRODUCTS = [
  {
    id: 1,
    name: "Home shirt 2025/26",
    team: "Real Madrid",
    category: "shirts",
    price: 89.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1635710064268-69aa5d9355c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBtYWRyZWQlMjBmb290YmFsbCUyMHNoaXJ0fGVufDB8fDB8fHww?w=600&q=80",
    badge: "New",
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Classic white home kit inspired by Los Blancos. Breathable fabric with club crest and sponsor details."
  },
  {
    id: 2,
    name: "Home shirt 2025/26",
    team: "Barcelona",
    category: "shirts",
    price: 89.99,
    salePrice: 74.99,
    image: "https://images.unsplash.com/photo-1707414038523-b5d1c8294786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFyY2Vsb25hJTIyJTIwY2x1YiUyMHNoaXJ0fGVufDB8fDB8fHww?w=600&q=80",
    badge: "Sale",
    featured: true,
    sizes: ["S", "M", "L", "XL"],
    description: "Bold away colors for Blaugrana fans. Lightweight mesh panels for match-day comfort."
  },
  {
    id: 3,
    name: "Away shirt 2025/26",
    team: "Manchester City",
    category: "shirts",
    price: 89.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1612387050703-685c779375d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
    badge: "Popular",
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Sky blue home shirt with modern fit. Perfect for the Etihad or your local pitch."
  },
  {
    id: 4,
    name: "Home shirt 2025/26",
    team: "Japan National Team",
    category: "shirts",
    price: 89.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1612387605830-d452ad0ab7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D?w=600&q=80",
    badge: null,
    featured: true,
    sizes: ["S", "M", "L", "XL"],
    description: "Iconic red home kit. You'll Never Walk Alone in style."
  },
  {
    id: 5,
    name: "Home shirt 2025/26",
    team: "Arsenal",
    category: "shirts",
    price: 94.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1577212017184-80cc0da11082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGwlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D?w=600&q=80",
    badge: "New",
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Limited edition third kit with unique pattern and gold accents."
  },
  {
    id: 6,
    name: "Away shirt 2025/26",
    team: "Germany national team",
    category: "shirts",
    price: 89.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1551854386-b42759a60dd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFueSUyMGZvb3RiYWxsJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["M", "L", "XL", "XXL"],
    description: "Red home jersey with classic Bayern stripes. Mia san mia."
  },
  {
    id: 7,
    name: "Home shirt 2025/26",
    team: "PSG",
    category: "shirts",
    price: 89.99,
    salePrice: 79.99,
    image: "https://images.unsplash.com/photo-1671680135900-8f8282f56e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UFNHJTIwY2x1YiUyMHNoaXJ0fGVufDB8fDB8fHww?w=600&q=80",
    badge: "Sale",
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Navy home kit with Parisian flair. Allez Paris!"
  },
  {
    id: 8,
    name: "Home shirt 2025/26",
    team: "Inter Milan",
    category: "shirts",
    price: 84.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1694453722819-9fcc15042f2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXIlMjBtZWxhbiUyMGNsdWIlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Black and blue stripes. Nerazzurri pride on and off the pitch."
  },
  {
    id: 9,
    name: "World Cup Home shirt",
    team: "Brazil National Team",
    category: "shirts",
    price: 99.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1552066379-e7bfd22155c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    // image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
    badge: "National",
    featured: true,
    sizes: ["S", "M", "L", "XL"],
    description: "Canarinho yellow national team kit. Samba style."
  },
  {
    id: 10,
    name: "World Cup home shirt",
    team: "Argentina",
    category: "shirts",
    price: 99.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1671016233593-96c5196ca3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXJnZW50aW5hJTIwbmF0aW9uYWwlMjB0ZWFtJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D?w=600&q=80",
    badge: "National",
    featured: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Albiceleste away colors. World champions edition."
  },
                                                       // Boots
  {
    id: 11,
    name: "Predator Edge",
    team: "Adidas",
    category: "boots",
    price: 275.00,
    salePrice: null,
      image: "https://images.unsplash.com/photo-1684355413688-9f529f1a3a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzJTIwZm9vdGJhbGx8ZW58MHx8MHx8fDA%3D?w=600&q=80",
      // image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80",
    badge: "Pro",
    featured: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Elite-level boot with Flyknit upper and responsive soleplate for firm ground."
  },
  {
    id: 12,
    name: "X Ghosted",
    team: "Adidas",
    category: "boots",
    price: 250.00,
    salePrice: 199.99,
    image: "https://images.unsplash.com/photo-1612387049695-637b743f80ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D?w=600&q=80",
    badge: "Sale",
    featured: true,
    sizes: ["7", "8", "9", "10", "11"],
    description: "Control and power in every touch. Strikesurface technology."
  },
  {
    id: 13,
    name: "Mercurial Superfly",
    team: "Nike",
    category: "boots",
    price: 285.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1612387605830-d452ad0ab7c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D?w=600&q=80",
    badge: "Pro",
    featured: false,
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Built for speed. Lightweight design for wingers and forwards."
  },
  {
    id: 14,
    name: "Tiempo Legend",
    team: "Nike",
    category: "boots",
    price: 180.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    badge: "Sports",
    featured: false,
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Timeless leather boot. The legend since 1979."
  },
  {
    id: 15,
    name: "Ultra 1.3",
    team: "Puma",
    category: "boots",
    price: 220.00,
    salePrice: 179.99,
    image: "https://images.unsplash.com/photo-1612387605285-7ee92eae6958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBmb290YmFsbCUyMHB1bWF8ZW58MHx8MHx8fDA%3D?w=600&q=80",
    badge: "Sale",
    featured: false,
    sizes: ["7", "8", "9", "10", "11"],
    description: "Ultra-light speed boot with PWRTAPE support."
  },
                         // Training
  {
    id: 16,
    name: "Training Top",
    team: "Real Madrid",
    category: "training",
    price: 49.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1645956162187-42d0dfafbc65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHJpbGwlMjBUb3AlMjB0ZWFtJTIwUmVhbCUyME1hZHJpZHxlbnwwfHwwfHx8MA%3D%3D",
    badge: null,
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Dri-FIT training top for pre-match warmups and gym sessions."
  },
  {
    id: 17,
    name: "Training Pants",
    team: "Manchester United",
    category: "training",
    price: 54.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1780336672397-56ba46423ab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhY2slMjBqYWNrZXQlMjBmb290YmFsbCUyMHJlYWx8ZW58MHx8MHx8fDA%3D?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Tapered fit training pants with zip pockets."
  },
  {
    id: 18,
    name: "Rain Jacket",
    team: "Liverpool",
    category: "training",
    price: 79.99,
    salePrice: 64.99,
    image: "https://images.unsplash.com/photo-1618353446411-c221ae85034e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWNrJTIwamFja2V0JTIwZm9vdGJhbGwlMjB0ZWFtfGVufDB8fDB8fHww?w=600&q=80",
    badge: "Sale",
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Water-resistant sideline jacket. Stay dry on match day."
  },
  {
    id: 19,
    name: "Drill Top",
    team: "Brazil National Team",
    category: "training",
    price: 59.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1768854318260-f69ab6fc11e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJpbGwlMjBUb3AlMjByZWFsfGVufDB8fDB8fHww?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["S", "M", "L", "XL"],
    description: "Half-zip drill top with thumbholes and breathable panels."
  },
                                // Accessories
  {
    id: 20,
    name: "Official Match Ball",
    team: "FIFA",
    category: "accessories",
    price: 129.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3RiYWxsJTIwc29jY2VyfGVufDB8fDB8fHww?w=600&q=80",
    badge: "Pro",
    featured: true,
    sizes: ["5"],
    description: "FIFA Quality Pro match ball. Thermally bonded seamless surface."
  },
  {
    id: 21,
    name: "Team Scarf",
    team: "Arsenal",
    category: "accessories",
    price: 24.99,
    salePrice: null,
    image: "https://plus.unsplash.com/premium_photo-1747645829462-5d5fbdc6fb94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fEFyc2VuYWx8ZW58MHx8MHx8fDA%3D?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["One Size"],
    description: "Knitted supporter scarf in club colors. Essential for cold nights."
  },
  {
    id: 22,
    name: "Goalkeeper Gloves",
    team: "Puma",
    category: "accessories",
    price: 89.99,
    salePrice: 69.99,
    image: "https://images.unsplash.com/photo-1760177379284-b68471fdd217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R29hbGtlZXBlciUyMEdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D?w=600&q=80",
    badge: "Sale",
    featured: false,
    sizes: ["7", "8", "9", "10", "11"],
    description: "Pro-tier grip foam with adjustable wrist strap."
  },
  {
    id: 23,
    name: "Shin Guards",
    team: "Adidas",
    category: "accessories",
    price: 29.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1774346865420-ac98ef6cb531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsJTIwc29ja3N8ZW58MHx8MHx8fDA%3D?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["S", "M", "L"],
    description: "Lightweight shell with EVA backing for comfort and protection."
  },
  {
    id: 24,
    name: "Flag PSG",
    team: "PSG",
    category: "accessories",
    price: 29.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1559593465-f6fe690ad2f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwJTIwcGFyaXMlMjBjbHVifGVufDB8fDB8fHww?w=600&q=80",
    badge: null,
    featured: false,
    sizes: ["One Size"],
    description: "Adjustable snapback with embroidered crest."
   }
 
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function getDisplayPrice(product) {
  return product.salePrice ?? product.price;
}

function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

function getTeams() {
  return [...new Set(PRODUCTS.map(p => p.team))].sort();
}
