"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
    {
        name: "MR. RAGHAV AGARWAL",
        title: "Renowned Businessman",
        text: "We were facing a lot of problems in our various factories related to labour and production. I came to know about the expert through one of my friends. When I consulted, we came to know all our south windows were open and we had more open space in south than in north. The remedies provided worked miraculously and the problems started diminishing one by one.",
    },
    {
        name: "MR. HITESH JAIN",
        title: "Delhi Based Prominent Builder And Industrialist",
        text: "Earlier I was not aware of vastu and many of my projects were on hold. But when I consulted, I was advised to use energy solutions and it really helped me. Now since past 6 years all my building projects were completed on time. All my apartments are now selling like hot cakes in the market.",
    },
    {
        name: "MR. ZUBIN SONGADWALA",
        title: "General Manager, ITC Sonar Bangla, Kolkata",
        text: "The basic purpose of Vastu solutions is to make you in sync with the forces of nature. Applying Vastu principles is not in any way inconvenient or makes you change your lifestyle. I believe one gets the feeling of WELL BEING and satisfaction after using proper energy alignment in their premises.",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section-spacing bg-cosmic-brown-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-10 w-96 h-96 border-2 border-cosmic-gold rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-cosmic text-4xl md:text-5xl mb-4 text-cosmic-gold">
                        TESTIMONIALS
                    </h2>
                    <p className="text-cosmic-cream-100/80 text-lg">
                        What our satisfied clients say
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="bg-cosmic-gold/20 px-6 py-2 rounded-full border border-cosmic-gold text-cosmic-gold font-bold text-lg flex items-center gap-2">
                            ⭐ Overall Rating 4.9/5
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials */}
                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-cosmic-cream-100 rounded-lg p-8 shadow-xl"
                        >
                            <p className="text-cosmic-brown-800 leading-relaxed mb-6 text-lg italic">
                                "{testimonial.text}"
                            </p>
                            <div className="border-t border-cosmic-gold/20 pt-4">
                                <h4 className="font-serif font-bold text-cosmic-gold text-xl mb-1">
                                    {testimonial.name}
                                </h4>
                                <p className="text-cosmic-brown-700 text-sm">{testimonial.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
