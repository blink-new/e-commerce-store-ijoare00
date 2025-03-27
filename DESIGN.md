# Essence - Luxury Perfume E-commerce

## Overview
Essence is a luxury perfume e-commerce platform that offers a curated selection of high-end fragrances. The platform focuses on creating an immersive shopping experience that helps customers find their perfect scent through detailed product information, an interactive scent finder, and personalized recommendations.

## Core Features

### 1. Product Catalog
- Grid view of perfumes with elegant hover animations
- Filtering by:
  - Scent family (Floral, Woody, Oriental, Fresh)
  - Price range
  - Brand
  - Gender
- Sorting by popularity, price, and newest
- Quick view modal for key product details

### 2. Product Details
- Large product imagery with zoom capability
- Scent pyramid breakdown (top, heart, base notes)
- Size selection with price comparison
- Add to cart/wishlist
- Related fragrances
- Customer reviews and ratings
- Detailed description and story

### 3. Scent Finder Quiz
- Interactive questionnaire to determine preferences
- Questions about:
  - Preferred scent families
  - Occasion (day/night, casual/formal)
  - Intensity preference
  - Current favorite fragrances
- Personalized recommendations based on answers

### 4. Shopping Experience
- Persistent shopping cart
- Guest checkout option
- Secure payment processing
- Sample sets available for purchase
- Gift wrapping options
- Order tracking

### 5. User Accounts
- Purchase history
- Wishlist management
- Saved payment methods
- Scent preferences profile
- Review management

## Technical Architecture

### Frontend
- React with TypeScript for type safety
- TailwindCSS for styling
- ShadcnUI for component library
- Framer Motion for animations
- React Query for data fetching
- Zustand for state management

### Data Structure

#### Product
\`\`\`typescript
interface Product {
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

interface ProductSize {
  ml: number;
  price: number;
  inStock: boolean;
}
\`\`\`

#### User
\`\`\`typescript
interface User {
  id: string;
  email: string;
  name: string;
  wishlist: string[];
  orders: Order[];
  preferences: {
    scentFamilies: string[];
    occasions: string[];
    intensity: number;
  };
}
\`\`\`

## User Interface

### Color Palette
- Primary: #1A1A1A (Rich Black)
- Secondary: #D4AF37 (Metallic Gold)
- Accent: #F5F5F5 (Off White)
- Text: #333333 (Dark Gray)
- Background: #FFFFFF (White)

### Typography
- Headings: Playfair Display
- Body: Inter
- Accents: Cormorant Garamond

### Key Interactions
- Smooth page transitions
- Product card hover animations
- Interactive scent pyramid visualization
- Toast notifications for cart actions
- Loading skeletons for data fetching

## Phase 1 Implementation
1. Basic layout and navigation
2. Product catalog with filtering
3. Product detail pages
4. Shopping cart functionality
5. User authentication

## Future Enhancements
- AR try-on experience
- Scent mood board creator
- Subscription box service
- Virtual perfume consultation
- Community reviews and ratings