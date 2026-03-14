"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n";

const integrations = [
  { name: "Slack", color: "#4A154B", icon: "S" },
  { name: "Salesforce", color: "#00A1E0", icon: "SF" },
  { name: "HubSpot", color: "#FF7A59", icon: "HS" },
  { name: "SAP", color: "#0FAAFF", icon: "SAP" },
  { name: "Shopify", color: "#96BF48", icon: "Sh" },
  { name: "Zapier", color: "#FF4A00", icon: "Z" },
  { name: "Google Cloud", color: "#4285F4", icon: "GC" },
  { name: "AWS", color: "#FF9900", icon: "AWS" },
  { name: "Stripe", color: "#635BFF", icon: "St" },
  { name: "Notion", color: "#000000", icon: "N" },
  { name: "Zendesk", color: "#03363D", icon: "ZD" },
  { name: "Microsoft 365", color: "#0078D4", icon: "M" },
];

export function IntegrationsSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>{dict.integrations.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {dict.integrations.title}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {dict.integrations.subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {integrations.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200 cursor-default">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700 transition-colors text-center">
                  {item.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
