"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";

const benefits = [
    {
        title: "12+ YEARS EXPERIENCE",
        description: "Professional experience in Astrology, Vastu, and Energy sciences.",
        icon: "📜",
    },
    {
        title: "SCIENTIFIC APPROACH",
        description: "No superstition. We use logical, scientific energy alignment methods.",
        icon: "🔬",
    },
    {
        title: "HOLISTIC SOLUTIONS",
        description: "Works for homes, offices, and industries with personalized care.",
        icon: "🏡",
    },
    {
        title: "PERSONALIZED",
        description: "Solutions strictly based on your individual birth chart and space.",
        icon: "👤",
    },
];

const targets = [
    { label: "Individuals", desc: "Seeking career & relationship clarity" },
    { label: "Homeowners", desc: "Wanting peace & prosperity" },
    { label: "Business Owners", desc: "For cash flow & productivity" },
    { label: "Spiritual Seekers", desc: "Genuine energy alignment" },
];

export default function ServicesGrid() {
    return (
        <section className="section-spacing bg-cosmic-cream-200" id="why-choose-us">
            <div className="max-w-7xl mx-auto px-6">

                {/* Who We Help */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-12"
                    >
                        <h2 className="heading-cosmic text-3xl md:text-4xl mb-4">
                            WHO WE HELP
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {targets.map((item, idx) => (
                            <motion.div key={idx} variants={staggerItem} className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-cosmic-gold will-change-transform">
                                <h3 className="font-serif text-lg font-bold text-cosmic-brown-900 mb-2">{item.label}</h3>
                                <p className="text-sm text-cosmic-brown-700">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>


                {/* Why Choose Shiv Cosmic */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-12"
                    >
                        <h2 className="heading-cosmic text-3xl md:text-4xl mb-4">
                            WHY CHOOSE SHIV COSMIC?
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-4 gap-8"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl text-center group transition-all hover:-translate-y-1 will-change-transform"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                <h3 className="heading-cosmic text-sm mb-3 font-bold">
                                    {benefit.title}
                                </h3>
                                <p className="text-cosmic-brown-800 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-12 text-center">
                        <Button href="#contact" variant="primary">
                            Book Your Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
