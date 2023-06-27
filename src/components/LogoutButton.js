import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { authSlice } from '../reducers/authReducer';

const LogoutButton = ({ onLogout }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    onLogout();
    dispatch(authSlice.actions.logoutUser()); // Dispatch the logoutUser action
    setShowPopup(true);
    console.log('logout');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleLogout} style={{ backgroundColor: '#669999' }}>
        Logout
      </Button>
      <Snackbar
        open={showPopup}
        autoHideDuration={5000}
        onClose={handleClosePopup}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
           You are now logged out!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LogoutButton;

