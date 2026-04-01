"use client";
import Image from "next/image";
import { Heart, ShoppingCart, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Popup from "@/components/Main/Popup";
import toast from "react-hot-toast";

export default function ProductDetail({ product, relatedProducts = [] }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [showPopup, setShowPopup] = useState(false);
  const [addWishlist, setAddWishlist] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(
        "https://formsubmit.co/shreeshaktiinfratech@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setStatus("✅ Thank you! Your message has been sent.");
        e.target.reset(); // clear form
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Failed to send. Please check your connection.");
    }
  };

  const handleWishlist = async (e) => {
    if (addWishlist) {
      setAddWishlist(false)
      toast.error("Product removed from Wishlist")
    } else {
      setAddWishlist(true)
      toast.success("Product added to Wishlist")
    }
  }

  return (<>
    <section className="px-4 md:px-10 py-10 bg-amber-50">
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <div className="space-y-4 md:sticky md:top-24 h-fit">
          <div className="w-full h-[350px] md:h-[450px] bg-white rounded-xl shadow-lg border overflow-hidden flex items-center justify-center">
            <Image
              src={activeImage.src}
              alt={product.name}
              width={600}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {[product.image, ...(product.images || [])].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 rounded-lg border overflow-hidden flex-shrink-0
                  ${activeImage.src === img.src
                    ? "ring-2 ring-amber-500"
                    : "hover:ring-1"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`https://wa.me/+918826544443?text=Hello, I am interested in ${product.name}`}
              target="_blank"
              className="flex items-center justify-center gap-2 border border-green-500 text-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition font-semibold"
            >
              <FaWhatsapp size={18} />
              WhatsApp Now
            </a>

            <button onClick={() => setShowPopup(true)} className="flex items-center justify-center gap-2 border border-amber-500 text-amber-500 px-6 py-3 rounded-lg hover:bg-amber-500 hover:text-white transition font-semibold">
              <MessageCircle size={18} />
              Enquire Now
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl md:text-4xl font-bold text-[#3C2012]">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-amber-500">
            ₹ {product.price || "Get Latest Price"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#3C2012] text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition font-semibold">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button onClick={handleWishlist}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition duration-300 border
                ${addWishlist
                  ? "bg-[#3C2012] text-white border-[#3C2012] hover:bg-white hover:text-[#3C2012]"
                  : "bg-white text-[#3C2012] border-[#3C2012] hover:bg-[#3C2012] hover:text-white"
                }`}
            >
              <Heart
                size={18}
                className={`transition ${addWishlist ? "fill-white" : "fill-none"}`}
              />
              Wishlist
            </button>
          </div>

          <div className="bg-white rounded-xl shadow border mt-6 overflow-hidden">
            <h2 className="bg-amber-500 text-white px-4 py-3 font-semibold">
              Specifications
            </h2>

            <div className="divide-y">
              {product.specs?.map((spec, i) => (
                <div
                  key={i}
                  className="flex justify-between px-4 py-3 text-sm md:text-base"
                >
                  <span className="text-gray-700 font-medium">
                    {spec.label}
                  </span>
                  <span className="text-gray-600">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 bg-white rounded-xl shadow border">
        <h2 className="bg-[#3C2012] text-white px-6 py-3 rounded-t-xl text-xl font-semibold">
          Description
        </h2>

        <div className="p-6 space-y-4 text-gray-700">
          {product.description.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="text-xl font-bold text-[#3C2012]">
                  {block.text}
                </h2>
              );

            if (block.type === "p")
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: block.text }}
                />
              );

            if (block.type === "ul")
              return (
                <ul key={i} className="list-disc ml-6 space-y-2">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              );
          })}
        </div>
      </div>
    </section>

    {/* Related Products */}
    {relatedProducts?.length > 0 && (
      <div className="p-4 md:p-8">
        <h2 className="text-2xl md:text-5xl text-center text-amber-500 font-semibold mb-6">
          Related Products
          <span className="block h-1 w-30 bg-[#3C2012] mt-4 rounded-sm justify-self-center"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {relatedProducts.map((product) => (
            <Link href={`/products/${product?.slug}`} key={product.id} className="group border border-gray-200 hover:border-gray-400 rounded-xl p-2 bg-white shadow-sm hover:shadow-lg transition flex flex-col h-full">
              <div className="h-60 w-82 bg-gray-50 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image?.src}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex flex-col flex-grow px-2">
                <h3 className="text-lg items-center font-semibold text-gray-700 group-hover:text-gray-900 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>

                <p className="text-black my-1">
                  Model: {product.model}
                </p>

                <div className="mt-auto flex text-black gap-1">
                  Category:
                  <span className="inline-block text-sm bg-[#ffe7db] text-[#3C2012] px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}

    <div className="flex justify-center items-center mb-8">
      <Link href="/products">
        <button className="px-6 py-2 font-bold bg-[#3C2012] text-white rounded-lg hover:bg-[#2e180d] transition" >
          Explore More
        </button>
      </Link>
    </div>

    <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
  </>);
}