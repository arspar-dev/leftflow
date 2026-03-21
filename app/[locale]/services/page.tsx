import Link from "next/link";
import Image from "next/image";
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
      {/* Hero with process overview image */}
      <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/process-overview.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/80 to-charcoal-950/95" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28">
          <FadeIn>
            <p className="section-label accent-dot text-white/40 mb-6">
              {dict.services.label}
            </p>
            <h1 className="heading-display text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] mb-6 leading-[1.08]">
              {dict.services.title}
            </h1>
            <p className="body-18 text-white/50 max-w-2xl">
              {(dict as any).services?.subtitle || "We combine AI, automation, and modern web technologies to help your business grow."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-charcoal-950">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
            {services.map((service, i) => {
              const data = service[locale as keyof Pick<typeof service, "tr" | "en" | "nl">] || service.en;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="group block p-8 bg-charcoal-950 hover:bg-charcoal-900/50 transition-colors duration-500 h-full"
                  >
                    <p className="text-4xl font-semibold text-white/10 font-mono mb-6 group-hover:text-white/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-primary-400 transition-colors">
                      {data.name}
                    </h3>
                    <p className="body-14 text-white/40 leading-relaxed">
                      {data.subtitle.slice(0, 120)}...
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-white/20 group-hover:text-white/60 mt-4 transition-colors">
                      Learn more →
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className="py-16 md:py-24 bg-charcoal-950">
        <div className="max-w-[1000px] mx-auto px-8 md:px-12">
          <FadeIn>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/feature-dashboard.jpg"
                alt="AI Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal-950">
        <div className="max-w-[800px] mx-auto px-8 md:px-12 text-center">
          <FadeIn>
            <h2 className="heading-display text-white text-[1.75rem] md:text-[2.5rem] mb-4">
              {(dict as any).contactCTA?.title || "Ready to grow with AI?"}
            </h2>
            <p className="body-16 text-white/40 mb-8">
              {(dict as any).contactCTA?.description}
            </p>
            <Link href={`/${locale}/contact`} className="btn-hh-white">
              {(dict as any).contactCTA?.button || "Schedule a call"} →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
