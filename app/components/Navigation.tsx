"use client";

import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
      style={{ opacity: navOpacity }}
    >
      <div className="px-4 py-3 rounded-full border border-gray-800/50 backdrop-blur-md bg-slate-900/80">
        <ul className="flex items-center gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={clsx(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeSection === section.id
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-500/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
