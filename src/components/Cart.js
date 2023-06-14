import { Button } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from 'reducers/cart';
import styled from 'styled-components'

const ProductImage = styled.img`
  width: 80px;
  height: 90px;
  object-fit: cover;
  margin-right: 10px;
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

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => {
            const product = products.find((p) => p.sys.id === item.id);
            if (product) {
              return (
                <div key={item.id}>
                  <ProductImage
                    src={product.fields.image.fields.file.url}
                    alt={product.fields.image.fields.title} />
                  <div>
                    <h3>{product.fields.name}</h3>
                    <p>Price: {product.fields.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <p>Total Price: {discountedTotalPrice}</p>
          <Button variant="contained" onClick={handleClearCart} style={{ backgroundColor: '#669999' }}>
            clear cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;

