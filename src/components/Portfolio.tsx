import React from "react";
import { motion } from "motion/react";
import { INTERNAL_LINKS } from "../links";
import imgHero from "../assets/images/herot.webp";

export default function Portfolio() {
  const projects = [
    {
      title: "Banca Boutique SP",
      category: "Arquitetura Digital",
      image: imgHero,
      impact: "Aumento de 40% na conversão de leads qualificados.",
    },
    {
      title: "Arbitragem Internacional",
      category: "Engenharia de Performance",
      image: imgHero,
      impact: "Tempo de carregamento reduzido para 0.8s globalmente.",
    },
  ];

  return (
    <section
      id={INTERNAL_LINKS.portfolio.replace("#", "")}
      className="py-24 md:py-32 bg-[#FFFFFE] text-teal-deep relative overflow-hidden"
    >
      {/* Background Effect: Shutter Shadows */}
      <div className="persiana-sombras" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#8C7B4D] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Quiet Authority
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tighter mb-8">
              Transformações que consolidam legados.
            </h2>
          </div>
          <p className="text-teal-deep/80 max-w-xs text-sm leading-relaxed">
            Não exibimos apenas design. Exibimos resultados de engenharia que
            elevam a percepção de valor de bancas líderes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                {/* <img
                  src={project.image}
                  srcSet={`${project.image.replace("w=1000", "w=400")} 400w,
                          ${project.image.replace("w=1000", "w=800")} 800w,
                          ${project.image} 1000w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  alt={`Projeto ${project.title} - ${project.category}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={1000}
                  height={625}
                /> */}
                <img
                  src={
                    typeof project.image === "string"
                      ? project.image
                      : project.image.src
                  }
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  width={1000}
                  height={625}
                />
                <div className="absolute inset-0 bg-teal-deep/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-teal-deep/70 font-bold">
                    {project.category}
                  </p>
                </div>
                <div className="text-right max-w-[180px]">
                  <p className="text-xs italic leading-relaxed text-teal-deep/80">
                    "{project.impact}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
