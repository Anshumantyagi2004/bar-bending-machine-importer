import React from 'react'

export default function FormSection() {
    return (
        <section className="w-full px-4 py-10 md:px-15 bg-amber-50">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.788143255556!2d77.0528611!3d28.6061318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad4c9d93cfb%3A0xbced0bcc7aa415c0!2sShree%20Shakti%20Infratech-Trusted%20Bar%20Bending%20Machine%20Supplier!5e0!3m2!1sen!2sin!4v1775026202993!5m2!1sen!2sin"
                        className="w-full h-full rounded-xl shadow-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#3C2012] mb-4 text-center">
                        Contact Us
                    </h2>

                    <form className="flex flex-col gap-4 text-black">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                            required
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                            required
                        />

                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="p-3 border border-amber-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#3C2012] text-white py-3 rounded-md hover:bg-amber-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}