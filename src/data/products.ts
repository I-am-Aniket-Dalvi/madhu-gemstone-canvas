import { Product, Hamper } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Handcrafted Candle",
    description: "Luxury soy wax candle with natural essential oils. Hand-poured with love and care, creating a serene ambiance in any space.",
    category: "Candles",
    images: [
      "https://images.unsplash.com/photo-1602874801006-e7d6925a0930?w=800",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
    ],
    highlights: [
      "100% Natural Soy Wax",
      "Long-lasting Burn Time (50+ hours)",
      "Premium Essential Oils",
      "Eco-friendly Packaging"
    ],
    price: 45
  },
  {
    id: "2",
    title: "Artisan Soap Collection",
    description: "Premium handmade soaps crafted with natural ingredients and luxurious oils. Gentle on skin, rich in moisturizing properties.",
    category: "Bath & Body",
    images: [
      "https://images.unsplash.com/photo-1600857544200-forw8d15d64b6?w=800",
      "https://images.unsplash.com/photo-1600857062241-98e5e6bf98c8?w=800",
      "https://images.unsplash.com/photo-1598662779094-5c6e0c4bccb3?w=800",
    ],
    highlights: [
      "Handcrafted with Love",
      "Natural Ingredients",
      "Moisturizing Formula",
      "Beautiful Packaging"
    ],
    price: 28
  },
  {
    id: "3",
    title: "Luxury Home Diffuser",
    description: "Elegant reed diffuser with premium fragrance oils for continuous aromatherapy. Transform your space into a sanctuary.",
    category: "Home Fragrance",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
      "https://images.unsplash.com/photo-1611080501243-6cac7f2e5d4b?w=800",
    ],
    highlights: [
      "Long-lasting Fragrance (3+ months)",
      "Elegant Design",
      "Premium Quality Oils",
      "Perfect Gift"
    ],
    price: 65
  },
  {
    id: "4",
    title: "Lavender Dreams Candle Set",
    description: "A collection of three exquisite lavender-scented candles. Perfect for creating a calming, spa-like atmosphere at home.",
    category: "Candles",
    images: [
      "https://images.unsplash.com/photo-1602874801006-e7d6925a0930?w=800",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
      "https://images.unsplash.com/photo-1602874801385-f3a29b0ac797?w=800",
    ],
    highlights: [
      "Set of 3 Premium Candles",
      "Pure Lavender Essential Oil",
      "Calming & Relaxing",
      "Gift-Ready Packaging"
    ],
    price: 89
  },
  {
    id: "5",
    title: "Rose Gold Bath Bomb Set",
    description: "Indulgent bath bombs infused with nourishing oils and rose essence. Turn your bath into a luxurious retreat.",
    category: "Bath & Body",
    images: [
      "https://images.unsplash.com/photo-1608181265681-b52dd691a0e0?w=800",
      "https://images.unsplash.com/photo-1598662779094-5c6e0c4bccb3?w=800",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    ],
    highlights: [
      "6 Handcrafted Bath Bombs",
      "Rich in Essential Oils",
      "Skin Softening Formula",
      "Beautiful Rose Gold Color"
    ],
    price: 42
  },
  {
    id: "6",
    title: "Citrus Bliss Body Scrub",
    description: "Invigorating body scrub with natural citrus extracts and exfoliating salts. Reveal soft, glowing skin.",
    category: "Bath & Body",
    images: [
      "https://images.unsplash.com/photo-1600857062241-98e5e6bf98c8?w=800",
      "https://images.unsplash.com/photo-1556228852-80c3b5f1b603?w=800",
    ],
    highlights: [
      "Natural Sea Salt Exfoliant",
      "Vitamin C Rich",
      "Refreshing Citrus Scent",
      "12 oz Glass Jar"
    ],
    price: 35
  },
  {
    id: "7",
    title: "Vanilla Amber Room Spray",
    description: "Luxurious room spray with warm vanilla and amber notes. Instantly refresh any space with sophisticated fragrance.",
    category: "Home Fragrance",
    images: [
      "https://images.unsplash.com/photo-1611080501243-6cac7f2e5d4b?w=800",
      "https://images.unsplash.com/photo-1585128792147-c63cc9eef8b7?w=800",
    ],
    highlights: [
      "Alcohol-Free Formula",
      "Long-Lasting Scent",
      "4 oz Luxury Bottle",
      "Safe for Fabrics"
    ],
    price: 32
  },
  {
    id: "8",
    title: "Essential Oil Gift Set",
    description: "Curated collection of 6 pure essential oils in a beautiful wooden box. Perfect for aromatherapy enthusiasts.",
    category: "Gift Sets",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800",
    ],
    highlights: [
      "6 Pure Essential Oils (10ml each)",
      "Lavender, Eucalyptus, Peppermint & More",
      "Wooden Gift Box",
      "Therapeutic Grade"
    ],
    price: 78
  },
  {
    id: "9",
    title: "Midnight Garden Candle",
    description: "Mysterious and enchanting blend of night-blooming jasmine and sandalwood. A signature luxury candle.",
    category: "Candles",
    images: [
      "https://images.unsplash.com/photo-1602874801385-f3a29b0ac797?w=800",
      "https://images.unsplash.com/photo-1602874801006-e7d6925a0930?w=800",
    ],
    highlights: [
      "Signature Fragrance Blend",
      "Black Glass Vessel",
      "60+ Hour Burn Time",
      "Luxury Gold Lid"
    ],
    price: 52
  },
  {
    id: "10",
    title: "Coconut Milk Bath Soak",
    description: "Creamy, nourishing bath soak with coconut milk and moisturizing botanicals. Pure indulgence for your skin.",
    category: "Bath & Body",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
      "https://images.unsplash.com/photo-1608181265681-b52dd691a0e0?w=800",
    ],
    highlights: [
      "Coconut Milk & Shea Butter",
      "Deeply Moisturizing",
      "Sulfate-Free",
      "16 oz Premium Container"
    ],
    price: 38
  },
  {
    id: "11",
    title: "Bergamot & Sage Diffuser",
    description: "Sophisticated herbal fragrance diffuser with bergamot and sage. Brings fresh elegance to any room.",
    category: "Home Fragrance",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
      "https://images.unsplash.com/photo-1585128792147-c63cc9eef8b7?w=800",
    ],
    highlights: [
      "Natural Reed Sticks Included",
      "4 oz Premium Oil",
      "Lasts 4+ Months",
      "Elegant Frosted Glass"
    ],
    price: 68
  },
  {
    id: "12",
    title: "Ultimate Spa Gift Set",
    description: "Complete spa experience in a luxury box. Includes candle, bath bombs, body scrub, and essential oils.",
    category: "Gift Sets",
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
      "https://images.unsplash.com/photo-1600857062241-98e5e6bf98c8?w=800",
    ],
    highlights: [
      "8-Piece Premium Collection",
      "Everything for Self-Care",
      "Luxury Gift Box",
      "Save $40 vs Individual Items"
    ],
    price: 145
  }
];

export const hampers: Hamper[] = [
  {
    id: "h1",
    title: "Luxury Wellness Hamper",
    description: "A curated collection of premium self-care products for ultimate relaxation. Perfect for gifting or treating yourself.",
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800",
      "https://images.unsplash.com/photo-1600857062241-98e5e6bf98c8?w=800",
    ],
    products: ["1", "2", "3"],
    price: 120
  },
  {
    id: "h2",
    title: "Aromatherapy Bliss Collection",
    description: "Everything you need for a complete aromatherapy experience. Candles, diffusers, and essential oils curated for relaxation.",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
      "https://images.unsplash.com/photo-1602874801006-e7d6925a0930?w=800",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800",
    ],
    products: ["1", "3", "8", "11"],
    price: 185
  }
];

export const categories = [
  "Candles",
  "Bath & Body",
  "Home Fragrance",
  "Gift Sets"
];
