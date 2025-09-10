// products-data.js
window.PRODUCTS = [
  {
    id: "ceremonial",
    slug: "ceremonial-matcha-capsules",
    title: "Ceremonial Matcha",
    subtitle: "Pure ceremonial grade",
    category: "capsules",
    rating: 4.9,
    reviewsCount: 12057,
    badges: ["No added sugar", "Gluten-free", "Lactose-free", "Nespresso® compatible"],
    benefits: ["Smooth & balanced","Focused energy, no jitters","Sealed for peak freshness"],
    variants: [
      { id: "10", label: "Just a Try — 10 Capsules (30g)", price: { EUR: 14.99, USD: 16.99 } },
      { id: "30", label: "My Matcha Month — 30 Capsules (90g)", price: { EUR: 34.90, USD: 38.90 } }
    ],
    subscriptionDiscountPercent: 10,
    images: [
      "https://images.unsplash.com/photo-1553531888-a99fa3a9b229?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541782806-3efd1ac290a8?auto=format&fit=crop&w=1400&q=80"
    ],
    ingredients: "Ceremonial-grade matcha (Camellia sinensis). 0g added sugar.",
    nutrition: "Per capsule (~3g): ~10 kcal, 0g fat, 1g carbs, 1g protein.",
    howToBrew: "Insert capsule. Brew 25–40 ml for a shot or 80–120 ml for a longer cup; ~83–86 °C.",
    shipping: "Free shipping over €80. 30-day returns on unopened packs.",
    compatibility: "Original line Nespresso® machines",
    priceDisplayCurrency: "EUR",
    recommended: ["vanilla-ceremonial-matcha-capsules", "raspberry-matcha-capsules", "coconut-matcha-capsules"]
  },
  {
    id: "vanilla",
    slug: "vanilla-ceremonial-matcha-capsules",
    title: "Vanilla Ceremonial Matcha Capsules",
    subtitle: "Velvety vanilla • ceremonial grade",
    category: "capsules",
    rating: 4.9,
    reviewsCount: 10234,
    badges: ["No added sugar", "Gluten-free", "Lactose-free", "Nespresso® compatible"],
    benefits: ["Smooth vanilla profile","Focused energy, no jitters","Freshness-sealed single serves"],
    variants: [
      { id: "10", label: "Just a Try — 10 Capsules (30g)", price: { EUR: 14.99, USD: 16.99 } },
      { id: "30", label: "My Matcha Month — 30 Capsules (90g)", price: { EUR: 34.90, USD: 38.90 } }
    ],
    subscriptionDiscountPercent: 10,
    images: [
      "https://images.unsplash.com/photo-1622484212727-7d8da5178a36?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541782806-3efd1ac290a8?auto=format&fit=crop&w=1400&q=80"
    ],
    ingredients: "Ceremonial matcha, natural vanilla flavour. 0g added sugar.",
    nutrition: "Per capsule (~3g): ~10 kcal, 0g fat, 1g carbs, 1g protein.",
    howToBrew: "Insert capsule. Brew 25–40 ml (shot) or 80–120 ml (longer); ~83–86 °C.",
    shipping: "Free shipping over €80. 30-day returns on unopened packs.",
    compatibility: "Original line Nespresso® machines",
    priceDisplayCurrency: "EUR",
    recommended: ["coconut-matcha-capsules", "raspberry-matcha-capsules", "ceremonial-matcha-capsules"]
  },
  {
    id: "raspberry",
    slug: "raspberry-matcha-capsules",
    title: "Raspberry Matcha",
    subtitle: "Bright berry notes",
    category: "capsules",
    rating: 4.8,
    reviewsCount: 8421,
    badges: ["No added sugar","Gluten-free","Lactose-free","Nespresso® compatible"],
    benefits: ["Fruity & refreshing","Balanced energy","Freshness-sealed"],
    variants: [
      { id: "10", label: "10 Capsules (30g)", price: { EUR: 14.99, USD: 16.99 } },
      { id: "30", label: "30 Capsules (90g)", price: { EUR: 34.90, USD: 38.90 } }
    ],
    subscriptionDiscountPercent: 10,
    images: [
      "https://images.unsplash.com/photo-1604909052748-1d1a90228f52?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507133750040-4a8f5702157a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80"
    ],
    ingredients: "Ceremonial matcha, natural raspberry flavour.",
    nutrition: "Per capsule (~3g): ~10 kcal.",
    howToBrew: "Brew 25–120 ml depending on strength; ~83–86 °C.",
    shipping: "Free shipping over €80.",
    compatibility: "Original line Nespresso® machines",
    priceDisplayCurrency: "EUR",
    recommended: ["vanilla-ceremonial-matcha-capsules", "coconut-matcha-capsules"]
  },
  {
    id: "coconut",
    slug: "coconut-matcha-capsules",
    title: "Coconut Matcha",
    subtitle: "Creamy tropical twist",
    category: "capsules",
    rating: 4.8,
    reviewsCount: 6910,
    badges: ["No added sugar","Gluten-free","Lactose-free","Nespresso® compatible"],
    benefits: ["Creamy coconut notes","Balanced energy","Freshness-sealed"],
    variants: [
      { id: "10", label: "10 Capsules (30g)", price: { EUR: 14.99, USD: 16.99 } },
      { id: "30", label: "30 Capsules (90g)", price: { EUR: 34.90, USD: 38.90 } }
    ],
    subscriptionDiscountPercent: 10,
    images: [
      "https://images.unsplash.com/photo-1635910178489-0d21702d67d7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
    ],
    ingredients: "Ceremonial matcha, natural coconut flavour.",
    nutrition: "Per capsule (~3g): ~10 kcal.",
    howToBrew: "Brew 25–120 ml; ~83–86 °C.",
    shipping: "Free shipping over €80.",
    compatibility: "Original line Nespresso® machines",
    priceDisplayCurrency: "EUR",
    recommended: ["vanilla-ceremonial-matcha-capsules", "raspberry-matcha-capsules"]
  },
  {
    id: "peppermint",
    slug: "peppermint-matcha-capsules",
    title: "Peppermint Matcha",
    subtitle: "Cool & crisp",
    category: "capsules",
    rating: 4.7,
    reviewsCount: 5122,
    badges: ["No added sugar","Gluten-free","Lactose-free","Nespresso® compatible"],
    benefits: ["Cooling mint finish","Balanced energy","Freshness-sealed"],
    variants: [
      { id: "10", label: "10 Capsules (30g)", price: { EUR: 14.99, USD: 16.99 } },
      { id: "30", label: "30 Capsules (90g)", price: { EUR: 34.90, USD: 38.90 } }
    ],
    subscriptionDiscountPercent: 10,
    images: [
      "https://images.unsplash.com/photo-1514519565140-130d0cc84635?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507133750040-4a8f5702157a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1400&q=80"
    ],
    ingredients: "Ceremonial matcha, natural peppermint flavour.",
    nutrition: "Per capsule (~3g): ~10 kcal.",
    howToBrew: "Brew 25–120 ml; ~83–86 °C.",
    shipping: "Free shipping over €80.",
    compatibility: "Original line Nespresso® machines",
    priceDisplayCurrency: "EUR",
    recommended: ["ceremonial-matcha-capsules", "coconut-matcha-capsules"]
  },
  {
    id: "mango",
    slug: "mango-matcha-capsules",
    title: "Mango Matcha",
    subtitle: "Juicy & bright",
    category: "capsules",
    rating: 4.7,
    reviewsCount: 4711,
    badges: ["No added sugar","Gluten-free","Lactose-free","Nespresso® compatible"],
    benefits: ["Juicy mango notes","Balanced energy","Freshness-sealed"],
    variants: [
      { id: "10", label: "10 Capsules (30g)", price: { EUR: 14.99, USD: 16.99 } },
      { id: "30", label: "30 Capsules (90g)", price: { EUR: 34.90, USD: 38.90 } }
    ],
    subscriptionDiscountPercent: 10,
    images: [
      "https://images.unsplash.com/photo-1514519565140-130d0cc84635?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1507133750040-4a8f5702157a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80"
    ],
    ingredients: "Ceremonial matcha, natural mango flavour.",
    nutrition: "Per capsule (~3g): ~10 kcal.",
    howToBrew: "Brew 25–120 ml; ~83–86 °C.",
    shipping: "Free shipping over €80.",
    compatibility: "Original line Nespresso® machines",
    priceDisplayCurrency: "EUR",
    recommended: ["raspberry-matcha-capsules", "vanilla-ceremonial-matcha-capsules"]
  }
];

window.catalog = {
  bySlug: (slug) => window.PRODUCTS.find(p => p.slug === slug),
  featured: (limit=6) => window.PRODUCTS.slice(0, limit),
  others: (exceptSlug, limit=3) => window.PRODUCTS.filter(p=>p.slug!==exceptSlug).slice(0, limit)
};
