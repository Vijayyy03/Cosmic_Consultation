"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
}

export default function AnimatedSection({
    children,
    className = ""
}: AnimatedSectionProps) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={className}
        >
            {children}
        </motion.section>
    );
}
