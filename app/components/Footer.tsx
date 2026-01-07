"use client";

import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/thiagoDOTjpeg",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/thiago-gritti",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:thiago@gritti.dev.br", label: "Email" },
];

const quickLinks = [
  { label: "Início", id: "hero" },
  { label: "Sobre", id: "about" },
  { label: "Experiência", id: "experience" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-slate-900 to-slate-950 text-gray-400 border-t border-gray-800/50 overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo/Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white pixel-font">
              THIAGO<span className="text-blue-400">.</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Desenvolvendo soluções escaláveis e interfaces memoráveis com foco
              em excelência técnica.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Navegação
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Especialidades
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Frontend Moderno</li>
              <li>Backend Escalável</li>
              <li>Arquitetura de Sistemas</li>
              <li>DevOps & Cloud</li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Conecte-se
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all rounded-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-gray-800 to-transparent" />

        {/* Bottom info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-500 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Thiago Gritti. Todos os direitos reservados.
          </motion.p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/50 text-blue-400 hover:bg-blue-500/20 transition-all rounded-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            aria-label="Voltar ao topo"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
