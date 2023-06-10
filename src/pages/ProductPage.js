import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RoundIconButton from 'components/RoundIconButton';
import { cart } from 'reducers/cart';
import BackButton from 'components/BackButton';

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 120px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
`;

const Description = styled.p`
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  max-width: 500px;
`;

const Category = styled.p`
  margin-top: 10px;
  font-style: italic;
`;

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const product = products.find((p) => p.sys.id === productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>{product.fields.name}</Title>
      {product.fields.image && (
        <Image
          src={product.fields.image.fields.file.url}
          alt={product.fields.image.fields.title} />
      )}
      <Price>Price: {product.fields.price}</Price>
      <RoundIconButton
        variant="contained"
        color="primary"
        onClick={() => dispatch(cart.actions.addItem({ id: product.sys.id }))} />
      <RoundIconButton
        variant="contained"
        color="secondary"
        onClick={() => dispatch(cart.actions.removeItem({ id: product.sys.id }))}
        isRemove />

      <Description>{product.fields.description}</Description>
      <Category>Category: {product.fields.category}</Category>
      <BackButton />
    </Container>
  );
};

export default ProductPage;

