import React from "react";

const TrustedPartner = () => {
  return (
    <section className="py-10 px-4 md:px-15 w-full bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <img
            src="/products/cm/CONCRETE MIXER/1.webp"
            alt="Construction Machinery"
            className="w-full h-[350px] object-contain rounded-xl shadow-sm"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C2012] mb-4">
            Your Trusted Partner in Construction Machinery
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed">
            With over a decade of experience, Shree Shakti Infratech has built a 
            strong reputation as a reliable bar bending machine importer in India. 
            Our commitment to quality, innovation, and customer satisfaction makes 
            us the ideal partner for all your construction machinery needs.
          </p>

          <p className="text-gray-800 mb-6 leading-relaxed">
            We continuously strive to improve our offerings and services to meet 
            the changing demands of the industry.
          </p>

          {/* Optional Highlight Line */}
          <div className="w-16 h-1 bg-amber-500 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;