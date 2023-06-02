import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
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
    }
  }
});
