"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

export default function AboutFounder() {
    return (
        <section className="section-spacing bg-vastukalp-cream-100" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left - Image with Mandala Background */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Mandala Background */}
                            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                                <div className="w-[400px] h-[400px] rounded-full border-4 border-vastukalp-gold/20" />
                                <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-vastukalp-gold/10" />
                            </div>

                            {/* Expert Image */}
                            <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/founder.png"
                                    alt="Mr. Shivsharan Manshetti"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="heading-vastukalp text-3xl md:text-4xl lg:text-5xl mb-2">
                            MR. SHIVSHARAN MANSHETTI
                        </h2>
                        <p className="text-vastukalp-gold font-bold tracking-wider mb-6">
                            FOUNDER | EXPERT ASTROLOGER | VASTU CONSULTANT
                        </p>

                        <div className="space-y-4 text-vastukalp-brown-800 leading-relaxed text-lg">
                            <p>
                                With <strong>12+ years of expertise</strong> in Astrology, Vastu Shastra, and Energy Healing, Mr. Shivsharan Manshetti is the visionary behind <strong>Astro Mapping™</strong> — a unique system that blends planetary science, numerology, and spatial energy alignment.
                            </p>
                            <p>
                                His work helps people remove negative energy blocks, improve financial flow, restore emotional balance, and create harmony in homes and businesses.
                            </p>
                            <p>
                                He is widely known for offering logical, practical solutions without superstition or unnecessary rituals.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-vastukalp-gold text-xl">✓</span> Remove negative blocks
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-vastukalp-gold text-xl">✓</span> Improve financial flow
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-vastukalp-gold text-xl">✓</span> Restore emotional balance
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-vastukalp-gold text-xl">✓</span> Create harmony
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button href="#contact" variant="primary">
                                Book Consultation
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
