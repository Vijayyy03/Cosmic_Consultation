"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=1920",
        title: "UNLOCK YOUR TRUE POTENTIAL",
        subtitle: "WITH ASTROLOGY, VASTU & ASTRO MAPPING™",
    },
    {
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920",
        title: "ALIGN YOUR LIFE",
        subtitle: "WITH POWERFUL COSMIC ENERGIES",
    },
    {
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920",
        title: "ACHIEVE PEACE & PROSPERITY",
        subtitle: "ANCIENT WISDOM + MODERN ENERGY SCIENCE",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cosmic-brown-900">
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            fill
                            priority={true}
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-cosmic-brown-900/60" />

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center text-center">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="max-w-4xl px-6"
                        >
                            <h1 className="heading-cosmic text-3xl md:text-5xl lg:text-7xl mb-6 text-shadow-gold leading-tight">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-cosmic-cream-100 text-xl md:text-2xl font-serif tracking-wide mb-8">
                                {slides[currentSlide].subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <Button href="#contact">Book Consultation</Button>
                                <Button href="#services" variant="outline">Get Your Report</Button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-cosmic-gold/80 hover:bg-cosmic-gold text-white p-3 md:p-4 rounded-full transition-all z-20"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-cosmic-gold/80 hover:bg-cosmic-gold text-white p-3 md:p-4 rounded-full transition-all z-20"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                            ? "bg-cosmic-gold w-8"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
