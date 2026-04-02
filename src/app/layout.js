import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Main/Navbar";
import Footer from "@/components/Main/Footer";
import StickyButtons from "@/components/Main/StickyButtons";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/cart/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bar Bending Machine Importer in India",
  description: "Bar Bending Machine Importer - Shree Shakti Infratech offers highly accurate machines with efficient performance.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          <StickyButtons />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
