"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { FiBriefcase, FiCode } from "react-icons/fi";
import AnimatedSection from "./ui/AnimatedSection";
import BlurText from "./ui/BlurText";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements?: string[];
  icon: React.ReactNode;
  current?: boolean;
}

const experiences: TimelineItem[] = [
  {
    year: "Out 2025 - Atual",
    title: "Desenvolvedor Full Stack Freelancer",
    company: "Autônomo",
    description:
      "Desenvolvimento fullstack com Java Spring Boot, Node.js e NestJS.",
    achievements: [
      "APIs REST escaláveis com Java Spring Boot e Node.js",
      "Aplicações backend com NestJS e padrões modernos",
      "Arquiteturas bem estruturadas e boas práticas de código",
    ],
    icon: <FiBriefcase className="w-6 h-6" />,
    current: true,
  },
  {
    year: "Ago - Out 2025",
    title: "Desenvolvedor Full-Stack Júnior",
    company: "CodeHaus",
    description:
      "Desenvolvimento e otimização de sistemas com foco em performance e qualidade de código.",
    achievements: [
      "Refatorei sistema de análise de crédito, reduzindo tempo de resposta de ~15s para ~5s",
      "Migrei base de código de JavaScript para TypeScript com organização em camadas",
      "Unifiquei fluxos redundantes de API, reduzindo manutenção e complexidade",
      "Integrei APIs externas de assinatura digital e análise financeira",
      "Implementei testes de integração automatizados em cada deploy",
      "Desenvolvi autenticação com JWT, WebSockets e automações com cron jobs",
      "Containerizei a aplicação com Docker para padronizar deploy",
    ],
    icon: <FiCode className="w-6 h-6" />,
  },
  {
    year: "Dez 2023 - Ago 2025",
    title: "Estagiário",
    company: "Prefeitura Municipal de Balneário Camboriú",
    description:
      "Gestão de processos e sistemas internos com foco em conformidade e resolução de problemas.",
    achievements: [
      "Gestão do processo de entrega de CNHs com 100% de conformidade com normas do DETRAN",
      "Interpretação e resolução de problemas complexos de usuários",
      "Validação de documentação e atualização de sistemas internos",
    ],
    icon: <FiBriefcase className="w-6 h-6" />,
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-slate-900/50 text-white py-24 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <BlurText
            text="Experiência Profissional"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            delay={0.1}
            animateBy="words"
            as="h2"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className={clsx(
                  "relative grid md:grid-cols-2 gap-4 md:gap-8 pl-8 md:pl-0"
                )}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-6 h-6 flex items-center justify-center">
                  <motion.div
                    className={clsx(
                      "w-full h-full rounded-full flex items-center justify-center text-white border-2",
                      item.current
                        ? "bg-blue-500 border-blue-400"
                        : "bg-slate-800 border-gray-600"
                    )}
                    whileInView={{
                      boxShadow: item.current
                        ? [
                            "0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 20px rgba(59, 130, 246, 0.4)",
                            "0 0 0 rgba(59, 130, 246, 0.4)",
                          ]
                        : undefined,
                    }}
                    transition={{
                      duration: 2,
                      repeat: item.current ? Infinity : 0,
                    }}
                  >
                    {item.icon && <div className="text-xs">{item.icon}</div>}
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={clsx(
                    "py-4",
                    index % 2 === 0
                      ? "md:col-start-1 md:text-right md:pr-12"
                      : "md:col-start-2 md:text-left md:pl-12"
                  )}
                >
                  <motion.span
                    className="text-sm text-blue-400 font-mono font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1 }}
                  >
                    {item.year}
                  </motion.span>

                  <motion.h3
                    className="text-xl font-bold text-white mt-2 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.15 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-blue-300 font-semibold text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {item.company}
                  </motion.p>

                  <motion.p
                    className="text-gray-400 text-sm mt-2 leading-relaxed max-w-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.25 }}
                  >
                    {item.description}
                  </motion.p>

                  {item.achievements && item.achievements.length > 0 && (
                    <motion.ul
                      className={clsx(
                        "mt-3 space-y-1 text-xs text-gray-400 max-w-sm",
                        index % 2 === 0
                          ? "md:ml-auto md:text-right"
                          : "md:ml-0 md:text-left"
                      )}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {item.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className={clsx(
                            "flex gap-2 items-start",
                            index % 2 === 0
                              ? "md:flex-row-reverse md:text-right md:justify-end"
                              : "md:text-left"
                          )}
                        >
                          <span className="text-blue-400 shrink-0 mt-0.5">
                            –
                          </span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {item.current && (
                    <motion.div
                      className="inline-block mt-3 px-2 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-semibold rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      Atualmente
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
