"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

export default function GlowingButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  external = false,
}: GlowingButtonProps) {
  const baseStyles = clsx(
    "relative inline-flex items-center justify-center gap-2",
    "font-bold tracking-wider uppercase",
    "overflow-hidden rounded-lg",
    "transition-all duration-300",
    "group"
  );

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: clsx(
      "bg-linear-to-r from-blue-600 to-blue-700",
      "hover:from-blue-500 hover:to-blue-600",
      "border border-blue-500/50",
      "text-white",
      "shadow-lg shadow-blue-500/25",
      "hover:shadow-xl hover:shadow-blue-500/40"
    ),
    secondary: clsx(
      "bg-linear-to-r from-slate-800 to-slate-700",
      "hover:from-slate-700 hover:to-slate-600",
      "border border-slate-600/50",
      "text-white",
      "shadow-lg shadow-slate-800/25"
    ),
    outline: clsx(
      "bg-transparent",
      "border-2 border-blue-500/50",
      "text-blue-400",
      "hover:bg-blue-500/10",
      "hover:border-blue-400"
    ),
  };

  const combinedStyles = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {/* Glow effect */}
      <span
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Shimmer effect */}
      <span
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-linear-to-r from-transparent via-white/20 to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-all duration-700 ease-out
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
