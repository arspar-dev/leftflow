import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const ap = (dict as any).advisoryPage || {};
  return {
    title: `Advisory — ${ap.heroTitle || "Leftflow"} | LeftFlow`,
    description: ap.heroSubtitle || "AI strategy advisory packages in partnership with Amsterdam Tech.",
  };
}

export default async function AdvisoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const ap = (dict as any).advisoryPage || {};
  const amt = (dict as any).amsterdamTechSection || {};

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] pt-[140px] pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(230,59,46,0.18), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(230,59,46,0.08), transparent 70%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-white/50 mb-6">
              {ap.kicker || "ADVISORY"}
            </p>
            <h1 className="heading-display text-white text-[2.75rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] tracking-[-0.025em] mb-8 max-w-4xl">
              {ap.heroTitle}
            </h1>
            <p className="body-18 text-white/55 max-w-2xl mb-10">
              {ap.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/contact?topic=advisory`}
                className="btn-hh-white"
              >
                {ap.primaryCta}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center gap-1.5 px-6 py-[14px] text-[0.875rem] font-medium text-white/85 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
              >
                {ap.secondaryCta}
                <span className="text-white/60">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main packages */}
      <section id="packages" className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-black/50 mb-6">
              {ap.packagesKicker}
            </p>
            <h2 className="heading-display text-black text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.05] tracking-[-0.025em] mb-16 max-w-3xl">
              {ap.packagesTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8">
            {(ap.packages || []).map((pkg: any, i: number) => (
              <StaggerItem key={i}>
                <div className="h-full flex flex-col bg-white border border-black/5 p-8 md:p-10 hover:border-black/20 transition-colors">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-[10px] font-semibold tracking-[0.14em] px-2.5 py-1 border border-[#e63b2e]/30 text-[#e63b2e] bg-[#e63b2e]/5">
                      PAKET {pkg.code}
                    </span>
                  </div>
                  <h3 className="heading-display text-black text-[1.5rem] md:text-[1.75rem] leading-[1.15] mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-black/50 text-[0.8125rem] uppercase tracking-[0.05em] mb-6">
                    {pkg.duration}
                  </p>
                  <p className="body-16 text-black/65 leading-relaxed mb-8">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2.5 mb-8 border-t border-black/5 pt-6">
                    {(pkg.scope || []).map((s: string, j: number) => (
                      <li key={j} className="flex gap-3 text-[0.875rem] text-black/70">
                        <span className="text-[#e63b2e] mt-1.5">—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-black/5">
                    <p className="text-[0.75rem] uppercase tracking-[0.08em] text-black/40 mb-2">
                      Uygun
                    </p>
                    <p className="text-[0.875rem] text-black/70">{pkg.fit}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Short engagements */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-white/50 mb-6">
              {ap.shortKicker}
            </p>
            <h2 className="heading-display text-white text-[2rem] md:text-[2.75rem] leading-[1.1] mb-16 max-w-2xl">
              {ap.shortTitle}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {(ap.short || []).map((s: any, i: number) => (
              <div key={i} className="bg-[#0a0a0a] p-8 md:p-10">
                <h3 className="heading-display text-white text-[1.5rem] mb-2">{s.name}</h3>
                <p className="text-white/40 text-[0.8125rem] uppercase tracking-[0.05em] mb-5">
                  {s.duration}
                </p>
                <p className="text-white/60 text-[0.9375rem] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-black/50 mb-6">{ap.approachKicker}</p>
            <h2 className="heading-display text-black text-[2.5rem] md:text-[3.25rem] leading-[1.05] mb-16 max-w-3xl">
              {ap.approachTitle}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {(ap.approach || []).map((a: any, i: number) => (
              <div key={i} className="flex gap-6 border-t border-black/10 pt-6">
                <span className="heading-display text-[#e63b2e] text-[2rem] leading-none tabular-nums">
                  {a.step}
                </span>
                <div>
                  <h3 className="heading-display text-black text-[1.375rem] mb-3">{a.title}</h3>
                  <p className="body-16 text-black/60 leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hourly band */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 text-center">
          <FadeIn>
            <p className="section-label accent-dot text-white/50 mb-8 justify-center inline-flex">
              {ap.kicker}
            </p>
            <h2 className="heading-display text-white text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none tracking-[-0.03em] mb-8">
              {ap.hourlyTitle}
            </h2>
            <p className="body-18 text-white/55 max-w-2xl mx-auto leading-relaxed">
              {ap.hourlyBody}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Amsterdam Tech academic check */}
      <section className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <p className="section-label accent-dot text-black/50 mb-6">
                {amt.kicker || "STRATEGIC PARTNERSHIP"}
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 border border-black/10 bg-white">
                <span className="w-2 h-2 bg-[#DA1219] rounded-full" />
                <span className="font-semibold tracking-[0.05em] text-black uppercase text-[0.875rem]">
                  Amsterdam Tech
                </span>
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="heading-display text-black text-[2rem] md:text-[2.75rem] leading-[1.1] mb-6">
                {ap.academicTitle}
              </h2>
              <p className="body-18 text-black/60 leading-relaxed mb-6">
                {ap.academicBody}
              </p>
              <Link
                href={`/${locale}/about#amsterdam-tech`}
                className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-black border-b border-black pb-0.5 hover:text-[#e63b2e] hover:border-[#e63b2e] transition-colors"
              >
                {amt.linkAdvisory || "About the partnership"} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-white/50 mb-6">{ap.faqKicker}</p>
            <h2 className="heading-display text-white text-[2.5rem] md:text-[3.25rem] leading-[1.05] mb-16">
              {ap.faqTitle}
            </h2>
          </FadeIn>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {(ap.faq || []).map((f: any, i: number) => (
              <details key={i} className="group py-8">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="heading-display text-white text-[1.25rem] md:text-[1.5rem] leading-snug">
                    {f.q}
                  </h3>
                  <span className="text-white/50 text-2xl leading-none mt-1 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="body-16 text-white/60 leading-relaxed mt-5 max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 text-center">
          <FadeIn>
            <h2 className="heading-display text-black text-[2.5rem] md:text-[3.5rem] leading-[1.05] mb-6">
              {ap.finalTitle}
            </h2>
            <p className="body-18 text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              {ap.finalBody}
            </p>
            <Link
              href={`/${locale}/contact?topic=advisory`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-[#e63b2e] transition-colors"
            >
              {ap.finalCta}
              <span>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
