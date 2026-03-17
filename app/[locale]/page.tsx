import { getDictionary, type Locale } from "@/lib/i18n";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CasesPreview } from "@/components/sections/CasesPreview";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Blueprint homepage: Hero → Logos → Services → Featured Case → How We Work → Stats → Blog → CTA */}
      <HeroSection dict={dict} locale={locale as Locale} />
      <TrustedBySection dict={dict} />
      <ServicesSection dict={dict} locale={locale as Locale} />
      <CasesPreview locale={locale as Locale} dict={dict} />
      <WorkflowSection dict={dict} />
      <StatsSection dict={dict} locale={locale as Locale} />
      <BlogPreview locale={locale as Locale} dict={dict} />
      <ContactCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
