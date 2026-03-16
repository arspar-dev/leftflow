"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

export function TestimonialSection({ dict }: { dict: Dictionary }) {
  const items = dict.testimonials?.items || [dict.testimonial];
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <blockquote>
              <p className="text-xl italic text-charcoal-700 leading-relaxed mb-8">
                &ldquo;{items[active].quote}&rdquo;
              </p>
              <footer>
                <p className="font-bold text-charcoal-950">
                  {items[active].name}
                </p>
                <p className="text-sm text-charcoal-500">
                  {items[active].role}
                  {items[active].company && `, ${items[active].company}`}
                </p>
              </footer>
            </blockquote>

            <div className="flex justify-center gap-2 mt-10">
              {items.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === active
                      ? "bg-charcoal-950"
                      : "bg-charcoal-300 hover:bg-charcoal-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
