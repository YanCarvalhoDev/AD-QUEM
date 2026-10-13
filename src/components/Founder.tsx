import React from "react";
import { INTERNAL_LINKS } from "../links";

interface FounderProps {
  image1?: React.ReactNode;
  image2?: React.ReactNode;
  image3?: React.ReactNode;
  image4?: React.ReactNode;
  image5?: React.ReactNode;
}

export default function Founder({
  image1,
  image2,
  image3,
  image4,
  image5,
}: FounderProps) {
  return (
    <section
      id={INTERNAL_LINKS.founder.replace("#", "")}
      className="py-24 md:py-32 bg-teal-deep border-t border-gold-pale/10 relative overflow-hidden"
    >
      {/* Linhas Neon Estáticas - Zero JS */}
      <div className="absolute top-0 left-0 w-full flex flex-col gap-6 mt-[44px] md:mt-[76px]">
        <div className="neon-gold-line h-[2px] md:h-[3px] w-[80%] md:w-[50%] origin-left">
          <div className="neon-spark" />
        </div>
        <div className="neon-gold-line w-[65%] md:w-[40%] origin-left">
          <div className="neon-spark" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Lado Esquerdo: A Composição da Espiral */}
          <div className="relative aspect-[1/1.618] max-w-sm mx-auto lg:mx-0 w-full">
            {/* SVG Estático - Moldura da Proporção Áurea */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20 neon-diagram-glow"
              viewBox="0 0 100 161.8"
            >
              <rect
                x="0.4"
                y="0.4"
                width="99.2"
                height="161"
                stroke="#C0B283"
                strokeWidth="0.8"
                fill="none"
                className="opacity-50"
              />
              <path
                d="M 0.4,100 L 99.6,100 M 38.2,100 L 38.2,161.4 M 0.4,123.6 L 38.2,123.6 M 23.6,100 L 23.6,123.6 M 23.6,114.6 L 38.2,114.6"
                stroke="#C0B283"
                strokeWidth="0.5"
                fill="none"
                className="opacity-30"
              />
              <path
                d="M 0.4,0.4 A 99.6,99.6 0 0,1 100,100 M 100,100 A 61.8,61.8 0 0,1 38.2,161.8 M 38.2,161.8 A 38.2,38.2 0 0,1 0,123.6 M 0,123.6 A 23.6,23.6 0 0,1 23.6,100 M 23.6,100 A 14.6,14.6 0 0,1 38.2,114.6"
                stroke="#C0B283"
                strokeWidth="0.8"
                fill="none"
                className="opacity-70"
              />
            </svg>

            {/* Injeção dos Slots do Astro */}
            <div className="absolute inset-0">
              <div className="absolute top-[3px] left-[3px] right-[3px] h-[calc(61.8%-5px)] overflow-hidden rounded-tr-full z-10">
                {image1}
              </div>

              <div className="absolute bottom-[3px] right-[3px] w-[calc(61.8%-5px)] h-[calc(38.2%-5px)] overflow-hidden rounded-br-full z-10">
                {image2}
              </div>

              <div className="absolute bottom-[3px] left-[3px] w-[calc(38.2%-5px)] h-[calc(23.6%-5px)] overflow-hidden rounded-bl-full z-10">
                {image3}
              </div>

              <div className="absolute top-[calc(61.8%+3px)] left-[3px] w-[calc(23.6%-5px)] h-[calc(14.6%-5px)] overflow-hidden rounded-tl-full z-10">
                {image4}
              </div>

              <div className="absolute top-[calc(61.8%+3px)] left-[calc(23.6%+3px)] w-[calc(14.6%-5px)] h-[calc(9%-5px)] overflow-hidden rounded-tr-full z-10">
                {image5}
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto Estático */}
          <div>
            <span className="text-gold-pale uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Sobre a Ad Quem
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tighter mb-8 text-white">
              Tecnologia e Presença.
            </h2>
            <div className="space-y-6 text-sandstone/80 leading-relaxed text-lg font-light">
              <p>
                <strong className="text-sandstone/100">
                  Ad Quem 
                </strong>
                {""}é uma expressão latina presente no vocabulário jurídico. No contexto dos recursos, 
                aparece na expressão juízo ad quem, que designa o órgão jurisdicional ao qual um recurso é dirigido. 
                Também pode ser utilizada para indicar o termo final de um prazo ou período.
              </p>
              <p>
                Foi desse universo jurídico que surgiu o nome da Ad Quem, fundada por {""}
                <strong className="text-sandstone/100">Yan Carvalho, Engenheiro da Computação</strong>, 
                a partir da percepção de que a autoridade construída por uma banca ao longo de sua trajetória precisa ser 
                traduzida para o ambiente digital com a mesma clareza e consistência
              </p>
              <p>
                A Ad Quem une engenharia, estratégia digital e arquitetura da informação para desenvolver 
                presenças digitais que expressem a reputação, o conhecimento e o posicionamento de organizações jurídicas. 
                Seu trabalho vai além da criação de websites, estruturando os elementos que permitem que uma banca apresente sua identidade, 
                comunique sua expertise e seja encontrada e compreendida no ambiente digital.
              </p>
               <p>
                Cada projeto é desenvolvido para conectar a essência da organização à forma como ela se apresenta, é percebida e descoberta online
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-gold-pale/10">
              <div className="text-2xl font-serif text-gold-pale">
                Yan Carvalho
              </div>
              <div className="text-xs uppercase tracking-widest text-sandstone/40 mt-1">
                Founder · Engenheiro da Computação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
