import React from 'react';
import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import WhyFlywheelsSection from '../components/WhyFlywheelsSection';
import ProgressSection from '../components/ProgressSection';
import TalentCTASection from '../components/TalentCTASection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisionSection />
      <WhyFlywheelsSection />
      <ProgressSection />
      <TalentCTASection />
    </div>
  );
};

export default HomePage;
