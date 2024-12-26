import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RoleBasedFeatures from '../components/sections/RoleBasedFeatures';
import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <RoleBasedFeatures />
      <ContactCTA />
    </main>
  );
};

export default Home;