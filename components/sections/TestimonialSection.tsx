"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n";

const avatarColors = [
  "from-primary-400 to-primary-600",
  "from-emerald-400 to-emerald-600",
  "from-amber-400 to-amber-600",
];

export function TestimonialSection({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState(0);
  const items = dict.testimonials?.items || [dict.testimonial];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel>{dict.testimonials?.label || "Testimonials"}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              {dict.testimonials?.title || "What our clients say"}
            </h2>
          </div>
        </FadeIn>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#2563eb" className="mx-0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-8">
                  &ldquo;{items[active].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[active % avatarColors.length]} flex items-center justify-center text-white font-bold text-lg`}>
                    {items[active].name?.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-slate-800">{items[active].name}</p>
                    <p className="text-sm text-slate-500">{items[active].role}</p>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active ? "bg-primary-500 w-8" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
