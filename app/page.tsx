import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ParallaxSection from "./components/ParallaxSection";

export default function Home() {
  const parallaxLayers = [
    { image: "/1.png", speed: 0.2, zIndex: 1 },
    { image: "/2.png", speed: 0.4, zIndex: 2 },
    { image: "/3.png", speed: 0.6, zIndex: 3 },
    { image: "/4.png", speed: 0.8, zIndex: 4 },
  ];

  const projects = [
    {
      title: "Financial Management System",
      description:
        "Sistema completo de gestão financeira pessoal com controle de contas, transações, faturas e cartões de crédito.",
      tech: [
        "Java",
        "Spring Boot",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Docker",
      ],
      features: [
        "Autenticação JWT com Spring Security",
        "Arquitetura DDD e Clean Architecture",
        "Dashboard interativo com Recharts",
        "Sistema de faturas automatizado",
      ],
      github: "https://github.com/thiagoDOTjpeg/financial-management",
      demo: null,
      highlight: "Projeto Destaque",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "API Optimization - CodeHaus",
      description:
        "Otimização de performance de API que reduziu tempo de resposta de 12ms para 5ms (58% mais rápido).",
      tech: ["Node.js", "Express", "Redis", "MySQL", "MongoDB"],
      features: [
        "Refatoração do fluxo de dados",
        "Implementação de cache com Redis",
        "Eliminação de chamadas redundantes",
        "Testes de integração com Bun",
      ],
      github: null,
      demo: null,
      highlight: "Experiência Profissional",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Dashboard Redesign",
      description:
        "Redesign completo do dashboard principal da plataforma CodeHaus para melhor usabilidade e análise de dados.",
      tech: ["Next.js", "TypeScript", "Material-UI", "Zustand"],
      features: [
        "UI responsiva e intuitiva",
        "Gerenciamento de estado global",
        "Validação de formulários com Yup",
        "WebSocket para atualizações real-time",
      ],
      github: null,
      demo: null,
      highlight: null,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <main className="bg-gray-900">
      <ParallaxSection layers={parallaxLayers}>
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center text-white px-4">
            <h1
              className="text-5xl sm:text-6xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-pixel)",
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
              className="text-lg sm:text-xl mb-10"
              style={{
                color: "var(--muted)",
                textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              Desenvolvedor Fullstack Junior | Backend
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href="https://github.com/thiagoDOTjpeg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir perfil do GitHub de Thiago Gritti"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-[#2d2d2d] rounded-none transition-all border-2 border-[#333] hover:border-[#555] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <FiGithub
                  size={20}
                  aria-hidden="true"
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/thiago-gritti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir perfil do LinkedIn de Thiago Gritti"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] hover:bg-[#0088CC] rounded-none transition-all border-2 border-[#005582] hover:border-[#006699] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <FiLinkedin
                  size={20}
                  aria-hidden="true"
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">LinkedIn</span>
              </a>

              <a
                href="mailto:thiago@gritti.dev.br"
                aria-label="Enviar email para Thiago Gritti"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#2d6a4f] hover:bg-[#40916c] rounded-none transition-all border-2 border-[#1b4332] hover:border-[#2d6a4f] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <FiMail
                  size={20}
                  aria-hidden="true"
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">Email</span>
              </a>
            </div>

            <a
              href="#projetos"
              role="button"
              aria-label="Ir para a seção Sobre Mim"
              className="inline-block px-10 py-4 bg-[#1e40af] hover:bg-[#2563eb] rounded-none transition-all border-2 border-[#1e3a8a] hover:border-[#1e40af] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </ParallaxSection>

      <section className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Desenvolvedor Fullstack Junior focado em backend, atualmente
                trabalhando na{" "}
                <span className="text-blue-400 font-semibold">CodeHaus</span>{" "}
                onde otimizei performance de APIs em 58% e redesenhei dashboards
                completos.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Cursando Análise e Desenvolvimento de Sistemas na Univali, com
                experiência sólida em Java/Spring Boot e stack MERN (React,
                Node.js) usando TypeScript.
              </p>
              <p className="text-lg text-gray-300">
                Apaixonado por arquitetura limpa, DDD e criar soluções
                escaláveis que resolvem problemas reais.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Node.js", "Nest.js", "Express"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-green-400">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "Material-UI",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">
                  DevOps & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 text-sm"
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
        className="bg-linear-to-b from-gray-900 to-gray-800 text-white py-12 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, desde sistemas completos até
            otimizações de performance em produção.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 hover:border-gray-600 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all p-6"
              >
                {project.highlight && (
                  <div
                    className={`absolute -top-3 -right-3 bg-linear-to-r ${project.color} px-4 py-1 text-xs font-bold shadow-lg`}
                  >
                    {project.highlight}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-700 text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-xs text-gray-400 space-y-1 mb-4">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-sm transition-colors"
                    >
                      <FiGithub size={16} />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-sm transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-blue-900 to-purple-900 py-12 px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800/50 p-8 border-2 border-gray-700 rounded-none">
            <div className="text-5xl font-bold text-green-400 mb-2">5ms</div>
            <div className="text-gray-300 font-semibold">
              Tempo de Resposta da API
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Otimizado de 12ms para 5ms
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 border-2 border-gray-700 rounded-none">
            <div className="text-5xl font-bold text-blue-400 mb-2">E2E</div>
            <div className="text-gray-300 font-semibold">
              Desenvolvimento Full-Stack
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Front, Back e Deploy
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 border-2 border-gray-700 rounded-none">
            <div className="text-5xl font-bold text-purple-400 mb-2">DDD</div>
            <div className="text-gray-300 font-semibold">
              Clean Architecture
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Design de Software Robusto
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
