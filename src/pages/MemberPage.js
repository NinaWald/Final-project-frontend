import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import BackButton from '../components/BackButton';
import DeleteUser from '../components/DeleteUser';

const MemberPage = () => {
  return (
    <div>
      <RegistrationPage />
      <BackButton />
      <DeleteUser />
    </div>
  );
};

export default MemberPage;
