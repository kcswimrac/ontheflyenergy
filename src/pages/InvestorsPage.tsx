import React, { useState } from 'react';
import { TrendingUp, Target, CheckCircle2, Map, DollarSign, Send } from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [result, setResult] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '71410425-89f6-4094-b387-361c001bdad0');
    formData.append('subject', 'Investor Inquiry from On The Fly Energy Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      console.log('Web3Forms response:', data);

      // Check both data.success and HTTP status
      if (data.success === true || response.ok) {
        setResult('Form Submitted Successfully');
        setSubmitStatus('success');
        event.currentTarget.reset();
      } else {
        console.log('Error', data);
        setResult(data.message || 'Submission failed. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setResult('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-steel-blue to-midnight-black overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-industrial-white mb-6">
            For Investors
          </h1>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the kinetic layer for grid-scale AI and industrial power systems
          </p>
          <div className="w-24 h-1 bg-energy-green mx-auto mt-8"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 bg-energy-green/10 p-4 rounded-lg">
              <TrendingUp className="h-8 w-8 text-energy-green" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-4">
                The Problem
              </h2>
              <div className="space-y-4 font-open-sans text-lg text-gray-300 leading-relaxed">
                <p>
                  AI and electrification are creating unprecedented volatility in power demand.
                  Data centers experience millisecond-to-minute load swings. Industrial facilities
                  need fast frequency regulation and peak shaving.
                </p>
                <p>
                  Lithium batteries are optimized for energy—hours and days of storage. But they
                  degrade rapidly under high cycle counts and high C-rates. The 0–5 minute power
                  volatility window is where batteries are least economical.
                </p>
                <p>
                  <strong className="text-industrial-white">The grid needs a kinetic layer.</strong> Fast, responsive,
                  durable power storage that complements batteries, not replaces them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedge Section */}
      <section className="py-20 bg-steel-blue/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 bg-energy-green/10 p-4 rounded-lg">
              <Target className="h-8 w-8 text-energy-green" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-4">
                Our Wedge
              </h2>
              <div className="space-y-4 font-open-sans text-lg text-gray-300 leading-relaxed">
                <p>
                  On The Fly Energy builds modular flywheel systems designed for the short-duration,
                  high-power window. Our units:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Deliver instant power response (milliseconds)</li>
                  <li>Handle 100,000+ cycles with zero capacity degradation</li>
                  <li>Integrate at the grid edge—data centers, industrial sites, microgrids</li>
                  <li>Protect batteries by absorbing high-frequency volatility</li>
                  <li>Improve economics of AI and industrial loads by reducing demand charges and stabilizing grid connections</li>
                </ul>
                <p>
                  We are not competing with lithium. We are complementing it—solving the power
                  problem so batteries can focus on energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 bg-energy-green/10 p-4 rounded-lg">
              <CheckCircle2 className="h-8 w-8 text-energy-green" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-6">
                Current Stage & Traction
              </h2>
              <div className="space-y-6">
                <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                    Technical De-risking
                  </h3>
                  <p className="font-open-sans text-gray-300">
                    Rotor-Seed 10kW prototype design complete. Containment and burst analysis
                    validated via FEA. Inverter and power electronics architecture defined.
                  </p>
                </div>
                <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                    Early Conversations
                  </h3>
                  <p className="font-open-sans text-gray-300">
                    Active discussions with data center operators and industrial partners for
                    pilot deployments. Building relationships with composite manufacturers
                    and precision machining vendors.
                  </p>
                </div>
                <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                    Team & Capabilities
                  </h3>
                  <p className="font-open-sans text-gray-300">
                    Founding team with track record in automation, manufacturing, casting, EVs,
                    and energy systems. Direct experience building hardware under constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-steel-blue/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 bg-energy-green/10 p-4 rounded-lg">
              <Map className="h-8 w-8 text-energy-green" />
            </div>
            <div className="flex-1">
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-6">
                Roadmap to Deployment
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32 font-roboto-mono text-sm text-energy-green">
                    Q4 2025
                  </div>
                  <p className="font-open-sans text-gray-300">
                    <strong>Foundations:</strong> First integrated kinetic storage module with 5 kW grid-tie inverter.
                    Rotor-Seed V1/V2 prototypes, sub-second response demonstration, hybrid lithium operation,
                    Factory-OS telemetry, federal program submissions.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32 font-roboto-mono text-sm text-energy-green">
                    Q1–Q2 2026
                  </div>
                  <p className="font-open-sans text-gray-300">
                    <strong>Pilot-Ready Systems:</strong> Rotor-Seed V3 with improved bearings and containment,
                    Inverter V2 with enhanced controls, hybrid demo unit, failure mode modeling, defined Rotor-Pod
                    architecture (20-30 kW).
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32 font-roboto-mono text-sm text-energy-green">
                    Q3 2026
                  </div>
                  <p className="font-open-sans text-gray-300">
                    <strong>Pilot Engineering:</strong> Lock final Rotor-Pod design, develop installation workflow,
                    initiate UL/IEEE certification, sign pilot LOIs with AI and industrial customers, expand Factory-OS
                    for fleet management.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32 font-roboto-mono text-sm text-energy-green">
                    Q4 2026
                  </div>
                  <p className="font-open-sans text-gray-300">
                    <strong>First Deployment:</strong> Live pilot system at customer site. Demonstrate ride-through,
                    peak-shaving, fast balancing. Characterize performance and validate integration. Publish results.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32 font-roboto-mono text-sm text-energy-green">
                    2027+
                  </div>
                  <p className="font-open-sans text-gray-300">
                    <strong>Scaling:</strong> 50-250 kW variants, containerized systems, API integration for data centers,
                    certification completion, high-volume composite production, industrial and utility partnerships.
                  </p>
                </div>
              </div>
              <p className="font-open-sans text-gray-400 text-sm mt-6 italic">
                Target verticals: AI data centers, industrial microgrids, grid-edge applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Section */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 bg-energy-green/10 p-4 rounded-lg">
              <DollarSign className="h-8 w-8 text-energy-green" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-industrial-white mb-4">
                Where Capital Moves the Needle
              </h2>
              <p className="font-open-sans text-lg text-gray-300 leading-relaxed">
                We are raising to accelerate prototype iteration, build test infrastructure,
                and move faster toward pilot deployments. Capital will fund: precision machining
                and composite tooling, power electronics development and testing, certification
                and compliance pathways, and early pilot site deployments that generate real-world
                validation data.
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
              Let's Talk
            </h2>
            <p className="font-open-sans text-lg text-gray-300">
              Interested in learning more? Fill out the form below.
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
                <label htmlFor="firm" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Firm / Organization *
                </label>
                <input
                  type="text"
                  id="firm"
                  name="firm"
                  required
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="stage" className="block font-montserrat font-semibold text-industrial-white mb-2">
                    Investment Stage *
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    required
                    className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                  >
                    <option value="">Select stage</option>
                    <option value="Pre-seed">Pre-seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A">Series A</option>
                    <option value="Series B+">Series B+</option>
                    <option value="Strategic">Strategic</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="checkSize" className="block font-montserrat font-semibold text-industrial-white mb-2">
                    Typical Check Size
                  </label>
                  <input
                    type="text"
                    id="checkSize"
                    name="checkSize"
                    placeholder="e.g., $500K-$2M"
                    className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-montserrat font-semibold text-industrial-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your interest and what you'd like to discuss..."
                  className="w-full bg-midnight-black border border-gray-600 rounded-lg px-4 py-3 text-industrial-white focus:border-energy-green focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-energy-green hover:bg-green-500 disabled:bg-gray-600 text-midnight-black font-montserrat font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="h-5 w-5" />
              </button>

              {submitStatus === 'success' && (
                <div className="bg-energy-green/20 border border-energy-green text-industrial-white rounded-lg p-4 text-center">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-industrial-white rounded-lg p-4 text-center">
                  Something went wrong. Please try again or email us directly at investors@ontheflyenergy.com
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;
