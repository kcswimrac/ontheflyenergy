import React from 'react';
import { Zap, Server, Layers } from 'lucide-react';

const VisionSection: React.FC = () => {
  const visionPoints = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Grid that absorbs AI scale load volatility",
      description: "Power infrastructure that handles rapid changes in demand without strain"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Data centers with kinetic buffers",
      description: "AI racks protected by flywheel systems that handle sub-5-minute power events"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Energy like cloud compute",
      description: "Fast, modular, dispatchable capacity that scales to meet demand"
    }
  ];

  return (
    <section className="relative py-24 bg-steel-blue overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(245,245,245,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            If we succeed, the world looks like this
          </h2>
          <div className="w-24 h-1 bg-energy-green mx-auto mb-6"></div>
        </div>

        {/* Vision Points */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-midnight-black/40 backdrop-blur-sm border border-energy-green/20 rounded-lg p-8 hover:border-energy-green/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-energy-green/10 p-4 rounded-lg text-energy-green">
                  {point.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-xl md:text-2xl text-industrial-white mb-3">
                    {point.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center">
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A future where energy infrastructure matches the speed and scale of the technologies it powers.
            Where kinetic storage complements batteries to create a resilient, responsive grid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
