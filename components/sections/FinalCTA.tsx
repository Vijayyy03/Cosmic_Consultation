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
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <Button variant="primary" icon={<span>→</span>}>
                            Book Consultation
                        </Button>
                        <Button
                            href="https://wa.me/919999999999"
                            variant="secondary"
                            icon={<span>💬</span>}
                        >
                            WhatsApp Now
                        </Button>
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
