"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "../ui/Card";

export default function Services() {
    const services = [
        {
            icon: "📊",
            title: "KUNDLI ANALYSIS",
            description: "Detailed birth chart interpretation revealing life patterns, strengths, and opportunities.",
        },
        {
            icon: "🔢",
            title: "NUMEROLOGY",
            description: "Unlock the power of numbers to understand your personality, destiny, and life path.",
        },
        {
            icon: "🗺️",
            title: "ASTRO MAPPING",
            description: "Location-based astrology to find your most auspicious places for success.",
        },
        {
            icon: "🎓",
            title: "TRAINING & CONSULTATION",
            description: "Learn astrology and Vastu from an award-winning expert with personalized guidance.",
        },
    ];

    return (
        <section id="services" className="py-20 px-6 bg-traditional-cream-200">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading text-4xl md:text-5xl text-traditional-brown-800 mb-4">
                        OUR <span className="text-traditional-gold-500">SERVICES</span>
                    </h2>
                    <p className="text-xl text-traditional-brown-700 max-w-3xl mx-auto">
                        Comprehensive cosmic solutions tailored to your unique energy and life path
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={staggerItem}>
                            <Card className="text-center h-full">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="section-heading text-xl text-traditional-brown-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-traditional-brown-700 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
