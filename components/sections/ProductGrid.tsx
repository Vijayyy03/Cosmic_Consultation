"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";
import Image from "next/image";

const services = [
    {
        title: "JANAM KUNDLI",
        price: "₹11,000",
        description: "Understand your past, present, and future through your birth chart. Career, love, health & financial insights.",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    },
    {
        title: "NUMEROLOGY REPORT",
        price: "On Request",
        description: "Analyze your name and DOB to reveal strengths, hidden talents, and life patterns. For name correction & business naming.",
        image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=400",
    },
    {
        title: "ASTRO MAPPING™",
        price: "Premium",
        description: "A powerful combination of astrology + numerology + energy science to align your life purpose and improve destiny flow.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
    },
    {
        title: "RESIDENTIAL VASTU",
        price: "₹75,000",
        description: "Correct Vastu without demolition. For Homes, Flats, Bungalows (up to 1000 sq.ft). Directional science & energy balancing.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
    },
    {
        title: "INDUSTRIAL VASTU",
        price: "₹1,51,000",
        description: "For Factories, Warehouses, Offices, Shops (up to 1,00,000 sq.ft). Improve cash flow, sales & productivity.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    },
];

export default function ProductGrid() {
    return (
        <section className="section-spacing bg-vastukalp-brown-900 bg-compass relative overflow-hidden" id="services">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 border-4 border-vastukalp-gold rounded-full" />
                <div className="absolute bottom-10 left-10 w-96 h-96 border-2 border-vastukalp-gold rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-vastukalp text-4xl md:text-5xl mb-3">
                        OUR CORE SERVICES
                    </h2>
                    <p className="text-vastukalp-gold text-xl font-serif">UNLOCK COSMIC WISDOM</p>
                </motion.div>

                {/* Product Grid - Centered & Responsive */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-vastukalp-cream-100 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col will-change-transform"
                        >
                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-200">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500 will-change-transform"
                                />
                            </div>

                            {/* Service Info */}
                            <div className="p-5 text-center flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-vastukalp-brown-900 mb-2 uppercase min-h-[3.5rem] flex items-center justify-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-vastukalp-brown-700 text-xs mb-4 line-clamp-4">
                                        {service.description}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-vastukalp-gold mb-3">
                                        {service.price}
                                    </p>
                                    <Button href="#contact" className="w-full text-xs py-2">
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
