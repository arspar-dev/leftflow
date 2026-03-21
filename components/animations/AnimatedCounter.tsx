"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * Animated number counter — parses prefix/suffix from value strings
 * like "300%", "2.5x", "24/7", "<1s", "65K+", "$99"
 * Counts up from 0 to numeric part on scroll into view.
 */
export function AnimatedCounter({
  value,
  className = "",
  duration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Parse numeric value and prefix/suffix
  const { prefix, number, suffix, hasDecimal } = parseValue(value);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  const display = useTransform(springValue, (current) => {
    if (hasDecimal) {
      return `${prefix}${current.toFixed(1)}${suffix}`;
    }
    return `${prefix}${Math.round(current)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(number);
    }
  }, [isInView, springValue, number]);

  // Non-numeric values (like "24/7") just fade in
  if (number === 0 && !value.match(/^[0%$<>]/)) {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {value}
      </motion.span>
    );
  }

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

function parseValue(raw: string): {
  prefix: string;
  number: number;
  suffix: string;
  hasDecimal: boolean;
} {
  // Handle special cases
  if (raw === "24/7") return { prefix: "", number: 0, suffix: "", hasDecimal: false };

  let prefix = "";
  let suffix = "";
  let numStr = raw;

  // Extract leading non-numeric chars (except . and -)
  const leadMatch = numStr.match(/^([^0-9.]*)/);
  if (leadMatch && leadMatch[1]) {
    prefix = leadMatch[1];
    numStr = numStr.slice(prefix.length);
  }

  // Extract trailing non-numeric chars
  const trailMatch = numStr.match(/([^0-9.]*)$/);
  if (trailMatch && trailMatch[1]) {
    suffix = trailMatch[1];
    numStr = numStr.slice(0, numStr.length - suffix.length);
  }

  const number = parseFloat(numStr) || 0;
  const hasDecimal = numStr.includes(".");

  return { prefix, number, suffix, hasDecimal };
}
