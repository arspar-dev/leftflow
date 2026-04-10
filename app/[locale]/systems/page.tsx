import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { buildPageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const sp = (dict as any).systemsPage || {};
  return buildPageMeta({
    locale,
    path: "/systems",
    title: `Systems — ${sp.heroTitle || "Leftflow"} | LeftFlow`,
    description: sp.heroSubtitle || "Productized AI agent systems with enterprise fit.",
  });
}

export default async function SystemsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const sp = (dict as any).systemsPage || {};

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] pt-[140px] pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(255,255,255,0.08), transparent 70%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(230,59,46,0.1), transparent 70%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-white/50 mb-6">{sp.kicker}</p>
            <h1 className="heading-display text-white text-[2.75rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] tracking-[-0.025em] mb-8 max-w-4xl">
              {sp.heroTitle}
            </h1>
            <p className="body-18 text-white/55 max-w-2xl mb-10">{sp.heroSubtitle}</p>
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="#products" className="btn-hh-white">
                {sp.primaryCta}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href={`/${locale}/contact?topic=systems`}
                className="inline-flex items-center gap-1.5 px-6 py-[14px] text-[0.875rem] font-medium text-white/85 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
              >
                {sp.secondaryCta}
                <span className="text-white/60">→</span>
              </Link>
            </div>

            {/* Tech bar */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/30 text-[0.6875rem] uppercase tracking-[0.12em] mb-4">
                Built on
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {(sp.techBar || []).map((t: string, i: number) => (
                  <span
                    key={i}
                    className="text-white/70 text-[0.9375rem] font-medium tracking-tight"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-black/50 mb-6">{sp.productsKicker}</p>
            <h2 className="heading-display text-black text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.05] tracking-[-0.025em] mb-16 max-w-3xl">
              {sp.productsTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 md:gap-8">
            {(sp.products || []).map((p: any, i: number) => (
              <StaggerItem key={i}>
                <Link
                  href={`/${locale}/systems/${p.slug}`}
                  className="group h-full flex flex-col bg-white border border-black/5 p-10 md:p-12 hover:border-black transition-colors"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-[10px] font-semibold tracking-[0.14em] px-2.5 py-1 border border-black/20 text-black bg-black/[0.03]">
                      {p.tag}
                    </span>
                    <span className="text-black/30 text-[0.75rem] uppercase tracking-[0.08em]">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="heading-display text-black text-[2rem] md:text-[2.5rem] leading-[1.05] mb-4 group-hover:text-[#e63b2e] transition-colors">
                    {p.name}
                  </h3>
                  <p className="body-16 text-black/60 leading-relaxed mb-8">{p.description}</p>
                  <ul className="space-y-2 mb-10 flex-1">
                    {(p.features || []).map((f: string, j: number) => (
                      <li key={j} className="flex gap-3 text-[0.875rem] text-black/70">
                        <span className="text-black/30 mt-1.5">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-black/10 flex items-center gap-2 text-[0.875rem] font-medium text-black">
                    <span>→</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {p.name}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Retainer tiers */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-white/50 mb-6">{sp.retainerKicker}</p>
            <h2 className="heading-display text-white text-[2.5rem] md:text-[3.25rem] leading-[1.05] mb-6 max-w-2xl">
              {sp.retainerTitle}
            </h2>
            <p className="body-18 text-white/55 max-w-2xl mb-16">{sp.retainerBody}</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {(sp.retainers || []).map((r: any, i: number) => (
              <div key={i} className="bg-[#0a0a0a] p-10 md:p-12">
                <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-[#e63b2e] mb-4">
                  {r.name}
                </p>
                <p className="heading-display text-white text-[2.25rem] md:text-[2.5rem] leading-none mb-8 tabular-nums">
                  {r.price}
                </p>
                <ul className="space-y-3 border-t border-white/10 pt-6">
                  {(r.items || []).map((it: string, j: number) => (
                    <li key={j} className="flex gap-3 text-[0.9375rem] text-white/65">
                      <span className="text-white/30">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12">
          <FadeIn>
            <p className="section-label accent-dot text-black/50 mb-6">{sp.faqKicker}</p>
            <h2 className="heading-display text-black text-[2.5rem] md:text-[3.25rem] leading-[1.05] mb-16">
              {sp.faqTitle}
            </h2>
          </FadeIn>
          <div className="divide-y divide-black/10 border-t border-black/10">
            {(sp.faq || []).map((f: any, i: number) => (
              <details key={i} className="group py-8">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="heading-display text-black text-[1.25rem] md:text-[1.5rem] leading-snug">
                    {f.q}
                  </h3>
                  <span className="text-black/50 text-2xl leading-none mt-1 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="body-16 text-black/60 leading-relaxed mt-5 max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 text-center">
          <FadeIn>
            <h2 className="heading-display text-white text-[2.5rem] md:text-[3.5rem] leading-[1.05] mb-6">
              {sp.finalTitle}
            </h2>
            <p className="body-18 text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              {sp.finalBody}
            </p>
            <Link
              href={`/${locale}/contact?topic=systems`}
              className="btn-hh-white"
            >
              {sp.finalCta}
              <span className="ml-2">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
