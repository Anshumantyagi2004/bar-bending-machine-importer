"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero1.webp",
    title: "Bar Bending Machines",
    desc: "High performance machines for construction industry",
  },
  {
    image: "/hero4.webp",
    title: "Concrete Mixers",
    desc: "Reliable and durable solutions for every site",
  },
  {
    image: "/banner-1.webp",
    title: "Material Lifting Equipment",
    desc: "Efficient and safe lifting solutions",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-amber-500">
              {slide.title}
            </h2>
            <p className="mt-3 text-white text-sm md:text-lg">
              {slide.desc}
            </p>

            <button className="mt-5 bg-[#3C2012] text-white text-lg font-bold px-6 py-2 rounded-full hover:bg-[#2e180d] transition">
              Explore Products
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-amber-500 hover:text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-amber-500 hover:text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}