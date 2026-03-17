"use client";

import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface LocationsSectionProps {
  dict: Dictionary;
}

const offices = [
  {
    city: "Amsterdam",
    address: "Oudezijds Voorburgwal, Amsterdam",
    phone: "+31 6 12345678",
    hours: { weekday: "09:00 - 18:00" },
    mapUrl: "https://www.google.com/maps/dir//Oudezijds+Voorburgwal,+Amsterdam",
  },
  {
    city: "Rotterdam",
    address: "Stationsplein 45, 3013 AK Rotterdam",
    phone: "+31 6 12345678",
    hours: { weekday: "09:00 - 18:00" },
    mapUrl: "https://www.google.com/maps/dir//Stationsplein+45,+3013+AK+Rotterdam",
  },
];

export function LocationsSection({ dict }: LocationsSectionProps) {
  const loc = (dict as any).locations || {};

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-[32px] font-bold text-charcoal-950 mb-3">
            {loc.title || "Our Offices"}
          </h2>
          <p className="text-charcoal-500 mb-10">
            {loc.subtitle || "Always an office near you"}
          </p>
        </FadeIn>

        {/* Hub tabs */}
        <div className="flex gap-4 mb-8 border-b border-charcoal-200">
          {offices.map((office) => (
            <div
              key={office.city}
              className="pb-3 border-b-2 border-charcoal-950 text-charcoal-950 font-medium text-sm px-1"
            >
              {office.city}
            </div>
          ))}
        </div>

        {/* Office details */}
        <div className="grid md:grid-cols-2 gap-12">
          {offices.map((office) => (
            <FadeIn key={office.city}>
              <div>
                <h3 className="text-xl font-bold text-charcoal-950 mb-4">
                  Hub {office.city}
                </h3>
                <div className="space-y-1 text-sm text-charcoal-500 mb-4">
                  <p>{office.address}</p>
                  <p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:text-charcoal-950 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </p>
                </div>

                <div className="text-sm text-charcoal-500 mb-6">
                  <p>{loc.mondayFriday || "Monday - Friday"}: {office.hours.weekday}</p>
                  <p>{loc.weekend || "Saturday & Sunday"}: {loc.closed || "Closed"}</p>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-charcoal-950 underline underline-offset-4 hover:no-underline"
                  >
                    {loc.route || "Route"}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
