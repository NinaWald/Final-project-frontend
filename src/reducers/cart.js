import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // Assuming the payload is the product item
      // Check if the item already exists in the cart
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
      // If the item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
      // If the item doesn't exist, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    }
  }
});