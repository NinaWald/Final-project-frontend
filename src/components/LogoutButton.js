import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { authSlice } from '../reducers/authReducer';

const LogoutButton = ({ onLogout }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    onLogout();
    dispatch(authSlice.actions.logoutUser()); // Dispatch the logoutUser action

    console.log('logout');
  };

  return (
    <div>
      <Button variant="contained" onClick={handleLogout} style={{ backgroundColor: '#669999' }}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;

