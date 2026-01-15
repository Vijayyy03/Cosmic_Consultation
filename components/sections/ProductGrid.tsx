"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);

    useEffect(() => {
        const generatedStars = [...Array(20)].map((_, i) => ({
            id: i,
            style: {
                width: Math.random() > 0.5 ? "3px" : "2px",
                height: Math.random() > 0.5 ? "3px" : "2px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            } as React.CSSProperties,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <section className="section-spacing bg-cosmic-brown-900 bg-compass relative overflow-hidden" id="services">
            {/* Animated Background Elements */}
            {/* Animated Background Elements - Constellations & Shooting Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
                {/* Background Gradient Pulse */}
                <motion.div
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-radial-gradient from-cosmic-gold/10 to-transparent"
                />

                {/* Floating Constellation - Libra Style */}
                <motion.div
                    initial={{ opacity: 0.15 }}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-64 h-64 opacity-20"
                >
                    <svg className="w-full h-full stroke-cosmic-gold fill-cosmic-gold" viewBox="0 0 100 100">
                        <circle cx="20" cy="80" r="1.5" />
                        <circle cx="50" cy="50" r="1.5" />
                        <circle cx="80" cy="20" r="1.5" />
                        <path d="M20 80 L50 50 L80 20" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                    </svg>
                </motion.div>

                {/* Floating Constellation - Cassiopeia Style */}
                <motion.div
                    initial={{ opacity: 0.15 }}
                    animate={{
                        y: [10, -10, 10],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 right-10 w-80 h-80 opacity-20"
                >
                    <svg className="w-full h-full stroke-cosmic-gold fill-cosmic-gold" viewBox="0 0 100 100">
                        <circle cx="10" cy="30" r="1.5" />
                        <circle cx="30" cy="70" r="1.5" />
                        <circle cx="50" cy="50" r="1.5" />
                        <circle cx="70" cy="70" r="1.5" />
                        <circle cx="90" cy="30" r="1.5" />
                        <path d="M10 30 L30 70 L50 50 L70 70 L90 30" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                    </svg>
                </motion.div>

                {/* Subtle Twinkling Stars */}
                {stars.map((star) => (
                    <motion.div
                        key={`star-${star.id}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                        className="absolute bg-cosmic-gold rounded-full shadow-[0_0_2px_#C5A059]"
                        style={star.style}
                    />
                ))}

                {/* Shooting Star */}
                <motion.div
                    initial={{ left: "-10%", top: "20%", opacity: 0 }}
                    animate={{
                        left: ["-10%", "120%"],
                        top: ["20%", "40%"],
                        opacity: [0, 1, 0, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, delay: 5, ease: "linear" }}
                    className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-cosmic-gold to-transparent opacity-60"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-cosmic text-4xl md:text-5xl mb-3">
                        OUR CORE SERVICES
                    </h2>
                    <p className="text-cosmic-gold text-xl font-serif">UNLOCK COSMIC WISDOM</p>
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
                            className="bg-cosmic-cream-100 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col will-change-transform"
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
                                    <h3 className="text-lg font-serif font-bold text-cosmic-brown-900 mb-2 uppercase min-h-[3.5rem] flex items-center justify-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-cosmic-brown-700 text-xs mb-4 line-clamp-4">
                                        {service.description}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-cosmic-gold mb-3">
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
