import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import BackButton from '../components/BackButton';

const MemberPage = () => {
  return (
    <div>
      <h1>Welcome to the Member Page!</h1>
      <RegistrationPage />
      <BackButton />
    </div>
  );
};

export default MemberPage;
