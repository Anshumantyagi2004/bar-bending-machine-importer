'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, Award, Headphones } from "lucide-react";
import Link from "next/link";
export default function Intro() {
    const images = [
        '/1.png',
        '/2.png',
        '/3.png',
        '/products/bpm/SPIRAL BENDING MACHINE/1.webp',
        "/smog-gun.webp",
        "/products/cm/180230Ltr. MINI CONCRETE MIXER/1.webp",
        '/products/tv/POWER FLOATER  POWER TROWEL/1.webp',
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (<>
        <section className="bg-amber-50 py-10 px-4 md:px-15 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="items-center md:items-start flex flex-col"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
                        India’s Trusted{" "}
                        <span className="text-amber-500">
                            Bar Bending Machine
                        </span>{" "}
                        Importer
                    </h1>

                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                        High-Quality Imported Construction Machinery for Modern Infrastructure
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        Founded in 2013, <strong>Shree Shakti Infratech</strong> has established
                        itself as a trusted and leading{" "}
                        <strong>Bar Bending Machine Importer in India</strong>, delivering
                        high-performance construction machinery built for precision,
                        durability, and long-term reliability.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        As an ISO-certified company, we are committed to providing advanced
                        imported machines that meet the evolving demands of modern construction
                        and infrastructure projects. Our solutions are designed to enhance
                        productivity, improve efficiency, and ensure superior construction quality.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}

                        >
                            <Link href={'/products'} className="bg-[#3C2012] text-white px-7 py-3 rounded-lg shadow-md">Explore Products</Link>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}

                        >
                            <Link href={'/contact-us'} className="border border-[#3C2012] text-[#3C2012] hover:bg-[#3C2012] hover:text-white px-7 py-3 rounded-lg">Contact Us</Link>
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative flex justify-center"
                >
                    <div className="absolute w-[95%] h-[95%] bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl blur-2xl opacity-50"></div>

                    <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] 
                    bg-white/40 backdrop-blur-lg p-6 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={current}
                                src={images[current]}
                                alt="Machine"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="max-w-full max-h-full object-contain 
                                will-change-transform mix-blend-multiply"
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>

        <section className="py-15 px-4 md:px-15 w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/bannner.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Users
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">500+</h3>
                    <p className="text-black text-base mt-1">Happy Clients</p>
                </div>

                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Briefcase
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">50+</h3>
                    <p className="text-black text-base mt-1">Projects Completed</p>
                </div>

                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Award
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">13+</h3>
                    <p className="text-black text-base mt-1">Years Experience</p>
                </div>

                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Headphones
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">24/7</h3>
                    <p className="text-black text-base mt-1">Support</p>
                </div>
            </div>
        </section>
    </>);
}