import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { cart } from 'reducers/cart';

const CartItem = ({ productId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === productId);

  const handleIncrement = () => {
    dispatch(cart.actions.addItem({ id: productId }));
  };

  const handleDecrement = () => {
    dispatch(cart.actions.removeItem({ id: productId }));
  };

  return (
    <div>
      <IconButton color="primary" aria-label="Decrement" onClick={handleDecrement} style={{ color: '#669999' }}>
        <RemoveIcon />
      </IconButton>
      <Link to="/cart">
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          style={{ backgroundColor: '#669999' }}>
          {cartItem ? cartItem.quantity : 0}
        </Button>
      </Link>
      <IconButton color="primary" aria-label="Increment" onClick={handleIncrement} style={{ color: '#669999' }}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default CartItem;

