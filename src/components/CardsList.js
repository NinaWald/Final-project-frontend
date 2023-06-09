import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cart } from 'reducers/cart';
import { fetchProductsAsync } from 'reducers/products';
import RoundIconButton from 'components/RoundIconButton';
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
          <RoundIconButton
            variant="contained"
            color="primary"
            disabled={product.fields.inventory === 0}
            onClick={() => dispatch(cart.actions.addItem({ id: product.sys.id }))} />

          <RoundIconButton
            variant="contained"
            color="secondary"
            onClick={() => dispatch(cart.actions.removeItem({ id: product.sys.id }))}
            isRemove />

        </div>
      ))}
    </div>
  );
};

export default CardsList;

