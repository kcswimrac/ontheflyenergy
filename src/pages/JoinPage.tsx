import React, { useState } from 'react';
import { Code, Wrench, Zap, Send, Users, Target } from 'lucide-react';

const JoinPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [result, setResult] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '71410425-89f6-4094-b387-361c001bdad0');
    formData.append('subject', 'Talent Application from On The Fly Energy Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Application Submitted Successfully');
        setSubmitStatus('success');
        event.currentTarget.reset();
      } else {
        console.log('Error', data);
        setResult(data.message || 'Submission failed. Please check all fields and try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setResult('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-steel-blue to-midnight-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-industrial-white mb-8 leading-tight">
            We hire people who build first and talk second.
          </h1>
          <p className="font-open-sans text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Proof of work. Not resumes.
          </p>
          <div className="w-24 h-1 bg-energy-green mt-8"></div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-8">
            How We Screen
          </h2>

          <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
            <p>
              We screen candidates on evidence of real work: code repositories, CAD models, hardware
              prototypes, simulations, project writeups, build logs, test data. Resumes are collected
              later in the interview process for administrative purposes only.
            </p>
            <p>
              We expect people to move quickly, think clearly, and build real things. AI and automation
              are welcome. Efficiency and execution matter more than tradition. If you used Claude or
              GPT to accelerate your work, good. What matters is the output and whether it works.
            </p>
            <p>
              Submit your portfolio or project link. That is how we screen. If you cannot point to
              something you built, we have nothing to discuss.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-steel-blue/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-12 text-center">
            What Proof of Work Looks Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-8">
              <div className="mb-6 text-energy-green">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-4">
                Digital Artifacts
              </h3>
              <p className="font-open-sans text-gray-300 leading-relaxed">
                GitHub repos, CAD assemblies, simulations (FEA, CFD, SPICE), PCB layouts,
                control algorithms, firmware.
              </p>
            </div>

            <div className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-8">
              <div className="mb-6 text-energy-green">
                <Wrench className="h-10 w-10" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-4">
                Physical Builds
              </h3>
              <p className="font-open-sans text-gray-300 leading-relaxed">
                Mechanical prototypes, test rigs, fabricated parts, power electronics hardware,
                manufacturing fixtures, experimental setups.
              </p>
            </div>

            <div className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-8">
              <div className="mb-6 text-energy-green">
                <Zap className="h-10 w-10" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-4">
                Technical Documentation
              </h3>
              <p className="font-open-sans text-gray-300 leading-relaxed">
                Portfolio sites, build logs, technical writeups, experiment documentation,
                video walkthroughs, analysis reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The On The Fly Way */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 text-energy-green">
              <Users className="h-10 w-10" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-6">
                The On The Fly Way
              </h2>
              <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
                <p>
                  We think in systems and design things to last. We operate like a modern engineering
                  company where AI and new tools are welcome. We care about clarity, craftsmanship,
                  autonomy, and long-term impact.
                </p>
                <p>
                  We build what matters, leave things better than we found them, and share what we learn.
                </p>
                <p className="text-gray-400 italic">
                  The full culture playbook is shared during the hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Buy-In Equity Program */}
      <section className="py-20 bg-steel-blue/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 text-energy-green">
              <Target className="h-10 w-10" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-6">
                Partner Buy-In Equity Program
              </h2>
              <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
                <p>
                  Full-time employees are required to invest directly into the company and become
                  real owners. This is not a standard stock option plan. It is a partner-level program
                  for people committed to building the company.
                </p>
                <p>
                  The intent is simple: we build owners, not spectators.
                </p>
                <p className="text-gray-400 italic">
                  Eligibility and structure are explained during the hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-4 text-center">
            Disciplines We Need
          </h2>
          <p className="font-open-sans text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We hire when we find exceptional people, not when we have headcount budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Power Electronics & Inverter Design
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Grid-tied inverters, high-frequency switching, magnetics design, thermal management,
                EMI/EMC, control loops for power conversion.
              </p>
            </div>

            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Motor Control & Embedded Firmware
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Real-time control on bare metal or RTOS, motor drive algorithms (FOC, SVPWM),
                sensor integration, CAN/Modbus communication.
              </p>
            </div>

            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Mechanical & Rotor Design
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                High-speed rotating machinery, FEA/CFD, precision bearings (magnetic, ceramic),
                rotor dynamics, structural integrity, vibration analysis.
              </p>
            </div>

            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Composite Manufacturing & Testing
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Carbon fiber layup, autoclave processing, composite tooling, mechanical testing
                (tensile, burst, fatigue), material characterization.
              </p>
            </div>

            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Controls, SCADA & Manufacturing Systems
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Factory automation, SCADA integration, production monitoring, data acquisition,
                PLC programming, industrial networking.
              </p>
            </div>

            <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Systems Integration & Field Engineering
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Site commissioning, grid interconnection, troubleshooting in the field, customer
                support, system-level debugging, electrical safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-steel-blue/10 to-midnight-black">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-4">
              Apply
            </h2>
            <p className="font-open-sans text-lg text-gray-300 leading-relaxed">
              Initial screening is based entirely on the <strong className="text-industrial-white">portfolio
              or project link</strong> you provide below. Without proof of work, your application will
              not be considered.
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
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Portfolio or Project Link *
                </label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  required
                  placeholder="https://github.com/yourname/project or https://yourportfolio.com"
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
                <p className="mt-2 font-open-sans text-sm text-gray-400 leading-relaxed">
                  Link to: portfolio site, GitHub/GitLab repo, Google Drive with CAD files, project writeup,
                  build log, video walkthrough, or anything showing what you have built.
                </p>
              </div>

              <div>
                <label htmlFor="background" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Technical Background *
                </label>
                <input
                  type="text"
                  id="background"
                  name="background"
                  required
                  placeholder="e.g., Power electronics engineer, mechanical design, embedded systems"
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
                  placeholder="e.g., Rotor design, inverter development, control algorithms"
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
                  placeholder="Describe your projects, tools you use, problems you have solved. Include additional portfolio links if needed."
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
                  {result}. We will review your work and be in touch if there is a fit.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-industrial-white rounded-lg p-4 text-center">
                  {result || 'Something went wrong. Please try again or email us directly at careers@ontheflyenergy.com'}
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
