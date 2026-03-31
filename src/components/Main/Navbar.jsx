"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  Package,
  Phone,
  Newspaper,
} from "lucide-react";

import Popup from "./Popup";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const pathname = usePathname();

 const linkClass = (path) =>
  `flex items-center gap-1 px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${
    pathname === path
      ? "bg-[#3C2012] text-white shadow-md scale-105"
      : "text-[#3C2012] hover:text-white hover:bg-[#3C2012] border border-transparent hover:border-[#3C2012] hover:shadow-sm"
  }`;

  return (
    <>
      <nav className="bg-white backdrop-blur-md px-6 py-4 shadow-sm border-b sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="logo" className="h-15 w-35" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/" className={linkClass("/")}>
              <Home size={18} /> Home
            </Link>
            <Link href="/about-us" className={linkClass("/about-us")}>
              <Info size={18} /> About
            </Link>
            <Link href="/products" className={linkClass("/products")}>
              <Package size={18} /> Products
            </Link>
            <Link href="/articles" className={linkClass("/articles")}>
              <Newspaper size={18} /> Articles
            </Link>
            <Link href="/contact-us" className={linkClass("/contact-us")}>
              <Phone size={18} /> Contact
            </Link>

            <button
              onClick={() => setShowPopup(true)}
              className="ml-4 bg-[#faac18] text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition-all duration-200 shadow-md hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 flex flex-col gap-3 md:hidden animate-fadeIn">
            <Link href="/" className={linkClass("/")}>
              <Home size={18} /> Home
            </Link>
            <Link href="/about-us" className={linkClass("/about-us")}>
              <Info size={18} /> About
            </Link>
            <Link href="/products" className={linkClass("/products")}>
              <Package size={18} /> Products
            </Link>
            <Link href="/articles" className={linkClass("/articles")}>
              <Newspaper size={18} /> Articles
            </Link>
            <Link href="/contact-us" className={linkClass("/contact-us")}>
              <Phone size={18} /> Contact
            </Link>

            <button
              onClick={() => setShowPopup(true)}
              className="bg-amber-500 text-white px-4 py-2 rounded-full text-center mt-2"
            >
              Get Quote
            </button>
          </div>
        )}
      </nav>

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
}