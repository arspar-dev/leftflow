"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui";
import type { Locale } from "@/lib/i18n";

interface CasesPreviewProps {
  locale: Locale;
}

const featuredCases = [
  {
    slug: "boutiquerugs",
    client: "BoutiqueRugs",
    category: "E-commerce",
    categoryColor: "bg-primary-50 text-primary-600",
    title: "AR Product Visualization for E-commerce",
    metric: "46% less cart abandonment",
    image: "/images/industry-ecommerce.jpg",
  },
  {
    slug: "westwing",
    client: "Westwing",
    category: "Sales Automation",
    categoryColor: "bg-secondary-400/10 text-secondary-500",
    title: "B2B Sales Automation Pipeline",
    metric: "€65K+ revenue generated",
    image: "/images/industry-retail.jpg",
  },
  {
    slug: "tolon",
    client: "Tolon",
    category: "B2B",
    categoryColor: "bg-accent-400/10 text-accent-500",
    title: "Market Leader Customer Acquisition",
    metric: "410 qualified customers",
    image: "/images/industry-manufacturing.jpg",
  },
  {
    slug: "naz-teknik",
    client: "Naz Teknik",
    category: "Automation",
    categoryColor: "bg-success-500/10 text-success-600",
    title: "Domestic Market Reach Expansion",
    metric: "850 qualified customers",
    image: "/images/industry-logistics.jpg",
  },
];

export function CasesPreview({ locale }: CasesPreviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                Our Success Stories
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-800">
                Cases that speak for themselves
              </h2>
            </div>
            <Button href={`/${locale}/cases`} variant="outline" size="sm" className="mt-4 sm:mt-0">
              View All Cases
            </Button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {featuredCases.map((c) => (
            <StaggerItem key={c.slug}>
              <Link href={`/${locale}/cases/${c.slug}`} className="group block">
                <div className="bg-charcoal-50 rounded-2xl overflow-hidden border border-charcoal-200/60 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden bg-charcoal-200">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${c.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${c.categoryColor}`}>
                        {c.category}
                      </span>
                      <span className="text-xs text-charcoal-400">{c.client}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2 group-hover:text-primary-500 transition-colors">
                      {c.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-success-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                      {c.metric}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
