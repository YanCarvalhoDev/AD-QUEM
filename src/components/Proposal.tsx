import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  // CheckCircle2,
  FileText,
  Download,
  Search,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Zap,
  Lock,
  Globe,
  TrendingUp,
  // HelpCircle,
  // Cpu,
  FileCheck,
  Users,
  // Briefcase,
  // ChevronRight,
  Check,
} from "lucide-react";
import { INTERNAL_LINKS } from "../links";

const ROIChart = lazy(() => import("./ROIChart"));

const roiData = [
  { month: "Mês 1", leads: 10, authority: 20 },
  { month: "Mês 2", leads: 15, authority: 35 },
  { month: "Mês 3", leads: 28, authority: 55 },
  { month: "Mês 4", leads: 45, authority: 70 },
  { month: "Mês 5", leads: 62, authority: 85 },
  { month: "Mês 6", leads: 85, authority: 98 },
];

const investmentTiers = [
  {
    name: "Essencial",
    price: "Sob Consulta",
    desc: "Para bancas que buscam uma presença digital sólida e profissional.",
    features: [
      "Arquitetura de Marca",
      "Design Editorial",
      "SEO Local",
      "Performance Core",
    ],
    color: "bg-white text-teal-deep",
  },
  {
    name: "Elite",
    price: "Sob Consulta",
    desc: "Nossa solução completa para dominar o mercado digital jurídico.",
    features: [
      "Tudo do Essencial",
      "SEO de Alto Valor",
      "Marketing de Conteúdo",
      "Segurança Enterprise",
      "Suporte Prioritário",
    ],
    color: "bg-teal-deep text-white",
    popular: true,
  },
  {
    name: "Custom",
    price: "Sob Consulta",
    desc: "Projetos sob medida para grandes bancas e operações complexas.",
    features: [
      "Tudo do Elite",
      "Infraestrutura Dedicada",
      "Consultoria Estratégica",
      "Brandbook Completo",
    ],
    color: "bg-white text-teal-deep",
  },
];

export default function Proposal() {
  const [activeTier, setActiveTier] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);
  const affirmations = [
    {
      text: "Você dedica anos à excelência jurídica e sua banca merece um posicionamento que reflita esse nível de entrega, não é? Afinal, sua presença digital deve ser a extensão fiel da solidez e do prestígio que você já consolidou no mercado.",
    },
    {
      text: "O prestígio de um escritório de elite deve ser sentido pelo cliente no primeiro segundo de contato digital, concorda? Uma interface lenta ou genérica é uma barreira invisível entre sua competência e a percepção de valor do seu cliente.",
    },
    {
      text: "Sua autoridade técnica é indiscutível no tribunal; seu site deveria ser a extensão exata dessa mesma força, certo? Projetamos arquiteturas que não apenas informam, mas impõem respeito e transmitem segurança absoluta antes mesmo da primeira reunião.",
    },
    {
      text: "Atrair clientes de alto ticket exige uma interface que filtre o comum e exalte o extraordinário. Faz sentido para você? O design de elite atua como um filtro de qualificação, atraindo quem valoriza a excelência e repelindo o que é irrelevante.",
    },
  ];

  const auditPoints = [
    {
      title: "Performance Técnica",
      status: "Crítico",
      desc: "Tempo de carregamento acima de 3s gera 40% de abandono.",
      icon: Zap,
      color: "text-red-500",
      bgColor: "group-hover:bg-red-500",
    },
    {
      title: "Autoridade de Marca",
      status: "Fraco",
      desc: "Design genérico que não comunica exclusividade.",
      icon: ShieldCheck,
      color: "text-yellow-500",
      bgColor: "group-hover:bg-yellow-500",
    },
    {
      title: "SEO Estratégico",
      status: "Inexistente",
      desc: "Ausência de posicionamento para termos de alto valor.",
      icon: Search,
      color: "text-red-500",
      bgColor: "group-hover:bg-red-500",
    },
    {
      title: "Segurança e Compliance",
      status: "Risco",
      desc: "Vulnerabilidades que podem comprometer dados sensíveis.",
      icon: Lock,
      color: "text-yellow-500",
      bgColor: "group-hover:bg-yellow-500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-20 relative overflow-hidden bg-teal-deep text-sandstone">
        <div className="container mx-auto max-w-6xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-gold-pale font-mono text-xs tracking-[0.3em] uppercase mb-6 block font-bold">
              Arquitetura de Marca Jurídica
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-[0.9] mb-8 tracking-tighter text-white">
              A Proposta que <br />
              <span className="text-gold-pale italic">
                Consolida seu Legado
              </span>
            </h1>
            <p className="text-xl text-sandstone/60 leading-relaxed mb-10 max-w-2xl">
              Não projetamos apenas sites. Construímos ativos de poder digital
              para bancas que definem o mercado. Esta é a sua rota para a
              autoridade absoluta.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`#${INTERNAL_LINKS.propostaProfissional.replace("#", "")}`}
                className="px-8 py-4 bg-gold-pale text-teal-deep font-bold rounded-full hover:bg-gold-pale/90 transition-all flex items-center gap-2"
              >
                Ver Proposta Profissional <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audit Model Section */}
      <section className="py-24 bg-white text-teal-deep">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-8 leading-tight text-[#002B36]">
                Modelo de Auditoria: <br />
                <span className="text-gold-pale italic">
                  Onde sua banca está perdendo?
                </span>
              </h2>
              <p className="text-teal-deep/60 mb-12 text-lg">
                Nossa auditoria de 360º identifica os pontos de fricção que
                impedem seu escritório de converter leads de alto padrão.
              </p>

              <div className="space-y-6">
                {auditPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:border-gold-pale/20 transition-all group cursor-default"
                  >
                    <div
                      className={`mt-1 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center transition-all duration-300 ${point.bgColor} group-hover:text-white ${point.color}`}
                    >
                      <point.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg group-hover:text-gold-pale transition-colors">
                          {point.title}
                        </h3>
                        <span
                          className={`text-[10px] uppercase tracking-widest font-black px-2 py-0.5 rounded-full ${
                            point.status === "Crítico"
                              ? "bg-red-100 text-red-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {point.status}
                        </span>
                      </div>
                      <p className="text-sm text-teal-deep/50 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold-pale/10 blur-[100px] rounded-full" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-teal-deep p-10 rounded-[40px] shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-10 text-left">
                  <div className="w-12 h-12 rounded-full bg-gold-pale/20 flex items-center justify-center text-gold-pale">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="text-sandstone font-bold">
                      Diagnóstico de Performance
                    </h4>
                    <p className="text-sandstone/40 text-xs">
                      Relatório Gerado em Tempo Real
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-sandstone/60">
                      <span>Conversão de Leads</span>
                      <span>22%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "22%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-red-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-sandstone/60">
                      <span>Autoridade Digital</span>
                      <span>45%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "45%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-yellow-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-sandstone/60">
                      <span>Velocidade de Carga</span>
                      <span>15%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "15%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-red-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
                  <p className="text-sm text-sandstone/60 italic leading-relaxed">
                    "Sua presença digital atual está operando com apenas 30% do
                    seu potencial de mercado. Você está deixando o prestígio da
                    sua banca ser diluído por uma interface comum."
                  </p>
                </div>

                <a
                  href={`#${INTERNAL_LINKS.propostaProfissional.replace("#", "")}`}
                  className="w-full mt-10 py-4 bg-gold-pale text-teal-deep font-bold rounded-xl hover:bg-gold-pale/90 transition-all text-center block"
                >
                  Ver Proposta de Correção
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Website? Timeline Section */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-20 text-left">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-7xl font-serif mb-8 text-[#002B36] leading-[0.9]">
              O digital não é mais um acessório, <br />
              <span className="text-gold-pale italic">é o seu alicerce.</span>
            </h2>
            <p className="text-teal-deep/50 text-lg">
              Reflita sobre o impacto da sua presença digital no futuro da sua
              banca.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 hidden md:block" />

            <div className="space-y-24 md:space-y-0">
              {affirmations.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gold-pale z-10 hidden md:block" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-20" : "md:pr-20"} text-center md:text-left`}
                  >
                    <div className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-gold-pale/20 transition-all duration-500 group">
                      <span className="font-mono text-xs text-gold-pale mb-6 block tracking-widest uppercase font-bold">
                        Ponto de Reflexão 0{i + 1}
                      </span>
                      <p className="text-xl md:text-2xl font-serif text-[#002B36] leading-relaxed">
                        {item.text.split("?").map((part, idx, arr) => (
                          <span key={idx}>
                            {part}
                            {idx < arr.length - 1 ? (
                              <span className="text-gold-pale">?</span>
                            ) : (
                              ""
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-32 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block p-12 md:p-20 rounded-[60px] bg-gray-50 border border-gray-100"
            >
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#002B36]">
                Se você concorda que sua banca <br />
                <span className="text-gold-pale italic">merece mais...</span>
              </h3>
              <p className="text-teal-deep/50 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
                O próximo passo não é apenas um site, é a construção de um ativo
                de poder. Vamos projetar sua autoridade digital agora.
              </p>
              <a
                href={`#${INTERNAL_LINKS.propostaProfissional.replace("#", "")}`}
                className="px-16 py-6 bg-teal-deep text-white font-bold rounded-full hover:bg-teal-deep/90 hover:scale-105 transition-all inline-block shadow-2xl shadow-teal-deep/20"
              >
                Ver Proposta de Transformação
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Proposal Section - Formal Document Style */}
      <section
        id={INTERNAL_LINKS.propostaProfissional.replace("#", "")}
        className="py-32 bg-gray-50 text-teal-deep"
      >
        <div className="container mx-auto px-6 lg:px-20 text-left">
          <div className="max-w-6xl mx-auto">
            {/* Document Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <span className="text-gold-pale font-mono text-xs tracking-[0.3em] uppercase mb-4 block font-bold">
                  Documento Estratégico // Confidencial
                </span>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight text-[#002B36]">
                  Proposta <br />
                  <span className="text-gold-pale italic">
                    Estratégica 2026
                  </span>
                </h2>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-teal-deep/40 uppercase tracking-widest mb-2">
                  Preparado para:
                </p>
                <p className="text-2xl font-serif text-teal-deep">
                  Exmo. Dr. Cliente & Associados
                </p>
                <p className="text-xs text-teal-deep/30 mt-1">
                  Ref: ADJ-PRP-2026-042
                </p>
              </div>
            </div>

            {/* Main Document Body */}
            <div className="bg-white rounded-[48px] shadow-2xl overflow-hidden border border-gray-100">
              {/* Introduction Tab */}
              <div className="p-12 md:p-20 border-b border-gray-50">
                <div className="grid lg:grid-cols-2 gap-20">
                  <div className="text-left">
                    <h3 className="text-3xl font-serif mb-8 flex items-center gap-4 text-[#002B36]">
                      <span className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center text-sm font-mono">
                        01
                      </span>
                      Visão Geral do Projeto
                    </h3>
                    <p className="text-lg text-teal-deep/60 leading-relaxed mb-8">
                      Nossa metodologia não foca apenas em estética, mas em
                      **Engenharia de Autoridade**. O objetivo é transformar sua
                      presença digital em um ativo que trabalha 24/7 para
                      consolidar seu legado e atrair o cliente ideal.
                    </p>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-gold-pale/20 flex items-center justify-center text-gold-pale mt-1">
                          <Check size={14} />
                        </div>
                        <p className="text-sm font-medium">
                          Posicionamento de Elite no Google Search
                        </p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-gold-pale/20 flex items-center justify-center text-gold-pale mt-1">
                          <Check size={14} />
                        </div>
                        <p className="text-sm font-medium">
                          Interface Editorial de Alta Conversão
                        </p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-gold-pale/20 flex items-center justify-center text-gold-pale mt-1">
                          <Check size={14} />
                        </div>
                        <p className="text-sm font-medium">
                          Segurança e Compliance Nível Enterprise
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#005F6B]/60 mb-8 font-bold">
                      Projeção de Crescimento (6 Meses)
                    </h4>
                    <Suspense
                      fallback={
                        <div className="h-[250px] w-full bg-gray-100 animate-pulse rounded-xl" />
                      }
                    >
                      <ROIChart data={roiData} />
                    </Suspense>
                    <p className="text-[10px] text-center text-teal-deep/30 mt-4 uppercase tracking-widest font-bold">
                      Valores baseados em benchmarks de mercado jurídico
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables Section */}
              <div className="p-12 md:p-20 bg-gray-50/50">
                <h3 className="text-3xl font-serif mb-12 flex items-center gap-4 text-[#002B36]">
                  <span className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center text-sm font-mono">
                    02
                  </span>
                  Escopo de Entrega
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Zap />,
                      title: "Performance",
                      desc: "Otimização extrema de carregamento e UX mobile-first.",
                    },
                    {
                      icon: <ShieldCheck />,
                      title: "Segurança",
                      desc: "Criptografia SSL, proteção contra ataques e backup.",
                    },
                    {
                      icon: <Globe />,
                      title: "SEO",
                      desc: "Estratégia de palavras-chave para termos de alto ticket.",
                    },
                    {
                      icon: <FileText />,
                      title: "Conteúdo",
                      desc: "Design editorial para artigos e cases de sucesso.",
                    },
                    {
                      icon: <Users />,
                      title: "Suporte",
                      desc: "Monitoramento 24/7 e atualizações de segurança.",
                    },
                    {
                      icon: <TrendingUp />,
                      title: "Analytics",
                      desc: "Dashboard de performance e relatórios mensais.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all group text-left"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-teal-deep/5 flex items-center justify-center text-teal-deep mb-6 group-hover:bg-teal-deep group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-serif mb-3 text-[#002B36]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-teal-deep/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment Section */}
              <div className="p-12 md:p-20">
                <h3 className="text-3xl font-serif mb-12 flex items-center gap-4 text-[#002B36]">
                  <span className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center text-sm font-mono">
                    03
                  </span>
                  Opções de Investimento
                </h3>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                  {investmentTiers.map((tier, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10 }}
                      onClick={() => setActiveTier(i)}
                      className={`relative p-10 rounded-[40px] cursor-pointer transition-all border-2 flex flex-col h-full text-left ${
                        activeTier === i
                          ? "border-gold-pale ring-4 ring-gold-pale/10 shadow-2xl"
                          : "border-gray-100"
                      } ${tier.color} ${i === 2 ? "bg-gold-pale/5" : ""}`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-pale text-teal-deep text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                          Recomendado
                        </span>
                      )}
                      <h4
                        className={`text-2xl font-serif mb-2 ${i === 2 ? "text-gold-pale" : ""}`}
                      >
                        {tier.name}
                      </h4>
                      <p className="text-xs opacity-60 mb-8 leading-relaxed">
                        {tier.desc}
                      </p>
                      <div className="text-3xl font-serif mb-8">
                        {tier.price}
                      </div>
                      <ul className="space-y-4 mb-10 flex-grow">
                        {tier.features.map((f, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm"
                          >
                            <Check
                              size={14}
                              className={
                                activeTier === i
                                  ? "text-gold-pale"
                                  : "text-teal-deep/30"
                              }
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`w-full py-4 rounded-2xl font-bold text-center transition-all mt-auto ${
                          activeTier === i
                            ? tier.color.includes("teal-deep")
                              ? "bg-white text-teal-deep"
                              : "bg-teal-deep text-white"
                            : "bg-teal-deep/5 text-teal-deep"
                        }`}
                      >
                        {activeTier === i ? "Selecionado" : "Selecionar"}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Acceptance Section */}
              <div className="p-12 md:p-20 bg-teal-deep text-white text-center">
                <AnimatePresence mode="wait">
                  {!isAccepted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-4xl font-serif mb-6 text-white">
                        Pronto para elevar sua banca?
                      </h3>
                      <p className="text-white/60 mb-12 max-w-xl mx-auto">
                        Ao clicar em aceitar, nossa equipe entrará em contato em
                        até 24h para agendar a reunião de kickoff e iniciar a
                        fase de imersão.
                      </p>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                          onClick={() => setIsAccepted(true)}
                          className="px-12 py-6 bg-gold-pale text-teal-deep text-xl font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-gold-pale/20 flex items-center gap-4"
                        >
                          Aceitar Proposta <FileCheck size={24} />
                        </button>
                        <button className="flex items-center gap-2 text-white/60 hover:text-white transition-all">
                          <Download size={18} /> Baixar PDF para revisão
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10"
                    >
                      <div className="w-24 h-24 rounded-full bg-gold-pale flex items-center justify-center text-teal-deep mx-auto mb-8">
                        <Check size={48} strokeWidth={3} />
                      </div>
                      <h3 className="text-4xl font-serif mb-4 text-white">
                        Proposta Aceita!
                      </h3>
                      <p className="text-white/60 mb-8">
                        Parabéns pela decisão. Sua jornada rumo à autoridade
                        digital absoluta começou. <br />
                        Nossa equipe entrará em contato em breve.
                      </p>
                      <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all font-bold">
                          Ver Próximos Passos
                        </button>
                        <button className="px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all font-bold">
                          Falar com Consultor
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Document Footer */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-teal-deep/30 text-[10px] uppercase tracking-[0.2em] font-bold">
              <p>
                © 2026 Arquiteto Digital Jurídico // Todos os direitos
                reservados
              </p>
              <div className="flex gap-8 mt-4 md:mt-0">
                <span>Política de Privacidade</span>
                <span>Termos de Serviço</span>
                <span>Confidencialidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
