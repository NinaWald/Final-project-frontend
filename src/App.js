import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';
import { cart } from './reducers/cart';
import { authSlice } from './reducers/authReducer';
import { products } from './reducers/products';
import { HomePage } from './pages/HomePage';
import MemberPage from './pages/MemberPage'
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import CategoryProducts from './components/CategoryProducts';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';
import PopupMessage from './components/PopupMessage';

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  auth: authSlice.reducer
})

const store = configureStore({ reducer })

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="outer-wrapper">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <PopupMessage />
        </div>
      </BrowserRouter>
    </Provider>
  );
};