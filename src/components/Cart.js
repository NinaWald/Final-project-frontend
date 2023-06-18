import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from 'reducers/cart';
import styled from 'styled-components'
import trashBin from '../assets/bin.png'

const CartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: 16px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 90px;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ProductQuantity = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const TotalPrice = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

const ClearCartButton = styled(Button)`
  background-color: #669999 !important;
  color: #fff !important;
  margin-top: 20px;
`;

const RemoveButton = styled(IconButton)`
  background-color: transparent !important;
  color: #ff0000 !important;
  margin-left: auto;

  img {
    width: 24px;
    height: 24px;
  }

`;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items);
  const discount = useSelector((state) => state.auth.discount);
  const isAuthenticated = useSelector((state) => state.auth.username !== null);

  const totalPrice = cartItems.reduce((acc, item) => {
    const product = products.find((p) => p.sys.id === item.id);
    if (product) {
      return acc + product.fields.price * item.quantity;
    }
    return acc;
  }, 0);

  const discountedTotalPrice = isAuthenticated ? totalPrice * (1 - discount) : totalPrice;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <CartContainer>
      <Title>Cart</Title>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      ) : (
        <div>
          {cartItems.map((item) => {
            const product = products.find((p) => p.sys.id === item.id);
            if (product) {
              return (
                <ProductContainer key={item.id}>
                  <ProductImage
                    src={product.fields.image.fields.file.url}
                    alt={product.fields.image.fields.title} />
                  <ProductDetails>
                    <ProductName>{product.fields.name}</ProductName>
                    <ProductPrice>Price: {product.fields.price}kr</ProductPrice>
                    <ProductQuantity>Quantity: {item.quantity}</ProductQuantity>
                  </ProductDetails>
                  <RemoveButton
                    onClick={() => handleRemoveItem(item.id)}>
                    <img src={trashBin} alt="Remove" />
                  </RemoveButton>
                </ProductContainer>
              );
            }
            return null;
          })}
          <TotalPrice>Total Price: {discountedTotalPrice}kr</TotalPrice>
          <ClearCartButton variant="contained" onClick={handleClearCart}>
            Clear Cart
          </ClearCartButton>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;

