import React from 'react';
import styled from 'styled-components'
import DropDown from '../components/DropDown';
import BackButton from '../components/BackButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqPage = () => {
  return (
    <Container>
      <DropDown />
      <BackButton />
    </Container>
  )
}