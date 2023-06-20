import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: rgb(63, 65, 67);
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  
`;

const GoToContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

const GoToMemberWrapper = styled.div`
    border: 1px solid #669999;
    border-radius: 4px;
    padding: 25px;
    margin: 35px;
    background-color: #e6e6e6;
    text-align: center;
    max-width: 400px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0.2, 0.9);
       
    &:hover {
    background-color: #b4cbcb;
    color: #000000;
    transform: scale(1.05);
  }

`;

const GoToMember = () => {
  return (
    <GoToContainer>
      <GoToMemberWrapper>
        <StyledLink to="/member">Become a member today, get 10% off! Click here to get to the member page</StyledLink>
      </GoToMemberWrapper>
    </GoToContainer>
  );
};

export default GoToMember;
