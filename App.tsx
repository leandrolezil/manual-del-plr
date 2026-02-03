import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ProductStack from './components/ProductStack';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import GuaranteeFAQ from './components/GuaranteeFAQ';
import FooterCTA from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black">
      <Hero />
      <Problem />
      <Solution />
      <ProductStack />
      <Bonuses />
      <Testimonials />
      <GuaranteeFAQ />
      <FooterCTA />
    </main>
  );
};

export default App;