import { getDictionary, type Locale } from "@/lib/i18n";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ValuePropositions } from "@/components/sections/ValuePropositions";
import { TwoLinesSection } from "@/components/sections/TwoLinesSection";
import { CasesPreview } from "@/components/sections/CasesPreview";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { DualCtaSection } from "@/components/sections/DualCtaSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSection dict={dict} locale={locale as Locale} />
      <TrustedBySection dict={dict} />
      <TwoLinesSection dict={dict} locale={locale as Locale} />
      <ValuePropositions dict={dict} />
      <CasesPreview locale={locale as Locale} dict={dict} />
      <WorkflowSection dict={dict} />
      <StatsSection dict={dict} locale={locale as Locale} />
      <BlogPreview locale={locale as Locale} dict={dict} />
      <DualCtaSection locale={locale as Locale} dict={dict} />
    </>
  );
}
