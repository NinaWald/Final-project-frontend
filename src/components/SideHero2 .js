import React from 'react';
import styled from 'styled-components';
import SideImage from '../assets/male-florist.jpg'

const SideComponentContainer = styled.div`
  width: 24%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border: 1px solid grey;
  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 668px) {
    display: none;
  }
`;

const SideComponentTitle = styled.h2`
  margin-bottom: 10px;
  color: #918154;
  width: 200px;
`;

const SideComponentArticle = styled.p`
  margin-bottom: 20px;
  color: #918154;
  width: 200px;
`;

const SideComponentImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const SideHero2 = () => {
  return (
    <SideComponentContainer>
      <SideComponentTitle>Fresh flowers from the market</SideComponentTitle>
      <SideComponentImage src={SideImage} alt="Component 1" />
      <SideComponentArticle>
        We handpick every flower from the market.
      </SideComponentArticle>
    </SideComponentContainer>
  );
};

export default SideHero2;