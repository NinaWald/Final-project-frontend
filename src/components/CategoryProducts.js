import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductsAsync } from 'reducers/products';
import styled from 'styled-components';
import CartItem from 'components/CartItemButton';
import BackButton from './BackButton';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  height: 500px;
  
  `;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
    gap: 5px; /* spacing between cards */
    margin-left: 10px;
    margin-right: 10px;

    @media (min-width: 668px) and (max-width: 1060px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1061px) {
      grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
      margin-left: 50px;
      margin-right: 50px;
    }
`;

const ProductCard = styled.div`
    border: 1px solid #669999;
    border-radius: 4px;
    padding: 5px;
    background-color: #dfdfd3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 668px) and (max-width: 1060px) {
      border: 1px solid #669999;
      border-radius: 4px;
      padding: 5px;
      margin: 5px;
      background-color: #dfdfd3;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    @media (min-width: 1061px) {
      border: 1px solid #669999;
      border-radius: 4px;
      padding: 15px;
      margin: 15px;
      background-color: #dfdfd3;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
`;

const Image = styled.img`
    cursor: pointer;
    width: 100%;
    max-height: auto;
    object-fit: contain;
    margin-bottom: 8px;
`;

const Heading = styled.h1`
  text-align: center;
  border: 1px solid #669999;
    border-radius: 4px;
    padding: 40px;
    margin-bottom: 50px;
    
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-left: 50px;
  padding: 30px;
`

const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { category: urlCategory } = useParams(); // Retrieve the category from the URL parameters
  const products = useSelector((state) => state.products.items);
  const filteredProducts = products.filter((product) => product.fields.category === urlCategory);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <CategoryContainer>
      <HeadingContainer>
        <Heading>{urlCategory}</Heading>
      </HeadingContainer>
      <Container>
        {filteredProducts.map((product) => (
          <ProductCard key={product.sys.id}>
            <StyledLink to={`/product/${product.sys.id}`}>
              <h2>{product.fields.name}</h2>
              {product.fields.image && (
                <Image
                  src={product.fields.image.fields.file.url}
                  alt={product.fields.image.fields.title} />
              )}
              <p>Price: {product.fields.price}kr</p>
            </StyledLink>
            <CartItem productId={product.sys.id} />
          </ProductCard>
        ))}
      </Container>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </CategoryContainer>
  );
};

export default CategoryProducts;
