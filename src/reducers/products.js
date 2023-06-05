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

// the redux store

/*
if adding the api.js to the product.js:
export const fetchProductsAsync = () => async (dispatch) => {
  try {
    dispatch(products.actions.fetchProductsStart());
    const client = createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export const fetchProducts = async () => {
  const response = await client.getEntries({ content_type: 'flowerWebshop' });
  return response.items;
};
    dispatch(products.actions.fetchProductsSuccess(fetchedProducts));
  } catch (error) {
    dispatch(products.actions.fetchProductsFailure(error.message));
  }
};

chatgpt:
// Thunk Action
export const fetchProductsAsync = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());

    const client = createClient({
      space: process.env.REACT_APP_SPACE,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    const response = await client.getEntries({ content_type: 'flowerWebshop' });
    const fetchedProducts = response.items;

    dispatch(fetchProductsSuccess(fetchedProducts));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
*/