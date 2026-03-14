"use client";

import { useRef, useState } from "react";
import { FadeIn } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n";

export function VideoShowcaseSection({ dict }: { dict: Dictionary }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel>{dict.videoShowcase.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {dict.videoShowcase.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {dict.videoShowcase.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video group cursor-pointer shadow-2xl shadow-primary-500/10" onClick={handlePlay}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              poster="/images/hero.jpg"
            >
              <source src="/videos/automation-showcase.mp4" type="video/mp4" />
            </video>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/20">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
              <div className="h-full bg-primary-500 w-0 group-hover:w-full transition-all duration-[8000ms] ease-linear" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
