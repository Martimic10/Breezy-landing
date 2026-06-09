"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variants = fadeInUp,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px", amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
