// import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Lock, Zap, Code, Search, Layout } from "lucide-react";
import LineWaves from "./LineWaves";

export default function SocialProof() {
  const pillars = [
    {
      title: "Clean Code Architecture",
      description:
        "Desenvolvimento nativo sem dependência de templates ou plugins vulneráveis.",
      icon: <Code className="text-gold-pale" size={20} />,
    },
    {
      title: "SEO de Intenção",
      description:
        "Estruturação de dados avançada para dominar buscas por termos jurídicos de alto valor.",
      icon: <Search className="text-gold-pale" size={20} />,
    },
    {
      title: "UX Design de Prestígio",
      description:
        "Interfaces projetadas para transmitir o conceito de 'Luxo Silencioso' e solidez.",
      icon: <Layout className="text-gold-pale" size={20} />,
    },
  ];

  // const niches = [
  //   "Bancas Full-Service",
  //   "Boutiques Tributárias",
  //   "Arbitragem Internacional",
  //   "Direito Corporativo",
  // ];

  const stats = [
    {
      label: "Compliance Jurídico",
      value: "100%",
      subtext: "Provimento 205/2021 CFOAB",
      description:
        "Engenharia e estratégia alinhadas rigorosamente às diretrizes de publicidade e ética da advocacia nacional.",
      icon: <ShieldCheck className="text-gold-pale" size={24} />,
    },
    {
      label: "Performance de Elite",
      value: "95/100",
      subtext: "PageSpeed Score",
      description:
        "Carregamento instantâneo que garante autoridade imediata e zero perda de interesse do cliente.",
      icon: <Zap className="text-gold-pale" size={24} />,
    },
    {
      label: "Segurança de Dados",
      value: "Zero",
      subtext: "Data Breach",
      description:
        "Arquitetura blindada em total conformidade com a LGPD e o sigilo ético da OAB.",
      icon: <Lock className="text-gold-pale" size={24} />,
    },
  ];

  return (
    <section className="py-32 bg-teal-deep relative overflow-hidden">
      <LineWaves
        speed={0.3}
        innerLineCount={25}
        outerLineCount={33}
        warpIntensity={1}
        rotation={-46}
        edgeFadeWidth={0.15}
        colorCycleSpeed={1}
        brightness={0.2}
        color1="#C0B283"
        color2="#ffffff"
        color3="#C0B283"
        enableMouseInteraction
        mouseInfluence={2}
      />
      {/* Elementos Decorativos de Luxo */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-pale/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-pale/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Cabeçalho Centralizado */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-gold-pale/20 bg-gold-pale/5 mb-8"
          >
            <ShieldCheck size={14} className="text-gold-pale" />
            <span className="text-gold-pale font-mono text-[10px] tracking-[0.3em] uppercase">
              Excelência
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-8xl font-serif text-sandstone leading-tighter mb-8 tracking-tight"
          >
            {/* Prova Social de Impacto: <br /> */}
            <span className="text-gold-pale italic">O Selo de Sucesso</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sandstone/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Cada entrega é auditável. Compliance com o Provimento 205/2021 da
            OAB, performance certificada pelo Google e arquitetura de segurança
            sem registros de breach.
          </motion.p>
        </div>

        {/* Grid Principal: Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          {/* Card de Resultado Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={120} />
            </div>

            <div className="relative z-10">
              <div className="text-gold-pale font-mono text-xs tracking-widest uppercase mb-6">
                {stats[0]?.label}
              </div>
              <div className="flex flex-col md:flex-row items-baseline gap-6 mb-8">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gold-pale leading-none tracking-tighter">
                  {stats[0]?.value}
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl text-sandstone font-serif italic">
                  {stats[0]?.subtext}
                </span>
              </div>
              <p className="text-sandstone/80 text-sm max-w-md leading-relaxed">
                {stats[0]?.description}
              </p>
            </div>
          </motion.div>

          {/* Coluna de Stats Secundários */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {stats.slice(1).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col justify-between hover:bg-white/10 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gold-pale/10 rounded-2xl group-hover:bg-gold-pale/20 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gold-pale">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gold-pale/60 uppercase tracking-widest">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sandstone font-serif text-xl leading-tight mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sandstone/60 text-xs leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pilares da Engenharia */}
          <div className="md:col-span-12 mt-12">
            <h3 className="text-gold-pale font-mono text-[10px] tracking-[0.4em] uppercase mb-10 text-center">
              Pilares da Engenharia ADJ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-gold-pale/30 transition-all"
                >
                  <div className="mb-6">{pillar.icon}</div>
                  <h4 className="text-sandstone font-serif font-bold text-lg mb-3 tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="text-sandstone/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Clientes (Logos/Nomes) */}
        {/* <div className="pt-20 border-t border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:max-w-xs text-center lg:text-left">
              <h3 className="text-gold-pale font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                Bancas de Referência
              </h3>
              <p className="text-sandstone/70 text-xs leading-relaxed">
                Chancelado por sócios-diretores que definem o mercado jurídico
                nacional.
              </p>
            </div>

            <div
              className="flex flex-wrap justify-center lg:justify-end gap-x-12 gap-y-8 items-center opacity-80"
              role="group"
              aria-label="Nichos de mercado jurídicos"
            >
              {niches.map((niche, i) => (
                <span
                  key={i}
                  className="text-sandstone font-serif text-xl md:text-2xl hover:text-gold-pale cursor-default transition-colors whitespace-nowrap border-b border-gold-pale/10 pb-1"
                >
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
