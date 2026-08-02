import React, { useState, useEffect, useRef } from "react";

// Interface local
export interface Article {
  id: string | number;
  title: string;
  image: string;
  imageAlt?: string;
}

interface FeaturedGridProps {
  featuredArticle?: Article | null; // Opcional para não quebrar
}

// Dados padrão caso o 'featuredArticle' não seja enviado pelo componente pai
const defaultArticle: Article = {
  id: "default",
  title: "Análises Estratégicas e Pareceres Jurídicos Corporativos",
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  imageAlt: "Análises jurídicas sobre a mesa de reuniões",
};

export const FeaturedGrid: React.FC<FeaturedGridProps> = ({
  featuredArticle,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Se 'featuredArticle' existir, usa ele. Se for nulo ou sumir, usa o 'defaultArticle'
  const articleToRender = featuredArticle || defaultArticle;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1ª PARTE: Banner de Destaque (Insights) - AGORA GARANTIDO */}
      <section
        className="pt-16 pb-0 px-6 lg:px-12 bg-white overflow-hidden"
        aria-label="Destaque de Insights"
      >
        <div className="max-w-7xl mx-auto">
          {/* <div className="mb-8 text-left">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight uppercase mb-3 serif tracking-large">
              Insights
            </h2>
            <div className="w-16 h-[2px] bg-red-600" aria-hidden="true"></div>
          </div> */}

          <a
            href={`/insights/${articleToRender.id}`}
            className="relative w-full h-[380px] md:h-[420px] lg:h-[480px] block group overflow-hidden shadow-lg border border-slate-100 focus:ring-4 focus:ring-slate-900/20 focus:outline-none"
          >
            <div className="absolute inset-0 w-full h-full bg-slate-200">
              <img
                src={articleToRender.image}
                alt={
                  articleToRender.imageAlt ||
                  `Capa do artigo: ${articleToRender.title}`
                }
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale group-hover:grayscale-0"
                loading="lazy"
              />
            </div>

            <div
              className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 flex items-center transition-all duration-700 ease-in-out"
              style={{ clipPath: "polygon(0 0, 60% 0, 42% 100%, 0 100%)" }}
            >
              <div className="pl-6 sm:pl-8 md:pl-16 lg:pl-20 pr-10 md:pr-24 max-w-[75%] sm:max-w-[55%]">
                <h3 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 uppercase leading-[1.1] tracking-tight serif">
                  {articleToRender.title}
                </h3>
                <p className="text-[#008080] text-sm sm:text-lg font-medium mb-6 sm:mb-8 font-sans">
                  Confira nossa análise jurídica em destaque
                </p>

                <div
                  className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center transition-transform duration-500 transform group-hover:translate-x-3"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full stroke-[#008080] stroke-[1px]"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* 2ª PARTE: Grid de Destaques Informativos */}
      <section
        ref={containerRef}
        className="pt-24 pb-12 px-6 lg:px-12 bg-white"
        aria-label="Nossos hubs"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Quem Somos */}
            <a
              href="/quem-somos"
              className={`group relative h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out border border-slate-100 shadow-sm hover:shadow-xl focus:ring-4 focus:ring-slate-900/10 focus:outline-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="h-2/3 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt="Fachada iluminada de um centro empresarial moderno"
                  loading="lazy"
                />
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em] block mb-2 drop-shadow-md">
                    Quem Somos
                  </span>
                  <div
                    className="w-12 h-[2px] bg-red-600"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div className="h-1/3 w-full bg-[#2a232e] p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white uppercase serif mb-3 tracking-wide">
                  Nossa Firma
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Descubra nossa história e o compromisso inabalável com a
                  excelência técnica em escala global.
                </p>
              </div>
            </a>

            {/* Card 2: Sócios */}
            <a
              href="/profissionais"
              className={`group relative h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out border border-slate-100 shadow-sm hover:shadow-xl focus:ring-4 focus:ring-slate-900/10 focus:outline-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="h-2/3 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt="Nossa equipe técnica altamente qualificada em reunião"
                  loading="lazy"
                />
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em] block mb-2 drop-shadow-md">
                    Profissionais
                  </span>
                  <div
                    className="w-12 h-[2px] bg-red-600"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div className="h-1/3 w-full bg-[#1b2533] p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white uppercase serif mb-3 tracking-wide">
                  Sócios & Equipe
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Conheça as mentes brilhantes que lideram as transações mais
                  complexas do mercado.
                </p>
              </div>
            </a>

            {/* Card 3: Contato */}
            <a
              href="/contato"
              className={`group relative h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out border border-slate-100 shadow-sm hover:shadow-xl focus:ring-4 focus:ring-slate-900/10 focus:outline-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="h-2/3 w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt="Vista aérea de um hub financeiro global"
                  loading="lazy"
                />
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em] block mb-2 drop-shadow-md">
                    Contato
                  </span>
                  <div
                    className="w-12 h-[2px] bg-red-600"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
              <div className="h-1/3 w-full bg-[#1c2e2e] p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white uppercase serif mb-3 tracking-wide">
                  Presença Global
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Nossos escritórios operam em sincronia para oferecer soluções
                  integradas em qualquer jurisdição.
                </p>
              </div>
            </a>
          </div>

          {/* Banner de Carreiras (Largo) */}
          <a
            href="/carreiras"
            className={`relative w-full h-[380px] md:h-[420px] lg:h-[480px] mt-10 md:mt-12 block group overflow-hidden shadow-lg border border-slate-100 focus:ring-4 focus:ring-slate-900/20 focus:outline-none transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="absolute inset-0 w-full h-full bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 grayscale group-hover:grayscale-0"
                alt="Escritório moderno com corredores e salas com divisórias de vidro"
                loading="lazy"
              />
            </div>

            <div
              className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 flex items-center transition-all duration-700 ease-in-out"
              style={{ clipPath: "polygon(0 0, 60% 0, 42% 100%, 0 100%)" }}
            >
              <div className="pl-6 sm:pl-12 md:pl-20 max-w-[65%] sm:max-w-[45%]">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 uppercase serif mb-4 sm:mb-8 tracking-large">
                  Carreiras
                </h2>
                <p className="text-[#008080] text-sm sm:text-lg font-medium mb-6 sm:mb-10 leading-relaxed max-w-[200px] sm:max-w-[320px] md:max-w-xs lg:max-w-sm">
                  Buscamos mentes criativas que pensem de forma imaginativa e
                  abordem problemas sob diferentes ângulos.
                </p>

                <div
                  className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center transition-transform duration-500 transform group-hover:translate-x-4"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full stroke-[#008080] stroke-[1px]"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default FeaturedGrid;
