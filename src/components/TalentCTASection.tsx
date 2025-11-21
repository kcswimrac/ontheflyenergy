import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Cog, Factory, Settings } from 'lucide-react';

const TalentCTASection: React.FC = () => {
  const disciplines = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Power Electronics & Inverter Design"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Motor Control & Embedded Firmware"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Mechanical & Rotor Design"
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Composite Manufacturing & Testing"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Controls, SCADA & Manufacturing Systems"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-steel-blue to-midnight-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            Join the Mission
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are assembling a founding team to build the world's most responsive
            energy storage platform.
          </p>
          <div className="w-24 h-1 bg-energy-green mx-auto mt-6"></div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {disciplines.map((discipline, index) => (
            <div
              key={index}
              className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-6 hover:border-energy-green/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 text-energy-green">
                  {discipline.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-base text-industrial-white">
                  {discipline.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-open-sans text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            These are the disciplines we need to solve the hardest problems in kinetic energy storage.
            If you want to build something that matters, we want to hear from you.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-3 bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Tell Us How You Want to Contribute
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TalentCTASection;
