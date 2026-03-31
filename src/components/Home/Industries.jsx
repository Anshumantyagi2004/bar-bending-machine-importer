import React from "react";

const industries = [
    {
        title: "Construction & Infrastructure Projects",
        image: "",
    },
    {
        title: "Real Estate Development",
        image: "",
    },
    {
        title: "Road and Highway Construction",
        image: "",
    },
    {
        title: "Industrial Projects",
        image: "",
    },
    {
        title: "Builders and Contractors",
        image: "",
    },
];

const IndustriesSection = () => {
    return (
        <section className="py-10 px-4 md:px-15 bg-gray-50">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Industries We Serve
                    </h2>
                    <p className="text-gray-700 mt-2">
                        Our products are widely used across multiple sectors
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industries.map((item, index) => (
                        <div key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    );
};

export default IndustriesSection;