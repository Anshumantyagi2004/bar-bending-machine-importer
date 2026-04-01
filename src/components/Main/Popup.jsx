"use client";

export default function Popup({ showPopup, setShowPopup }) {
  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setShowPopup(false)} // 👈 click outside closes
    >
      <div
        className="bg-white p-6 rounded-xl w-[90%] max-w-md relative shadow-lg animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking inside
      >
        
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-amber-500 text-center">
          Get a Quote
        </h2>

        <form className="flex flex-col gap-3 text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-amber-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-amber-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-amber-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          <textarea rows={4}
            placeholder="Your Requirement"
            className="border border-amber-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-400"
          ></textarea>

          <button className="bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}