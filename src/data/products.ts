import { Product, Hamper } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Handcrafted Candle",
    description: "Luxury soy wax candle with natural essential oils. Hand-poured with love and care.",
    category: "Candles",
    images: [
      "https://images.unsplash.com/photo-1602874801006-e7d6925a0930?w=800",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
    ],
    highlights: [
      "100% Natural Soy Wax",
      "Long-lasting Burn Time",
      "Premium Essential Oils",
      "Eco-friendly Packaging"
    ],
    price: 45
  },
  {
    id: "2",
    title: "Artisan Soap Collection",
    description: "Premium handmade soaps crafted with natural ingredients and luxurious oils.",
    category: "Bath & Body",
    images: [
      "https://images.unsplash.com/photo-1600857544200-forw8d15d64b6?w=800",
      "https://images.unsplash.com/photo-1600857062241-98e5e6bf98c8?w=800",
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
    description: "Elegant reed diffuser with premium fragrance oils for continuous aromatherapy.",
    category: "Home Fragrance",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
    ],
    highlights: [
      "Long-lasting Fragrance",
      "Elegant Design",
      "Premium Quality Oils",
      "Perfect Gift"
    ],
    price: 65
  }
];

export const hampers: Hamper[] = [
  {
    id: "h1",
    title: "Luxury Wellness Hamper",
    description: "A curated collection of premium self-care products for ultimate relaxation.",
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800",
    ],
    products: ["1", "2", "3"],
    price: 120
  }
];

export const categories = [
  "Candles",
  "Bath & Body",
  "Home Fragrance",
  "Gift Sets"
];
