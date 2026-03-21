"use client";

import Link from "next/link";
import Image from "next/image";

interface AnimatedLogoProps {
  locale: string;
  variant?: "light" | "dark";
}

export function AnimatedLogo({ locale, variant = "dark" }: AnimatedLogoProps) {
  const src = variant === "light" ? "/images/logo-light.svg" : "/images/logo-dark.svg";

  return (
    <Link href={`/${locale}`} className="flex items-center">
      <Image
        src={src}
        alt="LeftFlow"
        width={160}
        height={38}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
