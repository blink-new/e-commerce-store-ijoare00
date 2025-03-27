import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutSteps } from '../components/checkout/CheckoutSteps';
import { AddressForm } from '../components/checkout/AddressForm';
import { PaymentForm } from '../components/checkout/PaymentForm';
import { useCartStore } from '../store/cart';
import { useCheckoutStore } from '../store/checkout';
import { formatPrice } from '../lib/utils';
import { products } from '../data/products';

export function Checkout() {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const {
    step,
    setStep,
    shippingAddress,
    setShippingAddress,
    billingAddress,
    setBillingAddress,
    paymentDetails,
    setPaymentDetails,
    sameAsShipping,
    setSameAsShipping,
    reset: resetCheckout,
  } = useCheckoutStore();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/catalog');
    }
  }, [cartItems, navigate]);

  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    const size = product?.sizes.find((s) => s.ml === item.size);
    return { ...item, product, size };
  });

  const subtotal = cartProducts.reduce((sum, item) => {
    return sum + (item.size?.price ?? 0) * item.quantity;
  }, 0);

  const handleShippingSubmit = (data: typeof shippingAddress) => {
    setShippingAddress(data);
    if (sameAsShipping) {
      setBillingAddress(data);
    }
    setStep(2);
  };

  const handlePaymentSubmit = (data: typeof paymentDetails) => {
    setPaymentDetails(data);
    setStep(3);
  };

  const handlePlaceOrder = async () => {
    // Here you would typically make an API call to process the order
    // For now, we'll just simulate a successful order
    clearCart();
    resetCheckout();
    navigate('/order-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <CheckoutSteps />

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
        <div className="lg:col-span-7">
          {step === 1 && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-8">Shipping address</h2>
              <AddressForm
                type="shipping"
                onSubmit={handleShippingSubmit}
                defaultValues={shippingAddress ?? undefined}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-8">Payment details</h2>
              <PaymentForm onSubmit={handlePaymentSubmit} />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order summary</h2>
                <div className="border rounded-lg p-6 space-y-6">
                  <div className="space-y-4">
                    {cartProducts.map((item) => (
                      <div key={`${item.productId}-${item.size}`} className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">
                            {item.size?.ml}ml × {item.quantity}
                          </p>
                          <p className="font-medium mt-1">
                            {formatPrice((item.size?.price ?? 0) * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{formatPrice(subtotal)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping address</h2>
                <div className="border rounded-lg p-6">
                  <p>{shippingAddress?.firstName} {shippingAddress?.lastName}</p>
                  <p>{shippingAddress?.address}</p>
                  {shippingAddress?.apartment && <p>{shippingAddress.apartment}</p>}
                  <p>
                    {shippingAddress?.city}, {shippingAddress?.state} {shippingAddress?.zipCode}
                  </p>
                  <p>{shippingAddress?.phone}</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Payment method</h2>
                <div className="border rounded-lg p-6">
                  <p>•••• •••• •••• {paymentDetails?.cardNumber.slice(-4)}</p>
                  <p className="text-sm text-gray-500">Expires {paymentDetails?.expiryDate}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Place order
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 lg:mt-0 lg:col-span-5">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order summary</h2>
            <div className="space-y-4">
              {cartProducts.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.size?.ml}ml × {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    {formatPrice((item.size?.price ?? 0) * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{formatPrice(subtotal)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}