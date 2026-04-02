"use client"
import React, { useState } from "react"
import { categories, products } from "@/Data/data"
import Link from "next/link";

export default function CategorySection() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [visibleCount, setVisibleCount] = useState(8);

    const filteredProducts = activeCategory === "all"
        ? products : products.filter((product) => product.category === activeCategory)

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    return (
        <section className="bg-white py-10 px-4 md:px-10">
            <h2 className="text-2xl md:text-5xl font-bold text-amber-500 mb-6 text-center">
                Product By Categories
                <span className="block h-1 w-30 bg-[#3C2012] mt-4 rounded-sm justify-self-center"></span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
                <button onClick={() => setActiveCategory("all")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
            ${activeCategory === "all" ? "bg-[#3C2012] text-white shadow-md scale-105" : "bg-gray-100 text-gray-700 hover:bg-amber-100"}`}>
                    All
                </button>

                {categories.map((category) => {
                    const Icon = category.icon
                    return (
                        <button key={category.id} onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                ${activeCategory === category.id ? "bg-[#3C2012] text-white shadow-md scale-105" : "bg-gray-100 text-gray-700 hover:bg-amber-100"}`}>
                            <Icon size={18} />
                            {category.name}
                        </button>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {visibleProducts.map((product) => (
                    <Link href={`products/${product?.slug}`} key={product.id} className="group border border-gray-200 hover:border-gray-400 rounded-xl p-2 bg-white shadow-sm hover:shadow-lg transition flex flex-col h-full">
                        <div className="h-60 sm:w-82 w-full bg-gray-50 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
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
                                <span className="inline-block capitalize text-sm bg-[#ffe7db] text-[#3C2012] px-3 py-1 rounded-full">
                                    {product.category.replace(/-/g, " ")}
                                </span>
                            </div>
                        </div>
                    </Link>))}
            </div>
            {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-6 gap-2 items-center">
                    <button onClick={() => setVisibleCount((prev) => prev + 8)}
                        className="px-6 py-2 font-bold bg-[#3C2012] text-white rounded-lg hover:bg-[#2e180d] transition"
                    >
                        View More
                    </button>
                    {visibleCount > 8 && (
                        <button onClick={() => { setVisibleCount(8); window.scrollTo({ top: 500, behavior: "smooth" }); }}
                            className="px-6 py-2 font-bold bg-[#ffeade] text-[#3C2012] rounded-lg hover:bg-[#ffddcd] transition"
                        >
                            View Less
                        </button>
                    )}
                </div>
            )}
        </section>
    )
}