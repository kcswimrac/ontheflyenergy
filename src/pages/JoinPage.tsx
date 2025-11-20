import React, { useState } from 'react';
import { Code, Wrench, Zap, AlertCircle, Send } from 'lucide-react';

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
            No resumes. No buzzwords. No passengers.
          </p>
          <div className="w-24 h-1 bg-energy-green mt-8"></div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-8">
            Our Hiring Philosophy
          </h2>

          <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
            <p>
              We do not screen candidates using resumes. We screen candidates exclusively on
              <strong className="text-industrial-white"> evidence of real work</strong>: CAD models,
              code repositories, hardware prototypes, simulations, experiments, test rigs, and
              project writeups.
            </p>
            <p>
              Proof of work is the only currency that matters here. Resumes are collected later in
              the process for administrative and record-keeping purposes, not as a filter.
            </p>
            <p>
              If you cannot point to something you built—something that exists in the physical or
              digital world—we have nothing to discuss.
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
              <ul className="font-open-sans text-gray-300 space-y-2 list-disc list-inside">
                <li>GitHub or GitLab repositories</li>
                <li>Control algorithms and firmware</li>
                <li>Simulation models (FEA, CFD, SPICE)</li>
                <li>CAD assemblies and drawings</li>
                <li>PCB layouts and schematics</li>
              </ul>
            </div>

            <div className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-8">
              <div className="mb-6 text-energy-green">
                <Wrench className="h-10 w-10" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-4">
                Physical Builds
              </h3>
              <ul className="font-open-sans text-gray-300 space-y-2 list-disc list-inside">
                <li>Mechanical prototypes and test rigs</li>
                <li>Custom fabricated parts</li>
                <li>Power electronics hardware</li>
                <li>Manufacturing fixtures and tooling</li>
                <li>Experimental setups with data</li>
              </ul>
            </div>

            <div className="bg-midnight-black/40 border border-energy-green/20 rounded-lg p-8">
              <div className="mb-6 text-energy-green">
                <Zap className="h-10 w-10" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-4">
                Technical Writeups
              </h3>
              <ul className="font-open-sans text-gray-300 space-y-2 list-disc list-inside">
                <li>Portfolio sites with build logs</li>
                <li>Technical blog posts with depth</li>
                <li>Experiment documentation</li>
                <li>Video walkthroughs of projects</li>
                <li>Analysis and failure reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Environment */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-8">
            The Environment
          </h2>

          <div className="space-y-6 font-open-sans text-lg text-gray-300 leading-relaxed">
            <p>
              Working here means rapidly turning ideas into evidence. You will operate with autonomy,
              interface directly with machines and materials, and deliver physical or digital proof.
            </p>
            <p>
              The culture is built for people who build first and talk second. High-agency engineers
              who move from concept to prototype in weeks, not quarters. People who debug in hardware,
              not PowerPoint.
            </p>
            <p>
              No spectators. No passengers. If you need consensus to start, you will not survive here.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-steel-blue/20 border-l-4 border-energy-green rounded-lg p-6">
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                What You Will Do
              </h3>
              <ul className="font-open-sans text-gray-300 space-y-2 list-disc list-inside">
                <li>Design and build mechanical systems</li>
                <li>Write control firmware and algorithms</li>
                <li>Develop power electronics hardware</li>
                <li>Run experiments and analyze data</li>
                <li>Commission systems at customer sites</li>
                <li>Solve problems nobody has solved before</li>
              </ul>
            </div>

            <div className="bg-steel-blue/20 border-l-4 border-energy-green rounded-lg p-6">
              <h3 className="font-montserrat font-bold text-xl text-industrial-white mb-3">
                What You Will Not Do
              </h3>
              <ul className="font-open-sans text-gray-300 space-y-2 list-disc list-inside">
                <li>Attend planning meetings with no output</li>
                <li>Write code that never touches hardware</li>
                <li>Design systems you will never build</li>
                <li>Wait for permission to start</li>
                <li>Ship decks instead of prototypes</li>
                <li>Spectate while others build</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters to Investors */}
      <section className="py-20 bg-gradient-to-b from-steel-blue/10 to-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-energy-green/10 border border-energy-green/30 rounded-lg p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 text-energy-green">
                <AlertCircle className="h-10 w-10" />
              </div>
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-industrial-white mb-4">
                  Why Investors Care About This
                </h2>
                <p className="font-open-sans text-lg text-gray-300 leading-relaxed">
                  This proof-of-work hiring model is a core competitive advantage. It produces
                  founder-caliber builders who move from concept to prototype in weeks, not months.
                  While incumbents are stuck in design reviews, we ship working hardware. The talent
                  density this creates is what allows us to outpace companies 10x our size. Speed is
                  not a culture value—it is a structural outcome of hiring people who build without
                  being asked.
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
            Not all roles are open now. We hire when we find exceptional people, not when we have
            headcount budget.
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
              Screening is based entirely on the <strong className="text-industrial-white">portfolio
              or project link</strong> you provide below. Without proof of work, your application will
              not be considered. Resumes are collected later for administrative purposes only.
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
                  <strong className="text-energy-green">This is the most important field.</strong> Provide
                  a link to: portfolio site, GitHub/GitLab repo, Google Drive or Dropbox with CAD files,
                  project writeup, build log, YouTube walkthrough, or anything that shows what you have built.
                  If you have multiple links, include them in the message field below.
                </p>
              </div>

              <div>
                <label htmlFor="background" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Technical Background / Expertise *
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

          <div className="mt-8 text-center">
            <p className="font-open-sans text-sm text-gray-400">
              No proof of work? Do not apply. Build something first, then come back.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
