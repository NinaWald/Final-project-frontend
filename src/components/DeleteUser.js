import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from '../reducers/authReducer';
import { API_URL } from '../utils/urls';

const DeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const accessToken = useSelector((state) => state.auth.accessToken);
  // Get the accessToken from the Redux store

  const handleDeleteUser = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log(accessToken);
      const deleteResponse = await fetch(API_URL(`delete/${userId}`), {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Authorization: accessToken // Include the access token in the request headers
        }
      });

      const deleteData = await deleteResponse.json(); // Parse the JSON response

      if (deleteResponse.ok) {
        dispatch(deleteUser()); // Handle success response or perform any necessary actions
        console.log(deleteData.response); // Log the response message from the backend
      } else {
        setError(deleteData.response);
      }
    } catch (e) {
      console.error('Error:', e);
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteUser}>
        Delete User
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteUser;

