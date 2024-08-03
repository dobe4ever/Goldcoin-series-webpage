import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import InvestmentPotential from './components/InvestmentPotential';
import UnboxingExperience from './components/UnboxingExperience';
import HowToPurchase from './components/HowToPurchase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ProductDetails />
      <InvestmentPotential />
      <UnboxingExperience />
      <HowToPurchase />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;