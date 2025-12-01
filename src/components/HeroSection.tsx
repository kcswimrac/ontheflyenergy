import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from "../assets/home.png";
import { loadSiteContent } from '../utils/siteContentManager';

interface HeroContent {
  headline1: string;
  headline2: string;
  subtitle: string;
  ctaButton1Text: string;
  ctaButton1Link: string;
  ctaButton2Text: string;
  ctaButton2Link: string;
  stats: Array<{ value: string; label: string }>;
}

const HeroSection = () => {
  const [content, setContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await loadSiteContent('home');
        setContent(data.hero);
      } catch (error) {
        console.error('Error loading hero content:', error);
        // Fallback to default content if loading fails
        setContent({
          headline1: "AI is breaking the grid.",
          headline2: "Lithium alone cannot keep up.",
          subtitle: "We are building the kinetic layer for an electrified world. Modular flywheel power buffers that complement batteries, protect the grid, and handle the 0–5 minute volatility AI and industrial loads create.",
          ctaButton1Text: "Join the Mission",
          ctaButton1Link: "/join",
          ctaButton2Text: "For Investors",
          ctaButton2Link: "/investors",
          stats: [
            { value: "0-5 min", label: "Volatility Window" },
            { value: "20+ years", label: "Design Lifespan" },
            { value: "100k+ cycles", label: "No Degradation" }
          ]
        });
      }
    };
    loadContent();
  }, []);

  if (!content) {
    return null; // or a loading spinner
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight-black overflow-hidden">
  {/* Background Hero Image */}
  <img
    src={heroImg}
    alt="Hero background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Subtle grid overlay */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0 bg-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(245,245,245,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    />
  </div>
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main headline */}
        <div className="mb-8 animate-slide-up">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-industrial-white mb-6 leading-tight">
            {content.headline1}
          </h2>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl text-energy-green mb-8 leading-tight md:whitespace-nowrap">
            {content.headline2}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {content.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to={content.ctaButton1Link}
            className="group bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            {content.ctaButton1Text}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-600" />
          </Link>
          <Link
            to={content.ctaButton2Link}
            className="group border-2 border-industrial-white text-industrial-white hover:bg-industrial-white hover:text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {content.ctaButton2Text}
          </Link>
        </div>

        {/* Key stats preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">{stat.value}</div>
              <div className="font-open-sans text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;