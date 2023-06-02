import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const reduxProducts = useSelector((state) => state.products.items);

  const totalPrice = cartItems.reduce((acc, item) => {
    const flowerWebshop = reduxProducts.find((p) => p.sys.id === item.id);
    if (flowerWebshop) {
      return acc + flowerWebshop.fields.price * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => {
            const flowerWebshop = reduxProducts.find((p) => p.sys.id === item.id);
            if (flowerWebshop) {
              return (
                <div key={item.id}>
                  <h3>{flowerWebshop.fields.name}</h3>
                  <p>Price: {flowerWebshop.fields.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              );
            }
            return null;
          })}
          <p>Total Price: {totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

