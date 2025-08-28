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
              "We are not here to be trendy."
              <br />
             
            </blockquote>
             <blockquote className="font-montserrat font-bold text-lg md:text-lg lg:text-xl text-industrial-white leading-tight mb-8">
              
              <span className="text-energy-green">We are here to be trusted — built in America, built to outlast.</span>
            </blockquote>
            
            <div className="w-32 h-1 bg-energy-green mx-auto  mb-8"></div>
            
            <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In a world full of hype and short-term fixes, we choose substances over slogans.
              Our flywheel technology isn't just another storage product, 
              <span className="text-energy-green font-semibold"> decades-long commitment </span> 
              to resilience, reliability, and American manufacturing.


            
            <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
                           We build here, with domestic supply chains, because true energy independence starts at home.
              When the grid fails, when batteries fade, when everything else stops working,
           
              <span className="text-energy-green font-semibold"> we're still spinning. </span>
            </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;