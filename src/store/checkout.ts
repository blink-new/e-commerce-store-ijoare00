import { create } from 'zustand';
import { CheckoutStore } from '../types/checkout';

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  step: 1,
  shippingAddress: null,
  billingAddress: null,
  paymentDetails: null,
  sameAsShipping: true,
  setStep: (step) => set({ step }),
  setShippingAddress: (address) => set({ shippingAddress: address }),
  setBillingAddress: (address) => set({ billingAddress: address }),
  setPaymentDetails: (details) => set({ paymentDetails: details }),
  setSameAsShipping: (same) => set({ sameAsShipping: same }),
  reset: () => set({
    step: 1,
    shippingAddress: null,
    billingAddress: null,
    paymentDetails: null,
    sameAsShipping: true,
  }),
}));