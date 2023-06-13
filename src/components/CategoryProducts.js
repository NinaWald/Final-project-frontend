import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductsAsync } from 'reducers/products';
import styled from 'styled-components';
import CartItem from 'components/CartItemButton';

const Container = styled.div`
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductCard = styled.div`
  flex-basis: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  cursor: pointer;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Heading = styled.h1`
  text-align: center;
`;

const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { category: urlCategory } = useParams(); // Retrieve the category from the URL parameters
  const products = useSelector((state) => state.products.items);
  const filteredProducts = products.filter((product) => product.fields.category === urlCategory);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <Container>
      <Heading>{urlCategory}</Heading>
      {filteredProducts.map((product) => (
        <ProductCard key={product.sys.id}>
          <Link to={`/product/${product.sys.id}`}>
            <h2>{product.fields.name}</h2>
            {product.fields.image && (
              <Image
                src={product.fields.image.fields.file.url}
                alt={product.fields.image.fields.title} />
            )}
            <p>Price: {product.fields.price}</p>
          </Link>
          <CartItem productId={product.sys.id} />
        </ProductCard>
      ))}
    </Container>
  );
};

export default CategoryProducts;
