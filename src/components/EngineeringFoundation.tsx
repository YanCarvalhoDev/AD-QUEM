import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { INTERNAL_LINKS } from "../links";

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

  const lines = ["Sua reputação", "é percebida", "no digital?"];

  return (
    <section
      id={INTERNAL_LINKS.metodo.replace("#", "")}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-24 lg:mb-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* COLUNA 1 */}
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
              aria-label="Sua reputação é percebida no digital?."
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
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 max-w-xl font-medium mx-auto lg:mx-0">
              Grandes bancas não constroem sua reputação apenas por aquilo que
              fazem, mas também pela forma como são percebidas digitalmente,
              antes do primeiro contato.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-medium mx-auto lg:mx-0">
              Quando um potencial cliente pesquisa sua banca online, a
              autoridade construída ao longo de anos precisa estar presente nos
              resultados.
            </p>
          </motion.div>

          {/* COLUNA 2: CARD SÓLIDO (SEM BLURS E EFEITOS DE VIDRO) */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative bg-white border border-gray-100 rounded-[60px] flex flex-col items-center justify-center text-center shadow-[0_32px_64px_rgba(0,0,0,0.08)] overflow-hidden w-full max-w-md aspect-square p-8 lg:p-12">
              <div className="relative z-10">
                <div className="relative inline-block">
                  <div className="text-[90px] xl:text-[120px] font-bold text-[#00A3B1] leading-none mb-2 drop-shadow-[0_10px_10px_rgba(0,163,177,0.15)]">
                    #1
                  </div>
                </div>
              </div>

              <div className="text-xs xl:text-sm uppercase tracking-[0.4em] text-[#002B36]/80 font-black relative z-10 mt-2">
                Posicionamento Alvo
              </div>

              <p className="mt-4 xl:mt-8 text-[#002B36]/90 text-xs xl:text-sm max-w-xs mx-auto relative z-10 font-bold leading-relaxed px-4">
                Sua presença digital nos níveis mais altos dos resultados para
                consolidar sua liderança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
