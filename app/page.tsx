"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ParallaxSection from "./components/ParallaxSection";
import ProjectsGrid from "./components/ProjectsGrid";
import ScrollIndicator from "./components/ScrollIndicator";
import AnimatedSection from "./components/ui/AnimatedSection";
import BlurText from "./components/ui/BlurText";
import GlowingButton from "./components/ui/GlowingButton";
import GridBackground from "./components/ui/GridBackground";
import SkillBadge from "./components/ui/SkillBadge";

export default function Home() {
  const parallaxLayers = [
    { image: "/4.png", speed: 0.8, zIndex: 4 },
    { image: "/3.png", speed: 0.6, zIndex: 3 },
    { image: "/2.png", speed: 0.4, zIndex: 2 },
    { image: "/1.png", speed: 0.2, zIndex: 1 },
  ];

  const projects = [
    {
      title: "Harmonia.io",
      description:
        "Ecossistema de sincronização musical de alta performance. Monorepo desenhado para lidar com concorrência massiva, migrando playlists entre serviços de streaming em background.",
      tech: [
        "Next.js 15",
        "Node.js",
        "TypeScript",
        "BullMQ",
        "Redis",
        "PostgreSQL",
        "Docker",
        "Clean Architecture",
      ],
      features: [
        "Arquitetura Hexagonal com DDD e separação estrita de camadas",
        "Processamento assíncrono resiliente com filas (BullMQ + Redis)",
        "Autenticação OAuth2 agnóstica ao fornecedor com encriptação AES",
        "Interface moderna e responsiva com Shadcn UI e TailwindCSS",
      ],
      github: "https://github.com/thiagoDOTjpeg/harmonia.io",
      demo: "https://harmonia.gritti.dev.br/",
      highlight: "Produto Principal",
      color: "from-indigo-500 to-blue-600",
      image: "/screenshots/harmonia.png",
    },
    {
      title: "Distributed TaskFlow",
      description:
        "Sistema Kanban em tempo real baseado numa arquitetura de microsserviços. Implementa padrões avançados como API Gateway, comunicação híbrida (Síncrona/Assíncrona) e WebSockets.",
      tech: [
        "NestJS (Microservices)",
        "RabbitMQ",
        "Socket.io",
        "React + Vite",
        "PostgreSQL",
        "Docker Compose",
        "Turborepo",
      ],
      features: [
        "Arquitetura distribuída com 4 serviços isolados (Gateway, Auth, Tasks, Notifications)",
        "Sincronização de estado em tempo real via WebSockets para equipas",
        "Padrão API Gateway centralizando autenticação e roteamento",
        "Ambiente de desenvolvimento orquestrado via Docker e Monorepo",
      ],
      github: "https://github.com/thiagoDOTjpeg/kanban-microservice",
      demo: null,
      highlight: "Arquitetura Avançada",
      color: "from-purple-600 to-indigo-600",
      image: "/screenshots/taskflow.png",
    },
    {
      title: "Fleet & Logistics Core",
      description:
        "Plataforma de rastreio logístico focada em interoperabilidade. Uma solução híbrida que explora a segurança do Java Spring Boot e a velocidade de I/O do Node.js.",
      tech: [
        "Java 21",
        "Spring Boot 3",
        "NestJS",
        "RabbitMQ",
        "PostGIS",
        "Redis",
        "Docker",
        "Microservices",
      ],
      features: [
        "Comunicação assíncrona entre serviços Java e Node.js via RabbitMQ",
        "Serviço de Autenticação Centralizado (SSO) com Spring Security",
        "Cálculos geoespaciais complexos com PostGIS",
        "Documentação arquitetural baseada no modelo C4",
      ],
      github: "https://github.com/thiagoDOTjpeg/fleet-microservices",
      demo: null,
      highlight: "Backend Poliglota",
      color: "from-orange-500 to-amber-600",
      image: "/screenshots/fleet.png",
    },
  ];

  return (
    <main className="bg-gray-900 min-h-screen overflow-x-hidden">
      <Navigation />
      <section id="hero" className="relative w-full">
        <ParallaxSection
          layers={parallaxLayers}
          freezeLast
          cloudDrift
          driftDurationSec={80}
          bobDurationSec={8}
          bobAmplitudePx={6}
        >
          <div className="flex items-center justify-center min-h-screen h-full overflow-y-auto pb-20 pt-20">
            <div className="text-center text-white px-4">
              <BlurText
                text="THIAGO GRITTI"
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 pixel-font text-yellow-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,4px_4px_0_rgba(0,0,0,0.5)]"
                delay={0.2}
                animateBy="letters"
                direction="bottom"
                as="h1"
              />

              <motion.p
                className="text-lg sm:text-xl mb-10 font-medium tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
                }}
              >
                Desenvolvedor Full-Stack
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <GlowingButton
                  href="https://github.com/thiagoDOTjpeg"
                  variant="secondary"
                  external
                >
                  <FiGithub size={20} />
                  <span>GITHUB</span>
                </GlowingButton>

                <GlowingButton
                  href="https://linkedin.com/in/thiago-gritti"
                  variant="primary"
                  external
                >
                  <FiLinkedin size={20} />
                  <span>LINKEDIN</span>
                </GlowingButton>

                <GlowingButton
                  href="mailto:thiago@gritti.dev.br"
                  className="text-red-500 border-red-500 hover:border-red-400"
                  variant="outline"
                >
                  <FiMail size={20} />
                  <span>EMAIL</span>
                </GlowingButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              >
                <GlowingButton href="#projects" variant="primary" size="lg">
                  VER PROJETOS
                </GlowingButton>
              </motion.div>
            </div>
            <ScrollIndicator />
          </div>
        </ParallaxSection>
      </section>

      <section
        id="about"
        className="relative bg-[#0f172a] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      >
        {/* Animated Grid Background */}
        <GridBackground
          gridSize={50}
          dotColor="rgba(59, 130, 246, 0.2)"
          fadeColor="#0f172a"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Cabeçalho da Seção */}
          <AnimatedSection className="mb-16 text-center md:text-left">
            <motion.span
              className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Conheça meu trabalho
            </motion.span>
            <BlurText
              text="Sobre Mim"
              className="text-4xl md:text-5xl font-bold tracking-tight"
              delay={0.2}
              animateBy="words"
              as="h2"
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Coluna Esquerda - Texto "Sobre Mim" */}
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sou um{" "}
                  <span className="text-white font-semibold">
                    Desenvolvedor Full-Stack
                  </span>{" "}
                  apaixonado por construir sistemas complexos e escaláveis.
                  Minha especialidade é transformar requisitos desafiadores em
                  código limpo, performático e manutenível.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Com forte base em{" "}
                  <span className="text-white font-semibold">
                    TypeScript, Node.js e o ecossistema React
                  </span>
                  , tenho experiência prática em arquiteturas modernas como
                  Clean Architecture, Microsserviços e Serverless — sempre
                  focando em otimizar aplicações para alta carga.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Atualmente focado em aprimorar soluções de{" "}
                  <span className="text-white font-semibold">
                    infraestrutura e DevOps
                  </span>
                  , garantindo que o código que escrevo não apenas funcione, mas
                  escale com eficiência.
                </p>
              </AnimatedSection>

              {/* CTA sutil */}
              <AnimatedSection delay={0.4} className="pt-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  Vamos conversar?
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </AnimatedSection>
            </div>

            {/* Coluna Direita - Habilidades */}
            <div className="space-y-8">
              {/* Backend & Arquitetura */}
              <AnimatedSection delay={0.1} direction="right">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Backend & Arquitetura
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "NestJS",
                      "Java",
                      "Spring Boot",
                      "Clean Architecture",
                      "DDD",
                      "BullMQ",
                      "Redis",
                      "PostgreSQL",
                    ].map((skill, i) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        color="blue"
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Frontend Moderno */}
              <AnimatedSection delay={0.2} direction="right">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    Frontend Moderno
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js 15",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "Shadcn UI",
                      "Zustand",
                      "Framer Motion",
                    ].map((skill, i) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        color="green"
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* DevOps & Cloud */}
              <AnimatedSection delay={0.3} direction="right">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    DevOps & Cloud
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Docker",
                      "AWS",
                      "CI/CD",
                      "Serverless",
                      "Nginx",
                      "Vercel",
                    ].map((skill, i) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        color="purple"
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4} direction="right">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 bg-amber-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                    />
                    Qualidade & Testes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Jest",
                      "Bun Test",
                      "TDD",
                      "Zod",
                      "Swagger",
                      "OpenAPI",
                    ].map((skill, i) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        color="amber"
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section
        id="projects"
        className="relative bg-linear-to-b from-gray-900 to-gray-800 text-white py-20 px-4 overflow-hidden"
      >
        {/* Subtle animated grid background */}
        <GridBackground
          gridSize={60}
          dotColor="rgba(99, 102, 241, 0.15)"
          fadeColor="rgba(17, 24, 39, 1)"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <BlurText
              text="PORTFÓLIO SELECIONADO"
              className="text-4xl md:text-5xl font-bold mb-6 pixel-font text-yellow-400"
              delay={0.1}
              animateBy="words"
              as="h2"
            />
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Uma coleção de projetos que demonstram minha capacidade de
              resolver problemas complexos, desde a arquitetura de backend até a
              experiência do usuário final.
            </motion.p>
          </AnimatedSection>

          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  );
}
