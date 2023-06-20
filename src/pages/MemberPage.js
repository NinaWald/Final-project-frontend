import React from 'react';
import styled from 'styled-components';
import RegistrationPage from '../components/RegistrationPage';
import BackButton from '../components/BackButton';

const MemberPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const BackButtonWrapper = styled.div`
  margin-bottom: 150px;
`;

const MemberPage = () => {
  return (
    <MemberPageContainer>
      <RegistrationPage />
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
    </MemberPageContainer>
  );
};

export default MemberPage;

