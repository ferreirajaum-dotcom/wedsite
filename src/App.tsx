import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AntiSpreadsheetSection from './components/AntiSpreadsheetSection';
import PainPointsSection from './components/PainPointsSection';
import SolutionSection from './components/SolutionSection';
import ProductShowcase from './components/ProductShowcase';
import AIContractSection from './components/AIContractSection';
import GuestControlSection from './components/GuestControlSection';
import PricingSection from './components/PricingSection';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AntiSpreadsheetSection />
        <PainPointsSection />
        <SolutionSection />
        <ProductShowcase />
        <AIContractSection />
        <GuestControlSection />
        <PricingSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
