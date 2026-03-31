import React from "react";

const ContactCTA = () => {
  return (
    <section className="bg-[#3C2012] py-10 px-4 md:px-15 w-full">
      <div className="text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Us Today
        </h2>

        <p className="text-lg text-amber-200 mb-6">
          Looking for the best bar bending machine importer in India?
        </p>

        <p className="text-gray-200 max-w-3xl mx-auto mb-8">
          Shree Shakti Infratech is here to provide you with high-quality 
          imported machinery and expert support. Get in touch with us today 
          to discuss your requirements and find the perfect solution for your 
          construction projects.
        </p>

        <button className="bg-amber-500 hover:bg-amber-600 text-[#3C2012] font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-md">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;