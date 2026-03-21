"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedLogoProps {
  locale: string;
  variant?: "light" | "dark";
}

export function AnimatedLogo({ locale, variant = "dark" }: AnimatedLogoProps) {
  const textColor = variant === "dark" ? "text-charcoal-800" : "text-white";
  const accentColor = "text-primary-500";

  return (
    <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className="w-9 h-9 bg-primary-500 flex items-center justify-center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </motion.div>
      <div className="flex items-baseline">
        <span className={`text-xl font-bold ${textColor} transition-colors`}>
          left
        </span>
        <span className={`text-xl font-bold ${accentColor} transition-colors`}>
          flow
        </span>
      </div>
    </Link>
  );
}
