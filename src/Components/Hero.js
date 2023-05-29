import React from 'react';
import heroVideo from '../Assets/hero.video.mp4';

const Hero = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
