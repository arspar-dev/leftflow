import Image from "next/image";
import { FadeIn } from "@/components/animations";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function StatsSection({ dict }: Props) {
  const stats = [
    { value: "50+", label: dict.stats.items[0]?.label || "Projects" },
    { value: "%300", label: dict.stats.items[1]?.label || "Efficiency" },
    { value: "24/7", label: "AI Support" },
    { value: "3x", label: dict.stats.items[3]?.label || "Faster" },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/stats-background.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        <FadeIn>
          <p className="section-label accent-dot text-white/40 mb-4 text-center">{dict.stats.title}</p>
          <p className="body-16 text-white/40 text-center max-w-2xl mx-auto mb-16">
            {dict.stats.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center py-4">
                <AnimatedCounter
                  value={stat.value}
                  className="block text-[2.5rem] md:text-[3.25rem] font-light text-white tracking-tighter leading-none mb-3"
                />
                <p className="section-label text-white/30">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
