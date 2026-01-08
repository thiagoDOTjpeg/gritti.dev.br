"use client";

import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { MouseEvent, useRef, useState } from "react";
import {
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiZap,
} from "react-icons/fi";

// Interfaces exportadas para uso em page.tsx
export interface Challenge {
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
}

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
  architectureImage?: string;
  metrics?: Metric[];
  challenges?: Challenge[];
}

interface ProjectRowProps {
  project: Project;
  index: number;
  isReversed: boolean;
}

function ProjectRow({ project, index, isReversed }: ProjectRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const spotlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 20,
  });
  const spotlightY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 150,
    damping: 20,
  });

  // Dynamic colors
  const spotlightColor = project.color.includes("indigo")
    ? "rgba(99, 102, 241, 0.15)"
    : project.color.includes("purple")
    ? "rgba(168, 85, 247, 0.15)"
    : project.color.includes("orange")
    ? "rgba(249, 115, 22, 0.15)"
    : "rgba(59, 130, 246, 0.15)";

  const accentColorClass = project.color.includes("indigo")
    ? "text-indigo-400"
    : project.color.includes("purple")
    ? "text-purple-400"
    : project.color.includes("orange")
    ? "text-orange-400"
    : "text-blue-400";

  const hasTechnicalDetails =
    (project.metrics && project.metrics.length > 0) ||
    (project.challenges && project.challenges.length > 0);

  return (
    <motion.article
      ref={cardRef}
      layout="position"
      className={clsx(
        "group relative overflow-hidden rounded-xl border border-gray-800/50",
        "bg-linear-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-sm",
        "transition-all duration-500 hover:border-gray-700",
        isExpanded ? "ring-1 ring-blue-500/20" : ""
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Spotlight Effect */}
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

      {/* Main Content */}
      <div
        className={clsx(
          "relative z-20 flex flex-col lg:flex-row",
          isReversed && "lg:flex-row-reverse"
        )}
      >
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden lg:h-auto lg:w-5/12 lg:min-h-[400px]">
          <div className="absolute left-6 top-6 z-30 font-mono text-8xl font-bold leading-none text-white/5 select-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900" />
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-700">
              <FiLayers size={48} />
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent lg:bg-linear-to-r" />

          {/* Highlight badge */}
          {project.highlight && (
            <div className="absolute top-4 right-4 z-20">
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg bg-linear-to-r",
                  project.color
                )}
              >
                {project.highlight}
              </span>
            </div>
          )}
        </div>

        {/* Text Section */}
        <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
          <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mb-6 text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Features list */}
          {project.features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {project.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-slate-300 text-sm"
                >
                  <span
                    className="text-blue-400 mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    ▹
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-gray-700 bg-gray-800/50 px-2.5 py-1 text-xs font-medium text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-gray-800 pt-6">
            {hasTechnicalDetails && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={clsx(
                  "group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  isExpanded
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                )}
              >
                <FiCode
                  className={clsx(
                    "transition-transform",
                    isExpanded ? "rotate-90" : ""
                  )}
                />
                {isExpanded ? "Fechar Detalhes" : "Ver Engenharia"}
              </button>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                <FiGithub /> Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* EXPANDABLE TECHNICAL SECTION */}
      <AnimatePresence>
        {isExpanded && hasTechnicalDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-800 bg-slate-950/50"
          >
            <div className="p-6 lg:p-10 grid gap-8 lg:grid-cols-3">
              {/* Column 1: Metrics */}
              <div className="space-y-6">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500">
                  <FiZap className={accentColorClass} /> Performance Metrics
                </h4>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                  {project.metrics?.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg bg-gray-900/50 p-4 border border-gray-800"
                    >
                      <div className="text-2xl font-bold text-white font-mono">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 & 3: Engineering Challenges */}
              <div className="lg:col-span-2 space-y-6">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500">
                  <FiCode className={accentColorClass} /> Desafios de Engenharia
                </h4>
                <div className="space-y-4">
                  {project.challenges?.map((challenge, i) => (
                    <motion.div
                      key={challenge.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative rounded-lg border border-gray-800 bg-gray-900/30 p-4 transition-colors hover:border-gray-700"
                    >
                      <div
                        className={`absolute left-0 top-0 h-full w-1 rounded-l-lg bg-linear-to-b ${project.color} opacity-0 transition-opacity group-hover:opacity-100`}
                      />
                      <h5 className="mb-2 font-semibold text-gray-200">
                        {challenge.title}
                      </h5>
                      <p className="text-sm text-gray-400 leading-relaxed text-justify">
                        {challenge.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
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
