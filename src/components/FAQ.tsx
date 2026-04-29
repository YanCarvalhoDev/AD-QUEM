import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
  {
    q: "Como garantem a conformidade ética com a OAB?",
    a: "Nossa engenharia é orientada pelo Provimento 205/2021. Não trabalhamos com mercantilização, mas com a construção de autoridade digital através de marketing de conteúdo técnico e design sóbrio, respeitando a sobriedade indispensável à advocacia de elite.",
  },
  {
    q: "Por que investir em performance 95+ (PageSpeed) em vez de apenas um design bonito?",
    a: "Para o cliente de alto padrão, tempo é o recurso mais escasso. Um site que carrega em milissegundos transmite eficiência e vigor tecnológico. A estética atrai, mas é a engenharia de performance que garante que o decisor não abandone a página antes de conhecer sua banca.",
  },
  {
    q: "Os projetos são personalizados ou utilizam estruturas prontas?",
    a: "Cada banca possui um DNA único e nossa entrega reflete isso. Não utilizamos templates. Cada projeto é uma peça de engenharia exclusiva, desenhada do zero para transcrever a identidade visual e o prestígio do seu escritório em código de alta performance.",
  },
  {
    q: "Qual o valor do investimento para um ecossistema digital de luxo?",
    a: "Não trabalhamos com pacotes fechados, pois não tratamos sites como commodities. O valor é proporcional à complexidade da infraestrutura e aos objetivos de autoridade da banca. Projetamos ativos digitais sob medida, focados em retorno sobre reputação e conversão qualificada.",
  },
  {
    q: "Como lidam com a segurança de dados e o sigilo dos clientes?",
    a: "Implementamos camadas de segurança de nível bancário, com criptografia de ponta a ponta e auditorias de vulnerabilidade. Protegemos o ativo mais valioso de um advogado de alto padrão: a confiança e o sigilo das informações de seus constituintes.",
  },
  {
    q: "A migração para uma infraestrutura de alta performance gera instabilidade?",
    a: "Nossa metodologia de migração é cirúrgica (zero-downtime). Escalamos sua nova arquitetura em paralelo, garantindo que e-mails e serviços críticos permaneçam operacionais enquanto elevamos o patamar tecnológico da sua presença digital.",
  }
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
