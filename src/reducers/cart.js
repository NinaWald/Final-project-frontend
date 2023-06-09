import { createSlice } from '@reduxjs/toolkit';

// Retrieve cart items from localStorage
const getStoredCartItems = () => {
  const storedItems = localStorage.getItem('cartItems');
  return storedItems ? JSON.parse(storedItems) : [];
};

// Save cart items to localStorage
const storeCartItems = (items) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: getStoredCartItems(), // Initialize with stored cart items
    discount: 0
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id: action.payload.id, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else if (existingItem) {
        existingItem.quantity -= 1;
      }
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.discount = 0
      storeCartItems(state.items); // Clear and store empty cart items
    }
  }
});

export const { addItem, removeItem, setDiscount, clearCart } = cart.actions;
export default cart.reducer;
