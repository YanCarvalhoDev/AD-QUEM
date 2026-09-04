import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Zap } from "lucide-react";
import { CONTACT_LINKS } from "../links";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "O que exatamente a Ad Quem faz?",
      a: "A Ad Quem estrutura a presença digital de bancas jurídicas, combinando estratégia, tecnologia, conteúdo e experiência para transformar reputação e conhecimento em uma presença consistente e relevante.",
    },
    {
      q: "A Ad Quem desenvolve apenas sites para escritórios?",
      a: "Não. O site é uma parte da estratégia. Estruturamos a presença digital da banca considerando posicionamento, arquitetura de informação, conteúdo, mecanismos de busca, experiência e infraestrutura.",
    },
    {
      q: "Como a Ad Quem pode fortalecer a presença de uma banca?",
      a: "Analisamos como a banca é apresentada e encontrada no ambiente digital e construímos uma estrutura alinhada ao seu posicionamento, facilitando a descoberta, a compreensão de sua expertise e a percepção de valor.",
    },
    {
      q: "Como funciona um projeto com a Ad Quem?",
      a: "O projeto passa por quatro etapas: diagnóstico e arquitetura, identidade e experiência, desenvolvimento e infraestrutura, e evolução. Cada etapa é orientada pelos objetivos e pelo posicionamento da banca.",
    },
    {
      q: "A Ad Quem trabalha com conteúdo e especialistas jurídicos?",
      a: "Sim. A Ad Quem mantém uma estrutura editorial com artigos e autores do mercado jurídico, incluindo advogados, mestres e doutores. Esse conhecimento contribui para a construção de autoridade e para uma presença digital mais relevante.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-teal-deep">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tighter mb-8">
            Perguntas frequentes
          </h2>
          <p className="text-sandstone/90">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gold-pale/10">
              <button
                id={`faq-button-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
                aria-expanded={openIndex === i}
                aria-controls={`faq-content-${i}`}
              >
                <span className="text-xl font-serif group-hover:text-gold-pale transition-colors text-white">
                  {faq.q}
                </span>
                <span className="text-gold-pale">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-content-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-sandstone/60 leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-8 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-sandstone">
            <h4 className="text-xl font-bold mb-2 text-teal-deep tracking-wider">
              Sua banca está sendo percebida como deveria?
            </h4>
            <p className="text-teal-deep/60 text-sm">
              Entenda como sua presença digital pode contribuir para a
              autoridade da sua banca.
            </p>
          </div>
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold-pale text-teal-deep font-bold rounded-full hover:bg-gold-pale/90 transition-all whitespace-nowrap flex items-center gap-2"
            aria-label="Solicitar diagnóstico de performance gratuito"
          >
            Avaliar minha presença digital <Zap size={18} fill="currentColor" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
