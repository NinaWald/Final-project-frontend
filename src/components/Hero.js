import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import heroVideo from '../assets/hero.video.mp4';
import mobileVideo from '../assets/hero.mobile.girl.mp4';
import logoImage from '../assets/florist.logo.jpg';

import SideHero2 from './SideHero2 ';
import SideHero1 from './SideHero1';

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
 

  .hero-video {
    width: 80%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 50px 0 50px ;
    position: relative;
    z-index: 1;

    @media (min-width: 668px) and (max-width: 1060px) {
      width: 100%;
      padding: 0;
  }
  }

 

  .mobile-video {
    display: none;
  }

  @media (max-width: 668px) {
    .hero-video {
      display: none;
    }

    .mobile-video {
    display: flex;
    width: 100%;
    margin-top: 70px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: 0;
    margin-right: 0;
    }
  }
`;

const LogoImage = styled.img`
  opacity: 0.7;
  border-radius: 50%;
  width: 300px;
  height: 300px;

  @media (min-width: 668px) and (max-width: 1060px) {
 
  width: 200px;
  height: 200px;
  }
`;

const CenteredText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const SideHeroContainer = styled.div`
  display: none;

  @media (min-width: 668px) {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 70%;
    top: 60%;
    transform: translateY(-50%);
    z-index: 2;
    gap: 10px;
  }

  @media (min-width: 668px) and (max-width: 1060px) {
      display: none;
 
    }
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
      <video className="hero-video" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="mobile-video" autoPlay loop muted>
        <source src={mobileVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CenteredText loggedIn={loggedIn}>
        <LogoImage src={logoImage} alt="Logo" />
      </CenteredText>
      <SideHeroContainer>
        <SideHero1 />
        <SideHero2 />
      </SideHeroContainer>
    </HeroContainer>
  );
};

export default Hero;

