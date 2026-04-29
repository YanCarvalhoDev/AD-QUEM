import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { INTERNAL_LINKS } from "../links";

const ZapIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: "1em", height: "1em" }}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CpuIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: "1em", height: "1em" }}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: "1em", height: "1em" }}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: "1em", height: "1em" }}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

interface ScrollRevealLineProps {
  text: string;
  index: number;
  totalLines: number;
  containerScroll: any;
}

function ScrollRevealLine({
  text,
  index,
  totalLines,
  containerScroll,
}: ScrollRevealLineProps) {
  const lineWeight = 1 / totalLines;
  const start = index * lineWeight;
  const end = (index + 1) * lineWeight;

  const progress = useTransform(containerScroll, [start, end], [0, 100], {
    clamp: true,
  });

  const background = useTransform(
    progress,
    (p) =>
      `linear-gradient(to right, #007a8a ${p}%, rgba(0, 122, 138, 0.1) ${p}%)`,
  );

  return (
    <motion.span
      style={{
        backgroundImage: background,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        willChange: "transform, background-image",
      }}
      className="inline-block w-full"
    >
      {text}
    </motion.span>
  );
}

export default function EngineeringFoundation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const lines = [
    // "Um site lento é",
    // "um desrespeito",
    // "ao tempo do seu",
    // "cliente.",
    "Um site lento",
    "compromete sua",
    "autoridade.",
  ];

  const metrics = [
    { label: "Performance de Elite", value: "Google Tier 1", icon: ZapIcon },
    { label: "Latência de Resposta", value: "< 200ms", icon: CpuIcon },
    { label: "Integridade", value: "Conforme a OAB", icon: ShieldIcon },
    { label: "Autoridade de Busca", value: "Estratégica", icon: SearchIcon },
  ];

  return (
    <section
      id={INTERNAL_LINKS.metodo.replace("#", "")}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-[#002B36] mb-8 leading-tighter tracking-tight flex flex-col items-center lg:items-start"
              aria-label="Um site lento é um desrespeito ao tempo do seu cliente."
            >
              {lines.map((line, i) => (
                <span key={i} aria-hidden="true" className="w-full">
                  <ScrollRevealLine
                    text={line}
                    index={i}
                    totalLines={lines.length}
                    containerScroll={scrollYProgress}
                  />
                </span>
              ))}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-medium mx-auto lg:mx-0">
              No topo da pirâmide jurídica, a eficiência é a moeda mais valiosa.
              Desenvolvemos sites que carregam instantaneamente, transmitem
              confiança imediata e conduzem o cliente certo até sua banca.
              {/* Nossa engenharia elimina fricções, garantindo que sua autoridade
              seja transmitida instantaneamente. */}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 w-full mb-12">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="group cursor-default flex flex-col items-start text-left"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#007a8a] group-hover:bg-[#007a8a] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                      <metric.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-[9px] md:text-[12px] uppercase tracking-widest text-gray-600 font-bold group-hover:text-[#002B36] transition-colors">
                      {metric.label}
                    </span>
                  </div>
                  <div className="text-sm sm:text-lg md:text-2xl font-bold text-[#007A8A] ml-[40px] md:ml-[52px] group-hover:translate-x-1 transition-transform duration-300">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Vibrant background blobs or visibility */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#00A3B1]/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#002B36]/10 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-pale/10 rounded-full blur-[60px]" />

            <div className="relative bg-white/10 backdrop-blur-[32px] border border-white/40 rounded-[60px] p-12 lg:p-20 flex flex-col items-center justify-center text-center shadow-[0_32px_64px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Glass Sheen/Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute -top-[150%] -left-[150%] w-[400%] h-[400%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none" />

              {/* Inner Glow for thickness */}
              <div className="absolute inset-0 rounded-[60px] border border-white/20 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" />

              <div className="relative z-10">
                <div className="relative inline-block">
                  <div className="text-[120px] font-bold text-[#00A3B1] leading-none mb-4 drop-shadow-[0_10px_10px_rgba(0,163,177,0.2)]">
                    95+
                  </div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="absolute -top-4 -right-8 bg-[#002B36] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                  >
                    Target
                  </motion.div>
                </div>
              </div>

              <div className="text-sm uppercase tracking-[0.4em] text-[#002B36]/80 font-black relative z-10 mt-4">
                Performance Alvo
              </div>
              <p className="mt-8 text-[#002B36]/90 text-sm max-w-xs mx-auto relative z-10 font-bold leading-relaxed">
                Nossa meta é entregar a melhor experiência técnica possível para
                bancas de alto padrão.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
