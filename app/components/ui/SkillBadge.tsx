"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  color?: "blue" | "green" | "purple" | "amber";
  delay?: number;
}

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    border: "border-blue-500/20",
    hoverBg: "hover:bg-blue-500/20",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-300",
    border: "border-green-500/20",
    hoverBg: "hover:bg-green-500/20",
    glow: "rgba(34, 197, 94, 0.4)",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-300",
    border: "border-purple-500/20",
    hoverBg: "hover:bg-purple-500/20",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    border: "border-amber-500/20",
    hoverBg: "hover:bg-amber-500/20",
    glow: "rgba(245, 158, 11, 0.4)",
  },
};

export default function SkillBadge({
  skill,
  color = "blue",
  delay = 0,
}: SkillBadgeProps) {
  const colorClasses = colorMap[color];

  return (
    <motion.span
      className={clsx(
        "px-3 py-1.5 text-sm rounded-md",
        "border transition-all duration-300 cursor-default",
        colorClasses.bg,
        colorClasses.text,
        colorClasses.border,
        colorClasses.hoverBg
      )}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px ${colorClasses.glow}`,
      }}
    >
      {skill}
    </motion.span>
  );
}
