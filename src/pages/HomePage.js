import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import FlowerCarousel from '../components/FlowerCarousel';
import CardsList from '../components/CardsList';
import Hero from '../components/Hero';
import CategorySelection from '../components/CategorySelection';

// import Hero from './components/Hero'

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySelection />
      <FlowerCarousel />
      <CardsList />
      <RegistrationPage />
    </div>
  );
};