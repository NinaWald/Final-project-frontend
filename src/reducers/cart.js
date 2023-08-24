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
      storeCartItems(state.items); // Store updated cart items
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

/*
REMOVEITEM

Both splice and filter are valid JavaScript array methods that can be used to remove items
 from an array,
 but they have different use cases and performance characteristics.
 -filter-
 : The filter method creates a new array containing all elements that
  pass a provided test function.
It doesn't modify the original array but returns a new one with the specified items removed.
 In this case,
  Im using filter to remove an item from the state.items array when its quantity reaches 1.
-splice-
: The splice method changes the contents of an array by removing or replacing
 existing elements and/or adding new elements in place.
 It directly modifies the original array.
-
 In this case, using filter seems appropriate because it aligns with the typical Redux and Redux
  Toolkit approach of immutability. However, if encounter performance issues with
   a large number of items, you could consider
  optimizing with splice while carefully managing immutability elsewhere in your code.
*/