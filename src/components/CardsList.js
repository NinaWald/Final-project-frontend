import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsAsync } from 'reducers/products';
import CartItem from 'components/CartItemButton';
import '../cardslist.css';

const CardsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className="cards-grid">
      {products.map((product) => (
        <div className="cards" key={product.sys.id}>
          <Link to={`/product/${product.sys.id}`}>
            <h2>{product.fields.name}</h2>
            {product.fields.image && (
              <img
                src={product.fields.image.fields.file.url}
                alt={product.fields.image.fields.title} />
            )}
            <p>Price: {product.fields.price}</p>
          </Link>
          <CartItem productId={product.sys.id} />
        </div>
      ))}
    </div>
  );
};

export default CardsList;

