import React from 'react';
import { Users, Target, MessageCircle, Star } from 'lucide-react';

const CultureSection = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Extreme Ownership",
      description: "Every team member takes full responsibility for outcomes, driving accountability and excellence in every decision.",
      principle: "Own the mission, own the results"
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Crucial Conversations",
      description: "We foster honest, direct communication that addresses the hard truths and drives breakthrough solutions.",
      principle: "Truth over comfort, progress over politics"
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Supercommunicators",
      description: "Building bridges between technical complexity and human understanding to create lasting partnerships.",
      principle: "Connect with purpose, communicate with impact"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Employee Ownership",
      description: "Every team member has equity in our success, aligning individual growth with company mission.",
      principle: "Your success is our success"
    }
  ];

  return (
    <section className="py-24 bg-midnight-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            Open-Book Culture
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparency isn't just a value—it's how we operate. From financial metrics 
            to strategic decisions, we believe in radical openness and shared ownership.
          </p>
          <div className="bg-energy-green/20 border border-energy-green/40 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="font-montserrat font-semibold text-energy-green text-lg">
              "A company is only as strong as its people, and people perform best when they 
              understand the why behind every decision."
            </p>
            <p className="font-open-sans text-gray-300 text-sm mt-2">
              — Leadership Philosophy
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-energy-green hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-energy-green/20 p-4 rounded-xl text-energy-green group-hover:bg-energy-green group-hover:text-midnight-black group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                    {value.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="bg-energy-green/10 border-l-4 border-energy-green pl-4 py-2">
                    <p className="font-roboto-mono text-energy-green text-sm font-medium">
                      {value.principle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Commitment */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-energy-green mb-6">
            Transparency in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-montserrat font-semibold text-industrial-white mb-2">
                Financial Metrics
              </h4>
              <p className="font-open-sans text-gray-300 text-sm">
                Monthly P&L shared with all team members
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-industrial-white mb-2">
                Strategic Planning
              </h4>
              <p className="font-open-sans text-gray-300 text-sm">
                Quarterly reviews include entire organization
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-industrial-white mb-2">
                Decision Making
              </h4>
              <p className="font-open-sans text-gray-300 text-sm">
                Open forums for input on company direction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;