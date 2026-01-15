"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const directions = [
    {
        title: "NORTH DIRECTION",
        description: "Vastu Shankh Yantra is used in the North direction to increase money flow or financial gain.",
        icon: "⬆️",
        color: "blue",
    },
    {
        title: "WEST DIRECTION",
        description: "A pair of Vastu Shankh Yantra is used to block west direction of any house for retention of wealth & prosperity.",
        icon: "⬅️",
        color: "orange",
    },
    {
        title: "EAST DIRECTION",
        description: "Vastu Shankh Yantra is used in East direction to bring harmony in family and marital relationship.",
        icon: "➡️",
        color: "green",
    },
    {
        title: "SOUTH DIRECTION",
        description: "A pair of Vastu Shankh Yantra is used to block south direction of any house for retention of wealth & prosperity.",
        icon: "⬇️",
        color: "red",
    },
];

export default function DirectionalVastu() {
    return (
        <section className="section-spacing bg-cosmic-cream-100 bg-compass relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-cosmic text-4xl md:text-5xl mb-4">
                        DIRECTIONAL VASTU
                    </h2>
                    <p className="text-cosmic-brown-800 text-lg">
                        Harness the power of directions for prosperity and harmony
                    </p>
                </motion.div>

                {/* Directions Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {directions.map((direction, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                        >
                            <div className="text-6xl mb-4">{direction.icon}</div>
                            <h3 className="font-serif font-bold text-xl text-cosmic-brown-900 mb-3 uppercase tracking-wide">
                                {direction.title}
                            </h3>
                            <p className="text-cosmic-brown-700 leading-relaxed text-sm">
                                {direction.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
