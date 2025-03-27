export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  sizes: ProductSize[];
  images: string[];
  scentNotes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  scentFamily: string[];
  gender: 'Masculine' | 'Feminine' | 'Unisex';
  intensity: 1 | 2 | 3 | 4 | 5;
  occasion: string[];
  rating: number;
  reviewCount: number;
}

export interface ProductSize {
  ml: number;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  size: number;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  wishlist: string[];
  preferences: {
    scentFamilies: string[];
    occasions: string[];
    intensity: number;
  };
}