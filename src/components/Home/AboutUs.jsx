'use client'
import { useEffect, useState } from "react";

export default function AboutUs() {
    const images = [
        "/ctaimg1.webp",
        "/feature2.webp",
        "/whychooseimg.webp",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-4 md:px-15 py-10 bg-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                        About{" "}
                        <span className="text-amber-500">
                            Shree Shakti Infratech
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-[#3C2012] mb-6 justify-self-center"></div>

                    <p className="text-gray-800 leading-relaxed mb-4 text-[18px]">
                       <strong>Shree Shakti Infratech</strong> is not just a supplier—we are a
                        complete solution provider for construction machinery in India.
                        Our journey began with a vision to bridge the gap between
                        international-quality equipment and the evolving needs of
                        the Indian construction sector.
                    </p>

                    <p className="text-gray-800 leading-relaxed mb-4 text-[18px]">
                        Today, we proudly offer a wide range of imported construction
                        machines engineered for performance and built to last.
                        Our expertise in sourcing machinery from trusted global
                        manufacturers ensures our customers receive only the best.
                    </p>

                    <p className="text-gray-800 leading-relaxed text-[18px]">
                        We focus on delivering value through quality products,
                        technical expertise, and unmatched after-sales service,
                        making us a preferred choice among construction professionals
                        across India.
                    </p>
                </div>

                <div className="relative w-full h-75 md:h-96 rounded-2xl overflow-hidden shadow-sm">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="About Shree Shakti"
                            className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 
                            ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}