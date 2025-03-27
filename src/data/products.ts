import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Rose",
    brand: "Essence Noir",
    description: "A captivating evening fragrance that opens with Bulgarian rose and midnight jasmine, followed by warm amber and vanilla base notes. Perfect for elegant occasions.",
    price: 120.00,
    sizes: [
      { ml: 30, price: 120.00, inStock: true },
      { ml: 50, price: 180.00, inStock: true },
      { ml: 100, price: 250.00, inStock: true }
    ],
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1557170334-a9086638de89?auto=format&fit=crop&q=80",
    ],
    scentNotes: {
      top: ["Bulgarian Rose", "Bergamot", "Pink Pepper"],
      heart: ["Midnight Jasmine", "Iris", "Violet"],
      base: ["Amber", "Vanilla", "Musk"]
    },
    scentFamily: ["Floral", "Oriental"],
    gender: "Feminine",
    intensity: 4,
    occasion: ["Evening", "Formal", "Special Occasion"],
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: "2",
    name: "Ocean Breeze",
    brand: "Aqua Pure",
    description: "A fresh and invigorating scent that captures the essence of a coastal morning. Features marine notes, citrus, and a hint of woody base.",
    price: 95.00,
    sizes: [
      { ml: 30, price: 95.00, inStock: true },
      { ml: 50, price: 140.00, inStock: true },
      { ml: 100, price: 190.00, inStock: true }
    ],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80",
    ],
    scentNotes: {
      top: ["Sea Salt", "Bergamot", "Lemon"],
      heart: ["Marine Notes", "Lavender", "Green Tea"],
      base: ["Cedar", "White Musk", "Amber"]
    },
    scentFamily: ["Fresh", "Aquatic"],
    gender: "Unisex",
    intensity: 3,
    occasion: ["Daytime", "Casual", "Sport"],
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: "3",
    name: "Velvet Oud",
    brand: "Arabian Nights",
    description: "An intense and luxurious fragrance combining rare oud wood with spices and rose, creating an unforgettable oriental experience.",
    price: 280.00,
    sizes: [
      { ml: 50, price: 280.00, inStock: true },
      { ml: 100, price: 400.00, inStock: true }
    ],
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80",
    ],
    scentNotes: {
      top: ["Saffron", "Rose", "Black Pepper"],
      heart: ["Oud Wood", "Turkish Rose", "Patchouli"],
      base: ["Amber", "Sandalwood", "Vanilla"]
    },
    scentFamily: ["Woody", "Oriental"],
    gender: "Unisex",
    intensity: 5,
    occasion: ["Evening", "Formal", "Winter"],
    rating: 4.9,
    reviewCount: 156
  }
];