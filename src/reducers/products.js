import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../api';

export const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.payload;
    }
  }
});

// Thunk action to fetch products from Contentful
export const fetchProductsAsync = () => async (dispatch) => {
  try {
    dispatch(products.actions.fetchProductsStart());
    const fetchedProducts = await fetchProducts();
    dispatch(products.actions.fetchProductsSuccess(fetchedProducts));
  } catch (error) {
    dispatch(products.actions.fetchProductsFailure(error.message));
  }
};

