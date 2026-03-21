"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

const tabIcons = [
  <svg key="a" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  <svg key="t" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="e" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
];

const techLogos = [
  "OpenAI", "n8n", "Make", "Zapier", "LangChain",
  "Pinecone", "Supabase", "Vercel", "Next.js", "Python",
];

export function WorkflowSection({ dict }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const hw = (dict as any).howWeWork;
  if (!hw) return null;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-primary-500 mb-4">
            {hw.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal-950 mb-12">
            {hw.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Tabs */}
          <div className="flex gap-1 mb-12 border-b border-charcoal-200">
            {hw.tabs.map((tab: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 -mb-px ${
                  i === activeTab
                    ? "border-charcoal-950 text-charcoal-950"
                    : "border-transparent text-charcoal-400 hover:text-charcoal-600"
                }`}
              >
                {tabIcons[i]}
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left — text */}
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal-950 mb-4">
                    {hw.tabs[activeTab].heading}
                  </h3>
                  <p className="text-charcoal-500 leading-relaxed mb-6">
                    {hw.tabs[activeTab].description}
                  </p>
                  <ul className="space-y-3">
                    {hw.tabs[activeTab].points.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 flex-shrink-0" />
                        <span className="text-sm text-charcoal-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — visual */}
                <div className="bg-charcoal-50 p-8">
                  {activeTab === 0 && (
                    <div className="space-y-4">
                      {["Discovery", "Analysis", "Strategy", "Implementation"].map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="flex items-center gap-4 p-4 bg-white border border-charcoal-200"
                        >
                          <span className="text-xs font-mono text-charcoal-400">{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-sm font-medium text-charcoal-950">{step}</span>
                          <div className="ml-auto w-16 h-1 bg-charcoal-100 overflow-hidden">
                            <motion.div
                              className="h-full bg-primary-500"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="grid grid-cols-2 gap-3">
                      {techLogos.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          className="flex items-center justify-center p-4 bg-white border border-charcoal-200 text-sm font-medium text-charcoal-700"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-6">
                      {[
                        { week: "1-3", label: hw.tabs[2].sprintLabels?.[0] || "Sprint 1" },
                        { week: "4-6", label: hw.tabs[2].sprintLabels?.[1] || "Sprint 2" },
                        { week: "7-9", label: hw.tabs[2].sprintLabels?.[2] || "Sprint 3" },
                      ].map((sprint, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15, duration: 0.4 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-16 h-16 bg-white border border-charcoal-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-mono text-charcoal-400">W{sprint.week}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-charcoal-950">{sprint.label}</p>
                            <div className="mt-2 h-1 bg-charcoal-100 overflow-hidden">
                              <motion.div
                                className="h-full bg-primary-500"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.4 + i * 0.2, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
