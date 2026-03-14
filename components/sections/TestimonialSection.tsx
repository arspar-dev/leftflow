"use client";

import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

export function TestimonialSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-32 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <blockquote className="text-center">
            <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-8">
              &ldquo;{dict.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600" />
              <div className="text-left">
                <p className="font-semibold text-slate-800">
                  {dict.testimonial.name}
                </p>
                <p className="text-sm text-slate-500">{dict.testimonial.role}</p>
              </div>
            </div>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
