import React from "react";
import { motion } from "motion/react";
import { INTERNAL_LINKS, CONTACT_LINKS } from "../links";

interface HeroProps {
  children?: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section className="relative min-h-screen lg:h-screen w-full bg-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* Media Side (Left) */}
      <div className="w-full lg:w-auto lg:flex-1 h-[50vh] lg:h-[90vh] order-1 lg:order-1 relative overflow-hidden">
        {/* Background split for corners */}
        <div className="absolute inset-0 bg-[#002B36]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white hidden lg:block" />

        <div className="w-full h-full lg:rounded-tr-[120px] lg:rounded-bl-[120px] overflow-hidden relative">
          {children}
          <div className="absolute inset-0 bg-[#002B36]/10" />
        </div>
      </div>

      {/* Content Side (Right) */}
      <div className="flex-[1.1] lg:h-[90vh] flex flex-col justify-center px-6 lg:px-24 py-12 lg:py-0 z-10 order-2 lg:order-2 -mt-28 lg:mt-0 bg-[#002B36] rounded-tr-[40px] lg:rounded-tr-none relative overflow-hidden">
        {/* Background Blueprint 3D */}
        <div className="blueprint-3d opacity-40 lg:opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="luz-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "white", stopOpacity: 0 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "white", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "white", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <circle
              className="circulo-3d gradiente-3d c1"
              cx="500"
              cy="500"
              r="150"
            />
            <circle
              className="circulo-3d gradiente-3d c2"
              cx="500"
              cy="500"
              r="200"
            />
            <circle
              className="circulo-3d gradiente-3d c3"
              cx="500"
              cy="500"
              r="250"
            />
            <circle
              className="circulo-3d gradiente-3d c4"
              cx="500"
              cy="500"
              r="300"
            />
            <circle
              className="circulo-3d gradiente-3d c5"
              cx="500"
              cy="500"
              r="350"
            />
            <circle
              className="circulo-3d gradiente-3d c6"
              cx="500"
              cy="500"
              r="400"
            />
            <circle
              className="circulo-3d gradiente-3d c7"
              cx="500"
              cy="500"
              r="450"
            />
          </svg>
        </div>

        <div className="max-w-4xl relative z-10">
          <span className="inline-block text-gold-pale font-bold text-[15px] mb-4 lg:mb-6 tracking-tight">
            O porto seguro para quem domina o mercado
          </span>
          <h1 className="text-[32px] md:text-[64px] font-sans font-bold text-white mb-6 lg:mb-8 leading-tighter tracking-tight">
            Sites premium para advocacias que transmitem autoridade e alto
            padrão.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/90 mb-8 lg:mb-10 font-medium leading-relaxed max-w-2xl">
            Projetamos e desenvolvemos sites de alto padrão para bancas
            jurídicas que desejam atrair clientes qualificados, fortalecer sua
            reputação e operar com máxima eficiência digital.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"             
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gold-pale text-teal-deep font-bold rounded-full text-[15px] transition-all"
              aria-label="Iniciar contato via Whatsapp"
            >
              Entrar em contato
            </motion.a>
            <motion.a
              href={INTERNAL_LINKS.metodo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-white text-white font-bold rounded-full text-[15px] flex items-center gap-2 hover:bg-white/10 transition-all"
              aria-label="Ver nossos serviços e metodologia"
            >
              Conhecer o método
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
