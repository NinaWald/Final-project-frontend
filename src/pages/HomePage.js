import React from 'react';
import FlowerCarousel from '../components/FlowerCarousel';
import CardsList from '../components/CardsList';
import Hero from '../components/Hero';
import CategorySelection from '../components/CategorySelection';
import Footer from '../components/Footer';
import Dropdown from '../components/DropDown';
import GoToMember from '../components/GoToMember';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <FlowerCarousel />
      <CategorySelection />
      <CardsList />
      <GoToMember />
      <Dropdown />
      <Footer />
    </div>
  );
};