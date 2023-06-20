import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SideImage from '../assets/flower.delivery.jpg'

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
  color: #b59e5e;
  width: 200px;
`;

const SideComponentArticle = styled.p`
  margin-bottom: 20px;
  color: #b59e5e;
  width: 200px;
`;

const SideComponentImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SideHero1 = () => {
  return (
    <SideComponentContainer>
      <SideComponentTitle>Fast delivery</SideComponentTitle>
      <StyledLink to="/faq">
        <SideComponentImage src={SideImage} alt="Component 1" />
      </StyledLink>
      <SideComponentArticle>
        We deliver every day, order before 12.
      </SideComponentArticle>
    </SideComponentContainer>
  );
};

export default SideHero1;