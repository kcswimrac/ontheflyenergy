import React from 'react';

const ManifestoSection = () => {
  return (
    <section className="py-24 bg-midnight-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 md:p-16 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-repeat" 
                 style={{
                   backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(39,174,96,0.3) 50%, transparent 60%)`,
                   backgroundSize: '20px 20px'
                 }}>
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-energy-green mb-8">
              Why We Exist
            </h2>
            
            <blockquote className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-industrial-white leading-tight mb-8">
              "We are not here to be trendy.
              <br />
              <span className="text-energy-green">We are here to be trusted.</span>"
            </blockquote>
            
            <div className="w-24 h-1 bg-energy-green mx-auto mb-8"></div>
            
            <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In a world of flashy promises and marketing hype, we choose substance over style. 
              Our flywheel technology isn't just another energy storage solution—it's a 
              <span className="text-energy-green font-semibold"> decades-long commitment </span> 
              to the people and organizations that depend on us.
            </p>
            
            <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
              When the lights go out, when the grid fails, when everything else stops working—
              <span className="text-energy-green font-semibold"> we're still spinning. </span>
              That's not a promise. That's physics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;