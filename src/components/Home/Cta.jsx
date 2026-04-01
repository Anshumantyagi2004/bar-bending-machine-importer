import React from "react";

const ContactCTA = () => {
  return (
    <section className="bg-[#3C2012] py-10 px-4 md:px-15 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white md:max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Contact Us Today
          </h2>

          <p className="text-lg text-amber-200 mb-2">
            Looking for the best bar bending machine importer in India?
          </p>

          <p className="text-gray-200">
            Shree Shakti Infratech provides high-quality imported machinery 
            with expert support. Let’s discuss your requirements and find 
            the perfect solution for your construction projects.
          </p>
        </div>

        <div className="flex-shrink-0">
          <button className="bg-amber-500 hover:bg-amber-600 text-[#3C2012] font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:scale-105 transform">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;