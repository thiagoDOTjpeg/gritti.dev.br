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

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
  index?: number;
}

function ProjectCard({
  project,
  className = "",
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

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

  // Get gradient color from project.color
  const spotlightColor = project.color.includes("indigo")
    ? "rgba(99, 102, 241, 0.15)"
    : project.color.includes("purple")
    ? "rgba(168, 85, 247, 0.15)"
    : project.color.includes("orange")
    ? "rgba(249, 115, 22, 0.15)"
    : "rgba(59, 130, 246, 0.15)";

  return (
    <motion.article
      ref={cardRef}
      className={clsx(
        "group relative overflow-hidden cursor-pointer p-2",
        "bg-linear-to-br from-slate-900/90 to-slate-800/70",
        "border border-gray-800/50 backdrop-blur-sm",
        className
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ scale: 1.02 }}
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
              `radial-gradient(600px circle at ${x}% ${y}%, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />

      {/* Border glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom right, ${spotlightColor}, transparent)`,
        }}
      />

      {/* Image Section */}
      <div
        className={clsx(
          "relative overflow-hidden bg-linear-to-br from-slate-800 to-slate-700",
          featured ? "h-48 sm:h-56 md:h-64" : "h-40 sm:h-44 md:h-48"
        )}
        style={{ transform: "translateZ(30px)" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot de ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-600 text-sm">
              <svg
                className="w-12 h-12 mx-auto mb-2 opacity-50"
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
              <span className="text-xs">Screenshot</span>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Highlight badge */}
        {project.highlight && (
          <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <span
              className={clsx(
                "inline-block px-3 py-1 text-xs font-bold",
                "bg-linear-to-r shadow-lg",
                project.color,
                "text-white"
              )}
            >
              {project.highlight}
            </span>
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div
        className="relative z-10 p-5 sm:p-6"
        style={{ transform: "translateZ(40px)" }}
      >
        <motion.h3
          className={clsx(
            "font-bold text-white mb-3 transition-colors duration-300",
            "group-hover:text-blue-400",
            featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          )}
        >
          {project.title}
        </motion.h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech tags with staggered animation */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, featured ? 6 : 4).map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className={clsx(
                "px-2.5 py-1 text-xs font-medium",
                "bg-slate-800/80 text-gray-300",
                "border border-gray-700/50",
                "transition-all duration-200",
                "hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10"
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + index * 0.1 + tagIndex * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
          {project.tech.length > (featured ? 6 : 4) && (
            <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
              +{project.tech.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Action links */}
        <motion.div
          className="flex items-center gap-4 pt-3 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex items-center gap-1.5 text-sm",
                "text-gray-400 hover:text-blue-400",
                "transition-colors duration-200 group/link"
              )}
              whileHover={{ x: 3 }}
            >
              <FiExternalLink className="w-4 h-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
              <span>Demo</span>
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex items-center gap-1.5 text-sm",
                "text-gray-400 hover:text-gray-200",
                "transition-colors duration-200 group/link"
              )}
              whileHover={{ x: 3 }}
            >
              <FiGithub className="w-4 h-4 transition-transform group-hover/link:scale-110" />
              <span>GitHub</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Shimmer effect */}
      <div
        className={clsx(
          "absolute inset-0 z-20 opacity-0 group-hover:opacity-100",
          "bg-linear-to-r from-transparent via-white/5 to-transparent",
          "-translate-x-full group-hover:translate-x-full",
          "transition-all duration-1000 ease-out",
          "pointer-events-none"
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects[0] && (
        <div className="md:col-span-12">
          <ProjectCard
            project={projects[0]}
            featured
            index={0}
            className="h-full"
          />
        </div>
      )}

      {projects[1] && (
        <div className="md:col-span-6">
          <ProjectCard project={projects[1]} index={1} className="h-full" />
        </div>
      )}
      {projects[2] && (
        <div className="md:col-span-6">
          <ProjectCard project={projects[2]} index={2} className="h-full" />
        </div>
      )}

      {projects[3] && (
        <div className="md:col-span-5">
          <ProjectCard project={projects[3]} index={3} className="h-full" />
        </div>
      )}
      {projects[4] && (
        <div className="md:col-span-7">
          <ProjectCard project={projects[4]} index={4} className="h-full" />
        </div>
      )}
    </motion.div>
  );
}
