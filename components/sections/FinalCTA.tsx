"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-20 px-6 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-cosmic-800 to-cosmic-900 opacity-50" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center space-y-8"
                >
                    {/* Heading */}
                    <motion.h2
                        variants={staggerItem}
                        className="font-serif text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Your Birth Chart <br />
                        <span className="text-gold-500 text-glow">
                            Already Holds the Answers
                        </span>
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        variants={staggerItem}
                        className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
                    >
                        Take the first step towards cosmic alignment and unlock the success,
                        harmony, and prosperity waiting for you.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col items-center gap-6 pt-4"
                    >
                        <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">
                            {/* Pricing Display */}
                            <div className="flex flex-col items-center gap-2 mb-2">
                                <p className="text-cosmic-gold font-serif text-xl md:text-2xl tracking-wide">
                                    Special Consultation Fee: <span className="font-bold">₹999</span>
                                </p>
                                <p className="text-white/60 text-sm md:text-base font-light tracking-wider uppercase">
                                    (Standard Fee: ₹2000)
                                </p>
                                <div className="text-white/40 text-xs tracking-[0.2em] mt-1">
                                    LIMITED ENGAGEMENT
                                </div>
                            </div>

                            <Button href="#consult" variant="primary" className="w-full md:w-auto text-lg px-10 py-5 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] border border-white/10">
                                <span className="tracking-widest">YES I AM READY</span> <span className="text-xl">→</span>
                            </Button>
                        </div>

                        <div className="flex flex-col items-center gap-2 mt-8 text-white/80">
                            <p className="font-serif italic text-lg tracking-wide">If you have any query you can call on the below no 👇</p>
                            <a href="tel:+919999999999" className="text-xl md:text-2xl font-serif text-cosmic-gold hover:text-white transition-colors flex items-center gap-2 mt-1">
                                📞 +91 99999 99999
                            </a>
                        </div>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        variants={staggerItem}
                        className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-white/60"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-gold-500 text-xl">✓</span>
                            <span>Confidential & Secure</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gold-500 text-xl">✓</span>
                            <span>Expert Guidance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gold-500 text-xl">✓</span>
                            <span>Proven Results</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
