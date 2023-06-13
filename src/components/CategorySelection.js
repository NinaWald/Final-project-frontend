import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Classic from '../assets/flower category classic1.png';
import Romantic from '../assets/flower category romantic1.png';
import Modern from '../assets/flower category modern1.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    flex-direction: row;
  }
`;

const Header = styled.h2`
  margin-bottom: 10px;

  @media (max-width: 668px) {
   display: none;
  }
`;

const Image = styled.img`
  cursor: pointer;
  width: 258px;
  height: 256px;
  border-radius: 130px;
  border: 5px solid #669999;

  @media (max-width: 668px) {
    display: flex;
    align-items: center;
    width: 70%;
    height: auto;
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
      <Header>Browse Categories</Header>
      <div>
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
      </div>
    </Container>
  );
};

export default CategorySelection;

