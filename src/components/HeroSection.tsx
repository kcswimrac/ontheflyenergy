import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from "../assets/home.png";

const HeroSection = () => {
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
            AI is breaking the grid.
          </h2>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl text-energy-green mb-8 leading-tight md:whitespace-nowrap">
            Lithium alone cannot keep up.
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          We are building the kinetic layer for an electrified world.
          Modular flywheel power buffers that complement batteries, protect the grid,
          and handle the 0–5 minute volatility AI and industrial loads create.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/join"
            className="group bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            Join the Mission
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-600" />
          </Link>
          <Link
            to="/investors"
            className="group border-2 border-industrial-white text-industrial-white hover:bg-industrial-white hover:text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            For Investors
          </Link>
        </div>

        {/* Key stats preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">0-5 min</div>
            <div className="font-open-sans text-gray-400 text-sm">Volatility Window</div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">20+ years</div>
            <div className="font-open-sans text-gray-400 text-sm">Design Lifespan</div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">100k+ cycles</div>
            <div className="font-open-sans text-gray-400 text-sm">No Degradation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;