import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cart from '../components/Cart.js';
import BackButton from '../components/BackButton.js';

const CheckOutContainer = styled.div`
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

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #669999;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 10px;
`;

const CheckOut = () => {
  return (
    <CheckOutContainer>
      <Title>This checkout page is not available yet</Title>
      <Cart />
      <BackButton />
      <StyledButton to="/">Go back to homepage</StyledButton>
    </CheckOutContainer>
  );
};

export default CheckOut;