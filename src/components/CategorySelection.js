import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Classic from '../assets/flower category classic1.png';
import Romantic from '../assets/flower category romantic1.png';
import Modern from '../assets/flower category modern1.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderContainer = styled.div`
  margin-bottom: 10px;

  @media (max-width: 668px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 258px;
  height: 256px;
  margin: 20px;
  border-radius: 130px;
  border: 5px solid #669999;

  @media (max-width: 668px) {
    display: flex;
    justify-content: center;
    width: 180px;
    height: 180px;
    margin: 50px;
  }
`;

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Container>
      <HeaderContainer>
        <h2>Browse Categories</h2>
      </HeaderContainer>
      <ImageWrapper>
        <Image
          src={Classic}
          alt="Classic Collection"
          onClick={() => handleClick('Classic Collection')} />
        <Image
          src={Modern}
          alt="Modern Luxe"
          onClick={() => handleClick('Modern Luxe')} />
        <Image
          src={Romantic}
          alt="Romantic Collection"
          onClick={() => handleClick('Romantic Collection')} />
      </ImageWrapper>
    </Container>
  );
};

export default CategorySelection;

