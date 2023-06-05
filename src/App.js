import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { cart } from 'reducers/cart';
import { cartReducer } from 'reducers/cartReducer';
import { authReducer } from 'reducers/authReducer';
import { products } from 'reducers/products';
// import MemberPage from 'pages/MemberPage'
import NotFound from 'pages/NotFound';
import { HomePage } from 'pages/HomePage';

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  authReducer: authReducer.reducer,
  cartReducer: cartReducer.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <div className="outer-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
              <Route path="/member" element={<MemberPage />} />
                        <Link to="/member">Member Page</Link>
*/