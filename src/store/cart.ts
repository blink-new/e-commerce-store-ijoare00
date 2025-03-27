import { create } from 'zustand';
import { CartStore, CartItem } from '../types/cart';

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (newItem) =>
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.productId === newItem.productId && item.size === newItem.size
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += newItem.quantity;
        return { items: newItems };
      }

      return { items: [...state.items, newItem] };
    }),
  removeItem: (productId, size) =>
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.productId === productId && item.size === size)
      ),
    })),
  updateQuantity: (productId, size, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));