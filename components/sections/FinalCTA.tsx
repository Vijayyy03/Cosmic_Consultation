"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-cosmic-cream-100">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center space-y-10"
                >
                    {/* Heading */}
                    <motion.h2
                        variants={staggerItem}
                        className="font-serif text-4xl md:text-6xl font-bold leading-tight text-cosmic-brown-900 mb-6"
                    >
                        Your Birth Chart <br />
                        <span className="italic relative inline-block">
                            Already Holds the Answers
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-cosmic-gold/30 rounded-full" />
                        </span>
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        variants={staggerItem}
                        className="text-lg md:text-xl text-cosmic-brown-700/80 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Take the first step towards cosmic alignment and unlock the success,
                        harmony, and prosperity waiting for you.
                    </motion.p>

                    {/* CTA Buttons & Pricing */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col items-center gap-8 pt-6"
                    >
                        <div className="flex flex-col items-center gap-8 w-full max-w-xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_40px_rgba(197,160,89,0.1)] border border-cosmic-gold/10">
                            {/* Pricing Display */}
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-cosmic-gold font-serif text-2xl md:text-3xl tracking-wide">
                                    Special Consultation Fee: <span className="font-bold">₹999</span>
                                </p>
                                <p className="text-cosmic-brown-400 text-sm md:text-base font-medium tracking-wider uppercase line-through decoration-cosmic-gold/50">
                                    (Standard Fee: ₹2000)
                                </p>
                                <div className="text-cosmic-gold/80 text-xs tracking-[0.3em] font-bold mt-2 bg-cosmic-gold/5 px-4 py-1 rounded-full border border-cosmic-gold/20">
                                    LIMITED ENGAGEMENT
                                </div>
                            </div>

                            <Button
                                href="#consult"
                                variant="primary"
                                className="w-full md:w-auto text-lg px-12 py-5 flex items-center justify-center gap-3 shadow-xl shadow-cosmic-gold/20 hover:shadow-2xl hover:shadow-cosmic-gold/30 transition-shadow duration-300"
                            >
                                <span className="tracking-widest font-bold">YES I AM READY</span> <span className="text-xl">→</span>
                            </Button>
                        </div>

                        <div className="flex flex-col items-center gap-3 mt-4 text-cosmic-brown-800">
                            <p className="font-serif italic text-lg tracking-wide text-cosmic-brown-600">
                                If you have any query you can call on the below no 👇
                            </p>
                            <a href="tel:+919999999999" className="text-xl md:text-2xl font-serif text-cosmic-gold hover:text-cosmic-brown-900 transition-colors flex items-center gap-2 font-bold">
                                📞 +91 99999 99999
                            </a>
                        </div>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        variants={staggerItem}
                        className="pt-6 flex flex-col md:flex-row items-center justify-center gap-8 text-cosmic-brown-400 text-sm tracking-wider uppercase font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-cosmic-gold text-lg">✓</span>
                            <span>Confidential & Secure</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-cosmic-gold text-lg">✓</span>
                            <span>Expert Guidance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-cosmic-gold text-lg">✓</span>
                            <span>Proven Results</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
