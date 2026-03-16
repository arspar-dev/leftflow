"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

export function FAQSection({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-charcoal-950 text-center mb-12">
            {dict.faq.title}
          </h2>
        </FadeIn>

        <div>
          {dict.faq.items.map((item: any, i: number) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="border-b border-charcoal-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-medium text-charcoal-950 pr-4">
                    {item.question}
                  </span>
                  <span className="text-charcoal-400 text-xl shrink-0 leading-none">
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-5 text-charcoal-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
