import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Catalog() {
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    if (selectedFamily && !product.scentFamily.includes(selectedFamily)) {
      return false;
    }
    if (selectedGender && product.gender !== selectedGender) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-playfair text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Collection
        </motion.h1>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {['Floral', 'Woody', 'Oriental', 'Fresh'].map((family) => (
              <button
                key={family}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedFamily === family
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-200 hover:border-primary'
                }`}
                onClick={() => setSelectedFamily(
                  selectedFamily === family ? null : family
                )}
              >
                {family}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {['Masculine', 'Feminine', 'Unisex'].map((gender) => (
              <button
                key={gender}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedGender === gender
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-200 hover:border-primary'
                }`}
                onClick={() => setSelectedGender(
                  selectedGender === gender ? null : gender
                )}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}