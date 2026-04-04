"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Popup from '../Main/Popup';

export default function CoreProduct({ isButton }) {
  const products = [
    {
      title: "Bar Bending Machines",
      desc: "Advanced machines for accurate and efficient bending.",
      img: "/feature2.webp",
    },
    {
      title: "Bar Cutting Machines",
      desc: "Fast, clean, and precise cutting solutions.",
      img: "/whychooseimg.webp",
    },
    {
      title: "Concrete Mixers",
      desc: "Uniform mixing for durable construction.",
      img: "/ctaimg1.webp",
    },
    {
      title: "Hoists & Lifting Equipment",
      desc: "Safe handling of heavy materials.",
      img: "/2.webp",
    },
    {
      title: "Safety Equipment",
      desc: "Complete worker safety solutions.",
      img: "/1.webp",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const loopProducts = [...products, ...products, ...products, ...products];

  return (
    <section className="pt-10 px-4 md:px-15 bg-gray-100 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Core <span className="text-amber-500">Products</span>
        </h2>
        <div className="w-20 h-1 bg-[#3C2012] mx-auto mt-2 rounded"></div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />
        <motion.div
          className="flex gap-6 w-max overflow-hidden pb-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {loopProducts.map((item, index) => (
            <div key={index}
              className="flex flex-col justify-between shrink-0 w-[260px] md:w-[280px] lg:w-[300px]
                bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 text-center">
              {/* IMAGE */}
              <div className="h-40 flex items-center justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full object-contain transition duration-500 hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-[#3C2012] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
              {isButton &&
                <button onClick={() => setShowPopup(true)} className="bg-[#3C2012] cursor-pointer mt-auto px-3 py-3 rounded-md text-white justify-self-center">
                  Inquiry Now
                </button>}
            </div>
          ))}
        </motion.div>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </section>
  );
}