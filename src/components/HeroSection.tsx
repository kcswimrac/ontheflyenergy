import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg  from '../assets/logo.png';
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
        {/* Company Logo */}
        <div className="mb-12 animate-fade-in">
          {/* Replace this img src with your actual logo URL */}
          <div className="flex justify-center mb-6">
            <img 
              src={logoImg}
              alt="On The Fly Energy Logo" 
              className="h-16 md:h-20 w-auto invert brightness-0 hue-rotate-[90deg]"
            />
           
          </div>
          
          {/* Made in America Badge */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Replace this img src with your actual Made in America image URL */}
              {/* <img 
                src="https://via.placeholder.com/120x60/B22222/FFFFFF?text=MADE+IN+USA" 
                alt="Made in America" 
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              /> */}
           <div className="flex items-center gap-2 space-x-2">
              <div className="bg-energy-green p-2 rounded flex items-center justify-center">
                <Zap className="h-12 w-12 text-black" />
              </div>
              <h4 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl text-industrial-white leading-tight">
                On The Fly Energy
              </h4>
            </div>

              {/* Alternative: Custom Made in America badge if you prefer */}
              {/* <div className="bg-gradient-to-r from-blue-600 via-white to-red-600 p-0.5 rounded-lg">
                <div className="bg-midnight-black px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Star className="h-4 w-4 text-blue-400" />
                  <span className="font-montserrat font-bold text-xs text-white tracking-wider">
                    MADE IN AMERICA
                  </span>
                  <Star className="h-4 w-4 text-red-400" />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-industrial-white mb-6 leading-tight">
            AI is breaking the grid.
          </h2>
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-energy-green mb-8 leading-tight">
            Lithium alone cannot keep up.
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          We are building the kinetic layer for an electrified world.
          Modular flywheel power buffers that complement batteries, protect the grid,
          and handle the 0–5 minute volatility AI and industrial loads create.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
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