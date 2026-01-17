"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ParallaxSection from "./components/ParallaxSection";
import ProjectsGrid, { Project } from "./components/ProjectsGrid";
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

  const projects: Project[] = [
    {
      title: "Harmonia.io",
      description:
        "Ecossistema de sincronização musical de alta performance. Monorepo desenhado para lidar com concorrência massiva, migrando playlists entre serviços de streaming em background.",
      tech: [
        "Next.js 15",
        "Clean Architecture",
        "BullMQ",
        "Redis",
        "Strategy Pattern",
        "Docker",
      ],
      features: [
        "Arquitetura Hexagonal com isolamento total de domínio",
        "Sistema de filas resiliente para Jobs de sincronização",
        "Autenticação OAuth2 abstrata e extensível",
      ],
      github: "https://github.com/thiagoDOTjpeg/harmonia.io",
      demo: "https://harmonia.gritti.dev.br/",
      highlight: "Clean Architecture",
      color: "from-indigo-500 to-blue-600",
      image: "/screenshots/harmonia.png",
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Job Latency", value: "< 50ms" },
        { label: "Test Coverage", value: "85%+" },
      ],
      challenges: [
        {
          title: "Desacoplamento com Clean Architecture",
          description:
            "Implementação rigorosa de Portas e Adaptadores (Hexagonal). O Core Domain (UseCases, Entities) é completamente isolado de frameworks externos, facilitando testes unitários e trocas de infraestrutura.",
        },
        {
          title: "Estratégia de OAuth Polimórfica",
          description:
            "Uso do padrão Strategy (IOAuthCallbackStrategy) para normalizar respostas de APIs distintas (Spotify, Google) numa interface única, permitindo adicionar novos providers sem alterar o fluxo principal.",
        },
        {
          title: "Processamento Assíncrono Resiliente",
          description:
            "Arquitetura orientada a mensagens com BullMQ e Redis. A sincronização ocorre em background workers dedicados (PlaylistSyncWorker), garantindo que a API permaneça responsiva sob carga.",
        },
      ],
    },
    {
      title: "Distributed TaskFlow",
      description:
        "Sistema Kanban distribuído baseado em microsserviços. Implementa padrões de Gateway e comunicação em tempo real para colaboração de equipas.",
      tech: [
        "NestJS Microservices",
        "API Gateway",
        "WebSockets",
        "PostgreSQL",
        "React Query",
      ],
      features: [
        "API Gateway pattern para roteamento centralizado",
        "Microserviço de Notificações via WebSocket",
        "Separação de responsabilidades (Auth vs Tasks vs Notifications)",
      ],
      github: "https://github.com/thiagoDOTjpeg/kanban-microservice",
      demo: null,
      highlight: "Microservices",
      color: "from-purple-600 to-indigo-600",
      image: "/screenshots/taskflow.png",
      metrics: [
        { label: "Services", value: "4" },
        { label: "Sync", value: "Real-time" },
        { label: "DB Isolation", value: "Strict" },
      ],
      challenges: [
        {
          title: "Padrão API Gateway",
          description:
            "Implementação de um Gateway central (apps/api-gateway) que atua como proxy reverso, gerindo a autenticação JWT e encaminhando tráfego para os serviços de Tasks e Notifications de forma transparente.",
        },
        {
          title: "Arquitetura Event-Driven",
          description:
            "O serviço de notificações utiliza Gateways de WebSocket (NotificationsGateway) para fazer broadcast de eventos de atualização de tarefas em tempo real para todos os clientes conectados.",
        },
        {
          title: "Database per Service",
          description:
            "Cada microserviço (Auth, Tasks, Notifications) possui o seu próprio esquema de base de dados e migrações independentes, garantindo isolamento total de dados e falhas.",
        },
      ],
    },
    {
      title: "Fleet & Logistics Core",
      description:
        "Infraestrutura robusta para sistemas logísticos, focada em orquestração de ambientes e escalabilidade horizontal.",
      tech: [
        "Docker Compose",
        "Nginx",
        "Shell Scripting",
        "Makefile",
        "PostgreSQL",
      ],
      features: [
        "Ambiente de desenvolvimento reprodutível",
        "Proxy reverso com Nginx",
        "Automação de tarefas com Makefile",
      ],
      github: "https://github.com/thiagoDOTjpeg/fleet-infra",
      demo: null,
      highlight: "DevOps / Infra",
      color: "from-orange-500 to-amber-600",
      image: "/screenshots/fleet.png",
      metrics: [
        { label: "Deploy", value: "1-Cmd" },
        { label: "Container", value: "Alpine" },
        { label: "Proxy", value: "Nginx" },
      ],
      challenges: [
        {
          title: "Infraestrutura como Código (IaC)",
          description:
            "Definição declarativa de todo o ambiente via Docker Compose, orquestrando serviços de base de dados e proxy reverso com redes isoladas para segurança.",
        },
        {
          title: "Reverse Proxy & Load Balancing",
          description:
            "Configuração manual de Nginx (nginx.conf) para atuar como ponto de entrada único, gerindo o encaminhamento de tráfego para os serviços backend adequados.",
        },
        {
          title: "Automação de Developer Experience",
          description:
            "Uso de Makefiles e Scripts Shell (init-db.sh) para padronizar o setup do ambiente local, garantindo que qualquer developer possa iniciar a stack completa com um único comando (make up).",
        },
      ],
    },
    {
      title: "Industrial Telemetry Cloud",
      description:
        "Pipeline de dados IoT escalável na AWS para ingestão e processamento de telemetria industrial em tempo real utilizando Infraestrutura como Código.",
      tech: ["Terraform", "AWS SQS", "Lambda", "RDS", "Python", "Docker"],
      features: [
        "Infraestrutura Multi-AZ provisionada integralmente via Terraform",
        "Arquitetura desacoplada produtora-consumidora via SQS",
        "Segurança granular com IAM e VPC Security Groups",
      ],
      github: "https://github.com/thiagodotjpeg/industrial-telemetry-cloud",
      image: "/screenshots/industrial-aws.png",
      demo: null,
      highlight: "DevOps & Cloud",
      color: "from-orange-500 to-red-600",
      metrics: [
        { label: "Tempo de Setup", value: "< 5 min" },
        { label: "Capacidade Ingestão", value: "10k msg/s" },
        { label: "Disponibilidade Infra", value: "99.99%" },
      ],
      challenges: [
        {
          title: "Escalabilidade Elástica",
          description:
            "Configuração de gatilhos de Lambda sobre SQS para processamento em paralelo, garantindo zero perda de dados durante picos de telemetria.",
        },
        {
          title: "Automação com Terraform",
          description:
            "Criação de módulos reutilizáveis para VPC e RDS, eliminando a configuração manual e garantindo paridade entre ambientes de dev e prod.",
        },
      ],
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
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 pixel-font text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
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
