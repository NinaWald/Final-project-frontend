import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Cart from '../components/Cart.js';
import BackButton from '../components/BackButton.js';

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  background-color: whitesmoke;
  height: 500px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
    && {
    margin: 20px;
    background-color: #669999;
  }
`;

const CartPage = () => {
  return (
    <CartPageContainer>
      <Title>Cart Page</Title>
      <Cart />
      <StyledButton component={Link} to="/checkout" variant="contained" color="primary">
        Go to Checkout
      </StyledButton>
      <BackButton />
    </CartPageContainer>
  );
};

export default CartPage;
