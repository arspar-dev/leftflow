"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-charcoal-800/60  border border-charcoal-700 shadow-sm hover:shadow-md hover:border-charcoal-600 transition-shadow ${paddings[padding]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
