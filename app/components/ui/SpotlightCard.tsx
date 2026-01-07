"use client";

import clsx from "clsx";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  as?: "div" | "article";
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.15)",
  as: Component = "div",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize to -0.5 to 0.5
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const MotionComponent = Component === "article" ? motion.article : motion.div;

  return (
    <MotionComponent
      ref={cardRef}
      className={clsx(
        "relative overflow-hidden rounded-xl",
        "bg-linear-to-br from-slate-900/90 to-slate-800/70",
        "border border-gray-800/50 backdrop-blur-sm",
        "transition-shadow duration-300",
        "hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Spotlight gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${useTransform(
            mouseX,
            [-0.5, 0.5],
            ["0%", "100%"]
          )} ${useTransform(
            mouseY,
            [-0.5, 0.5],
            ["0%", "100%"]
          )}, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Shimmer effect on hover */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-linear-to-r from-transparent via-white/5 to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-all duration-700 ease-out
          pointer-events-none
        "
      />

      {/* Content */}
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </MotionComponent>
  );
}
