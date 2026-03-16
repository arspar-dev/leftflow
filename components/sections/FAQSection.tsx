"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

export function FAQSection({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              {dict.faq.label}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-800">
              {dict.faq.title}
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {dict.faq.items.map((item: any, i: number) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-charcoal-50 rounded-2xl border border-charcoal-200/60 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-charcoal-100 transition-colors"
                >
                  <span className="font-medium text-charcoal-800 pr-4">
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-charcoal-400 shrink-0"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-charcoal-500 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
