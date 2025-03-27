import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScentPyramid } from '../components/ScentPyramid';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useCartStore } from '../store/cart';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const addItem = useCartStore(state => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem({
        productId: product.id,
        size: selectedSize.ml,
        quantity: 1
      });
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {product.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-playfair mb-2">{product.name}</h1>
              <p className="text-xl text-gray-500 mb-4">{product.brand}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
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
                <span className="text-gray-500">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-lg leading-relaxed">{product.description}</p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size.ml}
                    className={`flex-1 p-4 border rounded-lg transition-colors ${
                      selectedSize?.ml === size.ml
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <div className="text-lg mb-1">{size.ml}ml</div>
                    <div className="font-semibold">
                      {formatPrice(size.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4">Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">Gender</p>
                  <p>{product.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500">Intensity</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-1 rounded-full ${
                          i < product.intensity
                            ? 'bg-primary'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">Scent Family</p>
                  <p>{product.scentFamily.join(', ')}</p>
                </div>
                <div>
                  <p className="text-gray-500">Occasion</p>
                  <p>{product.occasion.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scent Pyramid */}
        <div className="mt-20">
          <h2 className="text-3xl font-playfair text-center mb-8">
            Scent Pyramid
          </h2>
          <ScentPyramid notes={product.scentNotes} />
        </div>
      </div>
    </div>
  );
}