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
  padding: 50px;
 
`;

const HeaderContainer = styled.div`
   margin-bottom: 15px;
  margin-top: 15px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media (max-width: 668px) {
    display: flex;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #669999;

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
    margin: 10px;
    border-radius: 0;
  }

   /* tablet */
   @media (min-width: 668px) and (max-width: 1060px) {
    display: flex;
    justify-content: center;
    width: 180px;
    height: 180px;
    margin: 10px;
    border-radius: 130px;
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
        <h1>Browse Categories</h1>
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

