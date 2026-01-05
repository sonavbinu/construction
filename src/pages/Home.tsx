import React from 'react';
import WhatsApp from '../Components/WhatsApp';
import Navigation from '../Components/Navigation';
import Hero from '../Components/Hero';
import StatisticsSection from '../Components/StatisticsSection';

const Home = () => {
  return (
    <div>
      <WhatsApp />
      <Navigation />
      <Hero />
      <StatisticsSection />
    </div>
  );
};

export default Home;
