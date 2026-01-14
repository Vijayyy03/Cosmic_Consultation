"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About Founder", href: "#about" },
        { name: "Core Services", href: "#services" },
        { name: "Why Choose Us", href: "#why-choose-us" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-vastukalp-brown-900 shadow-xl" : "bg-vastukalp-brown-900/95"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative h-16 w-60"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Shiv Cosmic Energy Solutions"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </motion.a>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-vastukalp-cream-100 hover:text-vastukalp-gold transition-colors font-medium uppercase text-xs xl:text-sm tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-vastukalp-gold p-2"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-vastukalp-gold transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-vastukalp-gold transition-all ${isMobileMenuOpen ? "opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-vastukalp-gold transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 space-y-3 pb-4 border-t border-vastukalp-gold/20 pt-4"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-vastukalp-cream-100 hover:text-vastukalp-gold transition-colors py-2 uppercase text-sm tracking-wide text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
