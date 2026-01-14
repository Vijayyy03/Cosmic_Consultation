"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <motion.div
            className={`bg-white rounded-lg p-8 shadow-md border border-traditional-gold-500/20 ${hover ? "hover-lift" : ""} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={hover ? { y: -8, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)" } : {}}
        >
            {children}
        </motion.div>
    );
}
