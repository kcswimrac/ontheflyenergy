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
      description: "From casting to precision machining to production systems - we understand how things get made"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Systems Experience",
      description: "Direct work in EVs, industrial power, and grid-edge applications - we know the problem space"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Solving Real Problems",
      description: "Not building technology for its own sake - focused on what the grid and industry actually need"
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
              Lithium batteries are critical - but they are not the complete answer. They excel at
              energy storage over hours and days, but struggle with high cycle counts and rapid
              power fluctuations. The 0-5 minute volatility window - where flywheels thrive - is where
              batteries degrade fastest and economics break down.
            </p>
            <p>
              <strong className="text-industrial-white">We saw this gap firsthand.</strong> Through
              years building automation systems, manufacturing equipment, and working in energy and
              EV sectors, we experienced the constraints of existing solutions. The grid needs a
              kinetic layer - fast, durable, modular power storage that complements batteries and
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

      {/* Founder Bio */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-12 text-center">
            Founder
          </h2>

          <div className="bg-steel-blue/20 border border-energy-green/30 rounded-lg p-10">
            <h3 className="font-montserrat font-bold text-2xl text-energy-green mb-2">
              Kris Canete
            </h3>
            <p className="font-open-sans text-gray-400 mb-8">
              Founder, On The Fly Energy
            </p>

            <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
              <p>
                Kris built his career inside environments where hardware has to work the first time and
                every time. He started in law enforcement, where operating under pressure shaped his bias
                for systems that are practical, robust, and built for failure modes instead of ideal
                conditions. He carried that mindset into engineering, moving through roles in automation,
                EV manufacturing, composite casting, robotics, and industrial energy systems.
              </p>

              <p>
                He's worked in the places where precision and reliability decide whether production runs
                or stalls: Tesla, Rangeview, Gillig, and other fast-paced industrial teams. His work has
                ranged from designing and deploying six-axis automation cells, to building composite molding
                processes for aerospace castings, to leading investigations into high-stakes hardware failures,
                to running hands-on machine shop operations out of a garage when that was the fastest way to
                make progress. He's managed engineers, run quality programs, stood up equipment from scratch,
                and delivered systems that had to survive real-world conditions, not demo-day theatrics.
              </p>

              <p>
                Across all of it, the constant has been an ability to take an idea, build the prototype,
                test it to destruction, fix it, and ship the version that actually works.
              </p>

              <p>
                On The Fly Energy came out of that pattern. After years inside factories, grid-adjacent
                operations, and EV manufacturing, Kris saw the structural gap forming under the surge of
                AI and industrial electrification: lithium can store energy, but it can't handle the power
                volatility. A fast, modular kinetic buffer has been missing from the grid stack. So he
                started building it.
              </p>

              <p>
                He's now focused on assembling a team capable of creating that new layer of grid physics - engineers
                who care about rigor, iteration, and solving the parts of the energy problem that aren't glamorous
                but matter far more than marketing cycles. For investors, the appeal is straightforward: this is a
                founder who has spent his entire career pushing hard tech from zero to one under real constraints,
                and who knows how to turn a garage prototype into a functional, scalable system.
              </p>
            </div>
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
            This is not just a talking point - it is a strategic and operational imperative.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
