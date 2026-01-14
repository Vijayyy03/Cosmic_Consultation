"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-traditional-cream-100">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-traditional-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-traditional-gold-400/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Main Heading */}
                    <motion.h1
                        variants={staggerItem}
                        className="section-heading text-4xl md:text-6xl lg:text-7xl text-traditional-brown-800 leading-tight"
                    >
                        WELCOME TO
                        <br />
                        <span className="text-traditional-gold-500 text-glow-gold">
                            SHIV COSMIC ENERGY SOLUTIONS
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={staggerItem}
                        className="text-xl md:text-2xl text-traditional-brown-700 max-w-4xl mx-auto leading-relaxed font-light"
                    >
                        Unlock your true potential with personalized astrology and Vastu solutions.
                        <br />
                        Align with cosmic energies for a harmonious, prosperous, and fulfilled life.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <Button href="#contact" variant="primary" icon={<span>→</span>}>
                            BOOK CONSULTATION
                        </Button>
                        <Button href="#kundli" variant="outline">
                            GET YOUR REPORT
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={staggerItem}
                        className="grid grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
                    >
                        <div className="text-center glass-light rounded-xl p-6">
                            <div className="text-4xl md:text-5xl font-bold text-traditional-gold-500 mb-2 font-serif">
                                10,000+
                            </div>
                            <div className="text-sm text-traditional-brown-700">Happy Clients</div>
                        </div>
                        <div className="text-center glass-light rounded-xl p-6">
                            <div className="text-4xl md:text-5xl font-bold text-traditional-gold-500 mb-2 font-serif">
                                25+
                            </div>
                            <div className="text-sm text-traditional-brown-700">Years Experience</div>
                        </div>
                        <div className="text-center glass-light rounded-xl p-6">
                            <div className="text-4xl md:text-5xl font-bold text-traditional-gold-500 mb-2 font-serif">
                                100%
                            </div>
                            <div className="text-sm text-traditional-brown-700">Satisfaction</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-traditional-gold-500 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-traditional-gold-500 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
