"use client";

export default function MandalaBackground() {
    return (
        <>
            {/* Simplified Background with Static Pattern */}
            <div className="fixed inset-0 -z-10 bg-traditional-cream-100" />

            {/* Subtle Gradient Overlay - No animations for better performance */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-b from-traditional-cream-100 via-transparent to-traditional-cream-200 pointer-events-none" />
        </>
    );
}
