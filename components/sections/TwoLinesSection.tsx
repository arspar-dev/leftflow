"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

interface LineCardData {
  tag: string;
  title: string;
  description: string;
  items: { name: string; price?: string }[];
  cta: string;
  href: string;
  variant: "advisory" | "systems";
}

function LineCard({ data }: { data: LineCardData }) {
  const isAdvisory = data.variant === "advisory";
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-white border border-black/5 p-10 md:p-14 hover:border-black/20 transition-colors duration-500"
    >
      {/* Subtle corner accent gradient */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-[0.07] ${
          isAdvisory ? "bg-[#e63b2e]" : "bg-black"
        }`}
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      />

      {/* Tag pill */}
      <div className="flex items-center gap-2 mb-8">
        <span
          className={`text-[10px] font-semibold tracking-[0.14em] px-2.5 py-1 border ${
            isAdvisory
              ? "text-[#e63b2e] border-[#e63b2e]/30 bg-[#e63b2e]/5"
              : "text-black border-black/20 bg-black/[0.03]"
          }`}
        >
          {data.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="heading-display text-black text-[1.875rem] md:text-[2.25rem] leading-[1.1] tracking-[-0.02em] mb-5 max-w-md">
        {data.title}
      </h3>

      {/* Description */}
      <p className="body-16 text-black/55 leading-relaxed mb-10 max-w-lg">
        {data.description}
      </p>

      {/* Package list */}
      <ul className="space-y-0 mb-10 border-t border-black/5">
        {data.items.map((item, i) => (
          <li
            key={i}
            className="flex items-baseline justify-between gap-4 py-3.5 border-b border-black/5"
          >
            <span className="body-14 text-black/70">{item.name}</span>
            {item.price && (
              <span
                className={`body-14 font-semibold tabular-nums ${
                  isAdvisory ? "text-[#e63b2e]" : "text-black"
                }`}
              >
                {item.price}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={data.href}
          className={`inline-flex items-center gap-2 text-[0.875rem] font-medium group/link ${
            isAdvisory ? "text-[#e63b2e]" : "text-black"
          }`}
        >
          <span className="relative">
            {data.cta}
            <span
              className={`absolute bottom-0 left-0 w-full h-px ${
                isAdvisory ? "bg-[#e63b2e]" : "bg-black"
              } scale-x-100 origin-left`}
            />
          </span>
          <span className="transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export function TwoLinesSection({ dict, locale }: Props) {
  const tl = (dict as any).twoLines || {};
  if (!tl.advisory || !tl.systems) return null;

  return (
    <section className="relative bg-[#f5f4f0] py-24 md:py-32 overflow-hidden">
      {/* Background texture — layered radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(230,59,46,0.06), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(10,10,10,0.04), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="section-label accent-dot text-black/50 mb-6">
            {tl.kicker || "Two Lines"}
          </p>
          <h2 className="heading-display text-black text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.05] tracking-[-0.025em] mb-6">
            {tl.title}
          </h2>
          <p className="body-18 text-black/55 max-w-xl">{tl.subtitle}</p>
        </div>

        {/* Two cards grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <LineCard
            data={{
              tag: tl.advisory.tag,
              title: tl.advisory.title,
              description: tl.advisory.description,
              items: tl.advisory.items || [],
              cta: tl.advisory.cta,
              href: `/${locale}/advisory`,
              variant: "advisory",
            }}
          />
          <LineCard
            data={{
              tag: tl.systems.tag,
              title: tl.systems.title,
              description: tl.systems.description,
              items: tl.systems.items || [],
              cta: tl.systems.cta,
              href: `/${locale}/systems`,
              variant: "systems",
            }}
          />
        </div>
      </div>
    </section>
  );
}
