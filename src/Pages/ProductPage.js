import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.sys.id === productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.fields.name}</h1>
      {product.fields.image && (
        <img
          src={product.fields.image.fields.file.url}
          alt={product.fields.image.fields.title} />
      )}
      <p>Price: {product.fields.price}</p>
      <p>{product.fields.description}</p>
      <p>Category: {product.fields.category}</p>
    </div>
  );
};

export default ProductPage;

