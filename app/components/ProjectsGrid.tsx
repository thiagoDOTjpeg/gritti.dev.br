"use client";

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
}

function ProjectCard({
  project,
  className = "",
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl 
        bg-linear-to-br from-slate-900/80 to-slate-800/50
        border border-gray-800/50 
        backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:border-gray-700/80 hover:shadow-2xl hover:shadow-blue-500/5
        hover:-translate-y-1
        ${className}
      `}
    >
      {/* Imagem/Screenshot do Projeto */}
      <div
        className={`
          relative overflow-hidden bg-linear-to-br from-slate-800 to-slate-700
          ${featured ? "h-48 sm:h-56 md:h-64" : "h-40 sm:h-44 md:h-48"}
        `}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot de ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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

        {/* Overlay gradiente sutil */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Efeito de hover na imagem */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 sm:p-6">
        {/* Título */}
        <h3
          className={`
            font-bold text-white mb-2 
            group-hover:text-blue-400 transition-colors duration-300
            ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}
          `}
        >
          {project.title}
        </h3>

        {/* Descrição - limitada a 2 linhas */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, featured ? 6 : 4).map((tag) => (
            <span
              key={tag}
              className="
                px-2.5 py-1 text-xs font-medium
                bg-slate-800/80 text-gray-300 
                border border-gray-700/50 rounded-full
                hover:border-blue-500/30 hover:text-blue-300
                transition-colors duration-200
              "
            >
              {tag}
            </span>
          ))}
          {project.tech.length > (featured ? 6 : 4) && (
            <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
              +{project.tech.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Highlight Badge */}
        {project.highlight && (
          <div className="mb-3">
            <span
              className={`inline-block px-3 py-1 text-xs font-bold rounded-full bg-linear-to-r ${project.color} text-white`}
            >
              {project.highlight}
            </span>
          </div>
        )}

        {/* Links - Demo e GitHub */}
        <div className="flex items-center gap-4 pt-2 border-t border-gray-800/50">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 text-sm text-gray-400
                hover:text-blue-400 transition-colors duration-200
                group/link
              "
            >
              <FiExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span>Demo</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 text-sm text-gray-400
                hover:text-gray-200 transition-colors duration-200
                group/link
              "
            >
              <FiGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Efeito de brilho sutil no hover */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-linear-to-r from-transparent via-white/5 to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-all duration-700 ease-out
          pointer-events-none
        "
      />
    </article>
  );
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
      {/* Linha Superior - Card Grande (col-span-12) */}
      {projects[0] && (
        <div className="md:col-span-12">
          <ProjectCard project={projects[0]} featured className="h-full" />
        </div>
      )}

      {/* Linha do Meio - Dois Cards Iguais (col-span-6 cada) */}
      {projects[1] && (
        <div className="md:col-span-6">
          <ProjectCard project={projects[1]} className="h-full" />
        </div>
      )}
      {projects[2] && (
        <div className="md:col-span-6">
          <ProjectCard project={projects[2]} className="h-full" />
        </div>
      )}

      {/* Linha Inferior - Cards Assimétricos (col-span-5 e col-span-7) */}
      {projects[3] && (
        <div className="md:col-span-5">
          <ProjectCard project={projects[3]} className="h-full" />
        </div>
      )}
      {projects[4] && (
        <div className="md:col-span-7">
          <ProjectCard project={projects[4]} className="h-full" />
        </div>
      )}
    </div>
  );
}
