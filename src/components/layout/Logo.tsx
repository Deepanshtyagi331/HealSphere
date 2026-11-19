import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  size = "md",
}) => {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center group transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="HealSphere Homepage"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* HealSphere Stacked Artwork (Symbol ~65-75px wide, Brand Name ~18-22px, no tagline) */}
        <div className="relative w-[95px] sm:w-[115px] h-[62px] sm:h-[75px] flex items-center justify-center">
          <Image
            src="/images/logo/healsphere-logo.png"
            alt="HealSphere - Holistic Quantum & Energy Healing"
            fill
            sizes="(max-width: 640px) 95px, 115px"
            className="object-contain"
            priority
          />
        </div>
        {isLight && (
          <span className="sr-only">HealSphere</span>
        )}
      </div>
    </Link>
  );
};
