import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from 'reducers/cart';
import { fetchProductsAsync } from 'reducers/products';
import './cardslist.css';

const CardsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(cart.actions.removeItem(productId));
  };

  return (
    <div className="cards-grid">
      {products.map((product) => (
        <div className="cards" key={product.sys.id}>
          <h2>{product.fields.name}</h2>
          {product.fields.image && (
            <img
              src={product.fields.image.fields.file.url}
              alt={product.fields.image.fields.title} />
          )}
          <p>Price: {product.fields.price}</p>

          <button
            type="button"
            disabled={product.fields.inventory === 0}
            onClick={() => dispatch(cart.actions.addItem({ id: product.sys.id }))}>
            Add to cart
          </button>

          {cartItems.find((item) => item.id === product.sys.id) && (
            <button
              type="button"
              onClick={() => handleRemoveItem(product.sys.id)}>
              Remove from cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsList;

