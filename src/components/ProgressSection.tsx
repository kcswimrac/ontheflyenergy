import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const ProgressSection: React.FC = () => {
  const milestones = [
    {
      completed: false,
      title: "Foundations: Core Technology Integration",
      description: "First integrated kinetic storage module combining high-speed rotor with custom 5 kW grid-tie inverter. Rotor-Seed V1/V2 prototypes, inverter demonstration with sub-second response, hybrid operation with lithium, early telemetry through Factory-OS, federal innovation program submissions.",
      date: "Q4 2025"
    },
    {
      completed: false,
      title: "From Prototype to Pilot-Ready Systems",
      description: "Engineering discipline phase: Rotor-Seed V3 with improved bearings and containment validation, Inverter V2 with enhanced control loops, first hybrid kinetic-plus-lithium demo, failure mode modeling, defined architecture for Rotor-Pod (20-30 kW class).",
      date: "Q1–Q2 2026"
    },
    {
      completed: false,
      title: "Pilot Site Engineering + LOIs",
      description: "Lock final Rotor-Pod design, develop BOM and installation workflow, initiate UL 1741-SB and IEEE 1547 certification, sign pilot commitments with early-adopter customers in AI and industrial sectors, expand Factory-OS monitoring for fleet management.",
      date: "Q3 2026"
    },
    {
      completed: false,
      title: "Pilot Deployment #1",
      description: "Deploy first pilot system to live customer environment. Demonstrate ride-through, peak-shaving, and fast power-balancing. Characterize efficiency and dispatch speed. Validate integration with existing systems. Train ML models on rotor health. Publish performance summaries.",
      date: "Q4 2026"
    },
    {
      completed: false,
      title: "Scaling Toward Modular Energy Infrastructure",
      description: "50-250 kW Rotor-Pod variants, containerized Rotor-Plant systems, full API integration for data center orchestration and grid services, certification and manufacturability, high-volume composite rotor production, industrial and utility partnerships.",
      date: "2027+"
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
