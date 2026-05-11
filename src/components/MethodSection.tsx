import React, { useRef } from "react";
import { motion } from "motion/react";
import { INTERNAL_LINKS } from "../links";
import method1 from "../assets/images/method1.webp";
import method2 from "../assets/images/method2.webp";
import method3 from "../assets/images/method3.webp";
import method4 from "../assets/images/method4.webp";

export default function MethodSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: "01",
      title: "Resiliência Digital: Conformidade do Provimento 205/2021",
      content:
        "Seu site é construído sobre infraestrutura própria, sem dependência de plataformas de terceiros. Isso significa conformidade total com a OAB, dados sob sua custódia e performance que não cai quando o servidor de outro alguém falha.",
      value:
        "Privacidade, segurança e um site que responde com consistência em qualquer cenário.",
      image: method1,
    },
    {
      id: "02",
      title: "Curadoria Estética: O Luxo como Ativo",
      content:
        "A interface é projetada como um ativo de prestígio. Nossa curadoria une precisão algorítmica a uma estética minimalista e austera, comunicando solidez de forma perentória para bancas que prezam pela discrição e autoridade.",
      value:
        "Uma identidade própria que eleva a percepção de valor e atrai clientes mais alinhados ao perfil da banca.",
      image: method2,
    },
    {
      id: "03",
      title: "Execução Técnica e Entrega Estruturada",
      content:
        "Transformamos a complexidade técnica em um processo claro e previsível. O projeto é desenvolvido com controle rigoroso de qualidade e entregue em até 20 dias, já pronto para operar com estabilidade e desempenho consistente.",
      value:
        "Previsibilidade total para o plano estratégico da sua banca. Transformamos o intangível em patrimônio digital líquido.",
      image: method3,
    },
    {
      id: "04",
      title: "Governança Técnica e Independência de Plataforma",
      content:
        "A estrutura do seu site é construída sem dependência de plataformas limitadas ou soluções engessadas. Isso garante estabilidade, segurança e liberdade para evoluções futuras, sem os riscos comuns de sistemas genéricos.",
      value:
        "Controle prático sobre sua presença digital, com uma base sólida que permite crescimento contínuo e previsível.",
      image: method4,
    },
  ];

  return (
    <section
      id={INTERNAL_LINKS.estrategia.replace("#", "")}
      ref={containerRef}
      className="pt-20 pb-60 bg-[#f4f1ea] relative overflow-hidden"
    >
      <div className="papel-organico" aria-hidden="true" />
      <div className="papel-vincado" aria-hidden="true" />
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-8 bg-gold-pale/40" />
            <span className="text-gold-pale font-mono text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-bold">
              Protocolo de Engenharia
            </span>
            <div className="h-px w-8 bg-gold-pale/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[72px] font-serif text-teal-deep leading-[1.1] mb-10 tracking-tight"
          >
            Arquitetura de Ativos <br className="hidden md:block" />
            <span className="text-gold-pale italic">e Soberania de Marca.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-teal-deep/80 text-[17px] md:text-[20px] max-w-2xl mx-auto font-light leading-relaxed text-balance"
          >
            Substituímos a fragilidade de sistemas genéricos por infraestruturas
            de elite. Protocolos projetados para bancas que definem
            jurisprudências e lideram mercados.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-32 md:space-y-56">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-16 lg:gap-32`}
            >
              {/* Card Side */}
              <div className="w-full md:w-5/12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative group overflow-hidden rounded-[32px] shadow-2xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-[4/3] bg-teal-deep overflow-hidden flex items-center justify-center"
                  >
                    <motion.img
                      src={step.image.src}
                      alt={step.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-6/12 space-y-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gold-pale font-mono text-[11px] tracking-[0.4em] uppercase font-bold py-1.5 px-4 border border-gold-pale/30 rounded-full">
                        Fase {step.id}
                      </span>
                    </div>
                    <h3 className="text-[28px] md:text-[36px] font-serif text-teal-deep mb-6 leading-tight">
                      {step.title}
                    </h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="text-teal-deep/80 text-[16px] md:text-[18px] leading-relaxed mb-10 font-light max-w-xl"
                  >
                    {step.content}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    className="bg-white/50 border border-teal-deep/5 backdrop-blur-sm p-8 rounded-2xl relative shadow-sm"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gold-pale" />
                    <span className="text-gold-pale font-bold text-[10px] uppercase tracking-widest block mb-3">
                      Impacto Estratégico
                    </span>
                    <p className="text-teal-deep font-sans text-[16px] font-medium italic leading-relaxed">
                      "{step.value}"
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
