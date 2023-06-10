import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart.js';
import BackButton from '../components/BackButton.js';

const CheckOut = () => {
  return (
    <div>
      <h2>This is the checkout page but its not available yet</h2>
      <Cart />
      <BackButton />
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default CheckOut;