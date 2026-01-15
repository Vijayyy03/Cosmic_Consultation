"use client";

import AnimatedSection from "../AnimatedSection";

export default function VideoSection() {
    return (
        <AnimatedSection className="py-20 px-6 bg-cosmic-brown-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cosmic-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side - Text Content */}
                <div className="text-left space-y-6">
                    <h2 className="heading-cosmic text-4xl md:text-5xl lg:text-6xl text-cosmic-gold leading-tight">
                        See How We Transform Lives
                    </h2>
                    <div className="w-24 h-1 bg-cosmic-gold/50 rounded-full" />
                    <p className="text-cosmic-cream-100/80 text-lg md:text-xl font-serif leading-relaxed tracking-wide">
                        Discover the power of our personalized astrology and Vastu solutions.
                        Watch to understand how we align your cosmic path with success,
                        harmony, and abundance.
                    </p>

                    <div className="flex flex-col gap-4 text-cosmic-cream-200/60 font-serif text-sm pt-4">
                        <div className="flex items-center gap-3">
                            <span className="text-cosmic-gold text-xl">✦</span>
                            <span>Scientific Approach to Ancient Wisdom</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-cosmic-gold text-xl">✦</span>
                            <span>Practical Solutions, No Superstitions</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-cosmic-gold text-xl">✦</span>
                            <span>Proven Results for 1000+ Clients</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Video Container */}
                <div className="relative group">
                    {/* Decorative Border/Frame */}
                    <div className="absolute -inset-4 border border-cosmic-gold/20 rounded-2xl md:translate-x-2 md:translate-y-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
                    <div className="absolute -inset-4 border border-cosmic-gold/10 rounded-2xl -translate-x-2 -translate-y-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl glass-dark md:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border border-white/10">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/-7oALzHZES8"
                            title="Shiv Cosmic Energy Solutions"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

            </div>
        </AnimatedSection>
    );
}
