import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { products } from 'reducers/products';
// import { cart } from '../reducers/cart';
import { fetchProducts } from '../api';

const CardsList = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.products.items)
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // eslint-disable-next-line no-shadow
      const fetchedProducts = await fetchProducts();
      setLocalProducts(fetchedProducts);
      dispatch(products.actions.setProducts(fetchedProducts));
    };

    getProducts();
  }, [dispatch]);

  // console.log('Products:', products);
  const productsToDisplay = reduxProducts.length > 0 ? reduxProducts : localProducts;

  return (
    <div>
      {productsToDisplay.map((product) => (
        <div key={product.sys.id}>
          <h2>{product.fields.name}</h2>
          <div>{documentToReactComponents(product.fields.description)}</div>
          {product.fields.image && product.fields.image.length > 0 && (
            <img
              src={product.fields.image[0].fields.file.url}
              alt={product.fields.image[0].fields.title} />
          )}
          <p>Price: {product.fields.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsList;