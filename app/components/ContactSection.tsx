"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiCheck,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";
import AnimatedSection from "./ui/AnimatedSection";
import BlurText from "./ui/BlurText";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Aqui você poderia enviar para um serviço real como:
      // - Formspree: https://formspree.io/
      // - EmailJS: https://www.emailjs.com/
      // - Uma API própria

      console.log("Form data:", formData);

      // Show success message and clear form, but keep form visible
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common input styles with improved contrast (WCAG 4.5:1)
  const inputBaseStyles = clsx(
    "w-full px-4 py-3 min-h-[48px]",
    "bg-slate-800/60 border border-slate-600/50 rounded-lg",
    "text-white placeholder-slate-400",
    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30",
    "transition-colors duration-200 outline-none"
  );

  // Label styles with improved contrast
  const labelBaseStyles =
    "flex items-center gap-2 text-sm font-medium text-slate-200 mb-2";

  return (
    <section
      id="contact"
      className="relative bg-linear-to-b from-slate-900 to-slate-800 text-white py-24 px-4 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <BlurText
            text="Vamos Conversar"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            delay={0.1}
            animateBy="words"
            as="h2"
          />
          <motion.p
            className="text-slate-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Tenho interesse em novas oportunidades, parcerias ou simplesmente
            quer conhecer meu trabalho? Deixe uma mensagem!
          </motion.p>
        </AnimatedSection>

        {/* Success Message - Displayed above form, form stays visible */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mb-6 overflow-hidden"
              role="alert"
              aria-live="polite"
            >
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FiCheck
                    className="w-5 h-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-green-400 font-semibold">
                    Mensagem Enviada com Sucesso!
                  </p>
                  <p className="text-slate-300 text-sm">
                    Responderei em breve. Obrigado pelo contacto!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Nome */}
            <div>
              <label htmlFor="contact-name" className={labelBaseStyles}>
                <FiUser className="w-4 h-4 text-blue-400" aria-hidden="true" />
                Nome
                <span className="text-red-400" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="name"
                className={inputBaseStyles}
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className={labelBaseStyles}>
                <FiMail className="w-4 h-4 text-blue-400" aria-hidden="true" />
                Email
                <span className="text-red-400" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="email"
                className={inputBaseStyles}
                placeholder="seu@email.com"
              />
            </div>
          </div>

          {/* Telefone - Optional field with distinct styling */}
          <div>
            <label
              htmlFor="contact-phone"
              className={clsx(labelBaseStyles, "text-slate-400")}
            >
              <FiPhone className="w-4 h-4 text-slate-500" aria-hidden="true" />
              Telefone
              <span className="text-xs font-normal text-slate-500 ml-1">
                (Opcional)
              </span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              aria-required="false"
              className={clsx(
                inputBaseStyles,
                "bg-slate-800/40 border-slate-700/50",
                "focus:bg-slate-800/60"
              )}
              placeholder="(11) 99999-9999"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="contact-message" className={labelBaseStyles}>
              <FiMessageSquare
                className="w-4 h-4 text-blue-400"
                aria-hidden="true"
              />
              Mensagem
              <span className="text-red-400" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              rows={5}
              className={clsx(inputBaseStyles, "resize-none min-h-[140px]")}
              placeholder="Descreva seu projeto, proposta ou mensagem..."
            />
          </div>

          {/* Submit Button - Larger touch target (48px min) */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              "w-full py-4 min-h-[52px] rounded-lg font-bold",
              "bg-gradient-to-r from-blue-600 to-purple-600",
              "text-white shadow-lg",
              "hover:from-blue-500 hover:to-purple-500",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center justify-center gap-2",
              "transition-all duration-200"
            )}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" aria-hidden="true" />
                <span>Enviar Mensagem</span>
              </>
            )}
          </motion.button>

          {/* Required fields note */}
          <p className="text-center text-sm text-slate-500">
            <span className="text-red-400" aria-hidden="true">
              *
            </span>{" "}
            Campos obrigatórios
          </p>
        </form>
      </div>
    </section>
  );
}
