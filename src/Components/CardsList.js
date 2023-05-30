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
      {productsToDisplay.map((product) => (
        <div className="cards" key={product.sys.id}>
          <h2>{product.fields.name}</h2>
          {product.fields.image && product.fields.image.length > 0 && (
            <img
              src={product.fields.image[0].fields.file.url}
              alt={product.fields.image[0].fields.title} />
          )}
          <p>Price: {product.fields.price}</p>

          <button
            type="button"
            disabled={product.fields.inventory === 0}
            onClick={() => dispatch(cart.actions.addItem(product))}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
