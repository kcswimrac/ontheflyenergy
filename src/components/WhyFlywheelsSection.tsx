import React from 'react';
import { Battery, Zap, RefreshCw, TrendingUp } from 'lucide-react';

const WhyFlywheelsSection: React.FC = () => {
  const points = [
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Lithium is energy",
      description: "Batteries excel at storing large amounts of energy over hours and days"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Flywheels are power",
      description: "Kinetic storage delivers instant, high-power response for seconds to minutes"
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Both are needed",
      description: "Data centers and industrial sites need both energy capacity and power responsiveness"
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Our wedge: 0–5 minutes",
      description: "The volatility window where batteries degrade rapidly but flywheels thrive—unlimited cycles, no capacity loss"
    }
  ];

  return (
    <section className="relative py-24 bg-midnight-black overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-steel-blue/20 to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            Why Flywheels
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Our wedge in the energy stack
          </p>
          <div className="w-24 h-1 bg-energy-green mx-auto mt-6"></div>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="group bg-steel-blue/20 border border-energy-green/20 rounded-lg p-8 hover:bg-steel-blue/30 hover:border-energy-green/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-energy-green group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-4">
                  {point.title}
                </h3>
                <p className="font-open-sans text-gray-300 text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-energy-green/10 border border-energy-green/30 rounded-lg p-8">
            <p className="font-open-sans text-xl text-industrial-white leading-relaxed">
              On The Fly Energy targets the 0–5 minute volatility window that batteries alone are
              poorly suited for—where cycle life, C-rates, and degradation make lithium uneconomical.
              This is about system-level positioning, not replacing batteries, but complementing them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFlywheelsSection;
