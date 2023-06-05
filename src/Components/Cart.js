import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items);
  const discount = useSelector((state) => state.cart.discount);

  const totalPrice = cartItems.reduce((acc, item) => {
    const product = products.find((p) => p.sys.id === item.id);
    if (product) {
      return acc + product.fields.price * item.quantity;
    }
    return acc;
  }, 0) * (1 - discount); // Multiply by (1 - discount) to apply the discount

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
                  <h3>{product.fields.name}</h3>
                  <p>Price: {product.fields.price}</p>
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

