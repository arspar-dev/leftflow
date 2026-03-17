import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import { services } from "@/lib/services";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal-950 pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#1a1a2e]" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {dict.services.label}
            </h1>
            <p className="text-lg text-charcoal-400 max-w-2xl">
              {dict.services.title}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const data = service[locale as keyof Pick<typeof service, "tr" | "en" | "nl">] || service.en;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="group block p-6 bg-white border border-charcoal-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                      <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal-950 mb-2 group-hover:text-primary-600 transition-colors">
                      {data.name}
                    </h3>
                    <p className="text-sm text-charcoal-500 leading-relaxed">
                      {data.subtitle.slice(0, 100)}...
                    </p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal-950 mb-4">
              {(dict as any).contactCTA?.title || "Ready to grow with AI?"}
            </h2>
            <p className="text-charcoal-500 mb-8">
              {(dict as any).contactCTA?.description}
            </p>
            <Link href={`/${locale}/contact`} className="btn-hh">
              {(dict as any).contactCTA?.button || "Schedule a call"} →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
