"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Button from "../ui/Button";

export default function KundliReport() {
    const features = [
        { icon: "🌟", text: "Complete life analysis - past, present, and future insights" },
        { icon: "💝", text: "Love, career, marriage guidance" },
        { icon: "💼", text: "Business and financial predictions" },
        { icon: "📧", text: "Delivered online via email within 48 hours" },
    ];

    return (
        <section id="kundli" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Content */}
                    <motion.div variants={staggerItem} className="space-y-6">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                            Janam Kundli <span className="text-gold-500">Report</span>
                        </h2>
                        <p className="text-xl text-white/70 leading-relaxed">
                            Your birth chart holds the cosmic blueprint of your life. Our comprehensive
                            Janam Kundli report provides deep insights into your destiny, relationships,
                            career, and spiritual path.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-2xl">{feature.icon}</span>
                                    <p className="text-white/80">{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={staggerItem}>
                            <Button href="#contact" variant="primary" icon={<span>→</span>}>
                                Buy Kundli Report
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        variants={staggerItem}
                        className="relative"
                    >
                        <div className="glass-dark rounded-2xl p-8 hover-lift">
                            <div className="aspect-square rounded-xl bg-gradient-to-br from-cosmic-700 to-cosmic-900 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🔮</div>
                                    <p className="text-gold-500 font-serif text-2xl font-bold">
                                        Your Cosmic Chart
                                    </p>
                                    <p className="text-white/60 mt-2">
                                        Personalized Analysis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
