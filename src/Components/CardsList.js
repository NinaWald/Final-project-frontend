import React, { useEffect, useState } from 'react';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../reducers/products';
import { cart } from '../reducers/cart';
import { fetchProducts } from '../api';
import './cardslist.css';

const CardsList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.products.items);
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setLocalProducts(fetchedProducts);
      dispatch(products.actions.setProducts(fetchedProducts));
    };

    getProducts();
  }, [dispatch]);

  const productsToDisplay = reduxProducts.length > 0 ? reduxProducts : localProducts;

  return (
    <div className="cards-grid">
      {productsToDisplay.map((flowerWebshop) => (
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
            onClick={() => dispatch(cart.actions.addItem(flowerWebshop))}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
