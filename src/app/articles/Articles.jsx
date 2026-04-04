"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Articles() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((b) => {
        setBlogs(b);
        setLoading(false);
      });
  }, []);
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
          <span className="text-amber-400">Articles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Articles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-2 text-gray-100 text-sm md:text-lg"
        >
          Explore expert blogs of Shree Shakti Infratech
        </motion.p>
      </div>
    </section>

    <section className="py-10 md:px-15 px-5">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-500">
          Our Articles
        </h1>
        <div className="w-20 h-1 bg-[#3C2012] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {(loading ? Array(4).fill({}) : blogs).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white border border-amber-100 rounded-xl shadow-md overflow-hidden"
          >

            {/* Image */}
            {loading ? (
              <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            ) : (
              <img
                src={item.image}
                alt="article"
                className="w-full h-48 object-contain"
              />
            )}

            {/* Content */}
            <div className="p-4 border-t border-t-amber-100">
              {loading ? (
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              ) : (
                <p className="text-[#3C2012] font-semibold text-lg line-clamp-2">
                  {item.title}
                </p>
              )}

              {loading ? (
                <div className="h-4 mt-2 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              ) : (
                <Link href={`/articles/${item.permalink}`} className="text-amber-500 pt-2 hover:underline font-medium text-base">
                  Read more →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </>)
}
