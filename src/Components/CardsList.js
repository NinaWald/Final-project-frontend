import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from 'reducers/cart';
import { fetchProductsAsync } from 'reducers/products';
import './cardslist.css';

const CardsList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(cart.actions.removeItem(productId));
  };

  return (
    <div className="cards-grid">
      {reduxProducts.map((flowerWebshop) => (
        <div className="cards" key={flowerWebshop.sys.id}>
          <h2>{flowerWebshop.fields.name}</h2>
          {flowerWebshop.fields.image && (
            <img
              src={flowerWebshop.fields.image.fields.file.url}
              alt={flowerWebshop.fields.image.fields.title} />
          )}
          <p>Price: {flowerWebshop.fields.price}</p>

          <button
            type="button"
            disabled={flowerWebshop.fields.inventory === 0}
            onClick={() => dispatch(cart.actions.addItem({ id: flowerWebshop.sys.id }))}>
            Add to cart
          </button>

          {cartItems.find((item) => item.id === flowerWebshop.sys.id) && (
            <button
              type="button"
              onClick={() => handleRemoveItem(flowerWebshop.sys.id)}>
              Remove from cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsList;

