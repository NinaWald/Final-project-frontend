import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Cart from '../components/Cart.js';
import BackButton from '../components/BackButton.js';

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  background-color: whitesmoke;
  height: 500px;
`;

const StyledButton = styled(Button)`
    && {
    margin: 20px;
    background-color: #336699;
  }
`;

const CartPage = () => {
  return (
    <CartPageContainer>
      <Cart />
      <StyledButton
        component={Link}
        to="/checkout"
        variant="contained"
        startIcon={<ShoppingCartCheckoutIcon />}
        color="primary">
        Go to Checkout
      </StyledButton>
      <BackButton />
    </CartPageContainer>
  );
};

export default CartPage;
