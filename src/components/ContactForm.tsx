import { motion } from "motion/react";
import React, { useState } from "react";
import { INTERNAL_LINKS } from "../links";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "validating"
  >("idle");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const COMMON_PROVIDERS = [
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "yahoo.com.br",
    "yahoo.com",
    "uol.com.br",
    "bol.com.br",
    "terra.com.br",
    "ig.com.br",
    "globo.com",
    "icloud.com",
    "me.com",
    "live.com",
  ];

  const validateEmailFormat = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const checkDomainDNS = async (email: string) => {
    const domain = email.split("@")[1];
    if (!domain) return false;

    if (COMMON_PROVIDERS.includes(domain.toLowerCase())) return true;

    try {
      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=MX`,
      );
      const data = await response.json();
      if (data.Answer && data.Answer.length > 0) return true;

      const fallbackResponse = await fetch(
        `https://dns.google/resolve?name=${domain}&type=A`,
      );
      const fallbackData = await fallbackResponse.json();
      return fallbackData.Answer && fallbackData.Answer.length > 0;
    } catch (error) {
      console.error("Erro ao validar DNS:", error);
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmailFormat(email)) {
      setEmailError("Por favor, insira um formato de e-mail válido.");
      return;
    }

    setStatus("validating");

    const domainExists = await checkDomainDNS(email);
    if (!domainExists) {
      setEmailError(
        "Este domínio de e-mail não parece ser válido ou não existe.",
      );
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section
      id={INTERNAL_LINKS.aplicacao.replace("#", "")}
      className="py-24 md:py-32 bg-sandstone text-teal-deep relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          {/* <span className="text-teal-deep uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-[#005F6B]">
            Acesso Restrito
          </span> */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tighter mb-8">
            Iniciar Aplicação Estratégica
          </h2>
          <p className="text-teal-deep/90">
            Devido à natureza exclusiva do nosso serviço, operamos com um número
            limitado de bancas simultaneamente.
          </p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-teal-deep/5 p-12 text-center border border-gold-pale/20 rounded-2xl"
          >
            <h3 className="text-3xl font-serif mb-4">Aplicação Recebida.</h3>
            <p className="text-teal-deep/70 mb-8">
              Nossa equipe entrará em contato em até 30 minutos úteis em horário
              comercial.
            </p>
            <div className="w-12 h-12 border border-gold-pale rounded-full flex items-center justify-center mx-auto">
              <div className="w-2 h-2 bg-gold-pale rounded-full animate-ping" />
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 text-left">
                <label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-widest font-bold text-teal-deep/70"
                >
                  Nome Completo
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  className="w-full bg-transparent border-b border-teal-deep/40 focus:border-gold-pale outline-none transition-colors font-serif text-xl"
                  placeholder="Ex: Dr. Roberto Silva"
                />
              </div>
              <div className="space-y-2 text-left">
                <label
                  htmlFor="email"
                  className="text-[10px] uppercase tracking-widest font-bold text-teal-deep/70"
                >
                  E-mail
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-transparent border-b ${emailError ? "border-red-500" : "border-teal-deep/40"} focus:border-gold-pale outline-none transition-colors font-serif text-xl`}
                  placeholder="Ex: roberto@escritorio.com"
                />
                {emailError && (
                  <p className="text-[10px] text-red-500 mt-1 font-bold uppercase tracking-widest">
                    {emailError}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 text-left">
                <label
                  htmlFor="office"
                  className="text-[10px] uppercase tracking-widest font-bold text-teal-deep/70"
                >
                  Escritório / Banca
                </label>
                <input
                  required
                  id="office"
                  type="text"
                  className="w-full bg-transparent border-b border-teal-deep/40 focus:border-gold-pale outline-none transition-colors font-serif text-xl"
                  placeholder="Ex: Silva & Associados"
                />
              </div>
              <div className="space-y-2 text-left">
                <label
                  htmlFor="area"
                  className="text-[10px] uppercase tracking-widest font-bold text-teal-deep/70"
                >
                  Área de Atuação
                </label>
                <input
                  required
                  id="area"
                  type="text"
                  className="w-full bg-transparent border-b border-teal-deep/40 focus:border-gold-pale outline-none transition-colors font-serif text-xl"
                  placeholder="Ex: Direito Tributário"
                />
              </div>
            </div>

            {/* <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 text-left">
                <label
                  htmlFor="revenue"
                  className="text-[10px] uppercase tracking-widest font-bold text-teal-deep/70"
                >
                  Receita Aproximada (Anual)
                </label>
                <select
                  id="revenue"
                  required
                  className="w-full bg-transparent border-b border-teal-deep/40 focus:border-gold-pale outline-none transition-colors font-serif text-xl appearance-none"
                >
                  <option value="">Selecione uma faixa...</option>
                  <option>Até R$ 1M</option>
                  <option>R$ 1M - R$ 5M</option>
                  <option>R$ 5M - R$ 20M</option>
                  <option>Acima de R$ 20M</option>
                </select>
              </div>
            </div> */}

            <div className="space-y-2 text-left">
              <label
                htmlFor="objective"
                className="text-[10px] uppercase tracking-widest font-bold text-teal-deep/70"
              >
                Objetivo Estratégico
              </label>
              <textarea
                required
                id="objective"
                rows={4}
                className="w-full bg-transparent border-b border-teal-deep/40 focus:border-gold-pale outline-none transition-colors font-serif text-xl resize-none"
                placeholder="Descreva brevemente sua visão de expansão..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={status === "submitting" || status === "validating"}
              className="w-full py-6 bg-teal-deep text-sandstone font-bold uppercase tracking-[0.3em] text-xs hover:bg-teal-deep/90 transition-all disabled:opacity-50"
            >
              {status === "submitting"
                ? "Processando..."
                : status === "validating"
                  ? "Validando domínio..."
                  : "Iniciar Aplicação Estratégica"}
            </motion.button>

            <p className="text-center text-[10px] uppercase tracking-widest text-[#005F6B] font-bold">
              Resposta humana em até 30 minutos úteis.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
