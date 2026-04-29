// import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Zap, BarChart3, ArrowUpRight } from "lucide-react";

export default function ROISection() {
  const stats = [
    {
      icon: <BarChart3 className="text-gold-pale" size={24} />,
      title: "Produtização da Expertise",
      description:
        "Redução drástica de tarefas não-faturáveis. Seu escritório recebe e qualifica leads automaticamente, mesmo fora do horário comercial",
      detail: "Arquitetura de Captação de Clientes",
    },
    {
      icon: <TrendingUp className="text-gold-pale" size={24} />,
      title: "Dados Reais",
      description:
        "A adoção tecnológica estratégica dobra o faturamento jurídico e reduz o overhead operacional em 40%",
      detail: "2x Receita | -40% Custos",
    },
    {
      icon: <Zap className="text-gold-pale" size={24} />,
      title: "Velocidade",
      description:
        "Sites que carregam instantaneamente e respondem leads em menos de 78 segundos aumentam drasticamente a taxa de fechamento.",
      detail: "< 78s Resposta | Carga Instantânea",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="persiana-sombras" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#002B36 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-pale font-mono text-sm tracking-widest uppercase mb-4 block"
            >
              Performance Financeira
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-teal-deep leading-tighter tracking-normal mb-8"
            >
              ROI e Eficiência Operacional: <br />
              <span className="text-gold-pale font-serif italic font-normal">
                O retorno do investimento
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:text-right"
          >
            <p className="text-teal-deep/60 max-w-xs lg:ml-auto text-sm leading-relaxed">
              Bancas que adotam tecnologia de elite registram o dobro de
              crescimento em receita e 40% menos tempo em tarefas
              não-faturáveis. Números auditados pelo mercado.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 flex flex-col h-full group hover:bg-gray-50 transition-colors duration-500"
            >
              <div className="mb-8 p-3 bg-teal-deep w-fit rounded-xl group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-teal-deep mb-4 flex items-center gap-2 tracking-normal">
                {stat.title}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-pale"
                />
              </h3>
              <p className="text-teal-deep/80 leading-relaxed mb-8 grow">
                {stat.description}
              </p>
              <div className="pt-6 border-t border-gold-pale/10">
                <span className="text-xs font-mono font-bold text-gold-pale uppercase tracking-wider">
                  {stat.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-8 bg-teal-deep rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-sandstone">
            <h4 className="text-xl font-bold mb-2 text-white tracking-wide">
              Pronto para ter uma presença digital à altura da sua advocacia?
            </h4>
            <p className="text-sandstone/60 text-sm">
              Agende um diagnóstico de performance gratuito com nossos
              engenheiros.
            </p>
          </div>
          <button
            className="px-8 py-4 bg-gold-pale text-teal-deep font-bold rounded-full hover:bg-gold-pale/90 transition-all whitespace-nowrap flex items-center gap-2"
            aria-label="Solicitar diagnóstico de performance gratuito"
          >
            Solicitar Diagnóstico <Zap size={18} fill="currentColor" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
