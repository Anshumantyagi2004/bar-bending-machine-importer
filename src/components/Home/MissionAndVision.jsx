import React from 'react'
import { ShieldCheck, Settings, Zap, Wrench } from "lucide-react";
export default function MissionAndVision() {
    return (<>
        <section
            className="relative py-10 px-5 md:px-15 bg-cover bg-center"
            style={{ backgroundImage: "url('/banner-1.webp')" }}
        >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Our <span className="text-amber-400">Vision & Mission</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#3C2012] mx-auto mt-2 rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                        <h3 className="text-3xl font-semibold text-[#3C2012] mb-4 text-center">
                            Our Vision
                        </h3>

                        <p className="text-gray-800 leading-relaxed text-base">
                            To become India’s most trusted and innovative construction machinery
                            importer, known for delivering world-class products, exceptional service,
                            and long-term value to customers.
                        </p>
                    </div>

                    <div className="group bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
                        <h3 className="text-3xl font-semibold text-[#3C2012] mb-4 text-center">
                            Our Mission
                        </h3>

                        <ul className="space-y-3 text-gray-800">
                            <li>✔ Provide high-quality imported construction machinery</li>
                            <li>✔ Enhance productivity and efficiency</li>
                            <li>✔ Deliver reliable after-sales support</li>
                            <li>✔ Build long-term relationships based on trust</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-10 px-4 md:px-15 bg-amber-50">
            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className='items-start'>
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

                    <button className="border border-[#3C2012] text-[#3C2012] hover:bg-[#3C2012] hover:text-white px-7 py-3 rounded-lg transition">
                        Contact Us
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
    </>)
}
