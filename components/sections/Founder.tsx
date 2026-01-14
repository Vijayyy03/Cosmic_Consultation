"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Founder() {
    const achievements = [
        "25+ Years of Experience",
        "Award-Winning Astrologer",
        "10,000+ Satisfied Clients",
        "Internationally Recognized",
    ];

    return (
        <section id="founder" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image */}
                    <motion.div variants={staggerItem} className="order-2 md:order-1">
                        <div className="glass-dark rounded-2xl p-4 hover-lift">
                            <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-cosmic-700 to-cosmic-900 flex items-center justify-center">
                                <div className="text-center text-9xl">👨‍🏫</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={staggerItem} className="space-y-6 order-1 md:order-2">
                        <div>
                            <h3 className="text-gold-500 font-semibold mb-2">Meet the Expert</h3>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                                Dr. Shivsharan Manshetti
                            </h2>
                        </div>

                        <p className="text-xl text-white/80 leading-relaxed">
                            An internationally recognized authority in Vedic astrology and Vastu Shastra,
                            Dr. Manshetti has dedicated his life to helping individuals and businesses
                            align with cosmic energies for success and fulfillment.
                        </p>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="glass-dark rounded-lg p-4 text-center"
                                >
                                    <p className="text-white/90 font-semibold">{achievement}</p>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-white/70 italic">
                            "Your cosmic blueprint is unique. My mission is to help you decode it
                            and unlock your true potential."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
