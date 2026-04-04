'use client'
import React, { useState } from 'react'
import { ShieldCheck, Settings, Zap, Wrench } from "lucide-react";
import { FaBuilding, FaHome, FaRoad, FaIndustry, FaHardHat } from "react-icons/fa";
import { motion } from "framer-motion";
import Popup from '../Main/Popup';
export default function IndustriesSection() {
    const [showPopup, setShowPopup] = useState(false);
    const industries = [
        { title: "Construction & Infrastructure Projects", icon: FaHardHat, color: "bg-orange-100 text-orange-600" },
        { title: "Real Estate Development", icon: FaHome, color: "bg-green-100 text-green-600" },
        { title: "Road and Highway Construction", icon: FaRoad, color: "bg-blue-100 text-blue-600" },
        { title: "Industrial Projects", icon: FaIndustry, color: "bg-purple-100 text-purple-600" },
        { title: "Builders and Contractors", icon: FaBuilding, color: "bg-pink-100 text-pink-600" },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: i * 0.08, // smoother stagger
                ease: "easeOut",
            },
        }),
    };

    return (<>
        <section className="relative py-10 px-4 md:px-15 bg-cover bg-center w-full"
            style={{ backgroundImage: "url('/banner-1.webp')" }}>
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Industries We Serve
                    </h2>
                    <div className="w-24 h-1 bg-[#3C2012] mx-auto mt-2 rounded"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industries.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{
                                    y: -10,
                                    scale: 1.04,
                                }}
                                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center p-6 cursor-pointer transform-gpu will-change-transform"
                            >
                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                                    className={`p-4 rounded-full mb-4 ${item.color}`}
                                >
                                    <Icon className="text-3xl" />
                                </motion.div>

                                <h3 className="text-sm font-semibold text-gray-800 text-center leading-snug">
                                    {item.title}
                                </h3>
                            </motion.div>);
                    })}
                </div>
            </div>
        </section>

        <section className="py-10 px-4 md:px-15 bg-amber-50">
            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className='items-center md:items-start flex flex-col'>
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
                        Commitment to Quality
                    </h2>

                    <p className="text-gray-800 text-base leading-relaxed mb-4">
                        At <strong>Shree Shakti Infratech</strong>, quality is the foundation of our success.
                        All our machines are sourced and manufactured in compliance with strict
                        standards, ensuring superior performance and reliability.
                    </p>

                    <p className="text-gray-800 text-base leading-relaxed mb-4">
                        Our focus on quality helps our clients achieve better construction
                        outcomes while reducing operational costs and ensuring long-term efficiency.
                    </p>

                    <button onClick={() => setShowPopup(true)} className="border bg-[#3C2012] text-white hover:bg-[#341b0f] px-7 py-3 rounded-lg transition">
                        Contact Now
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 
        group-hover:bg-green-500 transition duration-300">
                                <ShieldCheck className="text-green-600 group-hover:text-white transition duration-300" size={20} />
                            </div>

                            <h3 className="text-xl font-semibold text-[#3C2012]">
                                High Durability
                            </h3>
                        </div>

                        {/* DESC */}
                        <p className="text-gray-800 text-base">
                            Built for long-term use in tough construction environments.
                        </p>
                    </div>

                    <div className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 
        group-hover:bg-blue-500 transition duration-300">
                                <Settings className="text-blue-600 group-hover:text-white transition duration-300" size={20} />
                            </div>

                            <h3 className="text-xl font-semibold text-[#3C2012]">
                                Precision Engineering
                            </h3>
                        </div>

                        <p className="text-gray-800 text-base">
                            Ensures accurate and consistent results in every operation.
                        </p>
                    </div>

                    <div className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100 
                        group-hover:bg-yellow-500 transition duration-300">
                                <Zap className="text-yellow-600 group-hover:text-white transition duration-300" size={20} />
                            </div>

                            <h3 className="text-xl font-semibold text-[#3C2012]">
                                Reliable Performance
                            </h3>
                        </div>

                        <p className="text-gray-800 text-base">
                            Delivers consistent output even in demanding conditions.
                        </p>
                    </div>

                    <div className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 
                            group-hover:bg-purple-500 transition duration-300">
                                <Wrench className="text-purple-600 group-hover:text-white transition duration-300" size={20} />
                            </div>

                            <h3 className="text-xl font-semibold text-[#3C2012]">
                                Low Maintenance
                            </h3>
                        </div>

                        <p className="text-gray-800 text-base">
                            Designed for efficiency with minimal operational costs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>)
}
