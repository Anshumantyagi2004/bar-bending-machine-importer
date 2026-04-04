"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/bar importer banner.webp",
  "/Bar Bending Machine banne.webp",
  "/bar importer banner.webp",
  "/Bar Bending Machine banne.webp",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[88vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[current]}
            alt="hero"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 70%' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-amber-500 hover:text-white z-10"
      >
        <ChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-amber-500 hover:text-white z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
}