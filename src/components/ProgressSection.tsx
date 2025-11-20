import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const ProgressSection: React.FC = () => {
  const milestones = [
    {
      completed: true,
      title: "Rotor-Seed Prototype Design",
      description: "Initial 10kW prototype concept with composite rotor and magnetic bearing configuration",
      date: "Q4 2024"
    },
    {
      completed: true,
      title: "Containment & Burst Analysis",
      description: "FEA modeling for rotor containment structures and burst protection systems",
      date: "Q1 2025"
    },
    {
      completed: true,
      title: "Inverter Design Exploration",
      description: "Power electronics architecture for grid integration and sub-second response",
      date: "Q1 2025"
    },
    {
      completed: false,
      title: "Pilot Site Conversations",
      description: "Engaging with data center operators and industrial partners for early pilot deployments",
      date: "In Progress"
    },
    {
      completed: false,
      title: "Manufacturing Partnership Development",
      description: "Building relationships with composite manufacturers and precision machining vendors",
      date: "Q2 2025"
    },
    {
      completed: false,
      title: "First Working Prototype",
      description: "Assembly and testing of first integrated flywheel system with control electronics",
      date: "Target Q3 2025"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-midnight-black to-steel-blue/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            Where We Are Now
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Honest progress from serious adults doing hard things
          </p>
          <div className="w-24 h-1 bg-energy-green mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-energy-green/30 transform md:-translate-x-1/2"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  {milestone.completed ? (
                    <CheckCircle2 className="h-8 w-8 text-energy-green fill-energy-green/20" />
                  ) : (
                    <Circle className="h-8 w-8 text-gray-500" />
                  )}
                </div>

                {/* Spacer for mobile */}
                <div className="w-12 md:hidden"></div>

                {/* Content card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className={`bg-steel-blue/40 border ${
                      milestone.completed ? 'border-energy-green/40' : 'border-gray-600/40'
                    } rounded-lg p-6 hover:bg-steel-blue/60 transition-all duration-300 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-roboto-mono text-sm ${
                        milestone.completed ? 'text-energy-green' : 'text-gray-400'
                      }`}>
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-open-sans text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="font-open-sans text-lg text-gray-400 italic max-w-2xl mx-auto">
            We are not overclaiming. This is early-stage hard tech, and we are methodically
            de-risking the path to a working, deployable product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
