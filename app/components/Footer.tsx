"use client";

import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b1220] text-gray-400 border-t-2 border-gray-800 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl text-white font-(family-name:--font-pixel) tracking-widest">
              THIAGO GRITTI
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Desenvolvendo soluções escaláveis e interfaces memoráveis. Focado
              em entregar valor através de código limpo e arquitetura sólida.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Conecte-se
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/thiagoDOTjpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 hover:text-white border border-gray-700 transition-all rounded-sm hover:-translate-y-1"
                aria-label="Github"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/thiago-gritti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-[#0077B5] hover:text-white border border-gray-700 hover:border-[#0077B5] transition-all rounded-sm hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:thiago.gritti12@gmail.com"
                className="p-3 bg-gray-800 hover:bg-emerald-600 hover:text-white border border-gray-700 hover:border-emerald-600 transition-all rounded-sm hover:-translate-y-1"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Este Portfólio
            </h3>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <span className="px-2 py-1 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">
                Next.js 16
              </span>
              <span className="px-2 py-1 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">
                Tailwind
              </span>
              <span className="px-2 py-1 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">
                Framer Motion
              </span>
              <span className="px-2 py-1 text-xs bg-gray-900 border border-gray-700 text-gray-300 rounded">
                Vercel
              </span>
            </div>
            <p className="text-xs text-gray-500 pt-2">
              © {currentYear} Thiago Gritti. Open Source.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 text-center md:text-left">
            {"Code never lies, comments sometimes do."}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-400 transition-colors"
          >
            VOLTAR AO TOPO
            <div className="p-2 bg-gray-800 group-hover:bg-blue-500/20 border border-gray-700 group-hover:border-blue-500 rounded-full transition-colors">
              <FiArrowUp className="group-hover:text-blue-400" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
