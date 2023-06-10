import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';
import { cart } from './reducers/cart';
import { authSlice } from './reducers/authReducer';
import { products } from './reducers/products';
import { HomePage } from './pages/HomePage';
import MemberPage from './pages/MemberPage'
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  auth: authSlice.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="outer-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

/*
      // <Cart />
      // <CartProducts />
          <Provider store={store}>
      <Router>
        <Hero />
        <Routes>
          <Route path="/" element={<div><Hero /><CardsList /></div>} />
          <nav>
            <Link to="/member">Member Page</Link>
          </nav>
          <Route path="/member" element={<MemberPage />} />
        </Routes>
      </Router>
    </Provider>
          <FlowerCarousel />
            // Dispatching actions
  const addToCart = (product) => {
    store.dispatch(cartActions.addItem(product));
  };

  const loginUser = (username, accessToken) => {
    store.dispatch(authActions.loginUser({ username, accessToken }));
  };
*/