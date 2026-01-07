"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  dotColor?: string;
  fadeColor?: string;
}

// Pre-generate random values to avoid impure function calls during render
function generateRandomValues(
  count: number
): { duration: number; delay: number }[] {
  const values: { duration: number; delay: number }[] = [];
  for (let i = 0; i < count; i++) {
    values.push({
      duration: 3 + ((i * 0.137) % 2), // Deterministic pseudo-random based on index
      delay: (i * 0.293) % 2,
    });
  }
  return values;
}

export default function GridBackground({
  className = "",
  gridSize = 40,
  dotColor = "rgba(59, 130, 246, 0.3)",
  fadeColor = "rgba(15, 23, 42, 1)",
}: GridBackgroundProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate grid dots
  const cols = Math.ceil(dimensions.width / gridSize) + 1;
  const rows = Math.ceil(dimensions.height / gridSize) + 1;

  // Pre-compute random values
  const randomValues = useMemo(() => generateRandomValues(100), []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static grid pattern using CSS */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Animated glow dots - reduced for performance */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }}>
        {dimensions.width > 0 &&
          Array.from({ length: Math.min(cols * rows, 100) }).map((_, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            // Only render some dots for performance
            if ((col + row) % 4 !== 0) return null;

            const { duration, delay } = randomValues[i] || {
              duration: 3,
              delay: 0,
            };

            return (
              <motion.circle
                key={i}
                cx={col * gridSize}
                cy={row * gridSize}
                r={1.5}
                fill={dotColor}
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
      </svg>

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, ${fadeColor} 70%)`,
        }}
      />

      {/* Top and bottom fade for smoother section transitions */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${fadeColor}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${fadeColor}, transparent)`,
        }}
      />
    </div>
  );
}
