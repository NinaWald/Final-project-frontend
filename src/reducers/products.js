import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: {
    items: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    }
  }
});