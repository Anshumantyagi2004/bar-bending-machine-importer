"use client";
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import CategorySection from '@/components/Home/Category';
export default function Products() {
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
                    <span className="text-amber-400">Products</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                >
                    Our Products
                </motion.h1>
            </div>
        </section>

        <CategorySection />
    </>)
}
