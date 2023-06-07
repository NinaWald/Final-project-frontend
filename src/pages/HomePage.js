import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import FlowerCarousel from '../components/FlowerCarousel';
import CardsList from '../components/CardsList';

// import Hero from './components/Hero'

export const HomePage = () => {
  return (
    <div>
      <FlowerCarousel />
      <CardsList />
      <RegistrationPage />
    </div>
  );
};