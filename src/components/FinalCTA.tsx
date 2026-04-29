import React from "react";
import { CONTACT_LINKS } from "../links";

interface FinalCTAProps {
  children?: React.ReactNode;
}

export default function FinalCTA({ children }: FinalCTAProps) {
  return (
    <section
      id="contato"
      className="py-16 relative overflow-hidden flex items-center justify-center min-h-[50vh] bg-teal-deep"
    >
      {/* Background Estático */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {children}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card de Vidro Estático */}
          <div className="relative bg-white/40 backdrop-blur-[24px] border border-white/50 rounded-[40px] p-8 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.25)] text-center overflow-hidden">
            {/* Reflexo superior */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 bg-gold-pale/80 rounded-full text-teal-deep text-[9px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
              {/* Ícone: Calendar (SVG HTML) */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Disponibilidade Limitada
            </div>

            <h2 className="relative z-10 text-2xl md:text-4xl font-serif text-teal-deep leading-tighter mb-8 font-black">
              Este não é um serviço para todos. <br />
              <span className="text-teal-deep/90 italic block mt-2">
                Trabalhamos com um número limitado de bancas por semestre.
              </span>
            </h2>

            <p className="relative z-10 text-teal-deep text-base mb-8 max-w-lg mx-auto font-bold leading-relaxed">
              Selecionamos parceiros que buscam uma vantagem competitiva
              inquestionável no mercado jurídico de alto padrão.
            </p>

            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-gold-pale text-teal-deep rounded-full font-black text-base transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-gold-pale/30"
              aria-label="Agendar uma reunião estratégica exclusiva"
            >
              <span>Agendar Reunião Estratégica</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
