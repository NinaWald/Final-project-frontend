import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchProducts } from './api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // eslint-disable-next-line no-shadow
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  console.log('Products:', products);

  return (
    <div>
      {products.map((product) => (
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

export default ProductList;
