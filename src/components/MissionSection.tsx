import React from 'react';
import { Target, Zap, Clock, Recycle } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "No cycle fade — decades of resilience",
      description: "Built to last 20+ years without performance degradation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant response (<50ms UPS-grade)",
      description: "Millisecond-level response for critical power applications"
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "100% recyclable, built in America",
      description: "Sustainable manufacturing with domestic supply chain"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Grid-forming & inertia support",
      description: "Advanced grid stabilization and power quality enhancement"
    }
  ];

  return (
    <section className="py-24 bg-industrial-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-midnight-black mb-8">
            Our Mission
          </h2>
          <p className="font-open-sans text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Delivering robust, instantly dispatchable, and long-life energy storage 
            using high-speed flywheels.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-energy-green hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-energy-green/10 p-4 rounded-xl text-energy-green group-hover:bg-energy-green group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-midnight-black mb-3">
                    {value.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;