"use client";

import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const avatarGradients = [
  "from-primary-400 to-primary-600",
  "from-secondary-400 to-secondary-600",
  "from-success-400 to-success-600",
  "from-accent-400 to-accent-600",
];

export function AboutClient({ dict, locale }: Props) {
  const a = dict.about;

  return (
    <main>
      {/* Section 1: Hero */}
      <section className="bg-white pt-32 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-charcoal-500 mb-8">
            <Link href={`/${locale}`} className="hover:text-charcoal-950 transition-colors">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-charcoal-950">{(dict as any).about?.breadcrumb || a.label || "Culture"}</span>
          </nav>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-charcoal-950 mb-4">
            {(dict as any).about?.breadcrumb || a.label || "Our Culture"}
          </h1>
          <p className="text-lg text-charcoal-500 max-w-2xl mb-8">
            {a.subtitle}
          </p>

          {/* CTA */}
          <Link href={`/${locale}/contact`} className="btn-hh">
            {dict.common.contactUs}
          </Link>

          {/* Hero image */}
          <div className="mt-12 w-full aspect-video rounded-xl overflow-hidden relative">
            <Image
              src="/images/about-team.jpg"
              alt="LeftFlow Team"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal-950 mb-6">
              {a.title || "Hi, we're LeftFlow"}
            </h2>
            <p className="text-charcoal-500 leading-relaxed text-lg">
              {(dict as any).about?.intro || a.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Values — "Things that keep us going" */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-16 text-center">
            {a.values.title}
          </h2>
          <div className="space-y-16">
            {a.values.items.map((v: any, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Decorative number */}
                  <div className="flex-shrink-0 md:w-32">
                    <span className="text-6xl font-bold text-charcoal-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "" : "md:text-right"}`}>
                    <h3 className="text-2xl font-bold text-charcoal-950 mb-3">
                      {v.title}
                    </h3>
                    <p className="text-charcoal-500 leading-relaxed max-w-xl">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section className="bg-charcoal-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-12 text-center">
            {a.team.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {a.team.members.map((m: any, i: number) => {
              const initials = m.name
                .split(" ")
                .map((n: string) => n.charAt(0))
                .join("");
              return (
                <div key={i} className="text-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                      avatarGradients[i % avatarGradients.length]
                    } mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {initials}
                  </div>
                  <h3 className="font-bold text-charcoal-950">{m.name}</h3>
                  <p className="text-sm text-charcoal-500">{m.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-charcoal-950 mb-8">
            {(dict as any).about?.readyToWork || "Ready to work together?"}
          </h2>
          <Link href={`/${locale}/contact`} className="btn-hh">
            {(dict as any).about?.scheduleCall || dict.common.contactUs}
          </Link>
        </div>
      </section>
    </main>
  );
}
