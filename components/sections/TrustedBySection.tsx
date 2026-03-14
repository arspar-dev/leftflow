"use client";

import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

/* Simplified but recognizable SVG logos */
const logos = [
  { name: "Google", svg: <svg viewBox="0 0 272 92" fill="currentColor" className="h-7"><path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/><path d="M225 3v65h-9.5V3h9.5z"/><path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/><path d="M35.29 41.19V32H67.4c.31 1.68.49 3.67.49 5.83 0 7.23-1.98 16.17-8.35 22.55C53.31 66.89 45.7 69.36 35.3 69.36 16.15 69.36 0 53.89 0 34.74S16.15.12 35.3.12c10.57 0 18.1 4.15 23.74 9.54l-6.68 6.68c-4.03-3.78-9.49-6.72-17.06-6.72-13.94 0-24.85 11.24-24.85 25.12s10.91 25.12 24.85 25.12c9.07 0 14.2-3.61 17.48-6.89 2.66-2.66 4.41-6.46 5.1-11.67l-22.59-.01z"/></svg> },
  { name: "Microsoft", svg: <svg viewBox="0 0 23 23" fill="currentColor" className="h-6"><path d="M1 1h10v10H1z" opacity="0.8"/><path d="M12 1h10v10H12z" opacity="0.6"/><path d="M1 12h10v10H1z" opacity="0.6"/><path d="M12 12h10v10H12z" opacity="0.4"/></svg> },
  { name: "Salesforce", svg: <span className="font-black text-lg tracking-tight">salesforce</span> },
  { name: "HubSpot", svg: <span className="font-bold text-lg tracking-tight">HubSpot</span> },
  { name: "SAP", svg: <span className="font-black text-xl tracking-wider">SAP</span> },
  { name: "Slack", svg: <svg viewBox="0 0 54 54" fill="currentColor" className="h-6"><path d="M19.7 3c-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4h5.4V8.4c0-3-2.4-5.4-5.4-5.4zm0 14.3H8.4c-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4h11.3c3 0 5.4-2.4 5.4-5.4 0-3-2.4-5.4-5.4-5.4z" opacity="0.7"/><path d="M50.7 22.7c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4v5.4h5.4c3 0 5.4-2.4 5.4-5.4zm-14.3 0V11.4c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4v11.3c0 3 2.4 5.4 5.4 5.4 3 0 5.4-2.4 5.4-5.4z" opacity="0.5"/><path d="M31 50.7c3 0 5.4-2.4 5.4-5.4 0-3-2.4-5.4-5.4-5.4h-5.4v5.4c0 3 2.4 5.4 5.4 5.4zm0-14.3h11.3c3 0 5.4-2.4 5.4-5.4 0-3-2.4-5.4-5.4-5.4H31c-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4z" opacity="0.7"/><path d="M3 31c0 3 2.4 5.4 5.4 5.4 3 0 5.4-2.4 5.4-5.4v-5.4H8.4C5.4 25.6 3 28 3 31zm14.3 0v11.3c0 3 2.4 5.4 5.4 5.4 3 0 5.4-2.4 5.4-5.4V31c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4z" opacity="0.5"/></svg> },
  { name: "Shopify", svg: <span className="font-bold text-lg tracking-tight">shopify</span> },
  { name: "AWS", svg: <span className="font-black text-xl tracking-widest">AWS</span> },
  { name: "Stripe", svg: <span className="font-bold text-lg tracking-tight italic">stripe</span> },
];

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs text-slate-400 mb-8 uppercase tracking-[0.2em] font-medium">
            {dict.trustedBy.title}
          </p>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee gap-16 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="text-slate-300 hover:text-slate-500 transition-colors shrink-0 flex items-center"
                style={{ minWidth: "fit-content" }}
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
