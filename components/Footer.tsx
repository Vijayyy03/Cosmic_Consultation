"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
    const year = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "About Founder", href: "#about" },
        { name: "Core Services", href: "#services" },
        { name: "Why Choose Us", href: "#why-choose-us" },
    ];

    const services = [
        "Janam Kundli",
        "Numerology Report",
        "Astro Mapping™",
        "Residential Vastu",
        "Industrial Vastu"
    ];

    const socialLinks = [
        { name: "WhatsApp", icon: "💬", href: "https://wa.me/917030127129" },
        { name: "Instagram", icon: "📷", href: "#" },
        { name: "Facebook", icon: "📘", href: "#" },
        { name: "YouTube", icon: "📺", href: "#" },
    ];

    return (
        <footer className="bg-cosmic-brown-900 text-cosmic-cream-100 pt-16 pb-6" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
                >
                    {/* Brand & Address */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-serif text-xl font-bold text-cosmic-gold mb-4 uppercase tracking-wide">
                            Shiv Cosmic Energy Solutions
                        </h4>
                        <div className="text-sm space-y-4 text-cosmic-cream-100/80 leading-relaxed">
                            <p>
                                <strong>Office:</strong><br />
                                BA IRIS, Baif Road, Wagholi,<br />
                                Pune – 412207, Maharashtra, India
                            </p>
                            <p>
                                <strong>Phone:</strong> +91 7030127129<br />
                                <strong>Email:</strong> info.shivcosmic@gmail.com
                            </p>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-serif text-xl font-bold text-cosmic-gold mb-4 uppercase tracking-wide">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-cosmic-cream-100/80 hover:text-cosmic-gold transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-serif text-xl font-bold text-cosmic-gold mb-4 uppercase tracking-wide">
                            Core Services
                        </h4>
                        <ul className="space-y-2">
                            {services.map((link, index) => (
                                <li key={index}>
                                    <span
                                        className="text-sm text-cosmic-cream-100/80"
                                    >
                                        {link}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <a href="tel:+917030127129" className="text-cosmic-gold font-bold text-lg hover:underline">
                                Call Now: +91 7030127129
                            </a>
                        </div>
                    </motion.div>

                    {/* Follow Us */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-serif text-xl font-bold text-cosmic-gold mb-4 uppercase tracking-wide">
                            Follow Us
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl hover:opacity-80 transition-opacity"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-cosmic-cream-100/10 text-center"
                >
                    <p className="text-sm text-cosmic-cream-100/60">
                        &copy; {year} Shiv Cosmic Energy Solutions. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
