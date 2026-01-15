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
                        <div className="flex flex-col items-center gap-2">
                            <Button href="#consult" variant="primary" className="text-lg px-8 py-4 flex items-center justify-center gap-2">
                                YES I AM READY FOR ONE - ONE Consultation <span className="text-xl">→</span>
                            </Button>
                            <div className="flex items-center gap-3 text-white">
                                <span className="text-lg">1hr : one to one :</span>
                                <span className="text-2xl font-bold text-cosmic-gold">₹999</span>
                                <span className="text-lg opacity-50 line-through">₹2000</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 mt-4 text-white/80">
                            <p className="font-medium">If you have any query you can call on the below no 👇</p>
                            <a href="tel:+919999999999" className="text-xl font-bold hover:text-cosmic-gold transition-colors flex items-center gap-2">
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
