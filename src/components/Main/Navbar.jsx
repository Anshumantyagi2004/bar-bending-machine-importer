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
  ShoppingCart,
} from "lucide-react";

import Popup from "./Popup";
import Link from "next/link";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      name: "Bar Bending Machine",
      price: 50000,
      image: "/machine.png",
    },
  ]);
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-1 px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${pathname === path
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

            <button onClick={() => setIsCartOpen(true)} className="relative flex items-center justify-center gap-2 bg-[#3C2012] text-white px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:scale-105">
              <ShoppingCart size={18} /> Cart
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                1
              </span>
            </button>

            <button onClick={() => setShowPopup(true)}
              className="bg-[#faac18] text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition-all duration-200 shadow-md hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden items-center flex gap-3">
            <button onClick={() => setIsCartOpen(true)} className="relative flex items-center justify-center gap-2 text-[#3C2012] px-3 py-2 rounded-lg transition font-semibold">
              <ShoppingCart size={24} />
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                2
              </span>
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 px-3 py-2 rounded-md text-white" onClick={() => setIsOpen(!isOpen)}>
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

      <CartSidebar
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
}