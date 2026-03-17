import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
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
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            {dict.stats.title}
          </h2>
          <p className="text-charcoal-400 text-center max-w-2xl mx-auto mb-16">
            {dict.stats.description}
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-charcoal-400 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
