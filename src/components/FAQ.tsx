import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como garantem conformidade com a OAB?",
      a: "Nossa metodologia respeita integralmente o Código de Ética e Disciplina da OAB, focando em marketing de conteúdo e autoridade, evitando qualquer tipo de mercantilização.",
    },
    {
      q: "Como funciona a migração de domínio?",
      a: "Realizamos migrações zero-downtime, garantindo que seus e-mails e serviços atuais permaneçam ativos enquanto escalamos sua nova infraestrutura de alta performance.",
    },
    {
      q: "Por que engenharia importa mais que estética?",
      a: "A estética atrai, mas a engenharia converte. Um site visualmente impecável que demora 5 segundos para carregar perde 60% dos decisores antes mesmo da primeira interação.",
    },
    {
      q: "Como garantem a segurança dos dados?",
      a: "Utilizamos criptografia de nível militar, firewalls de aplicação (WAF) e auditorias constantes para garantir que as informações da sua banca e clientes estejam blindadas.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-teal-deep">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tighter mb-8">
            Perguntas Estratégicas
          </h2>
          <p className="text-sandstone/60">
            Esclarecendo a fundação técnica do seu novo ativo de poder.
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
      </div>
    </section>
  );
}
