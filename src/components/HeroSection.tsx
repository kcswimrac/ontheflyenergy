import React from 'react';
import { ArrowRight, Zap, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight-black overflow-hidden">
      {/* Subtle grid background */}
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
              src="https://via.placeholder.com/300x80/27AE60/FFFFFF?text=ON+THE+FLY+ENERGY" 
              alt="On The Fly Energy Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          
          {/* Made in America Badge */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Replace this img src with your actual Made in America image URL */}
              <img 
                src="https://via.placeholder.com/120x60/B22222/FFFFFF?text=MADE+IN+USA" 
                alt="Made in America" 
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
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
          <h2 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-industrial-white mb-6 leading-tight">
            POWER THAT
          </h2>
          <h2 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-energy-green mb-8 leading-tight">
            OUTLASTS
          </h2>
        </div>

        {/* Subtitle */}
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Revolutionary flywheel energy storage delivering decades of resilience, 
          instant response, and American-built reliability for critical applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button className="group bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
            Learn More
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="group border-2 border-industrial-white text-industrial-white hover:bg-industrial-white hover:text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Request Info
          </button>
        </div>

        {/* Key stats preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">500+</div>
            <div className="font-open-sans text-gray-400 text-sm">Units Deployed</div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">99.99%</div>
            <div className="font-open-sans text-gray-400 text-sm">Uptime Delivered</div>
          </div>
          <div className="text-center">
            <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">20+</div>
            <div className="font-open-sans text-gray-400 text-sm">Year Lifespan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;