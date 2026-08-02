import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import bg640 from "../assets/images/bg640.webp";
import bg1024 from "../assets/images/spbg1024.webp";
import bg1536 from "../assets/images/spbg1536.webp";
import bg2070 from "../assets/images/spbg2070.webp";

const ScrollAnimation: React.FC = () => {
  const zoomSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: zoomSectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 800,
    damping: 70,
    restDelta: 0.001,
  });

  // Scale the Y from normal size to massive
  // Start zoom immediately from 0 to 0.6 for maximum smoothness
  const zoomScale = useTransform(smoothProgress, [0, 0.6], [1, 100]);
  const zoomOpacity = useTransform(smoothProgress, [0.55, 0.6], [1, 0]);

  // Parallax effect for the background image
  const imageScale = useTransform(smoothProgress, [0, 0.6, 1], [1.1, 1, 1]);

  return (
    <div ref={zoomSectionRef} className="relative h-[550vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* The Background Image (What we enter into) */}
        {/* <motion.div
          style={{
            scale: imageScale,
          }}
          className="absolute inset-0 z-0 w-full h-full"
        > */}
        {/* <img
            src={bg2070.src}
            srcSet={`
              ${bg640.src} 640w,
              ${bg1024.src} 1024w,
              ${bg1536.src} 1536w,
              ${bg2070.src} 2070w
            `}
            sizes="100vw"
            alt="High View Luxury City Skyline"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            width={2070}
            height={1380}
            loading="lazy"
          /> */}
        {/* <img
            src={bg2070.src}
            srcSet={`${bg640.src} 640w, ${bg1024.src} 1024w, ${bg1536.src} 1536w, ${bg2070.src} 2070w`}
            sizes="(max-width: 768px) 50vw, 100vw"
            alt="High View Luxury City Skyline"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />

          <div className="absolute inset-0 bg-black/50" />
        </motion.div> */}

        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <picture>
            {/* Mobile: Força o download da menor imagem até 768px */}
            <source media="(max-width: 768px)" srcSet={bg640.src} />

            {/* Tablet/Laptop: Força a imagem média até 1200px */}
            <source media="(max-width: 1200px)" srcSet={bg1024.src} />

            {/* Desktop: Fallback para a imagem maior */}
            <img
              src={bg2070.src}
              alt="High View Luxury City Skyline"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </picture>

          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* The "Y" Mask Overlay */}
        <motion.div
          style={{
            scale: zoomScale,
            opacity: zoomOpacity,
          }}
          className="relative z-10 w-[300px] h-[300px] flex items-center justify-center pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <mask id="y-mask">
                {/* Huge white rect to cover the entire screen even when scaled down */}
                <rect
                  x="-5000"
                  y="-5000"
                  width="10000"
                  height="10000"
                  fill="white"
                />
                <path
                  d="M0,10 L37.5,50 L37.5,90 L62.5,90 L62.5,50 L100,10 L75,10 L50,40 L25,10 Z"
                  fill="black"
                />
              </mask>
            </defs>
            <rect
              x="-5000"
              y="-5000"
              width="10000"
              height="10000"
              fill="#FFFFFF"
              mask="url(#y-mask)"
            />
          </svg>
        </motion.div>

        {/* Initial Text - Now appears AFTER zoom */}
        <motion.div
          style={{
            opacity: useTransform(
              smoothProgress,
              [0.05, 0.08, 0.27, 0.3],
              [0, 1, 1, 0],
            ),
          }}
          /* Adicionado left-0 right-0 e w-full para garantir que o flex ocupe a largura total */
          className="absolute z-20 left-0 right-0 top-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-normal text-white">
            EXCELÊNCIA EM CADA DETALHE
          </h2>
          <p className="text-gold-pale font-mono mt-4 uppercase tracking-widest">
            Role para explorar nossa visão
          </p>

          <svg
            className="w-8 h-8 text-gold-pale mt-8 animate-bounce-slow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>

        {/* Right Side Scrolling Content */}
        <div className="absolute inset-0 z-30 flex justify-end">
          <motion.div
            style={{
              opacity: useTransform(smoothProgress, [0.35, 0.4], [0, 1]),
              x: useTransform(smoothProgress, [0.35, 0.4], [100, 0]),
            }}
            className="w-full md:w-1/2 h-full bg-black/60 backdrop-blur-xl border-l border-white/10 p-8 md:p-20 flex flex-col items-start justify-start overflow-hidden"
          >
            <div className="relative w-full h-full">
              <motion.div
                style={{
                  y: useTransform(smoothProgress, [0.5, 1], [0, -2250]),
                }}
                className="space-y-[50vh] pt-[20vh]"
              >
                {/* Section 1 */}

                <div className="max-w-md">
                  <span className="text-gold-pale font-mono text-sm mb-4 block">
                    01 // SEGURANÇA
                  </span>
                  <h2 className="text-5xl font-black mb-6 leading-none text-white">
                    Compliance e Segurança
                  </h2>
                  <p className="text-white/70 text-lg">
                    Proteção de dados e conformidade total com as normas da OAB
                    e LGPD, garantindo sigilo absoluto.
                  </p>
                  <div className="mt-8 h-1 w-20 bg-gold-pale" />
                </div>

                {/* Section 2 */}
                <div className="max-w-md">
                  <span className="text-gold-pale font-mono text-sm mb-4 block">
                    02 // PERFORMANCE
                  </span>
                  <h2 className="text-5xl font-black mb-6 leading-none text-white">
                    Velocidade que retém clientes
                  </h2>
                  <p className="text-white/70 text-lg">
                    Seu site carrega antes que o cliente pense em fechar a aba.
                    Cada segundo a menos é uma decisão de contato a mais.
                  </p>
                  <div className="mt-8 h-1 w-20 bg-gold-pale" />
                </div>

                {/* Section 3 */}
                <div className="max-w-md">
                  <span className="text-gold-pale font-mono text-sm mb-4 block">
                    03 // VISIBILIDADE
                  </span>
                  <h2 className="text-5xl font-black mb-6 leading-none text-white">
                    SEO de Intenção Estratégica
                  </h2>
                  <p className="text-white/70 text-lg">
                    Estruturação completa para posicionar sua banca em buscas
                    relevantes no Google e em Inteligências Artificiais.
                  </p>
                  <div className="mt-8 h-1 w-20 bg-gold-pale" />
                </div>

                {/* Section 4 */}
                <div className="max-w-md pb-[40vh]">
                  <span className="text-gold-pale font-mono text-sm mb-4 block">
                    04 // BRANDING
                  </span>
                  <h2 className="text-5xl font-black mb-6 leading-none text-white">
                    Arquitetura de Marca Jurídica
                  </h2>
                  <p className="text-white/70 text-lg">
                    Criamos a presença digital da sua banca com foco em
                    autoridade, discrição e posicionamento premium.
                  </p>
                  <div className="mt-8 h-1 w-20 bg-gold-pale" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
