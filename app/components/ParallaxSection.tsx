"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

interface Layer {
  image: string;
  speed: number;
  zIndex?: number;
}

interface ParallaxSectionProps {
  layers?: Layer[];
  children?: ReactNode;
  freezeLast?: boolean;
  cloudDrift?: boolean; // anima a última layer (nuvens)
  driftDurationSec?: number; // duração drift horizontal
  bobDurationSec?: number; // duração bobbing vertical
  bobAmplitudePx?: number; // amplitude bobbing
}

export default function ParallaxSection({
  layers = [],
  children,
  freezeLast = true,
  cloudDrift = true,
  driftDurationSec = 70,
  bobDurationSec = 9,
  bobAmplitudePx = 6,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

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

  const lastIndex = layers.length - 1;

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#87CEEB]"
    >
      {layers.map((layer, index) => {
        const isLast = index === lastIndex;
        const enableCloudAnim = cloudDrift && isLast && !reduced;

        // Variáveis CSS para controlar as animações
        const cloudVars: CSSProperties = enableCloudAnim
          ? {
              ["--drift-duration" as any]: `${driftDurationSec}s`,
              ["--bob-duration" as any]: `${bobDurationSec}s`,
              ["--bob-amplitude" as any]: `${bobAmplitudePx}px`,
            }
          : {};

        // Para layers normais: parallax padrão
        if (!isLast || !enableCloudAnim) {
          return (
            <motion.div
              key={index}
              style={{
                y: freezeLast && isLast ? 0 : yTransforms[index],
                opacity: index === 0 ? 1 : commonOpacity,
                zIndex: layer.zIndex ?? 0,
              }}
              className="absolute inset-0 w-full h-[120%]"
            >
              <div
                className="w-full h-[90%] will-change-transform"
                style={{
                  backgroundImage: `url(${layer.image})`,
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "bottom left",
                  imageRendering: "pixelated",
                }}
              />
            </motion.div>
          );
        }

        // Última layer (nuvens): travada no scroll + drift contínuo sem reset
        return (
          <motion.div
            key={index}
            style={{
              y: 0,
              opacity: index === 0 ? 1 : commonOpacity,
              zIndex: layer.zIndex ?? 0,
            }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <div className="cloud-bob h-full" style={cloudVars}>
              <div className="cloud-track h-full">
                <div
                  className="cloud-slide"
                  style={{ backgroundImage: `url(${layer.image})` }}
                />
                <div
                  className="cloud-slide"
                  style={{ backgroundImage: `url(${layer.image})` }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}

      <motion.div
        className="relative z-50 h-full"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
      >
        {children}
      </motion.div>
    </div>
  );
}
