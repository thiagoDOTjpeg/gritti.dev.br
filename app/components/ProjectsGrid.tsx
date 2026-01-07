"use client";

import clsx from "clsx";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string | null;
  demo: string | null;
  highlight: string | null;
  color: string;
  image?: string;
}

interface ProjectRowProps {
  project: Project;
  index: number;
  isReversed: boolean;
}

function ProjectRow({ project, index, isReversed }: ProjectRowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight position
  const spotlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 20,
  });
  const spotlightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Get gradient color from project.color
  const spotlightColor = project.color.includes("indigo")
    ? "rgba(99, 102, 241, 0.15)"
    : project.color.includes("purple")
    ? "rgba(168, 85, 247, 0.15)"
    : project.color.includes("orange")
    ? "rgba(249, 115, 22, 0.15)"
    : "rgba(59, 130, 246, 0.15)";

  const borderGlowColor = project.color.includes("indigo")
    ? "group-hover:border-indigo-500/30"
    : project.color.includes("purple")
    ? "group-hover:border-purple-500/30"
    : project.color.includes("orange")
    ? "group-hover:border-orange-500/30"
    : "group-hover:border-blue-500/30";

  // Animation variants for slide-in effect
  const textVariants = {
    hidden: {
      opacity: 0,
      x: isReversed ? 80 : -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: isReversed ? -80 : 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.article
      ref={cardRef}
      className={clsx(
        "group relative overflow-hidden",
        "bg-gradient-to-br from-slate-900/90 to-slate-800/70",
        "border border-gray-800/50 backdrop-blur-sm rounded-xl",
        "min-h-[400px] md:min-h-[500px]",
        borderGlowColor,
        "transition-all duration-500"
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(800px circle at ${x}% ${y}%, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />

      {/* Border glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `linear-gradient(to bottom right, ${spotlightColor}, transparent)`,
        }}
      />

      {/* Main content container - Zig-Zag layout */}
      <div
        className={clsx(
          "relative z-10 h-full flex flex-col",
          "lg:flex-row lg:items-stretch",
          isReversed && "lg:flex-row-reverse"
        )}
      >
        {/* Image Section */}
        <motion.div
          className={clsx(
            "relative overflow-hidden",
            "h-64 sm:h-72 md:h-80 lg:h-auto",
            "lg:w-1/2 lg:min-h-[500px]",
            "bg-gradient-to-br from-slate-800 to-slate-700"
          )}
          variants={imageVariants}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot de ${project.title}`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-600 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-3 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Screenshot / Diagrama</span>
              </div>
            </div>
          )}

          {/* Gradient overlay for image */}
          <div
            className={clsx(
              "absolute inset-0",
              "bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 via-transparent to-transparent",
              isReversed && "lg:bg-gradient-to-l"
            )}
          />

          {/* Highlight badge */}
          {project.highlight && (
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <span
                className={clsx(
                  "inline-block px-4 py-1.5 text-sm font-bold rounded-full",
                  "bg-gradient-to-r shadow-lg",
                  project.color,
                  "text-white"
                )}
              >
                {project.highlight}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Content Section */}
        <motion.div
          className={clsx(
            "flex flex-col justify-center",
            "p-6 sm:p-8 lg:p-10 xl:p-12",
            "lg:w-1/2"
          )}
          variants={textVariants}
        >
          {/* Project number indicator */}
          <motion.span
            className="text-6xl font-bold text-gray-800/50 mb-2 select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          <h2
            className={clsx(
              "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4",
              "transition-colors duration-300 group-hover:text-blue-400"
            )}
          >
            {project.title}
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
            {project.description}
          </p>

          {/* Features list */}
          {project.features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {project.features.slice(0, 4).map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + featureIndex * 0.1 }}
                >
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className={clsx(
                  "px-3 py-1.5 text-sm font-medium rounded-lg",
                  "bg-slate-800/80 text-gray-300",
                  "border border-gray-700/50",
                  "transition-all duration-200",
                  "hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10"
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + tagIndex * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action links */}
          <motion.div
            className="flex items-center gap-6 pt-4 border-t border-gray-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
                  "bg-blue-500/10 border border-blue-500/50",
                  "text-blue-400 hover:bg-blue-500/20 hover:text-blue-300",
                  "transition-all duration-200 font-medium"
                )}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Ver Demo</span>
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
                  "bg-slate-800/50 border border-gray-700/50",
                  "text-gray-400 hover:bg-slate-700/50 hover:text-white hover:border-gray-600",
                  "transition-all duration-200 font-medium"
                )}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="w-4 h-4" />
                <span>Código</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Shimmer effect */}
      <div
        className={clsx(
          "absolute inset-0 z-20 opacity-0 group-hover:opacity-100",
          "bg-gradient-to-r from-transparent via-white/5 to-transparent",
          "-translate-x-full group-hover:translate-x-full",
          "transition-all duration-1000 ease-out",
          "pointer-events-none rounded-xl"
        )}
      />
    </motion.article>
  );
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      {projects.map((project, index) => (
        <ProjectRow
          key={project.title}
          project={project}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
