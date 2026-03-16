"use client";

import { FadeIn } from "@/components/animations";

const offices = [
  {
    city: "Amsterdam",
    address: "Oudezijds Voorburgwal",
    zip: "Amsterdam, Netherlands",
    phone: "+31 6 12345678",
    email: "info@leftflow.ai",
    mapUrl: "https://www.google.com/maps/dir//Oudezijds+Voorburgwal,+Amsterdam",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    city: "Rotterdam",
    address: "Stationsplein 45",
    zip: "3013 AK Rotterdam",
    phone: "+31 6 12345678",
    email: "info@leftflow.ai",
    mapUrl: "https://www.google.com/maps/dir//Stationsplein+45,+3013+AK+Rotterdam",
    gradient: "from-secondary-400 to-secondary-600",
  },
];

export function LocationsSection() {
  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              Our Hubs
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-800">
              Find us in the Netherlands
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office) => (
            <FadeIn key={office.city}>
              <div className="bg-white rounded-2xl p-8 border border-charcoal-200/60 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.gradient} flex items-center justify-center mb-4`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 mb-2">{office.city}</h3>
                <div className="space-y-2 text-sm text-charcoal-500 mb-6">
                  <p>{office.address}</p>
                  <p>{office.zip}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  Get directions
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
