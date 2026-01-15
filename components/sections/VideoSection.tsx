"use client";

import AnimatedSection from "../AnimatedSection";

export default function VideoSection() {
    return (
        <AnimatedSection className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-gold-500">
                    See How We Transform Lives
                </h2>
                <p className="text-center text-white/70 text-lg mb-12 max-w-3xl mx-auto">
                    Watch how our personalized astrology and Vastu solutions can transform your life
                </p>

                {/* Video Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-dark p-2">
                    <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Shiv Cosmic Energy Solutions"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </AnimatedSection>
    );
}
