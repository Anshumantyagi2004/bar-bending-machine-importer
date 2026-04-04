"use client";

export default function Popup({ showPopup, setShowPopup }) {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
      onClick={() => setShowPopup(false)}>
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl flex flex-col md:flex-row animate-fadeIn"
        onClick={(e) => e.stopPropagation()}>
        <div className="md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-600 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">Get Your Quote</h2>
            <p className="text-sm opacity-90">
              Tell us your requirements and we’ll get back with the best solution tailored for you.
            </p>
          </div>

          <img
            src="/1.png"
            alt="Quote"
            className="mt-4 rounded-lg object-contain h-70 w-full"
          />
        </div>

        <div className="md:w-1/2 p-6 relative">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
          <h3 className="text-2xl font-semibold mb-4 text-amber-500 text-center">
            Fill the details
           <div className="w-20 h-1 bg-[#3C2012] mx-auto mt-1 rounded"></div>
          </h3>

          <form className="flex flex-col gap-3 text-black">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <textarea
              rows={4}
              placeholder="Your Requirement"
              className="border border-amber-200 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
            ></textarea>

            <button className="bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition font-medium">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}