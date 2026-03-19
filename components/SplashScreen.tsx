"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("splash-seen");
      if (seen) {
        setShow(false);
        return;
      }
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("splash-seen", "1");
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal-800"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative">
                {/* Glow ring */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-24 h-24 rounded-2xl bg-primary-500/20 blur-xl"
                />

                {/* Logo icon */}
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Brand text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex items-center gap-1"
            >
              <span className="text-4xl font-bold text-white tracking-tight">left</span>
              <span className="text-4xl font-bold text-primary-400 tracking-tight">flow</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="mt-3 text-charcoal-400 text-sm tracking-widest uppercase"
            >
              AI-Powered Automation
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-48 h-0.5 bg-charcoal-700 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-500 to-primary-500 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
