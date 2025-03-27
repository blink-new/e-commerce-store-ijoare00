import { motion } from 'framer-motion';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="product-card cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        {product.scentFamily.length > 0 && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              {product.scentFamily[0]}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
        <h3 className="font-playfair text-xl mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">{formatPrice(product.price)}</p>
          <button 
            className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}