import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button variant="contained" onClick={handleGoBack} style={{ backgroundColor: '#333333' }}>
            Go Back
    </Button>
  );
};

export default BackButton;

/*
In this updated code, we import the useNavigate hook from react-router-dom.
The navigate function is obtained from the useNavigate hook,
which we can use to navigate back by calling navigate(-1).
*/