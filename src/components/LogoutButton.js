import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { authSlice } from '../reducers/authReducer';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    dispatch(authSlice.actions.logoutUser()); // Dispatch the logoutUser action
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
      <Snackbar open={showPopup} autoHideDuration={3000} onClose={handleClosePopup} message="You are now logged out!" />
    </div>
  );
};

export default LogoutButton;

