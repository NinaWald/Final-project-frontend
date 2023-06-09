import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSlice } from '../reducers/authReducer';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    dispatch(authSlice.actions.logoutUser()); // Dispatch the logoutUser action
    setShowPopup(true);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleLogout}>
        Logout
      </button>
      {showPopup && (
        <div className="popup">
          <p>You are now logged out!</p>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;

