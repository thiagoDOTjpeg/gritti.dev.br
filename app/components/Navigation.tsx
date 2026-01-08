"use client";

import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const ticking = useRef(false);

  useEffect(() => {
    const calcActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId = activeSection;
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      setActiveSection(closestId);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        calcActiveSection();
        ticking.current = false;
      });
    };

    calcActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calcActiveSection);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calcActiveSection);
    };
  }, [activeSection]);

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 hidden md:block"
        style={{ opacity: navOpacity }}
      >
        <div className="px-4 py-3 rounded-full border border-gray-800/50 backdrop-blur-md bg-slate-900/80">
          <ul className="flex items-center gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={clsx(
                    "relative px-5 py-3 min-h-[44px] text-sm font-medium rounded-full transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900",
                    activeSection === section.id
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                  aria-current={
                    activeSection === section.id ? "page" : undefined
                  }
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-blue-500/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-4 right-4 z-50 md:hidden"
        style={{ opacity: navOpacity }}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={clsx(
            "p-3 rounded-full border border-gray-800/50 backdrop-blur-md bg-slate-900/80",
            "text-slate-300 hover:text-white transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-500"
          )}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <div className="p-4 rounded-2xl border border-gray-800/50 backdrop-blur-md bg-slate-900/95 shadow-xl">
                <ul className="flex flex-col gap-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={clsx(
                          "relative w-full px-4 py-3 text-left text-base font-medium rounded-xl transition-all duration-200",
                          "focus:outline-none focus:ring-2 focus:ring-blue-500",
                          activeSection === section.id
                            ? "text-blue-400 bg-blue-500/10"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                        aria-current={
                          activeSection === section.id ? "page" : undefined
                        }
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
