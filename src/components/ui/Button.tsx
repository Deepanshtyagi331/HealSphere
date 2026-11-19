import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold tracking-wide",
    md: "px-5 py-2.5 text-sm font-semibold tracking-wide shadow-sm",
    lg: "px-7 py-3.5 text-base font-bold shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-healing-700 hover:bg-healing-800 text-white focus:ring-healing-500 shadow-healing-700/20",
    secondary:
      "bg-quantum-900 hover:bg-quantum-950 text-white focus:ring-quantum-600 shadow-quantum-900/20",
    gold:
      "bg-gold-500 hover:bg-gold-600 text-slate-900 font-bold focus:ring-gold-400 shadow-gold-500/30",
    outline:
      "border-2 border-healing-700 text-healing-800 hover:bg-healing-50 focus:ring-healing-500",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
