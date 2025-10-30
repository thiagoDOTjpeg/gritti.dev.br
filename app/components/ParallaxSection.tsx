"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface Layer {
  image: string;
  speed: number;
  zIndex?: number;
}

interface ParallaxSectionProps {
  layers?: Layer[];
  children?: ReactNode;
}

export default function ParallaxSectionAdvanced({
  layers = [],
  children,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const commonOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.6]
  );

  const yTransforms = layers.map((layer) =>
    /* eslint-disable-next-line */
    useTransform(smoothProgress, [0, 1], ["0%", `${layer.speed * 100}%`])
  );

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#87CEEB]"
    >
      {layers.map((layer, index) => {
        return (
          <motion.div
            key={index}
            style={{
              y: yTransforms[index],
              opacity: index === 0 ? 1 : commonOpacity,
            }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${layer.image})`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 100%",
                backgroundPosition: "bottom",
                imageRendering: "pixelated",
                zIndex: layer.zIndex,
              }}
            />
          </motion.div>
        );
      })}

      <motion.div
        className="relative z-50 h-full"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
