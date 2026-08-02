import React from "react";
import { motion } from "motion/react";
import { Layout, Zap, Search, Lock } from "lucide-react";
import { INTERNAL_LINKS } from "../links";

export default function Pillars() {
  const pillars = [
    {
      title: "Arquitetura de Marca Jurídica",
      desc: "Design que comunica autoridade silenciosa e prestígio inquestionável.",
      icon: <Layout size={32} strokeWidth={1} />,
    },
    {
      title: "Engenharia de Performance",
      desc: "Otimização extrema para garantir que sua banca nunca perca um segundo do cliente.",
      icon: <Zap size={32} strokeWidth={1} />,
    },
    {
      title: "SEO de Intenção Estratégica",
      desc: "Posicionamento orgânico focado em termos de alto valor para o mercado jurídico.",
      icon: <Search size={32} strokeWidth={1} />,
    },
    {
      title: "Compliance e Segurança",
      desc: "Proteção de dados e conformidade total com as normas da OAB e LGPD.",
      icon: <Lock size={32} strokeWidth={1} />,
    },
  ];

  return (
    <section
      id={INTERNAL_LINKS.estrategia.replace("#", "")}
      className="py-24 md:py-32 bg-teal-deep"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tighter mb-8 text-white">
            Os Pilares da Estratégia Digital
          </h2>
          <p className="text-sandstone/60 leading-relaxed">
            Uma abordagem holística onde a engenharia de precisão encontra a
            sofisticação do design editorial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl p-10 flex flex-col items-center text-center group transition-all duration-500 border border-white/10 rounded-2xl"
              role="article"
              aria-labelledby={`pillar-title-${i}`}
            >
              <div
                className="text-gold-pale mb-8 group-hover:scale-110 transition-transform duration-500"
                aria-hidden="true"
              >
                {pillar.icon}
              </div>
              <h3
                id={`pillar-title-${i}`}
                className="text-xl font-serif mb-4 leading-snug text-white"
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-sandstone/50 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
