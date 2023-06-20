import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    margin-top: 100px;
    padding: 50px;
`

const AboutPage = () => {
  return (
    <AboutContainer>
      <div>
        <h2>About Us</h2>
        <p>Welcome to our webshop! We are dedicated to </p>
        <p>providing high-quality products and excellent customer service.</p>
        <p>Learn more about our company and our mission to serve our customers.</p>
      </div>
    </AboutContainer>
  );
};

export default AboutPage;