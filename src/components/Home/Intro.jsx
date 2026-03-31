import React from "react";
import { Users, Briefcase, Award, Headphones } from "lucide-react";

export default function Intro() {
    return (<>
        <section className="bg-amber-50 py-10 px-4 md:px-15">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        India’s Trusted{" "}
                        <span className="text-amber-500">Bar Bending Machine</span>{" "}
                        Importer
                    </h1>

                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                        High-Quality Imported Construction Machinery for Modern Infrastructure
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-5">
                        Founded in 2013, <strong>Shree Shakti Infratech</strong> has established
                        itself as a trusted and leading{" "}
                        <strong>Bar Bending Machine Importer</strong> in India, delivering
                        high-performance construction machinery designed for precision,
                        durability, and efficiency.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        As an ISO-certified company, we are committed to providing advanced
                        imported machines that meet the growing demands of modern construction
                        and infrastructure development. With years of experience, we offer
                        reliable, cost-effective, and technologically advanced solutions to
                        enhance productivity and construction quality.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-[#3C2012] hover:bg-[#351b0e] text-white px-7 py-3 rounded-lg shadow-md transition">
                            Explore Products
                        </button>

                        <button className="border border-[#3C2012] text-[#3C2012] hover:bg-[#3C2012] hover:text-white px-7 py-3 rounded-lg transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center">

                    {/* Background Shape */}
                    <div className="absolute w-[90%] h-[90%] bg-amber-200 rounded-3xl right-0 top-10"></div>

                    {/* Image Card */}
                    <div className="relative bg-amber-300/40 backdrop-blur-md p-6 rounded-3xl shadow-xl">
                        <img
                            src="/smog-gun.webp"
                            alt="Construction Machine"
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>

        <section className="py-15 px-4 md:px-15 w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/bannner.webp')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Users
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">500+</h3>
                    <p className="text-black text-base mt-1">Happy Clients</p>
                </div>

                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Briefcase
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">50+</h3>
                    <p className="text-black text-base mt-1">Projects Completed</p>
                </div>

                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Award
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">10+</h3>
                    <p className="text-black text-base mt-1">Years Experience</p>
                </div>

                <div className="group border border-[#3C2012] rounded-xl p-6 hover:shadow-lg transition duration-300 hover:-translate-y-2">
                    <Headphones
                        className="mx-auto mb-3 text-[#3C2012] group-hover:scale-110 transition duration-300"
                        size={40}
                    />
                    <h3 className="text-3xl font-bold text-[#3C2012]">24/7</h3>
                    <p className="text-black text-base mt-1">Support</p>
                </div>
            </div>
        </section>
    </>);
}