"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  icon,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600",
    secondary:
      "bg-charcoal-800 text-white hover:bg-charcoal-700",
    outline:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost:
      "text-charcoal-600 hover:text-primary-500 hover:bg-charcoal-100",
    white:
      "bg-white text-charcoal-800 hover:bg-charcoal-50 shadow-lg",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
