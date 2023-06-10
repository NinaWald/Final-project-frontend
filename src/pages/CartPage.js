import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart.js';
import BackButton from '../components/BackButton.js';

const CartPage = () => {
  return (
    <div>
      <h2>Cart Page</h2>
      <Cart />
      <Link to="/checkout">Go to Checkout</Link>
      <BackButton />
    </div>
  );
};

export default CartPage;
