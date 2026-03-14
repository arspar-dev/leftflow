"use client";

import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

const logos = [
  "Google Cloud", "Microsoft", "Salesforce", "HubSpot",
  "SAP", "Slack", "Shopify", "AWS",
  "Stripe", "Zendesk", "Notion", "Zapier",
];

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm text-slate-400 mb-8 uppercase tracking-widest font-medium">
            {dict.trustedBy.title}
          </p>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee gap-12 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-slate-300 font-bold text-lg whitespace-nowrap select-none tracking-tight"
                style={{ minWidth: "fit-content" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
