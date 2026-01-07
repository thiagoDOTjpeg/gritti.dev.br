"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function BlurText({
  text,
  className = "",
  delay = 0,
  animateBy = "words",
  direction = "bottom",
  as: Component = "h1",
}: BlurTextProps) {
  const elements = useMemo(() => {
    if (animateBy === "words") {
      return text.split(" ").map((word, i) => ({
        text: word,
        key: `word-${i}`,
      }));
    }
    return text.split("").map((char, i) => ({
      text: char === " " ? "\u00A0" : char,
      key: `char-${i}`,
    }));
  }, [text, animateBy]);

  const getDirectionOffset = () => {
    switch (direction) {
      case "top":
        return { y: -30 };
      case "bottom":
        return { y: 30 };
      case "left":
        return { x: -30 };
      case "right":
        return { x: 30 };
      default:
        return { y: 30 };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: animateBy === "words" ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const MotionComponent = motion[Component] as typeof motion.h1;

  return (
    <MotionComponent
      className={`flex flex-wrap justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((element) => (
        <motion.span
          key={element.key}
          variants={itemVariants}
          className="inline-block"
          style={{
            marginRight: animateBy === "words" ? "0.3em" : undefined,
          }}
        >
          {element.text}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
