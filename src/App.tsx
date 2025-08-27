import React from 'react';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ProductsSection from './components/ProductsSection';
import ApplicationsSection from './components/ApplicationsSection';
import ManifestoSection from './components/ManifestoSection';
import MetricsSection from './components/MetricsSection';
import CultureSection from './components/CultureSection';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ProductsSection />
      <ApplicationsSection />
      <ManifestoSection />
      <MetricsSection />
      <CultureSection />
      <CTASection />
    </div>
  );
}

export default App;