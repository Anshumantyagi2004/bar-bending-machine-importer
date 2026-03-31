"use client";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Award,
    Layers,
    Users,
    Headphones,
    Truck,
} from "lucide-react";

export default function WhyChoose() {
    const features = [
        {
            icon: Award,
            title: "Premium Imported Machinery",
            desc: "Globally sourced machines ensuring advanced technology and superior quality.",
            color: "group-hover:bg-orange-500",
            text: "text-orange-500",
            light: "bg-orange-100",
        },
        {
            icon: ShieldCheck,
            title: "ISO-Certified Quality",
            desc: "Strict standards ensuring durability and long-term performance.",
            color: "group-hover:bg-green-600",
            text: "text-green-600",
            light: "bg-green-100",
        },
        {
            icon: Layers,
            title: "Wide Product Range",
            desc: "100+ products for complete construction solutions.",
            color: "group-hover:bg-blue-600",
            text: "text-blue-600",
            light: "bg-blue-100",
        },
        {
            icon: Users,
            title: "Expert Guidance",
            desc: "Professional consultation for best machinery selection.",
            color: "group-hover:bg-purple-600",
            text: "text-purple-600",
            light: "bg-purple-100",
        },
        {
            icon: Headphones,
            title: "After-Sales Support",
            desc: "Reliable maintenance and quick issue resolution.",
            color: "group-hover:bg-pink-600",
            text: "text-pink-600",
            light: "bg-pink-100",
        },
        {
            icon: Truck,
            title: "Pan India Supply",
            desc: "Efficient delivery across India with strong logistics.",
            color: "group-hover:bg-teal-600",
            text: "text-teal-600",
            light: "bg-teal-100",
        },
    ];

    return (
        <section className="py-10 px-4 md:px-15 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Why We Are the Preferred{" "}
                        <span className="text-amber-500">Bar Bending Machine Importer</span> in India
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300"
                            >
                                <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 
                                        ${item.light}  ${item.color} transition duration-300`}>
                                    <Icon
                                        size={28}
                                        className={`${item.text} group-hover:text-white transition duration-300`}
                                    />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}