import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import ProjectCarousel from "./components/ProjectCarousel";

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
        "Solução Open Source robusta para sincronização unidirecional de playlists entre serviços de streaming (YouTube -> Spotify). Desenvolvida como um Monorepo utilizando Turborepo, focada em alta performance, arquitetura distribuída e processamento assíncrono de jobs.",
      tech: [
        "Next.js 15",
        "Node.js",
        "TypeScript",
        "BullMQ",
        "Redis",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "Shadcn UI",
        "Docker",
        "Clean Architecture",
      ],
      features: [
        "Arquitetura Hexagonal/Clean Architecture com Domain-Driven Design",
        "Sistema de filas resiliente (BullMQ + Redis) para sync de milhares de faixas",
        "Autenticação OAuth2 segura com gestão de refresh tokens e encriptação AES",
        "Frontend moderno com Next.js 15 (App Router), TailwindCSS e Shadcn UI",
      ],
      github: "https://github.com/thiagoDOTjpeg/harmonia",
      demo: "https://harmonia-io-web.vercel.app/",
      highlight: "Open Source [Em Dev]",
      color: "from-indigo-500 to-cyan-400",
    },
    {
      title: "Financial Management System",
      description:
        "Sistema completo de gestão financeira pessoal enterprise-grade. Permite controle granular de contas, transações, faturas recorrentes e múltiplos cartões de crédito com dashboards analíticos.",
      tech: [
        "Java 17",
        "Spring Boot 3",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Spring Security",
        "JWT",
      ],
      features: [
        "Implementação rigorosa de SOLID e Clean Code",
        "Segurança avançada com Spring Security e JWT Stateless",
        "Relatórios dinâmicos e gráficos interativos com Recharts",
        "Pipeline de CI/CD e containerização completa",
      ],
      github: "https://github.com/thiagoDOTjpeg/financial-management",
      demo: null,
      highlight: "Destaque Fullstack",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "API Optimization - CodeHaus",
      description:
        "Case de sucesso profissional: Refatoração e otimização de performance de uma API legada crítica, resultando em uma redução drástica no tempo de resposta (de 3s para 200ms) e custos de infraestrutura.",
      tech: ["Node.js", "Express", "Redis", "MySQL", "MongoDB", "Bun Test"],
      features: [
        "Estratégias agressivas de Caching com Redis (Cache-Aside)",
        "Refatoração de queries N+1 e otimização de índices de banco",
        "Testes de carga e integração automatizados",
        "Arquitetura orientada a eventos para processos pesados",
      ],
      github: null,
      demo: null,
      highlight: "Experiência Profissional",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Dashboard Redesign",
      description:
        "Modernização completa da interface administrativa da CodeHaus. Foco total em UX/UI, acessibilidade e performance de renderização para lidar com grandes volumes de dados em tempo real.",
      tech: [
        "Next.js",
        "TypeScript",
        "Material-UI",
        "Zustand",
        "React Hook Form",
      ],
      features: [
        "Gerenciamento de estado atômico e performático com Zustand",
        "Validação complexa de formulários com Zod/Yup",
        "WebSockets para atualizações de dados em tempo real",
        "Design System customizado e responsivo",
      ],
      github: null,
      demo: null,
      highlight: "Frontend Avançado",
      color: "from-purple-500 to-pink-600",
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
                href="mailto:thiago.gritti12@gmail.com"
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

      <section className="bg-gray-900 text-white py-16 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 border-l-8 border-blue-500 pl-6">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                Sou um <strong>Desenvolvedor Full-Stack</strong> apaixonado por
                construir sistemas complexos e escaláveis. Minha especialidade é
                transformar requisitos desafiadores em código limpo,
                performático e manutenível.
              </p>
              <p>
                Com forte base em{" "}
                <strong>TypeScript, Node.js e o ecossistema React</strong>,
                tenho experiência prática em arquiteturas modernas (Clean
                Architecture, Microsserviços, Serverless) e em otimizar
                aplicações para alta carga.
              </p>
              <p>
                Atualmente focado em aprimorar soluções de infraestrutura e
                DevOps, garantindo que o código que escrevo não apenas funcione,
                mas escale com eficiência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-5 border-l-4 border-blue-400 shadow-lg">
                <h3 className="font-bold text-blue-400 mb-2">
                  Backend & Arquitetura
                </h3>
                <p className="text-sm text-gray-400">
                  Node.js, NestJS, Clean Arch, DDD, BullMQ, Redis, PostgreSQL,
                  Java/Spring.
                </p>
              </div>
              <div className="bg-gray-800 p-5 border-l-4 border-green-400 shadow-lg">
                <h3 className="font-bold text-green-400 mb-2">
                  Frontend Moderno
                </h3>
                <p className="text-sm text-gray-400">
                  Next.js 15, React, TypeScript, Tailwind, Shadcn UI, Zustand.
                </p>
              </div>
              <div className="bg-gray-800 p-5 border-l-4 border-purple-400 shadow-lg">
                <h3 className="font-bold text-purple-400 mb-2">
                  DevOps & Cloud
                </h3>
                <p className="text-sm text-gray-400">
                  Docker, AWS, CI/CD Pipelines, Serverless, Nginx.
                </p>
              </div>
              <div className="bg-gray-800 p-5 border-l-4 border-yellow-400 shadow-lg">
                <h3 className="font-bold text-yellow-400 mb-2">Qualidade</h3>
                <p className="text-sm text-gray-400">
                  Jest, Bun Test, TDD, Zod, Swagger/OpenAPI.
                </p>
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

          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
