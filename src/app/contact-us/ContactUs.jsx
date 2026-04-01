"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import FormSection from '@/components/Main/FormSection';
import { FaPhoneAlt } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

export default function ContactUs() {
    const cardData = [
        {
            icon: <FaPhoneAlt />,
            title: "Phone Number",
            content: ["+91 8826544443", "+91 9654243444"],
        },
        {
            icon: <Mail />,
            title: "Email Address",
            content: ["shreeshaktiinfratech@gmail.com"],
        },
        {
            icon: <MapPin />,
            title: "Address",
            content: [
                "4A, S-Block, Vishwas Park, Raja Puri Main Road",
                "Dwarka Sec – 3, New Delhi – 110059",
            ],
        },
    ];
    return (<>
        <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/banner-1.webp')" }}>
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
                    <span className="text-amber-400">Contact Us</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                >
                    Contact Us
                </motion.h1>
            </div>
        </section>

        <section className="w-full pt-10 pb-5 bg-amber-50 md:px-15 px-4">
            <div className="grid md:grid-cols-3 md:gap-8 gap-5">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.06 }}
                        className="group bg-white rounded-2xl p-6 shadow-md border border-amber-200 hover:shadow-xl transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xl group-hover:bg-[#3C2012] group-hover:text-white transition duration-300">
                                {card.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-[#3C2012]">
                                {card.title}
                            </h3>
                        </div>

                        <div className="text-gray-600 space-y-1">
                            {card.content.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        <FormSection />
    </>)
}
