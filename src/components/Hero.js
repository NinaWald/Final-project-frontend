import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import heroVideo from '../assets/hero.video.mp4';

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
`;

const HeroVideo = styled.video`
  width: 100%;
`;

const CenteredText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 50px;
  opacity: ${(props) => (props.loggedIn ? 1 : 0)};
  transition: opacity 0.5s;
  white-space: pre-line;
  text-align: center;
`;

const Hero = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Simulating user login after 5 seconds
    const timer = setTimeout(() => {
      setLoggedIn(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>
      <HeroVideo autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </HeroVideo>
      <CenteredText loggedIn={loggedIn}>
        De la Fleur {'\n'}
        FlowerShop
      </CenteredText>
    </HeroContainer>
  );
};

export default Hero;
