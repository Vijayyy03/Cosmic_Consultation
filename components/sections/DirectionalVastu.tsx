"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const ArrowIcon = ({ rotation = 0 }: { rotation: number }) => (
    <div className="relative w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
        {/* Outer Glow/Ring */}
        <div className="absolute inset-0 rounded-full border border-cosmic-gold/20 group-hover:border-cosmic-gold/60 transition-colors duration-500" />
        <div className="absolute inset-2 rounded-full border border-cosmic-gold/10 group-hover:border-cosmic-gold/40 transition-colors duration-500" />

        {/* Inner Circle Background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-cosmic-cream-200 opacity-50" />

        {/* The Arrow SVG */}
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="absolute inset-0 w-12 h-12 m-auto text-cosmic-gold transform transition-transform duration-500"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <path
                d="M12 3L12 21M12 3L5 10M12 3L19 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

const directions = [
    {
        title: "NORTH DIRECTION",
        description: "Vastu Shankh Yantra is used in the North direction to increase money flow or financial gain.",
        rotation: 0,
    },
    {
        title: "WEST DIRECTION",
        description: "A pair of Vastu Shankh Yantra is used to block west direction of any house for retention of wealth & prosperity.",
        rotation: -90,
    },
    {
        title: "EAST DIRECTION",
        description: "Vastu Shankh Yantra is used in East direction to bring harmony in family and marital relationship.",
        rotation: 90,
    },
    {
        title: "SOUTH DIRECTION",
        description: "A pair of Vastu Shankh Yantra is used to block south direction of any house for retention of wealth & prosperity.",
        rotation: 180,
    },
];

export default function DirectionalVastu() {
    return (
        <section className="section-spacing bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-cosmic-gold/5 rounded-full pointer-events-none" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-cosmic-gold/5 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-cosmic-gold tracking-widest uppercase mb-4">
                        DIRECTIONAL VASTU
                    </h2>
                    <div className="w-24 h-0.5 bg-cosmic-gold/30 mx-auto mb-6" />
                    <p className="text-cosmic-brown-700/80 text-lg font-serif">
                        Harness the power of directions for prosperity and harmony
                    </p>
                </motion.div>

                {/* Directions Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {directions.map((direction, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -5 }}
                            className="bg-cosmic-cream-100/50 rounded-xl p-8 hover:shadow-[0_10px_40px_rgba(197,160,89,0.15)] transition-all duration-500 border border-transparent hover:border-cosmic-gold/20 group text-center"
                        >
                            <ArrowIcon rotation={direction.rotation} />

                            <h3 className="font-serif font-bold text-xl text-cosmic-brown-900 mb-4 uppercase tracking-widest relative inline-block">
                                {direction.title}
                                <span className="absolute -bottom-2 left-0 w-full h-px bg-cosmic-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </h3>

                            <p className="text-cosmic-brown-700/80 leading-relaxed text-sm font-medium">
                                {direction.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
