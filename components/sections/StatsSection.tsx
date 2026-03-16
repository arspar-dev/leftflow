import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function StatsSection({ dict, locale }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-medium text-charcoal-500 uppercase tracking-wide mb-3">
              {dict.stats.label}
            </p>
            <h2 className="text-3xl font-bold text-charcoal-950 mb-4">
              {dict.stats.title}
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              {dict.stats.description}
            </p>
            <Link href={`/${locale}/contact`} className="btn-hh">
              {dict.nav.cta}
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-6">
            {dict.stats.items.map((stat: any, i: number) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 bg-charcoal-50 rounded-xl border border-charcoal-200">
                  <p className="text-3xl font-bold text-charcoal-950 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-charcoal-500">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
