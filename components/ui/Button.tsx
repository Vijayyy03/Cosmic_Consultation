"use client";

import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const baseStyles = "inline-block px-8 py-3 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300";

    const variantStyles = {
        primary: "bg-vastukalp-gold hover:bg-vastukalp-gold/90 text-white shadow-lg hover:shadow-xl",
        secondary: "bg-vastukalp-brown-900 hover:bg-vastukalp-brown-800 text-vastukalp-cream-100",
        outline: "border-2 border-vastukalp-gold text-vastukalp-gold hover:bg-vastukalp-gold hover:text-white",
    };

    const Component = href ? "a" : "button";

    return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Component
                {...(href ? { href } : { onClick })}
                className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            >
                {children}
            </Component>
        </motion.div>
    );
}
