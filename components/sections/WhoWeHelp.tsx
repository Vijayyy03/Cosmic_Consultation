"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const targets = [
    {
        label: "Individuals",
        desc: "Seeking career & relationship clarity",
    },
    {
        label: "Homeowners",
        desc: "Wanting peace & prosperity",
    },
    {
        label: "Business Owners",
        desc: "For cash flow & productivity",
    },
    {
        label: "Spiritual Seekers",
        desc: "Genuine energy alignment",
    },
];

export default function WhoWeHelp() {
    return (
        <section className="section-spacing bg-cosmic-cream-100" id="who-we-help">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cosmic-gold tracking-widest uppercase">
                        WHO WE HELP
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {targets.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={staggerItem}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-lg p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-4 border-b-4 border-cosmic-gold hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="font-serif text-xl font-bold text-cosmic-brown-900 mb-4 tracking-wide">
                                {item.label}
                            </h3>
                            <p className="text-cosmic-brown-700/80 font-sans text-sm leading-relaxed tracking-wide">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
