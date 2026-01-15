"use client";

import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <AnimatedSection className="py-24 px-6 bg-cosmic-brown-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cosmic-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side - Text Content */}
                <div className="text-left space-y-8">
                    <h2 className="font-serif text-5xl md:text-6xl text-cosmic-gold leading-tight tracking-wide">
                        SEE HOW WE <br />
                        TRANSFORM <br />
                        LIVES
                    </h2>
                    <div className="w-32 h-1 bg-cosmic-gold/30 rounded-full" />
                    <p className="text-cosmic-cream-200/80 text-lg md:text-xl font-serif leading-relaxed tracking-wide font-light">
                        Discover the power of our personalized astrology and Vastu solutions.
                        Watch to understand how we align your cosmic path with success,
                        harmony, and abundance.
                    </p>

                    <div className="flex flex-col gap-5 text-cosmic-cream-200/70 font-serif text-sm pt-4">
                        {[
                            "Scientific Approach to Ancient Wisdom",
                            "Practical Solutions, No Superstitions",
                            "Proven Results for 1000+ Clients"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="text-cosmic-gold text-sm">✦</span>
                                <span className="uppercase tracking-widest text-xs md:text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Custom Video Player */}
                <div className="relative group perspective-1000">
                    {/* Decorative Outer Frame */}
                    <div className="absolute -inset-4 border border-cosmic-gold/30 rounded-2xl md:translate-x-4 md:translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 opacity-60" />

                    {/* Main Video Container */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-cosmic-brown-800 border border-cosmic-gold/20 transform transition-transform duration-700 md:rotate-1 group-hover:rotate-0">
                        {/* Static Thumbnail & Play Button */}
                        <AnimatePresence>
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 cursor-pointer group/btn"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    {/* Thumbnail Image (High Res) */}
                                    <img
                                        src="https://img.youtube.com/vi/-7oALzHZES8/maxresdefault.jpg"
                                        alt="Video Thumbnail"
                                        className="w-full h-full object-cover opacity-90 group-hover/btn:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover/btn:bg-black/20 transition-colors duration-500" />

                                    {/* Custom Play Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-cosmic-gold bg-cosmic-brown-900/80 backdrop-blur-sm group-hover/btn:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-cosmic-gold border-b-[8px] border-b-transparent ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* YouTube Iframe (Loads on Click) */}
                        {isPlaying && (
                            <iframe
                                className="w-full h-full absolute inset-0 z-10"
                                src="https://www.youtube.com/embed/-7oALzHZES8?autoplay=1&rel=0&playsinline=1"
                                title="Shiv Cosmic Energy Solutions"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>

            </div>
        </AnimatedSection>
    );
}
