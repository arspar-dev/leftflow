"use client";

// Professional text-based logos for LeftFlow clients
// Using clean typography to create recognizable brand marks

export function BoutiqueRugsLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.5">
        Boutique
      </text>
      <text x="92" y="28" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="300" letterSpacing="-0.5">
        Rugs
      </text>
    </svg>
  );
}

export function WestwingLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" letterSpacing="2">
        WESTWING
      </text>
    </svg>
  );
}

export function YENALogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="currentColor">
      <text x="0" y="30" fontFamily="system-ui, sans-serif" fontSize="26" fontWeight="800" letterSpacing="4">
        YENA
      </text>
    </svg>
  );
}

export function TolonLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="600" letterSpacing="1">
        TOLON
      </text>
    </svg>
  );
}

export function ArkmanLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" letterSpacing="3">
        ARKMAN
      </text>
    </svg>
  );
}

export function NazTeknikLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.5">
        NAZ
      </text>
      <text x="50" y="28" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="300" letterSpacing="0.5">
        TEKNiK
      </text>
    </svg>
  );
}

export function OctoLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="currentColor">
      <text x="0" y="30" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="800" letterSpacing="-1">
        octo
      </text>
    </svg>
  );
}

export function StepsAgencyLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" letterSpacing="2">
        STEPS
      </text>
      <text x="82" y="28" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="400" letterSpacing="1">
        AGENCY
      </text>
    </svg>
  );
}

export function SteelifyLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="600" letterSpacing="1">
        Steelify
      </text>
    </svg>
  );
}

export function TuvaHomeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={className} fill="currentColor">
      <text x="0" y="28" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" letterSpacing="1">
        TUVA
      </text>
      <text x="66" y="28" fontFamily="Georgia, serif" fontSize="20" fontWeight="300" letterSpacing="1">
        HOME
      </text>
    </svg>
  );
}

export const allClientLogos = [
  { name: "BoutiqueRugs", Logo: BoutiqueRugsLogo },
  { name: "Westwing", Logo: WestwingLogo },
  { name: "YENA", Logo: YENALogo },
  { name: "Tolon", Logo: TolonLogo },
  { name: "Arkman", Logo: ArkmanLogo },
  { name: "Naz Teknik", Logo: NazTeknikLogo },
  { name: "Octo", Logo: OctoLogo },
  { name: "Steps Agency", Logo: StepsAgencyLogo },
  { name: "Steelify", Logo: SteelifyLogo },
  { name: "Tuva Home", Logo: TuvaHomeLogo },
];
