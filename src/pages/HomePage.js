import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import FlowerCarousel from '../components/FlowerCarousel';
import CardsList from '../components/CardsList';
import Hero from '../components/Hero';
import CategorySelection from '../components/CategorySelection';
import Footer from '../components/Footer';
import Dropdown from '../components/DropDown';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySelection />
      <FlowerCarousel />
      <CardsList />
      <RegistrationPage />
      <Dropdown />
      <Footer />
    </div>
  );
};