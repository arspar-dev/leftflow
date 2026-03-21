"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

const techLogos = [
  "OpenAI", "n8n", "Make", "Zapier", "LangChain",
  "Pinecone", "Supabase", "Vercel", "Next.js", "Python",
];

export function WorkflowSection({ dict }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const hw = (dict as any).howWeWork;
  if (!hw) return null;

  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
          <div className="md:col-span-3">
            <FadeIn>
              <p className="section-label accent-dot text-black/50">
                {hw.label}
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-9">
            <TextReveal
              as="h2"
              className="heading-display text-black text-[2rem] md:text-[2.75rem]"
            >
              {hw.title}
            </TextReveal>
          </div>
        </div>

        <FadeIn delay={0.1}>
          {/* Tabs */}
          <div className="flex gap-1 mb-12 border-b border-black/5">
            {hw.tabs.map((tab: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 -mb-px ${
                  i === activeTab
                    ? "border-[#e63b2e] text-black"
                    : "border-transparent text-black/35 hover:text-black/60"
                }`}
              >
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
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h3 className="text-xl font-medium text-black mb-4 tracking-tight">
                    {hw.tabs[activeTab].heading}
                  </h3>
                  <p className="body-16 text-black/50 leading-relaxed mb-6">
                    {hw.tabs[activeTab].description}
                  </p>
                  <ul className="space-y-3">
                    {hw.tabs[activeTab].points.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#e63b2e] flex-shrink-0" />
                        <span className="body-14 text-black/60">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f5f4f0] p-8">
                  {activeTab === 0 && (
                    <div className="space-y-4">
                      {["Discovery", "Analysis", "Strategy", "Implementation"].map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="flex items-center gap-4 p-4 bg-white border border-black/5"
                        >
                          <span className="text-[0.75rem] font-medium text-[#e63b2e] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-sm font-medium text-black">{step}</span>
                          <div className="ml-auto w-16 h-1 bg-black/5 overflow-hidden">
                            <motion.div
                              className="h-full bg-[#e63b2e]"
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
                          className="flex items-center justify-center p-4 bg-white border border-black/5 body-14 text-black/60"
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
                          <div className="w-16 h-16 bg-white border border-black/5 flex items-center justify-center flex-shrink-0">
                            <span className="text-[0.75rem] font-medium text-[#e63b2e] tabular-nums">W{sprint.week}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-black">{sprint.label}</p>
                            <div className="mt-2 h-1 bg-black/5 overflow-hidden">
                              <motion.div
                                className="h-full bg-[#e63b2e]"
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
