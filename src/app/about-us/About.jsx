"use client";
import CoreProduct from "@/components/Home/CoreProduct";
import WhyChoose from "@/components/Home/WhyUs";
import { motion } from "framer-motion";
import Link from 'next/link'
import React from 'react'
import { Users, Briefcase, Award, Headphones } from "lucide-react";
import FormSection from "@/components/Main/FormSection";
export default function About() {
    return (<>
        <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/bannner.webp')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="relative z-10 text-center px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm md:text-base text-gray-300"
                >
                    <Link href="/" className="hover:text-amber-400 transition">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-amber-400">About Us</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                >
                    About Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-2 text-gray-100 text-sm md:text-lg"
                >
                    Building trust, delivering excellence, and shaping the future of infrastructure.
                </motion.p>
            </div>
        </section>

        <section className="py-10 bg-[#fff8f6]">
            <div className="md:px-16 px-4 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        About Us –{" "}
                        <span className="text-amber-500">
                            Shree Shakti Infratech
                        </span>
                    </h2>

                    <p className="text-gray-800 mb-4 leading-relaxed">
                        <strong>Shree Shakti Infratech</strong> is a trusted name in the construction machinery industry, recognized as a leading <strong>Bar Bending Machine importer in India</strong>. With a strong commitment to quality, innovation, and customer satisfaction, we have established ourselves as a reliable partner for contractors, builders, and infrastructure companies across the country.
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                        Since our inception, our goal has been clear — to provide high-performance construction machinery that enhances productivity, ensures precision, and delivers long-term value. We bridge the gap between advanced global technology and the growing demands of the Indian construction sector.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-2xl overflow-hidden shadow-sm w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                        <img
                            src="/feature2.webp"
                            alt="About Shree Shakti Infratech"
                            className="w-full h-full object-contain"
                        />
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
                    <h3 className="text-3xl font-bold text-[#3C2012]">10+</h3>
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

        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero4.webp')" }}>
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Our Journey
                        </h2>

                        <p className="text-gray-200 mb-4 leading-relaxed">
                            Founded with a vision to transform the availability of advanced construction equipment in India, Shree Shakti Infratech has steadily grown into a reputable importer and supplier of bar bending machines and related equipment.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Over the years, we have built strong relationships with international manufacturers, enabling us to bring world-class machinery to the Indian market at competitive prices. Our continuous focus on quality and service has helped us earn the trust of clients from small contractors to large infrastructure companies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            What We Offer
                        </h2>

                        <p className="text-gray-200 mb-4">
                            We specialize in importing and supplying:
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Automatic Bar Bending Machines",
                                "Semi-Automatic Bar Bending Machines",
                                "Heavy-Duty Rebar Bending Equipment",
                                "Customized Solutions for Construction Projects",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-200">
                                    <span className="text-amber-400 text-lg">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-300 mt-5 text-sm leading-relaxed">
                            Each machine is tested for precision, durability, and efficiency,
                            ensuring top performance across all project types.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        <CoreProduct />

        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/vision.webp')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition duration-300"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Our Vision
                        </h2>

                        <p className="text-gray-200 leading-relaxed">
                            To become India’s most trusted and preferred supplier of advanced
                            construction machinery by delivering innovative, reliable, and
                            cost-effective solutions that empower the construction industry.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition duration-300"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Our Mission
                        </h2>

                        <ul className="space-y-3">
                            {[
                                "To provide high-quality imported machinery that meets global standards",
                                "To deliver exceptional customer service and technical support",
                                "To build long-term relationships based on trust, transparency, and performance",
                                "To continuously upgrade our offerings with the latest technology",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-200">
                                    <span className="text-amber-400 text-lg">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>

        <WhyChoose />

        <FormSection />
    </>)
}
