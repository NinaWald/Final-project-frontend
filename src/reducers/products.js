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

/*
EXPLANATION OF THE THUNK ACTION=

-export const fetchProductsAsync = () => async (dispatch) => {

This line defines and exports a function called fetchProductsAsync.
It uses arrow function syntax and does not take any parameters.
The function returns another function that is defined as an asynchronous function,
which takes a single parameter named dispatch.

-try {

This line starts a try block, indicating that we are going to attempt a block of code
and handle any potential errors that may occur.

-dispatch(products.actions.fetchProductsStart());

This line dispatches an action called fetchProductsStart() from the products slice.
The dispatch function is called with this action,
which will trigger the corresponding reducer logic.

-const fetchedProducts = await fetchProducts();

This line makes an asynchronous call to a function called fetchProducts().
The await keyword is used to pause the execution of the code until the promise
returned by fetchProducts() is resolved or rejected.
The result of the resolved promise is stored in the fetchedProducts variable.

-dispatch(products.actions.fetchProductsSuccess(fetchedProducts));

This line dispatches an action called fetchProductsSuccess() from the products slice.
The dispatch function is called with this action and the fetchedProducts data as the payload,
which will trigger the corresponding reducer logic.
The fetchedProducts variable contains the data obtained from the asynchronous call.

-} catch (error) {

This line starts a catch block, which is executed if an error occurs within the try block.
The error parameter will hold the error object or message thrown by the code within the try block.

-dispatch(products.actions.fetchProductsFailure(error.message));

This line dispatches an action called fetchProductsFailure() from the products slice.
The dispatch function is called with this action and the error message as the payload,
which will trigger the corresponding reducer logic.
The error.message property contains the error message extracted from the error object.

-}

This line marks the end of the catch block.
In summary, the fetchProductsAsync function is an asynchronous action creator
 that is responsible for fetching products.
 It dispatches different actions depending on the outcome of the asynchronous operation:
  fetchProductsStart to indicate the start of the fetch,
  fetchProductsSuccess with the fetched products upon a successful fetch,
   and fetchProductsFailure with an error message if an error occurs during the fetch.
   The dispatched actions will be handled by the corresponding reducers
    defined in the products slice.

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