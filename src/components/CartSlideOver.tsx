import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

export function CartSlideOver() {
  const navigate = useNavigate();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity } = useCartStore();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setIsOpen]);

  const cartItems = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    const size = product?.sizes.find((s) => s.ml === item.size);
    return { ...item, product, size };
  }).filter((item): item is (typeof item & { product: NonNullable<typeof item.product> }) => item.product != null);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.size?.price ?? 0) * item.quantity;
  }, 0);

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                <p className="text-gray-500 text-center">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={`${item.productId}-${item.size}`}
                        className="flex gap-4"
                      >
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">
                            {item.size?.ml}ml
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              className="p-1 rounded-full hover:bg-gray-100"
                              onClick={() => {
                                if (item.quantity > 1) {
                                  updateQuantity(
                                    item.productId,
                                    item.size?.ml ?? 0,
                                    item.quantity - 1
                                  );
                                }
                              }}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="p-1 rounded-full hover:bg-gray-100"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size?.ml ?? 0,
                                  item.quantity + 1
                                )
                              }
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="font-medium">
                            {formatPrice((item.size?.price ?? 0) * item.quantity)}
                          </p>
                          <button
                            className="text-sm text-red-500 hover:text-red-600 mt-2"
                            onClick={() =>
                              removeItem(item.productId, item.size?.ml ?? 0)
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">Subtotal</span>
                    <span className="text-xl font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Shipping and taxes calculated at checkout
                  </p>
                  <button
                    className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}