import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100px;
  height: 100px;
`;

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Container>
      <Image
        src="classic-collection-image-url"
        alt="Classic Collection"
        onClick={() => handleClick('Classic Collection')} />
      <Image
        src="modern-collection-image-url"
        alt="Modern Luxe"
        onClick={() => handleClick('Modern Luxe')} />
      <Image
        src="romantic-collection-image-url"
        alt="Romantic Collection"
        onClick={() => handleClick('Romantic Collection')} />
    </Container>
  );
};

export default CategorySelection;
