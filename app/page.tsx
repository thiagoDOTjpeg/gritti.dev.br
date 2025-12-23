import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import ProjectsGrid from "./components/ProjectsGrid";

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
      github: "https://github.com/thiagoDOTjpeg/kanban-microservice", // Certifica-te de que o repo está público
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
    <main className="bg-gray-900 min-h-screen">
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
            <h1
              className="text-5xl sm:text-6xl font-bold mb-3 pixel-font"
              style={{
                color: "var(--accent-2)",
                textShadow: `
                   3px 0px 0px #000000,
                   -3px 0px 0px #000000,
                   0px 3px 0px #000000,
                   0px -3px 0px #000000,
                   3px 3px 0px #000000,
                   -3px -3px 0px #000000,
                   3px -3px 0px #000000,
                   -3px 3px 0px #000000,
                   6px 6px 0px rgba(0,0,0,0.5)
                 `,
              }}
            >
              THIAGO GRITTI
            </h1>
            <p
              className="text-lg sm:text-xl mb-10 font-medium tracking-wide"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              Desenvolvedor Full-Stack & Arquiteto de Software
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://github.com/thiagoDOTjpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-[#1a1a1a] hover:bg-[#2d2d2d] border-2 border-[#333] hover:border-[#555] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <FiGithub
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-bold tracking-wider">GITHUB</span>
              </a>

              <a
                href="https://linkedin.com/in/thiago-gritti"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-[#0077B5] hover:bg-[#006396] border-2 border-[#005582] hover:border-[#004b73] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <FiLinkedin
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-bold tracking-wider">LINKEDIN</span>
              </a>

              <a
                href="mailto:thiago@gritti.dev.br"
                className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-[#2d6a4f] hover:bg-[#1b4332] border-2 border-[#1b4332] hover:border-[#0d2b1d] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <FiMail
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-bold tracking-wider">EMAIL</span>
              </a>
            </div>

            <a
              href="#projetos"
              className="inline-block px-12 py-4 bg-[#1e40af] hover:bg-[#1e3a8a] border-2 border-[#1e3a8a] hover:border-[#172554] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] transition-all font-bold text-lg tracking-widest"
            >
              VER PROJETOS
            </a>
          </div>
        </div>
      </ParallaxSection>

      <section className="bg-[#0f172a] text-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="mb-16 text-center md:text-left">
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3 block">
              Conheça meu trabalho
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sobre Mim
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Coluna Esquerda - Texto "Sobre Mim" */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Sou um{" "}
                <span className="text-white font-semibold">
                  Desenvolvedor Full-Stack
                </span>{" "}
                apaixonado por construir sistemas complexos e escaláveis. Minha
                especialidade é transformar requisitos desafiadores em código
                limpo, performático e manutenível.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Com forte base em{" "}
                <span className="text-white font-semibold">
                  TypeScript, Node.js e o ecossistema React
                </span>
                , tenho experiência prática em arquiteturas modernas como Clean
                Architecture, Microsserviços e Serverless — sempre focando em
                otimizar aplicações para alta carga.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Atualmente focado em aprimorar soluções de{" "}
                <span className="text-white font-semibold">
                  infraestrutura e DevOps
                </span>
                , garantindo que o código que escrevo não apenas funcione, mas
                escale com eficiência.
              </p>

              {/* CTA sutil */}
              <div className="pt-4">
                <a
                  href="mailto:thiago@gritti.dev.br"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
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
                </a>
              </div>
            </div>

            {/* Coluna Direita - Habilidades */}
            <div className="space-y-8">
              {/* Backend & Arquitetura */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
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
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend Moderno */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
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
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-green-500/10 text-green-300 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
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
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qualidade & Testes */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Qualidade & Testes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Jest", "Bun Test", "TDD", "Zod", "Swagger", "OpenAPI"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-lg hover:bg-amber-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="bg-linear-to-b from-gray-900 to-gray-800 text-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 pixel-font text-yellow-400 drop-shadow-md">
              PORTFÓLIO SELECIONADO
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Uma coleção de projetos que demonstram minha capacidade de
              resolver problemas complexos, desde a arquitetura de backend até a
              experiência do usuário final.
            </p>
          </div>

          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
