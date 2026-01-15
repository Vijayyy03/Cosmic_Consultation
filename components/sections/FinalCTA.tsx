"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import MandalaBackground from "../MandalaBackground";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-cosmic-cream-100/80">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <MandalaBackground />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-12"
                >
                    {/* Heading Group */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cosmic-brown-900">
                            Your Birth Chart <br />
                            <span className="text-cosmic-gold italic">
                                Already Holds the Answers
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-cosmic-brown-700 max-w-2xl mx-auto font-medium leading-relaxed">
                            Unlock the cosmic blueprint of your life. Success, harmony, and prosperity are just a consultation away.
                        </p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-cosmic-gold/20 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cosmic-gold to-transparent opacity-50" />

                        <div className="flex flex-col items-center gap-8 relative z-10">
                            {/* Price Tag */}
                            <div className="text-center space-y-2">
                                <p className="text-cosmic-brown-600 text-sm font-bold tracking-[0.2em] uppercase">
                                    Limited Time Offer
                                </p>
                                <div className="flex items-baseline justify-center gap-3">
                                    <span className="font-serif text-5xl md:text-6xl font-bold text-cosmic-gold">
                                        ₹999
                                    </span>
                                    <span className="text-cosmic-brown-400 text-lg line-through decoration-cosmic-gold/50">
                                        ₹2000
                                    </span>
                                </div>
                                <p className="text-cosmic-brown-500 text-sm">
                                    Full Horoscope Analysis + Vastu Consultation
                                </p>
                            </div>

                            {/* Action Button */}
                            <Button
                                href="#consult"
                                className="w-full md:w-auto bg-cosmic-gold hover:bg-cosmic-brown-800 text-white text-lg px-12 py-4 shadow-lg shadow-cosmic-gold/25 hover:shadow-cosmic-brown-900/20 transition-all duration-300 font-bold tracking-widest uppercase transform hover:-translate-y-1"
                            >
                                Book My Slot Now
                            </Button>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 border-t border-cosmic-brown-100 w-full">
                                <div className="flex items-center gap-2 text-cosmic-brown-600 text-xs md:text-sm font-medium uppercase tracking-wider">
                                    <span className="text-green-500 text-lg">✓</span> 100% Confidential
                                </div>
                                <div className="flex items-center gap-2 text-cosmic-brown-600 text-xs md:text-sm font-medium uppercase tracking-wider">
                                    <span className="text-green-500 text-lg">✓</span> 45 Min Session
                                </div>
                                <div className="flex items-center gap-2 text-cosmic-brown-600 text-xs md:text-sm font-medium uppercase tracking-wider">
                                    <span className="text-green-500 text-lg">✓</span> Actionable Remedies
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                        <p className="font-serif italic text-cosmic-brown-600">
                            Have questions? Call us directly:
                        </p>
                        <a href="tel:+919999999999" className="text-xl font-serif font-bold text-cosmic-brown-900 hover:text-cosmic-gold transition-colors">
                            +91 99999 99999
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
