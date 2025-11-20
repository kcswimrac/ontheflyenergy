import React, { useState } from 'react';
import { Zap, Cpu, Cog, Factory, Settings, Send, Users } from 'lucide-react';

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const disciplines = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Power Electronics & Inverter Design",
      description: "Grid-tied inverters, high-frequency switching, power conversion at kW to MW scale"
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Motor Control & Embedded Firmware",
      description: "Real-time control systems, motor drive algorithms, embedded C/C++ on industrial hardware"
    },
    {
      icon: <Cog className="h-10 w-10" />,
      title: "Mechanical & Rotor Design",
      description: "High-speed rotating machinery, FEA/CFD, precision bearings and dynamics, structural integrity"
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Composite Manufacturing & Testing",
      description: "Carbon fiber layup, autoclave processing, composite tooling, mechanical testing and validation"
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Controls, SCADA & Manufacturing Systems",
      description: "Factory automation, SCADA integration, production monitoring, data acquisition at scale"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Systems Integration & Field Engineering",
      description: "Site commissioning, customer deployments, grid interconnection, troubleshooting in the field"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '71410425-89f6-4094-b387-361c001bdad0',
          subject: 'Talent Inquiry from On The Fly Energy Website',
          from_name: formData.name,
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', background: '', interest: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-steel-blue to-midnight-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-industrial-white mb-6">
            Join the Mission
          </h1>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are assembling a founding team to build the world's most responsive energy storage platform
          </p>
          <div className="w-24 h-1 bg-energy-green mx-auto mt-8"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
            <p>
              This is an opportunity to build something that matters. Not another SaaS app or
              consumer gadget—real hardware solving a real, systemic problem. The grid is breaking
              under AI and electrification. We are building the kinetic layer to fix it.
            </p>
            <p>
              We need engineers and builders who thrive on hard problems. People who want to work
              at the intersection of mechanical engineering, power electronics, controls, and
              manufacturing. People who care about building things that last decades and operate
              in critical infrastructure.
            </p>
            <p>
              <strong className="text-industrial-white">This is early stage.</strong> You will have
              enormous impact and autonomy. You will help define the architecture, make critical
              technical decisions, and shape the culture of the company. If you want a stable 9-to-5
              job at a mature company, this is not it. If you want to build something from the ground
              up, keep reading.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-20 bg-steel-blue/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-4 text-center">
            Disciplines We Need
          </h2>
          <p className="font-open-sans text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            These are likely future roles as we scale the team. Not all are open now, but we want
            to hear from people with expertise in these areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplines.map((discipline, index) => (
              <div
                key={index}
                className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-6 hover:border-energy-green/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 text-energy-green">
                    {discipline.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-4">
                    {discipline.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 text-sm leading-relaxed">
                    {discipline.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-4xl text-industrial-white mb-12 text-center">
            What We Value
          </h2>

          <div className="space-y-6">
            <div className="bg-steel-blue/20 border-l-4 border-energy-green rounded-lg p-6">
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                Builders Over Talkers
              </h3>
              <p className="font-open-sans text-gray-300">
                We hire people who ship. Experience building real hardware, writing production code,
                or operating manufacturing systems is worth more than credentials.
              </p>
            </div>

            <div className="bg-steel-blue/20 border-l-4 border-energy-green rounded-lg p-6">
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                Extreme Ownership
              </h3>
              <p className="font-open-sans text-gray-300">
                You own your work end-to-end. No passing the buck. If something breaks, you fix it.
                If a problem needs solving, you solve it.
              </p>
            </div>

            <div className="bg-steel-blue/20 border-l-4 border-energy-green rounded-lg p-6">
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                Intellectual Honesty
              </h3>
              <p className="font-open-sans text-gray-300">
                We value clear thinking and honest communication. No BS, no hype, no pretending
                things are working when they are not. The physics does not care about your story.
              </p>
            </div>

            <div className="bg-steel-blue/20 border-l-4 border-energy-green rounded-lg p-6">
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                Long-Term Thinking
              </h3>
              <p className="font-open-sans text-gray-300">
                We are building infrastructure that will operate for decades. We care about quality,
                durability, and doing things right—not just fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-steel-blue/10 to-midnight-black">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-4">
              Tell Us How You Want to Contribute
            </h2>
            <p className="font-open-sans text-lg text-gray-300">
              Interested in joining? Fill out the form below and tell us about your background.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="background" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Background / Expertise *
                </label>
                <input
                  type="text"
                  id="background"
                  name="background"
                  required
                  placeholder="e.g., Power electronics engineer, 5 years at Tesla"
                  value={formData.background}
                  onChange={handleChange}
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  What do you want to work on? *
                </label>
                <input
                  type="text"
                  id="interest"
                  name="interest"
                  required
                  placeholder="e.g., Inverter design, rotor dynamics, manufacturing systems"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your experience, projects you've built, why you're interested..."
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-energy-green hover:bg-green-500 disabled:bg-gray-600 text-midnight-black font-montserrat font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Sending...' : 'Submit Application'}
                <Send className="h-5 w-5" />
              </button>

              {submitStatus === 'success' && (
                <div className="bg-energy-green/20 border border-energy-green text-industrial-white rounded-lg p-4 text-center">
                  Thank you! We'll review your application and be in touch.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-industrial-white rounded-lg p-4 text-center">
                  Something went wrong. Please try again or email us directly at careers@ontheflyenergy.com
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
