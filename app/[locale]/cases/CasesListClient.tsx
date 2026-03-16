"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PageTransition } from "@/components/animations";
import type { CaseStudy } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface Props {
  cases: CaseStudy[];
  categories: { value: string; label: string }[];
  locale: Locale;
  dict: Dictionary;
}

const categoryColors: Record<string, string> = {
  ai: "bg-primary-50 text-primary-600",
  automation: "bg-success-500/10 text-success-600",
  b2b: "bg-secondary-400/10 text-secondary-500",
  ecommerce: "bg-accent-400/10 text-accent-500",
  data: "bg-primary-50 text-primary-600",
  development: "bg-charcoal-100 text-charcoal-600",
};

export function CasesListClient({ cases, categories, locale, dict }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? cases
    : cases.filter((c) => c.category === activeCategory);

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                Our Success Stories
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4">
                Cases
              </h1>
              <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
                Discover how we help businesses grow with AI-powered automation and data-driven solutions.
              </p>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.value
                      ? "bg-primary-500 text-white shadow-md"
                      : "bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Cases Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => {
              const content = c[locale] || c.en;
              return (
                <StaggerItem key={c.slug}>
                  <Link href={`/${locale}/cases/${c.slug}`} className="group block h-full">
                    <div className="h-full bg-charcoal-50 rounded-2xl overflow-hidden border border-charcoal-200/60 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                      <div className="aspect-[16/10] overflow-hidden bg-charcoal-200">
                        <div
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url(${c.image})` }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[c.category] || "bg-charcoal-100 text-charcoal-600"}`}>
                            {c.category.toUpperCase()}
                          </span>
                          <span className="text-xs text-charcoal-400">{c.client}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-charcoal-800 mb-2 group-hover:text-primary-500 transition-colors">
                          {content.title}
                        </h3>
                        <p className="text-sm text-charcoal-500 mb-3 line-clamp-2">
                          {content.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-primary-500">
                          <span className="text-2xl">{c.metric}</span>
                          <span className="text-xs text-charcoal-400 font-normal">key metric</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-charcoal-500">
              No cases found for this category.
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
