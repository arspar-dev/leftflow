import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { Industry } from "@/lib/industries";

interface Props {
  dict: Dictionary;
  locale: Locale;
  industries: Industry[];
}

export function IndustriesPreview({ dict, locale, industries }: Props) {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-950 mb-4">
              {dict.industries.title}
            </h2>
            <p className="text-charcoal-500 max-w-2xl mx-auto">
              {dict.industries.subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.slice(0, 6).map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/${locale}/industries/${industry.slug}`}
                className="block bg-charcoal-50 rounded-xl p-6 border border-charcoal-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-charcoal-950 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-charcoal-500 line-clamp-2">
                  {industry.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
