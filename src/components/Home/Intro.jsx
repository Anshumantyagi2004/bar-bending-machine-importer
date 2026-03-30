import React from "react";
import { Wrench, ShieldCheck, Headphones } from "lucide-react";

export default function Intro() {
    return (
        <section className="bg-amber-50 py-10">
            <div className="px-4 md:px-15 mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
                        India’s Leading{" "}
                        <span className="text-amber-500">Bar Bending Machine Importer</span>
                    </h2>

                    <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                       Founded in 2013, Shree Shakti Infratech is a leading <strong>Bar Bending Machine Importer</strong> and an ISO 9001:2013 certified company. We specialize in delivering high-quality imported construction machinery known for durability, precision, and superior performance. With a diverse portfolio of over 100 products—including Bar Cutting Machines, Concrete Mixers, Hoists, and Safety Equipment—we provide complete, end-to-end solutions for modern construction needs, backed by reliable 24/7 service support.
                    </p>

                    <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                       More than just a <strong>Bar Bending Machine Importer</strong>, we are committed to offering comprehensive solutions with expert technical assistance and prompt after-sales service. Our focus is to help builders and contractors achieve maximum productivity and long-term success through advanced imported machinery, consistent quality, and dependable support.
                    </p>

                    {/* FEATURES */}
                    {/* <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Wrench className="text-amber-600" size={22} />
                            <span className="text-gray-700">
                                Advanced & Durable Machinery
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-amber-600" size={22} />
                            <span className="text-gray-700">
                                ISO Certified Quality Assurance
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Headphones className="text-amber-600" size={22} />
                            <span className="text-gray-700">
                                24/7 After-Sales Support
                            </span>
                        </div>
                    </div> */}

                    {/* CTA */}
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                        Explore Products
                    </button>
                </div>

                <div className="h-80 md:h-130 w-120 overflow-hidden rounded-2xl flex items-center justify-center">
                    <img
                        src="/smog-gun.webp"
                        alt="Construction Machinery"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}