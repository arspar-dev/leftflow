import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { FadeIn } from "@/components/animations";

const PRODUCT_SLUGS = ["customer-support-agent", "sales-outreach-agent", "content-engine", "operations-agent", "automation-agent", "custom-build"] as const;

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    PRODUCT_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const sp = (dict as any).systemsPage || {};
  const product = (sp.products || []).find((p: any) => p.slug === slug);
  if (!product) return { title: "Systems | LeftFlow" };
  return {
    title: `${product.name} — Systems | LeftFlow`,
    description: product.description,
  };
}

export default async function SystemsProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const sp = (dict as any).systemsPage || {};
  const product = (sp.products || []).find((p: any) => p.slug === slug);
  if (!product) notFound();

  const idx = (sp.products || []).findIndex((p: any) => p.slug === slug);
  const nextProduct = (sp.products || [])[(idx + 1) % (sp.products?.length || 1)];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] pt-[140px] pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 10%, rgba(230,59,46,0.16), transparent 70%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeIn>
            <Link
              href={`/${locale}/systems`}
              className="inline-flex items-center gap-2 text-white/50 text-[0.8125rem] uppercase tracking-[0.08em] mb-8 hover:text-white transition-colors"
            >
              ← {sp.kicker || "SYSTEMS"}
            </Link>
            <p className="section-label accent-dot text-white/50 mb-6">
              {sp.kicker} · {product.tag}
            </p>
            <h1 className="heading-display text-white text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.02] tracking-[-0.025em] mb-8 max-w-4xl">
              {product.name}
            </h1>
            <p className="body-18 text-white/55 max-w-2xl mb-10">{product.description}</p>

            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-white/10 max-w-2xl">
              <div>
                <p className="text-white/40 text-[0.6875rem] uppercase tracking-[0.12em] mb-2">
                  Timeline
                </p>
                <p className="text-white text-[1.25rem] font-semibold">{product.duration}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f5f4f0] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="section-label accent-dot text-black/50 mb-6">FEATURES</p>
              <h2 className="heading-display text-black text-[2rem] md:text-[2.75rem] leading-[1.05] tracking-[-0.02em] max-w-sm">
                What's included
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-black/10 border-t border-black/10">
                {(product.features || []).map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-6 py-5">
                    <span className="text-[#e63b2e] font-semibold tabular-nums text-[0.875rem] mt-1 min-w-[2ch]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="body-16 text-black/75">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement block */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="section-label accent-dot text-white/50 mb-6">
                {sp.retainerKicker || "POST-DELIVERY"}
              </p>
              <h2 className="heading-display text-white text-[2rem] md:text-[2.75rem] leading-[1.05] mb-6">
                {sp.retainerTitle}
              </h2>
              <p className="body-18 text-white/55 leading-relaxed">{sp.retainerBody}</p>
            </div>
            <div className="space-y-4">
              {(sp.retainers || []).map((r: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-6 px-6 py-5 border border-white/10 bg-white/[0.02]"
                >
                  <span className="text-[0.75rem] uppercase tracking-[0.14em] text-[#e63b2e] font-semibold">
                    {r.name}
                  </span>
                  <span className="text-white text-[1.125rem] font-semibold tabular-nums">
                    {r.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next product */}
      {nextProduct && nextProduct.slug !== slug && (
        <section className="bg-[#f5f4f0] py-20 md:py-24 border-t border-black/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-12">
            <Link
              href={`/${locale}/systems/${nextProduct.slug}`}
              className="group block"
            >
              <p className="text-black/40 text-[0.75rem] uppercase tracking-[0.12em] mb-3">
                Next →
              </p>
              <h3 className="heading-display text-black text-[2.5rem] md:text-[4rem] leading-[1] group-hover:text-[#e63b2e] transition-colors">
                {nextProduct.name}
              </h3>
            </Link>
          </div>
        </section>
      )}

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
              href={`/${locale}/contact?topic=systems-${slug}`}
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
