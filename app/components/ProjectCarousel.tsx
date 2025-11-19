"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

// Interface exportada para garantir consistência
export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string | null;
  demo: string | null;
  highlight: string | null;
  color: string;
}

// CORREÇÃO 1: O componente SideCard deve ser definido FORA do componente pai
const SideCard = ({
  index,
  position,
  projects,
}: {
  index: number;
  position: "left" | "right";
  projects: Project[];
}) => {
  const project = projects[index];
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 w-[60%] md:w-[50%] h-[80%] bg-gray-800/40 border border-gray-700/50 rounded-none blur-[2px] transition-all duration-500 pointer-events-none z-0
          ${
            position === "left"
              ? "-left-[15%] md:-left-[5%]"
              : "-right-[15%] md:-right-[5%]"
          }
        `}
    >
      <div className="h-full flex items-center justify-center p-4 opacity-40">
        <h3 className="text-xl font-bold text-gray-400 text-center font-(family-name:--font-pixel)">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const getIndex = (offset: number) => {
    let index = currentIndex + offset;
    if (index < 0) index = projects.length + index;
    if (index >= projects.length) index = index % projects.length;
    return index;
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 0.8,
      opacity: 0,
      zIndex: 10,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 20,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      scale: 0.8,
      opacity: 0,
      zIndex: 10,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto min-h-[600px] flex items-center justify-center py-12 overflow-hidden">
      <div className="relative w-full h-[600px] md:h-[550px] flex items-center justify-center">
        {/* SideCards agora recebem a lista de projetos */}
        <SideCard index={getIndex(-1)} position="left" projects={projects} />
        <SideCard index={getIndex(1)} position="right" projects={projects} />

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) navigate(1);
              else if (swipe > 10000) navigate(-1);
            }}
            className="absolute w-[90%] md:w-[70%] bg-gray-900/95 backdrop-blur-xl border-2 border-gray-600 p-6 md:p-10 shadow-2xl rounded-none flex flex-col h-full md:h-auto min-h-[500px]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 border-b border-gray-800 pb-4">
              <div>
                {projects[currentIndex].highlight && (
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold bg-linear-to-r ${projects[currentIndex].color} text-white mb-2 shadow-md tracking-wider uppercase`}
                  >
                    {projects[currentIndex].highlight}
                  </span>
                )}
                <h3 className="text-2xl md:text-4xl font-bold text-white font-(family-name:--font-pixel) drop-shadow-md">
                  {projects[currentIndex].title}
                </h3>
              </div>

              <div className="flex gap-3 shrink-0 self-end md:self-start">
                {projects[currentIndex].github && (
                  <a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 text-white transition-all hover:scale-105"
                    title="Ver Código"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
                {projects[currentIndex].demo && (
                  <a
                    href={projects[currentIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white font-bold border-2 border-blue-500 transition-all hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                  >
                    <FiExternalLink size={18} /> <span>DEMO</span>
                  </a>
                )}
              </div>
            </div>

            <div className="mb-6 text-gray-300 text-base md:text-lg leading-relaxed">
              {projects[currentIndex].description}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-auto bg-gray-950/30 p-4 border border-gray-800">
              <div>
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 border-b border-blue-500/30 pb-1 inline-block">
                  Funcionalidades
                </h4>
                <ul className="space-y-2">
                  {projects[currentIndex].features
                    .slice(0, 4)
                    .map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="text-green-500 mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3 border-b border-purple-500/30 pb-1 inline-block">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentIndex].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[11px] md:text-xs font-mono bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className="absolute left-2 md:left-8 z-30 p-3 bg-gray-900/80 hover:bg-blue-600 text-white border-2 border-gray-600 hover:border-blue-400 transition-all hover:scale-110"
        onClick={() => navigate(-1)}
        aria-label="Anterior"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 md:right-8 z-30 p-3 bg-gray-900/80 hover:bg-blue-600 text-white border-2 border-gray-600 hover:border-blue-400 transition-all hover:scale-110"
        onClick={() => navigate(1)}
        aria-label="Próximo"
      >
        <FiChevronRight size={24} />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const dir = idx > currentIndex ? 1 : -1;
              setDirection(dir);
              setCurrentIndex(idx);
            }}
            className={`h-2 transition-all duration-300 rounded-none border border-gray-900 shadow-sm ${
              idx === currentIndex
                ? "w-8 bg-blue-500"
                : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
