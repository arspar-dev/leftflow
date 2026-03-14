"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n";

export function FAQSection({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>{dict.faq.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            {dict.faq.title}
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {dict.faq.items.map((item: any, i: number) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/80 transition-colors"
                >
                  <span className="font-medium text-slate-200 pr-4">
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
                    className="text-slate-500 shrink-0"
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
                      <p className="px-5 pb-5 text-slate-400 leading-relaxed">
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
