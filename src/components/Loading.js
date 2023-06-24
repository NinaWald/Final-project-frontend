import React from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import myAnimation from '../assets/circle-loading.json'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
`;

const LoadingAnimation = styled(Lottie)`
  height: 300px;
  width: 300px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingAnimation
        animationData={myAnimation} // Replace animationData with your own Lottie animation data
        loop
        autoplay />
    </LoadingContainer>
  );
};

export default Loading;