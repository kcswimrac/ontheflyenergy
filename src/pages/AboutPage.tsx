import React from 'react';
import { Wrench, Zap, Target, Factory } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Built Real Hardware",
      description: "Automation systems, manufacturing equipment, and energy infrastructure under real-world constraints"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing DNA",
      description: "From casting to precision machining to production systems—we understand how things get made"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Systems Experience",
      description: "Direct work in EVs, industrial power, and grid-edge applications—we know the problem space"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Solving Real Problems",
      description: "Not building technology for its own sake—focused on what the grid and industry actually need"
    }
  ];

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-steel-blue to-midnight-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-industrial-white mb-6">
            About Us
          </h1>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are building the kinetic layer for an electrified world
          </p>
          <div className="w-24 h-1 bg-energy-green mx-auto mt-8"></div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-8 text-center">
            Why We Exist
          </h2>
          <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
            <p>
              The grid is breaking under the weight of AI and electrification. Data centers are
              consuming unprecedented amounts of power, with load profiles that swing wildly in
              milliseconds. Industrial facilities need resilience and responsiveness that legacy
              infrastructure cannot deliver.
            </p>
            <p>
              Lithium batteries are critical—but they are not the complete answer. They excel at
              energy storage over hours and days, but struggle with high cycle counts and rapid
              power fluctuations. The 0–5 minute volatility window—where flywheels thrive—is where
              batteries degrade fastest and economics break down.
            </p>
            <p>
              <strong className="text-industrial-white">We saw this gap firsthand.</strong> Through
              years building automation systems, manufacturing equipment, and working in energy and
              EV sectors, we experienced the constraints of existing solutions. The grid needs a
              kinetic layer—fast, durable, modular power storage that complements batteries and
              absorbs the chaos.
            </p>
            <p>
              On The Fly Energy exists to build that layer. We are not chasing hype. We are solving
              a real, systemic problem with technology that works.
            </p>
          </div>
        </div>
      </section>

      {/* Team Background */}
      <section className="py-20 bg-steel-blue/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-12 text-center">
            What We Bring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-8 hover:border-energy-green/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 text-energy-green">
                    {value.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-4">
                    {value.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Placeholder */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-8 text-center">
            The Founding Team
          </h2>

          <div className="bg-steel-blue/20 border border-energy-green/30 rounded-lg p-8">
            <p className="font-open-sans text-lg text-gray-300 leading-relaxed mb-6">
              Our founding team brings deep, hands-on experience across automation, manufacturing,
              casting, EVs, and energy systems. We have built physical products under real constraints—navigating
              supply chains, designing for manufacturability, and delivering systems that work in
              the field, not just on paper.
            </p>
            <p className="font-open-sans text-lg text-gray-300 leading-relaxed mb-6">
              This background matters. Flywheel energy storage is not a software problem. It requires
              precision mechanical engineering, advanced composite manufacturing, sophisticated power
              electronics, and control systems that operate at grid-scale reliability. We have built
              these types of systems before.
            </p>
            <p className="font-open-sans text-lg text-gray-300 leading-relaxed">
              We are not academics trying to commercialize a lab concept. We are engineers and builders
              who have shipped hardware, operated manufacturing facilities, and solved problems in the
              real world. That experience is the foundation of On The Fly Energy.
            </p>
          </div>

          {/* TODO Placeholder */}
          <div className="mt-12 bg-energy-green/10 border-l-4 border-energy-green rounded-lg p-6">
            <p className="font-open-sans text-gray-300">
              <strong className="text-energy-green">TODO:</strong> Add individual founder bios with
              specific backgrounds, LinkedIn links, and credibility markers (companies worked at,
              systems built, relevant patents/publications if any).
            </p>
          </div>
        </div>
      </section>

      {/* American Manufacturing */}
      <section className="py-20 bg-gradient-to-b from-steel-blue/10 to-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-6">
            Built in America
          </h2>
          <p className="font-open-sans text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are committed to American manufacturing. Flywheel systems for critical infrastructure
            should be built domestically, with supply chains we control and quality we can guarantee.
            This is not just a talking point—it is a strategic and operational imperative.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
