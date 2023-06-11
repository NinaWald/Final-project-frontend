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

const CheckOut = () => {
  return (
    <CheckOutContainer>
      <Title>This checkout page is not available yet</Title>
      <Cart />
      <BackButton />
      <Link to="/">Go back to homepage</Link>
    </CheckOutContainer>
  );
};

export default CheckOut;