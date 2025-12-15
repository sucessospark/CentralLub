import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Process } from './components/Process';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Services />
        <Differentials />
        <Process />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;