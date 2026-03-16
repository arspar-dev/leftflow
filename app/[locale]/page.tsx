import { getDictionary, type Locale } from "@/lib/i18n";
import { industries } from "@/lib/industries";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { CasesPreview } from "@/components/sections/CasesPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageTransition } from "@/components/animations";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <PageTransition>
      <HeroSection dict={dict} locale={locale as Locale} />
      <TrustedBySection dict={dict} />
      <TrendingSection dict={dict} />
      <CasesPreview locale={locale as Locale} />
      <ServicesSection dict={dict} locale={locale as Locale} />
      <IndustriesPreview dict={dict} locale={locale as Locale} industries={industries} />
      <StatsSection dict={dict} locale={locale as Locale} />
      <TestimonialSection dict={dict} />
      <LocationsSection />
      <FAQSection dict={dict} />
      <ContactCTA locale={locale as Locale} />
    </PageTransition>
  );
}
