import React from 'react';
import Cart from '../components/Cart';
import FlowerCarousel from '../components/FlowerCarousel';
import CardsList from '../components/CardsList';

// import Hero from './components/Hero'

export const HomePage = () => {
  return (
    <div>
      <Cart />
      <FlowerCarousel />
      <CardsList />
    </div>
  );
};