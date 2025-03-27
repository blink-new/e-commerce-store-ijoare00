export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

export interface CheckoutStore {
  step: number;
  shippingAddress: ShippingAddress | null;
  billingAddress: ShippingAddress | null;
  paymentDetails: PaymentDetails | null;
  sameAsShipping: boolean;
  setStep: (step: number) => void;
  setShippingAddress: (address: ShippingAddress) => void;
  setBillingAddress: (address: ShippingAddress) => void;
  setPaymentDetails: (details: PaymentDetails) => void;
  setSameAsShipping: (same: boolean) => void;
  reset: () => void;
}