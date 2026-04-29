// import React from "react";
// import { motion } from "motion/react";
// import { INTERNAL_LINKS } from "../links";
// import imgFounder from "../assets/images/yan-carvalho.webp";
// import imgFounder2 from "../assets/images/yan-carvalho2.webp";
// import imgFounder3 from "../assets/images/yan-carvalho3.webp";

// export default function Founder() {
//   return (
//     <section
//       id={INTERNAL_LINKS.founder.replace("#", "")}
//       className="py-24 md:py-32 bg-teal-deep border-t border-gold-pale/10 relative overflow-hidden"
//     >
//       {/* Animated Neon Lines */}
//       {/* <div className="absolute top-0 left-0 w-full flex flex-col gap-6 mt-[44px] md:mt-[76px]">
//         <motion.div
//           initial={{ scaleX: 0, originX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="neon-gold-line h-[2px] md:h-[3px] w-[80%] md:w-[50%]"
//         >
//           <div className="neon-spark" />
//         </motion.div>
//         <motion.div
//           initial={{ scaleX: 0, originX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="neon-gold-line w-[65%] md:w-[40%]"
//         >
//           <div className="neon-spark" />
//         </motion.div>
//       </div> */}
//       <div className="absolute top-0 left-0 w-full flex flex-col gap-6 mt-[44px] md:mt-[76px]">
//         {/* Linha 1 */}
//         <div className="neon-gold-line h-[2px] md:h-[3px] w-[80%] md:w-[50%] origin-left">
//           <div className="neon-spark" />
//         </div>

//         {/* Linha 2 */}
//         <div className="neon-gold-line w-[65%] md:w-[40%] origin-left">
//           <div className="neon-spark" />
//         </div>
//       </div>

//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative aspect-[1/1.618] max-w-sm mx-auto lg:mx-0 w-full"
//           >
//             {/* Fibonacci Spiral Composition */}
//             <div className="absolute inset-0 transition-all duration-1000">
//               {/* Golden Ratio Diagram (Grid + Spiral) - Animated Overlay */}
//               <svg
//                 className="absolute inset-0 w-full h-full pointer-events-none z-20 neon-diagram-glow"
//                 viewBox="0 0 100 161.8"
//                 style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
//               >
//                 {/* 1. Outer Frame & Square Dividers - Standard Grid */}
//                 <motion.rect
//                   x="0.4"
//                   y="0.4"
//                   width="99.2"
//                   height="161"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   className="opacity-50"
//                   initial={{ pathLength: 0 }}
//                   whileInView={{ pathLength: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                 />
//                 <motion.path
//                   d="M 0.4,100 L 99.6,100
//                      M 38.2,100 L 38.2,161.4
//                      M 0.4,123.6 L 38.2,123.6
//                      M 23.6,100 L 23.6,123.6
//                      M 23.6,114.6 L 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.5"
//                   fill="none"
//                   className="opacity-30"
//                   initial={{ pathLength: 0 }}
//                   whileInView={{ pathLength: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
//                 />

//                 {/* 2. Mathematical Golden Spiral Path - Animated after the grid */}
//                 <motion.path
//                   d="M 0.4,0.4 A 99.6,99.6 0 0,1 100,100
//                      M 100,100 A 61.8,61.8 0 0,1 38.2,161.8
//                      M 38.2,161.8 A 38.2,38.2 0 0,1 0,123.6
//                      M 0,123.6 A 23.6,23.6 0 0,1 23.6,100
//                      M 23.6,100 A 14.6,14.6 0 0,1 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   strokeDasharray="1000"
//                   initial={{ pathLength: 0 }}
//                   whileInView={{ pathLength: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
//                   className="opacity-70"
//                 />
//               </svg>

//               {/* Square 1: Large Top (Arc at Top-Right) */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="absolute top-[3px] left-[3px] right-[3px] h-[calc(61.8%-5px)] overflow-hidden rounded-tr-full z-10"
//               >
//                 <img
//                   src={imgFounder.src}
//                   className="w-full h-full object-cover grayscale brightness-90 hover:brightness-110 transition-all duration-700"
//                   alt="Eng. Gabriel Santos - Proporção Áurea 1"
//                   referrerPolicy="no-referrer"
//                 />
//               </motion.div>

//               {/* Square 2: Bottom Right (Arc at Bottom-Right) */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="absolute bottom-[3px] right-[3px] w-[calc(61.8%-5px)] h-[calc(38.2%-5px)] overflow-hidden rounded-br-full z-10"
//               >
//                 <img
//                   src={imgFounder2.src}
//                   className="w-full h-full object-cover grayscale contrast-110 brightness-75 hover:brightness-100 transition-all duration-700"
//                   alt="Eng. Gabriel Santos - Proporção Áurea 2"
//                   referrerPolicy="no-referrer"
//                 />
//               </motion.div>

//               {/* Square 3: Bottom Left (Arc at Bottom-Left) */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="absolute bottom-[3px] left-[3px] w-[calc(38.2%-5px)] h-[calc(23.6%-5px)] overflow-hidden rounded-bl-full z-10"
//               >
//                 <img
//                   src={imgFounder3.src}
//                   className="w-full h-full object-cover grayscale contrast-125 brightness-50 hover:brightness-90 transition-all duration-700"
//                   alt="Eng. Gabriel Santos - Proporção Áurea 3"
//                   referrerPolicy="no-referrer"
//                 />
//               </motion.div>

//               {/* Square 4: Middle Left (Arc at Top-Left) */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="absolute top-[calc(61.8%+3px)] left-[3px] w-[calc(23.6%-5px)] h-[calc(14.6%-5px)] overflow-hidden rounded-tl-full z-10"
//               >
//                 <img
//                   src={imgFounder3.src}
//                   className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-700"
//                   alt="Eng. Gabriel Santos - Proporção Áurea 4"
//                   referrerPolicy="no-referrer"
//                 />
//               </motion.div>

//               {/* Square 5: Inner sub-square (Arc at Top-Right again) */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 className="absolute top-[calc(61.8%+3px)] left-[calc(23.6%+3px)] w-[calc(14.6%-5px)] h-[calc(9%-5px)] overflow-hidden rounded-tr-full z-10"
//               >
//                 <img
//                   src={imgFounder3.src}
//                   className="w-full h-full object-cover grayscale brightness-[0.4] hover:brightness-75 transition-all duration-700"
//                   alt="Eng. Gabriel Santos - Proporção Áurea 5"
//                   referrerPolicy="no-referrer"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-gold-pale uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
//               O Arquiteto
//             </span>
//             <h2 className="text-4xl md:text-6xl font-serif leading-tighter mb-8 text-white">
//               Precisão Algorítmica aplicada ao Prestígio.
//             </h2>
//             <div className="space-y-6 text-sandstone/70 leading-relaxed text-lg font-light">
//               <p>
//                 Como Engenheiro da Computação, desenvolvo sites que vão além da
//                 presença institucional. São estruturas pensadas para atrair,
//                 qualificar e posicionar.
//               </p>
//               <p>
//                 Meu trabalho é traduzir a autoridade de bancas jurídicas em uma
//                 presença digital clara, consistente e alinhada ao nível de
//                 exigência do seu público.
//               </p>
//               <p>
//                 Atuo na intersecção entre engenharia e posicionamento,
//                 garantindo que cada elemento do site tenha uma função
//                 estratégica. Sem excessos ou ruído, apenas o necessário para
//                 sustentar credibilidade e resultado.
//               </p>
//             </div>

//             <div className="mt-12 pt-12 border-t border-gold-pale/10">
//               <div className="text-2xl font-serif text-gold-pale">
//                 Eng. Yan Carvalho
//               </div>
//               <div className="text-xs uppercase tracking-widest text-sandstone/40 mt-1">
//                 Founder & Lead Architect
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "motion/react";
// import { INTERNAL_LINKS } from "../links";
// import imgFounder from "../assets/images/yan-carvalho.webp";
// import imgFounder2 from "../assets/images/yan-carvalho2.webp";
// import imgFounder3 from "../assets/images/yan-carvalho3.webp";

// export default function Founder() {
//   const [isInView, setIsInView] = useState(false);

//   return (
//     <section
//       id={INTERNAL_LINKS.founder.replace("#", "")}
//       className="py-24 md:py-32 bg-teal-deep border-t border-gold-pale/10 relative overflow-hidden"
//     >
//       {/* Animated Neon Lines */}
//       <div className="absolute top-0 left-0 w-full flex flex-col gap-6 mt-[44px] md:mt-[76px]">
//         {/* Linha 1 */}
//         <div className="neon-gold-line h-[2px] md:h-[3px] w-[80%] md:w-[50%] origin-left">
//           <div className="neon-spark" />
//         </div>

//         {/* Linha 2 */}
//         <div className="neon-gold-line w-[65%] md:w-[40%] origin-left">
//           <div className="neon-spark" />
//         </div>
//       </div>

//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             onViewportEnter={() => setIsInView(true)}
//             viewport={{ once: true, margin: "-100px" }}
//             className="relative aspect-[1/1.618] max-w-sm mx-auto lg:mx-0 w-full"
//           >
//             {/* Fibonacci Spiral Composition */}
//             <div className="absolute inset-0 transition-all duration-1000">
//               {/* Golden Ratio Diagram (Grid + Spiral) - Animated Overlay */}
//               <svg
//                 className="absolute inset-0 w-full h-full pointer-events-none z-20 neon-diagram-glow"
//                 viewBox="0 0 100 161.8"
//                 style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
//               >
//                 {/* 1. Outer Frame & Square Dividers - Standard Grid */}
//                 {/* <motion.rect
//                   x="0.4"
//                   y="0.4"
//                   width="99.2"
//                   height="161"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   className="opacity-50"
//                   initial={{ pathLength: 0 }}
//                   whileInView={{ pathLength: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                 />
//                 <motion.path
//                   d="M 0.4,100 L 99.6,100
//                      M 38.2,100 L 38.2,161.4
//                      M 0.4,123.6 L 38.2,123.6
//                      M 23.6,100 L 23.6,123.6
//                      M 23.6,114.6 L 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.5"
//                   fill="none"
//                   className="opacity-30"
//                   initial={{ pathLength: 0 }}
//                   whileInView={{ pathLength: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
//                 /> */}
//                 <rect
//                   x="0.4"
//                   y="0.4"
//                   width="99.2"
//                   height="161"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   className="opacity-50"
//                 />
//                 <path
//                   d="M 0.4,100 L 99.6,100
//      M 38.2,100 L 38.2,161.4
//      M 0.4,123.6 L 38.2,123.6
//      M 23.6,100 L 23.6,123.6
//      M 23.6,114.6 L 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.5"
//                   fill="none"
//                   className="opacity-30"
//                 />

//                 {/* 2. Mathematical Golden Spiral Path - Animated after the grid */}
//                 {/* <motion.path
//                   d="M 0.4,0.4 A 99.6,99.6 0 0,1 100,100
//                      M 100,100 A 61.8,61.8 0 0,1 38.2,161.8
//                      M 38.2,161.8 A 38.2,38.2 0 0,1 0,123.6
//                      M 0,123.6 A 23.6,23.6 0 0,1 23.6,100
//                      M 23.6,100 A 14.6,14.6 0 0,1 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   strokeDasharray="1000"
//                   initial={{ pathLength: 0 }}
//                   whileInView={{ pathLength: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
//                   className="opacity-70"
//                 /> */}
//                 <path
//                   d="M 0.4,0.4 A 99.6,99.6 0 0,1 100,100
//      M 100,100 A 61.8,61.8 0 0,1 38.2,161.8
//      M 38.2,161.8 A 38.2,38.2 0 0,1 0,123.6
//      M 0,123.6 A 23.6,23.6 0 0,1 23.6,100
//      M 23.6,100 A 14.6,14.6 0 0,1 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   className="opacity-70"
//                 />
//               </svg>

//               {/* Square 1: Large Top (Arc at Top-Right) */}
//               <div
//                 style={{ transitionDelay: "0ms" }}
//                 className={`absolute top-[3px] left-[3px] right-[3px] h-[calc(61.8%-5px)] overflow-hidden rounded-tr-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={imgFounder.src}
//                   className="w-full h-full object-cover grayscale brightness-90 hover:brightness-110 transition-all duration-700"
//                   alt="Eng. Yan Carvalho - Proporção Áurea 1"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>

//               {/* Square 2: Bottom Right (Arc at Bottom-Right) */}
//               <div
//                 style={{ transitionDelay: "200ms" }}
//                 className={`absolute bottom-[3px] right-[3px] w-[calc(61.8%-5px)] h-[calc(38.2%-5px)] overflow-hidden rounded-br-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={imgFounder2.src}
//                   className="w-full h-full object-cover grayscale contrast-110 brightness-75 hover:brightness-100 transition-all duration-700"
//                   alt="Eng. Yan Carvalho - Proporção Áurea 2"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>

//               {/* Square 3: Bottom Left (Arc at Bottom-Left) */}
//               <div
//                 style={{ transitionDelay: "400ms" }}
//                 className={`absolute bottom-[3px] left-[3px] w-[calc(38.2%-5px)] h-[calc(23.6%-5px)] overflow-hidden rounded-bl-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={imgFounder3.src}
//                   className="w-full h-full object-cover grayscale contrast-125 brightness-50 hover:brightness-90 transition-all duration-700"
//                   alt="Eng. Yan Carvalho - Proporção Áurea 3"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>

//               {/* Square 4: Middle Left (Arc at Top-Left) */}
//               <div
//                 style={{ transitionDelay: "600ms" }}
//                 className={`absolute top-[calc(61.8%+3px)] left-[3px] w-[calc(23.6%-5px)] h-[calc(14.6%-5px)] overflow-hidden rounded-tl-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={imgFounder3.src}
//                   className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-700"
//                   alt="Eng. Yan Carvalho - Proporção Áurea 4"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>

//               {/* Square 5: Inner sub-square (Arc at Top-Right again) */}
//               <div
//                 style={{ transitionDelay: "800ms" }}
//                 className={`absolute top-[calc(61.8%+3px)] left-[calc(23.6%+3px)] w-[calc(14.6%-5px)] h-[calc(9%-5px)] overflow-hidden rounded-tr-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 <img
//                   src={imgFounder3.src}
//                   className="w-full h-full object-cover grayscale brightness-[0.4] hover:brightness-75 transition-all duration-700"
//                   alt="Eng. Yan Carvalho - Proporção Áurea 5"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-gold-pale uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
//               O Arquiteto
//             </span>
//             <h2 className="text-4xl md:text-6xl font-serif leading-tighter mb-8 text-white">
//               Precisão Algorítmica aplicada ao Prestígio.
//             </h2>
//             <div className="space-y-6 text-sandstone/70 leading-relaxed text-lg font-light">
//               <p>
//                 Como Engenheiro da Computação, desenvolvo sites que vão além da
//                 presença institucional. São estruturas pensadas para atrair,
//                 qualificar e posicionar.
//               </p>
//               <p>
//                 Meu trabalho é traduzir a autoridade de bancas jurídicas em uma
//                 presença digital clara, consistente e alinhada ao nível de
//                 exigência do seu público.
//               </p>
//               <p>
//                 Atuo na intersecção entre engenharia e posicionamento,
//                 garantindo que cada elemento do site tenha uma função
//                 estratégica. Sem excessos ou ruído, apenas o necessário para
//                 sustentar credibilidade e resultado.
//               </p>
//             </div>

//             <div className="mt-12 pt-12 border-t border-gold-pale/10">
//               <div className="text-2xl font-serif text-gold-pale">
//                 Eng. Yan Carvalho
//               </div>
//               <div className="text-xs uppercase tracking-widest text-sandstone/40 mt-1">
//                 Founder & Lead Architect
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "motion/react";
// import { INTERNAL_LINKS } from "../links";

// interface FounderProps {
//   image1?: React.ReactNode;
//   image2?: React.ReactNode;
//   image3?: React.ReactNode;
//   image4?: React.ReactNode;
//   image5?: React.ReactNode;
// }

// export default function Founder({
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
// }: FounderProps) {
//   const [isInView, setIsInView] = useState(false);

//   return (
//     <section
//       id={INTERNAL_LINKS.founder.replace("#", "")}
//       className="py-24 md:py-32 bg-teal-deep border-t border-gold-pale/10 relative overflow-hidden"
//     >
//       {/* Animated Neon Lines */}
//       <div className="absolute top-0 left-0 w-full flex flex-col gap-6 mt-[44px] md:mt-[76px]">
//         {/* Linha 1 */}
//         <div className="neon-gold-line h-[2px] md:h-[3px] w-[80%] md:w-[50%] origin-left">
//           <div className="neon-spark" />
//         </div>

//         {/* Linha 2 */}
//         <div className="neon-gold-line w-[65%] md:w-[40%] origin-left">
//           <div className="neon-spark" />
//         </div>
//       </div>

//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             onViewportEnter={() => setIsInView(true)}
//             viewport={{ once: true, margin: "-100px" }}
//             className="relative aspect-[1/1.618] max-w-sm mx-auto lg:mx-0 w-full"
//           >
//             {/* Fibonacci Spiral Composition */}
//             <div className="absolute inset-0 transition-all duration-1000">
//               {/* Golden Ratio Diagram (Grid + Spiral) - Animated Overlay */}
//               <svg
//                 className="absolute inset-0 w-full h-full pointer-events-none z-20 neon-diagram-glow"
//                 viewBox="0 0 100 161.8"
//                 style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
//               >
//                 {/* 1. Outer Frame & Square Dividers - Standard Grid */}
//                 <rect
//                   x="0.4"
//                   y="0.4"
//                   width="99.2"
//                   height="161"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   className="opacity-50"
//                 />
//                 <path
//                   d="M 0.4,100 L 99.6,100
//                      M 38.2,100 L 38.2,161.4
//                      M 0.4,123.6 L 38.2,123.6
//                      M 23.6,100 L 23.6,123.6
//                      M 23.6,114.6 L 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.5"
//                   fill="none"
//                   className="opacity-30"
//                 />

//                 {/* 2. Mathematical Golden Spiral Path */}
//                 <path
//                   d="M 0.4,0.4 A 99.6,99.6 0 0,1 100,100
//                      M 100,100 A 61.8,61.8 0 0,1 38.2,161.8
//                      M 38.2,161.8 A 38.2,38.2 0 0,1 0,123.6
//                      M 0,123.6 A 23.6,23.6 0 0,1 23.6,100
//                      M 23.6,100 A 14.6,14.6 0 0,1 38.2,114.6"
//                   stroke="#C0B283"
//                   strokeWidth="0.8"
//                   fill="none"
//                   className="opacity-70"
//                 />
//               </svg>

//               {/* Square 1: Large Top (Arc at Top-Right) */}
//               <div
//                 style={{ transitionDelay: "0ms" }}
//                 className={`absolute top-[3px] left-[3px] right-[3px] h-[calc(61.8%-5px)] overflow-hidden rounded-tr-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 {image1}
//               </div>

//               {/* Square 2: Bottom Right (Arc at Bottom-Right) */}
//               <div
//                 style={{ transitionDelay: "200ms" }}
//                 className={`absolute bottom-[3px] right-[3px] w-[calc(61.8%-5px)] h-[calc(38.2%-5px)] overflow-hidden rounded-br-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 {image2}
//               </div>

//               {/* Square 3: Bottom Left (Arc at Bottom-Left) */}
//               <div
//                 style={{ transitionDelay: "400ms" }}
//                 className={`absolute bottom-[3px] left-[3px] w-[calc(38.2%-5px)] h-[calc(23.6%-5px)] overflow-hidden rounded-bl-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 {image3}
//               </div>

//               {/* Square 4: Middle Left (Arc at Top-Left) */}
//               <div
//                 style={{ transitionDelay: "600ms" }}
//                 className={`absolute top-[calc(61.8%+3px)] left-[3px] w-[calc(23.6%-5px)] h-[calc(14.6%-5px)] overflow-hidden rounded-tl-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 {image4}
//               </div>

//               {/* Square 5: Inner sub-square (Arc at Top-Right again) */}
//               <div
//                 style={{ transitionDelay: "800ms" }}
//                 className={`absolute top-[calc(61.8%+3px)] left-[calc(23.6%+3px)] w-[calc(14.6%-5px)] h-[calc(9%-5px)] overflow-hidden rounded-tr-full z-10 transition-opacity duration-700 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
//               >
//                 {image5}
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-gold-pale uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
//               O Arquiteto
//             </span>
//             <h2 className="text-4xl md:text-6xl font-serif leading-tighter mb-8 text-white">
//               Precisão Algorítmica aplicada ao Prestígio.
//             </h2>
//             <div className="space-y-6 text-sandstone/70 leading-relaxed text-lg font-light">
//               <p>
//                 Como Engenheiro da Computação, desenvolvo sites que vão além da
//                 presença institucional. São estruturas pensadas para atrair,
//                 qualificar e posicionar.
//               </p>
//               <p>
//                 Meu trabalho é traduzir a autoridade de bancas jurídicas em uma
//                 presença digital clara, consistente e alinhada ao nível de
//                 exigência do seu público.
//               </p>
//               <p>
//                 Atuo na intersecção entre engenharia e posicionamento,
//                 garantindo que cada elemento do site tenha uma função
//                 estratégica. Sem excessos ou ruído, apenas o necessário para
//                 sustentar credibilidade e resultado.
//               </p>
//             </div>

//             <div className="mt-12 pt-12 border-t border-gold-pale/10">
//               <div className="text-2xl font-serif text-gold-pale">
//                 Eng. Yan Carvalho
//               </div>
//               <div className="text-xs uppercase tracking-widest text-sandstone/40 mt-1">
//                 Founder & Lead Architect
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "motion/react";
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
              O Arquiteto
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tighter mb-8 text-white">
              Precisão Algorítmica aplicada ao Prestígio.
            </h2>
            <div className="space-y-6 text-sandstone/70 leading-relaxed text-lg font-light">
              <p>
                Como Engenheiro da Computação, desenvolvo sites que vão além da
                presença institucional. São estruturas pensadas para atrair,
                qualificar e posicionar.
              </p>
              <p>
                Meu trabalho é traduzir a autoridade de bancas jurídicas em uma
                presença digital clara, consistente e alinhada ao nível de
                exigência do seu público.
              </p>
              <p>
                Atuo na intersecção entre engenharia e posicionamento,
                garantindo que cada elemento do site tenha uma função
                estratégica. Sem excessos, sem ruído, apenas o necessário para
                sustentar credibilidade e resultado.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-gold-pale/10">
              <div className="text-2xl font-serif text-gold-pale">
                Eng. Yan Carvalho
              </div>
              <div className="text-xs uppercase tracking-widest text-sandstone/40 mt-1">
                Founder & Lead Architect
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
