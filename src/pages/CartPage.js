import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cart from '../components/Cart.js';
import BackButton from '../components/BackButton.js';

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  background-color: #669999;
  height: 500px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  margin-bottom: 20px;
  color: #004D00;
  font-size: 1.2em;
  text-decoration: none;
`;

const CartPage = () => {
  return (
    <CartPageContainer>
      <Title>Cart Page</Title>
      <Cart />
      <StyledLink to="/checkout">Go to Checkout</StyledLink>
      <BackButton />
    </CartPageContainer>
  );
};

export default CartPage;
