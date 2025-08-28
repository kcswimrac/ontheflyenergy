import React, { useState } from "react";
import { ArrowRight, Mail, CheckCircle, XCircle } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("Sending...");

    const formData = new FormData();
    formData.append("access_key", "71410425-89f6-4094-b387-361c001bdad0");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("company", company);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Form submitted successfully!");
        setName("");
        setEmail("");
        setCompany("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong, please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }

    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-industrial-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl text-midnight-black mb-6">
            Join the Mission
          </h2>
          <p className="font-montserrat font-semibold text-2xl md:text-3xl text-energy-green mb-8">
            Power that outlasts.
          </p>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the next generation of American energy infrastructure.
            Whether you're an engineer, investor, or customer, we want to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="font-montserrat font-bold text-2xl text-midnight-black mb-6">
              Get Connected
            </h3>

            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-energy-green mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-xl text-energy-green mb-2">
                  Thank You!
                </h4>
                <p className="font-open-sans text-gray-600">{message}</p>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-8">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-xl text-red-500 mb-2">
                  Oops!
                </h4>
                <p className="font-open-sans text-gray-600">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-montserrat font-medium text-midnight-black mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-midnight-black placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="font-montserrat font-medium text-midnight-black mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-midnight-black placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="font-montserrat font-medium text-midnight-black mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-midnight-black placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                    placeholder="Your organization"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full bg-energy-green hover:bg-green-500 text-white font-montserrat font-semibold text-lg px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Connect With Us"}
                  {status !== "loading" && (
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Newsletter + Contact Info (unchanged) */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <Mail className="h-12 w-12 text-energy-green mb-6" />
              <h3 className="font-montserrat font-bold text-2xl text-midnight-black mb-4">
                Stay Informed
              </h3>
              <p className="font-open-sans text-gray-600 mb-6">
                Get monthly updates on our technology breakthroughs, new
                installations, and industry insights.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-midnight-black placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                />
                <button className="bg-energy-green hover:bg-green-500 text-white font-montserrat font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-montserrat font-semibold text-midnight-black mb-2">
                  Engineering Partnerships
                </h4>
                <p className="font-open-sans text-gray-600 text-sm">
                  partners@ontheflyenergy.com
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-midnight-black mb-2">
                  Investment Inquiries
                </h4>
                <p className="font-open-sans text-gray-600 text-sm">
                  investors@ontheflyenergy.com
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-midnight-black mb-2">
                  General Information
                </h4>
                <p className="font-open-sans text-gray-600 text-sm">
                  info@ontheflyenergy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;