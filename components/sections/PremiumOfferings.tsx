"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function PremiumOfferings() {
    const offerings = [
        {
            title: "Cosmic Chart Analysis",
            price: "₹11,000",
            features: [
                "Complete birth chart interpretation",
                "Detailed planetary analysis",
                "Future predictions for 5 years",
                "Career and relationship guidance",
                "Remedial solutions",
            ],
        },
        {
            title: "Cosmic Vastu Energy Alignment",
            subtitle: "Residential",
            price: "₹75,000",
            features: [
                "Complete home energy audit",
                "Room-by-room Vastu analysis",
                "Energy correction solutions",
                "Prosperity enhancement plan",
                "Ongoing support for 6 months",
            ],
        },
        {
            title: "Industrial Vastu Consultation",
            subtitle: "Commercial & Industrial",
            price: "₹1,51,000",
            features: [
                "Comprehensive site analysis",
                "Business growth optimization",
                "Employee wellness planning",
                "Financial prosperity solutions",
                "1 year consultation support",
            ],
            featured: true,
        },
    ];

    return (
        <section id="premium" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                        Premium <span className="text-gold-500">Offerings</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Transform your life with our comprehensive cosmic energy solutions
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {offerings.map((offering, index) => (
                        <motion.div key={index} variants={staggerItem}>
                            <Card
                                className={`h-full flex flex-col ${offering.featured
                                        ? "border-2 border-gold-500"
                                        : ""
                                    }`}
                            >
                                {offering.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-cosmic-900 px-6 py-1 rounded-full text-sm font-bold">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="font-serif text-2xl font-bold text-white mb-1">
                                        {offering.title}
                                    </h3>
                                    {offering.subtitle && (
                                        <p className="text-white/60 text-sm">{offering.subtitle}</p>
                                    )}
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-gold-500">
                                            {offering.price}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {offering.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-white/80">
                                            <span className="text-gold-500 mt-1">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    href="#contact"
                                    variant={offering.featured ? "primary" : "outline"}
                                    className="w-full"
                                >
                                    {offering.featured ? "Get Started" : "Call for Best Offer"}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
