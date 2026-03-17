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
    mapUrl:
      "https://www.google.com/maps/dir//Oudezijds+Voorburgwal,+Amsterdam",
  },
  {
    city: "Rotterdam",
    address: "Stationsplein 45, 3013 AK Rotterdam",
    phone: "+31 6 12345678",
    mapUrl:
      "https://www.google.com/maps/dir//Stationsplein+45,+3013+AK+Rotterdam",
  },
];

export function LocationsSection({ dict }: LocationsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <FadeIn>
          <h2 className="text-3xl font-bold text-charcoal-950 text-center mb-12">
            {(dict as any).locations?.title || "Our Offices"}
          </h2>
        </FadeIn>

        {/* Office cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office) => (
            <FadeIn key={office.city}>
              <div className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-200">
                {/* City name */}
                <h3 className="text-2xl font-bold text-charcoal-950 mb-4">
                  {office.city}
                </h3>

                {/* Details */}
                <div className="space-y-2 text-sm text-charcoal-500 mb-6">
                  <p>{office.address}</p>
                  <p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:text-charcoal-950 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </p>
                  <p>{(dict as any).locations?.mondayFriday || "Monday - Friday"} 09:00 - 18:00</p>
                  <p>{(dict as any).locations?.weekend || "Saturday & Sunday Closed"}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-charcoal-950 hover:underline transition-colors"
                  >
                    {(dict as any).locations?.getDirections || "Get directions"}
                  </a>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hh-outline text-sm px-4 py-1.5"
                  >
                    {(dict as any).locations?.route || "Route"}
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
