import React from 'react';
import CardsList from './Components/CardsList';
import Hero from './Components/Hero'

export const App = () => {
  return (
    <div>
      <h1>My Webshop</h1>
      <Hero />
      <CardsList />
    </div>
  );
};
