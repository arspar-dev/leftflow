import { getDictionary, type Locale } from "@/lib/i18n";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { CasesPreview } from "@/components/sections/CasesPreview";
import { StatsSection } from "@/components/sections/StatsSection";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { industries } from "@/lib/industries";

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
      <ServicesSection dict={dict} locale={locale as Locale} />
      <WorkflowSection dict={dict} />
      <CasesPreview locale={locale as Locale} dict={dict} />
      <StatsSection dict={dict} locale={locale as Locale} />
      <IndustriesPreview dict={dict} locale={locale as Locale} industries={industries} />
      <TestimonialSection dict={dict} />
      <BlogPreview locale={locale as Locale} dict={dict} />
      <FAQSection dict={dict} />
      <LocationsSection dict={dict} />
      <ContactCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
