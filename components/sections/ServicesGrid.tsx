"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";

// Icons as components for cleaner usage
const ScrollIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 drop-shadow-sm">
        <path d="M12 8C12 5.79086 13.7909 4 16 4H52C54.2091 4 56 5.79086 56 8V52C56 56.4183 52.4183 60 48 60H16C13.7909 60 12 58.2091 12 56V8Z" fill="#FDE68A" fillOpacity="0.5" />
        <path d="M16 4H48C50.2091 4 52 5.79086 52 8V52C52 54.2091 50.2091 56 48 56H16C13.7909 56 12 54.2091 12 52V8C12 5.79086 13.7909 4 16 4Z" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 16H44" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <path d="M20 24H44" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <path d="M20 32H36" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <path d="M48 4L56 12" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MicroscopeIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 drop-shadow-sm">
        <circle cx="32" cy="32" r="28" fill="#E0E7FF" fillOpacity="0.5" />
        <path d="M32 12V24M32 24L24 36H40L32 24Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 36V44H40V36" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 52H44" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 44L44 52M28 44L20 52" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const HouseIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 drop-shadow-sm">
        <path d="M32 8L4 28H12V56H24V40H40V56H52V28H60L32 8Z" fill="#DCFCE7" fillOpacity="0.5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="24" width="8" height="8" fill="#16A34A" fillOpacity="0.3" />
    </svg>
);

const PersonIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 drop-shadow-sm">
        <circle cx="32" cy="20" r="10" fill="#FAE8FF" stroke="#9333EA" strokeWidth="2" />
        <path d="M12 56C12 44.9543 20.9543 36 32 36C43.0457 36 52 44.9543 52 56" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 56H52" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const benefits = [
    {
        title: "12+ YEARS EXPERIENCE",
        description: "Professional experience in Astrology, Vastu, and Energy sciences.",
        icon: <ScrollIcon />,
    },
    {
        title: "SCIENTIFIC APPROACH",
        description: "No superstition. We use logical, scientific energy alignment methods.",
        icon: <MicroscopeIcon />,
    },
    {
        title: "HOLISTIC SOLUTIONS",
        description: "Works for homes, offices, and industries with personalized care.",
        icon: <HouseIcon />,
    },
    {
        title: "PERSONALIZED",
        description: "Solutions strictly based on your individual birth chart and space.",
        icon: <PersonIcon />,
    },
];

export default function ServicesGrid() {
    return (
        <section className="section-spacing bg-cosmic-cream-100" id="why-choose-us">
            <div className="max-w-7xl mx-auto px-6">

                {/* Why Choose Shiv Cosmic */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cosmic-gold tracking-widest uppercase mb-4">
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
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center transition-all duration-300 border border-transparent hover:border-cosmic-gold/10"
                            >
                                <div className="transform transition-transform duration-300 group-hover:scale-110">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-serif text-cosmic-gold font-bold text-sm tracking-widest uppercase mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-cosmic-brown-700/80 text-sm leading-relaxed font-sans">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-16 text-center">
                        <Button
                            href="#contact"
                            className="bg-cosmic-gold text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-cosmic-brown-800 transition-colors uppercase shadow-lg shadow-cosmic-gold/20"
                        >
                            Book Your Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
