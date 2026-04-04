"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin")
  if (adminLayout) return null;
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src="/logo.webp" alt="logo" className="h-20 mb-3 bg-white px-2 py-1 rounded-md w-40" />
          <p className="text-base">
            Welcome to Shree Shakti Infratech, a trusted name in construction
            machines since 2013. ISO 9001:2013 certified company committed to quality.
          </p>

          <div className="mt-3 text-base flex items-center gap-2">
            <Phone size={18} />
            <span>+91 8826544443</span>
          </div>

          <div className="text-base flex items-start gap-2 mt-2">
            <MapPin size={42} className="mt-" />
            <span>
              4A, S-Block, Vishwas Park, Raja Puri Main Road, Opp. Sec – 3,
              Dwarka, New Delhi – 110059
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-base">
            <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-amber-400">About Us</Link></li>
            <li><Link href="/articles" className="hover:text-amber-400">Articles</Link></li>
            <li><Link href="/products" className="hover:text-amber-400">Products</Link></li>
            <li><Link href="/contact-us" className="hover:text-amber-400">Contact Us</Link></li>
            <li><Link href="/sitemap" className="hover:text-amber-400">Sitemap</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-base">
            <li>Bar Processing Machines</li>
            <li>Concrete Mixers</li>
            <li>Anti-Fog Cannon Machine</li>
            <li>Lab Testing Equipment</li>
            <li>Material Lifting Equipment</li>
            <li>Safety Instruments</li>
            <li>Ride On Roller / Plate Compactor</li>
            <li>Surveying Instruments</li>
            <li>Trolley Vibrator</li>
            <li>Air Quality Index</li>
          </ul>
        </div>

        {/* Certificate */}
        <div>
          <h3 className="text-white font-semibold mb-3">Trust Elite</h3>
          <p className="text-base">
            We are proud to present the Trust Elite Certificate of Excellence
            to Shree Shakti Infratech, recognizing their commitment to exceptional
            customer service and business practices.
          </p>

          <div className="mt-4 flex justify-center md:justify-start">
            <img
              src="/trustseal.webp"
              alt="Trust Seal"
              onClick={() => setOpen(true)}
              className="h-20 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full">

                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <img
                  src="/cert.webp"
                  alt="Trust Seal Large"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Bar */}
      <div className="border-t flex justify-around border-gray-700 text-center py-4 text-base text-gray-300">
        <p>© 2025 Shree Shakti Infratech, All Rights Reserved.</p>
        <p>Managed and Developed By Promozione Branding Pvt Ltd.</p>
      </div>
    </footer>
  );
}