"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
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
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
    secondary:
      "bg-slate-800 text-slate-200 hover:bg-slate-700",
    outline:
      "border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10",
    ghost:
      "text-slate-300 hover:text-primary-400 hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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
    >
      {content}
    </motion.button>
  );
}
