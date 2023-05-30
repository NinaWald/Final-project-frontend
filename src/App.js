import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cart } from 'reducers/cart';
import { products } from 'reducers/products';
import CardsList from './Components/CardsList';
import Hero from './Components/Hero'
import Cart from './Components/Cart'
import CartProducts from './Components/CartProducts'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Hero />
      <CardsList />
      <Cart />
      <CartProducts />
    </Provider>
  );
};
