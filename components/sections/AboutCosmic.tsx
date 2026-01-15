"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

export default function AboutFounder() {
    return (
        <section className="section-spacing bg-cosmic-cream-100" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left - Image with Mandala Background */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Mandala Background */}
                            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                                <div className="w-[400px] h-[400px] rounded-full border-4 border-cosmic-gold/20 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-cosmic-gold/10 animate-[spin_15s_linear_infinite_reverse]" />
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
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="heading-cosmic text-3xl md:text-4xl lg:text-5xl mb-2"
                        >
                            MR. SHIVSHARAN MANSHETTI
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-cosmic-gold font-bold tracking-wider mb-6"
                        >
                            FOUNDER | EXPERT ASTROLOGER | VASTU CONSULTANT
                        </motion.p>

                        <motion.div
                            className="space-y-4 text-cosmic-brown-800 leading-relaxed text-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.5
                                    }
                                }
                            }}
                        >
                            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                                With <strong>12+ years of expertise</strong> in Astrology, Vastu Shastra, and Energy Healing, Mr. Shivsharan Manshetti is the visionary behind <strong>Astro Mapping™</strong> — a unique system that blends planetary science, numerology, and spatial energy alignment.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                                His work helps people remove negative energy blocks, improve financial flow, restore emotional balance, and create harmony in homes and businesses.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                                He is widely known for offering logical, practical solutions without superstition or unnecessary rituals.
                            </motion.p>
                        </motion.div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {[
                                "Remove negative blocks",
                                "Improve financial flow",
                                "Restore emotional balance",
                                "Create harmony"
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-cosmic-gold text-xl">✓</span> {feature}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 }}
                            className="mt-8"
                        >
                            <Button href="#contact" variant="primary">
                                Book Consultation
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
