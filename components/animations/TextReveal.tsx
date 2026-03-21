"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

/**
 * Tasman-style word-by-word text reveal.
 * Each word slides up from behind a mask with stagger.
 */
export function TextReveal({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.7,
}: TextRevealProps) {
  const words = children.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              overflow: "hidden",
              display: "inline-block",
              marginRight: "0.3em",
            }}
          >
            <motion.span
              variants={{
                hidden: {
                  y: "110%",
                  opacity: 0,
                  rotateX: 45,
                },
                visible: {
                  y: "0%",
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    duration,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              style={{
                display: "inline-block",
                willChange: "transform, opacity",
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/**
 * Line-by-line reveal for paragraphs.
 * Wraps each line (split by \n or children) with a sliding mask.
 */
interface LineRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
}: LineRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
