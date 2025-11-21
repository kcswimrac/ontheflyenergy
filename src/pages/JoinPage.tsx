import React, { useState } from 'react';
import { Code, Wrench, Zap, Send, Users, Target, X } from 'lucide-react';
import { trackFormSubmission } from '../utils/analytics';

interface DisciplineDetail {
  title: string;
  summary: string;
  roleDescription: string;
  idealCandidate: string[];
}

const disciplineDetails: Record<string, DisciplineDetail> = {
  powerElectronics: {
    title: "Power Electronics & Inverter Design",
    summary: "Grid-tied inverters, high-frequency switching, magnetics design, thermal management, EMI/EMC, control loops for power conversion.",
    roleDescription: "Design and validate grid-tie inverters for flywheel energy storage systems. Focus on high-efficiency power conversion, fast response times, and grid code compliance. Work ranges from circuit design and magnetics optimization to thermal management and EMI mitigation.",
    idealCandidate: [
      "Experience designing grid-tied inverters or motor drives (3-phase, high power)",
      "Deep understanding of switching topologies, control loops, and magnetics",
      "Hands-on prototyping and lab validation experience",
      "Portfolio showing real hardware builds, test data, or published designs",
      "Bonus: experience with energy storage, grid interconnection, or UL1741/IEEE1547"
    ]
  },
  motorControl: {
    title: "Motor Control & Embedded Firmware",
    summary: "Real-time control on bare metal or RTOS, motor drive algorithms (FOC, SVPWM), sensor integration, CAN/Modbus communication.",
    roleDescription: "Implement real-time control algorithms for high-speed motor/generator systems. Develop firmware for motor drives, sensor fusion, communication protocols, and system-level coordination. Work in C/C++ on embedded platforms with hard real-time constraints.",
    idealCandidate: [
      "Strong embedded C/C++ on ARM Cortex or similar microcontrollers",
      "Experience with FOC, SVPWM, or similar motor control algorithms",
      "Real-time systems experience (bare metal or RTOS)",
      "Portfolio showing firmware projects, motor control implementations, or hardware integration",
      "Bonus: familiarity with CAN, Modbus, or industrial communication protocols"
    ]
  },
  mechanical: {
    title: "Mechanical & Rotor Design",
    summary: "High-speed rotating machinery, FEA/CFD, precision bearings (magnetic, ceramic), rotor dynamics, structural integrity, vibration analysis.",
    roleDescription: "Design high-speed rotors and containment systems for kinetic energy storage. Run FEA/CFD simulations, optimize for stress/vibration/thermal performance, and validate mechanical integrity. Work closely with manufacturing to ensure designs are producible and testable.",
    idealCandidate: [
      "Mechanical engineering background with focus on rotating machinery or high-speed systems",
      "Proficiency in FEA tools (ANSYS, Abaqus, SolidWorks Simulation, etc.)",
      "Understanding of rotor dynamics, bearing systems, and structural mechanics",
      "Portfolio showing CAD models, simulation results, or physical prototypes",
      "Bonus: experience with composite rotors, magnetic bearings, or vacuum systems"
    ]
  },
  composites: {
    title: "Composite Manufacturing & Testing",
    summary: "Carbon fiber layup, autoclave processing, composite tooling, mechanical testing (tensile, burst, fatigue), material characterization.",
    roleDescription: "Develop manufacturing processes for composite flywheels and containment structures. Design layup schedules, build tooling, run autoclave cycles, and conduct mechanical testing. Focus on repeatability, quality control, and scaling from prototypes to production.",
    idealCandidate: [
      "Hands-on experience with carbon fiber or advanced composite manufacturing",
      "Familiarity with autoclave processes, vacuum bagging, or resin infusion",
      "Mechanical testing experience (tensile, burst, fatigue characterization)",
      "Portfolio showing composite builds, test data, or process documentation",
      "Bonus: aerospace or pressure vessel composite experience"
    ]
  },
  controls: {
    title: "Controls, SCADA & Manufacturing Systems",
    summary: "Factory automation, SCADA integration, production monitoring, data acquisition, PLC programming, industrial networking.",
    roleDescription: "Build manufacturing execution systems, SCADA integration, and production monitoring for flywheel assembly and testing. Integrate PLCs, data acquisition systems, and automation equipment. Focus on reliability, traceability, and real-time production insights.",
    idealCandidate: [
      "Experience with industrial automation, SCADA systems, or manufacturing execution",
      "PLC programming (Siemens, Allen-Bradley, etc.) and industrial networking",
      "Data acquisition and production monitoring system integration",
      "Portfolio showing automation projects, SCADA deployments, or factory integration work",
      "Bonus: experience in high-mix manufacturing or test automation"
    ]
  },
  systemsIntegration: {
    title: "Systems Integration & Field Engineering",
    summary: "Site commissioning, grid interconnection, troubleshooting in the field, customer support, system-level debugging, electrical safety.",
    roleDescription: "Commission flywheel systems at customer sites, perform grid interconnection, and troubleshoot system-level issues in the field. Interface with utilities, customers, and internal teams. Requires travel, hands-on debugging, and strong communication skills.",
    idealCandidate: [
      "Field experience with power systems, energy storage, or grid-connected equipment",
      "Electrical safety certifications and comfort working with high-voltage systems",
      "Strong troubleshooting and diagnostic skills across electrical, mechanical, and software domains",
      "Portfolio showing field deployments, commissioning reports, or customer-facing projects",
      "Bonus: experience with utility interconnection, grid codes, or energy storage deployments"
    ]
  }
};

const JoinPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [result, setResult] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    // Store form reference before async operation (event.currentTarget becomes null)
    const form = event.currentTarget;

    const formData = new FormData(form);
    formData.append('access_key', '71410425-89f6-4094-b387-361c001bdad0');
    formData.append('subject', 'Talent Application from On The Fly Energy Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      console.log('Web3Forms HTTP status:', response.status, response.ok);

      // If HTTP status is OK (200-299), treat as success
      if (response.ok) {
        setResult('Application Submitted Successfully');
        setSubmitStatus('success');
        form.reset();
        // Track successful form submission
        trackFormSubmission('talent_application');
      } else {
        // Only parse error details if request failed
        try {
          const data = await response.json();
          console.log('Error response:', data);
          setResult(data.message || 'Submission failed. Please check all fields and try again.');
        } catch {
          setResult('Submission failed. Please try again.');
        }
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

      {/* Hiring Status Note */}
      <section className="py-12 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-energy-green/10 border border-energy-green/30 rounded-lg p-8">
            <p className="font-open-sans text-lg text-industrial-white leading-relaxed">
              <strong>Note:</strong> We are not actively hiring for any specific open roles at this time. However, we always have an opening for top talent. If you are exceptional at what you do and believe you can contribute to building the kinetic layer for the grid, we want to hear from you.
            </p>
          </div>
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
            We hire when we find exceptional people, not when we have headcount budget. Click each card to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setSelectedDiscipline('powerElectronics')}
              className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6 hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300 text-left cursor-pointer"
            >
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Power Electronics & Inverter Design
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Grid-tied inverters, high-frequency switching, magnetics design, thermal management,
                EMI/EMC, control loops for power conversion.
              </p>
              <p className="font-open-sans text-energy-green text-sm mt-3">Click to learn more →</p>
            </button>

            <button
              onClick={() => setSelectedDiscipline('motorControl')}
              className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6 hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300 text-left cursor-pointer"
            >
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Motor Control & Embedded Firmware
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Real-time control on bare metal or RTOS, motor drive algorithms (FOC, SVPWM),
                sensor integration, CAN/Modbus communication.
              </p>
              <p className="font-open-sans text-energy-green text-sm mt-3">Click to learn more →</p>
            </button>

            <button
              onClick={() => setSelectedDiscipline('mechanical')}
              className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6 hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300 text-left cursor-pointer"
            >
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Mechanical & Rotor Design
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                High-speed rotating machinery, FEA/CFD, precision bearings (magnetic, ceramic),
                rotor dynamics, structural integrity, vibration analysis.
              </p>
              <p className="font-open-sans text-energy-green text-sm mt-3">Click to learn more →</p>
            </button>

            <button
              onClick={() => setSelectedDiscipline('composites')}
              className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6 hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300 text-left cursor-pointer"
            >
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Composite Manufacturing & Testing
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Carbon fiber layup, autoclave processing, composite tooling, mechanical testing
                (tensile, burst, fatigue), material characterization.
              </p>
              <p className="font-open-sans text-energy-green text-sm mt-3">Click to learn more →</p>
            </button>

            <button
              onClick={() => setSelectedDiscipline('controls')}
              className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6 hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300 text-left cursor-pointer"
            >
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Controls, SCADA & Manufacturing Systems
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Factory automation, SCADA integration, production monitoring, data acquisition,
                PLC programming, industrial networking.
              </p>
              <p className="font-open-sans text-energy-green text-sm mt-3">Click to learn more →</p>
            </button>

            <button
              onClick={() => setSelectedDiscipline('systemsIntegration')}
              className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-6 hover:bg-steel-blue/30 hover:border-energy-green/40 transition-all duration-300 text-left cursor-pointer"
            >
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                Systems Integration & Field Engineering
              </h3>
              <p className="font-open-sans text-gray-300 text-sm">
                Site commissioning, grid interconnection, troubleshooting in the field, customer
                support, system-level debugging, electrical safety.
              </p>
              <p className="font-open-sans text-energy-green text-sm mt-3">Click to learn more →</p>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedDiscipline && disciplineDetails[selectedDiscipline] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-black/90 backdrop-blur-sm" onClick={() => setSelectedDiscipline(null)}>
          <div className="bg-steel-blue/95 border-2 border-energy-green/50 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-steel-blue border-b border-energy-green/30 px-8 py-6 flex justify-between items-start">
              <h3 className="font-montserrat font-bold text-3xl text-industrial-white pr-8">
                {disciplineDetails[selectedDiscipline].title}
              </h3>
              <button
                onClick={() => setSelectedDiscipline(null)}
                className="text-industrial-white hover:text-energy-green transition-colors flex-shrink-0"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="px-8 py-6 space-y-8">
              <div>
                <h4 className="font-montserrat font-bold text-xl text-energy-green mb-4">
                  What the Role Looks Like
                </h4>
                <p className="font-open-sans text-lg text-gray-200 leading-relaxed">
                  {disciplineDetails[selectedDiscipline].roleDescription}
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-xl text-energy-green mb-4">
                  Ideal Candidate Profile
                </h4>
                <ul className="space-y-3">
                  {disciplineDetails[selectedDiscipline].idealCandidate.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-energy-green mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="font-open-sans text-lg text-gray-200 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-energy-green/30">
                <p className="font-open-sans text-gray-300 text-center italic">
                  If this sounds like you, submit your portfolio below. We screen on proof of work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
