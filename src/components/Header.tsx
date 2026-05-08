// import React, { useState, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "motion/react";
// import { Menu, X, ChevronRight } from "lucide-react";
// import { INTERNAL_LINKS } from "../links";
// import { CONTACT_LINKS } from "../links";

// interface HeaderProps {
//   isDarkPage?: boolean;
// }

// export default function Header({ isDarkPage = false }: HeaderProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHeaderHovered, setIsHeaderHovered] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [activeServiceCategory, setActiveServiceCategory] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() ?? 0;
//     if (latest > previous && latest > 150) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
//     setIsScrolled(latest > 50);
//   });

//   const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
//     null,
//   );
//   const [expandedMobileSubcategory, setExpandedMobileSubcategory] = useState<
//     number | null
//   >(null);

//   const toggleMobileMenu = (id: string) => {
//     setExpandedMobileMenu(expandedMobileMenu === id ? null : id);
//     setExpandedMobileSubcategory(null); // Reset subcategory when switching main menu
//   };

//   const toggleMobileSubcategory = (idx: number) => {
//     setExpandedMobileSubcategory(
//       expandedMobileSubcategory === idx ? null : idx,
//     );
//   };

//   const menuItems = [
//     {
//       name: "Serviços",
//       id: "services",
//       href: INTERNAL_LINKS.metodo,
//       hasSubmenu: true,
//     },
//     { name: "Nossa Equipe", id: "people", href: INTERNAL_LINKS.founder },
//     // {
//     //   name: "Insights",
//     //   id: "insights",
//     //   href: INTERNAL_LINKS.portfolio,
//     //   hasSubmenu: true,
//     // },
//     { name: "Estratégia", id: "careers", href: INTERNAL_LINKS.estrategia },
//     { name: "Sobre nós", id: "about", href: INTERNAL_LINKS.founder },
//   ];

//   const servicesData = [
//     {
//       category: "Arquitetura de Marca Jurídica",
//       items: [
//         "Identidade Visual para Bancas",
//         "Design Editorial Jurídico",
//         "Naming Estratégico",
//         // "Brandbook Editorial",
//         // "Modelo de Proposta",
//       ],
//     },
//     {
//       category: "Engenharia de Performance",
//       items: [
//         "Otimização de Core Web Vitals",
//         "Real-Time Performance Audit",
//         "Sistemas de Alta Disponibilidade",
//         "Monitoramento 24/7",
//       ],
//     },
//     {
//       category: "SEO de Intenção Estratégica",
//       items: [
//         "SEO para Termos de Alto Valor",
//         "Marketing de Conteúdo",
//         "Link Building de Elite",
//         // "Análise de Mercado",
//       ],
//     },
//     {
//       category: "Compliance e Segurança",
//       items: [
//         "Proteção de Dados e LGPD",
//         // "Criptografia de Ponta",
//         "Auditoria de Segurança",
//         // "Backup Redundante",
//       ],
//     },
//   ];

//   // const insightsData = [
//   //   {
//   //     title: "Cases de Sucesso",
//   //     desc: "Transformações reais em bancas de elite.",
//   //     // icon: <Rocket size={20} />,
//   //   },
//   //   {
//   //     title: "Artigos Técnicos",
//   //     desc: "Engenharia aplicada ao direito.",
//   //     // icon: <FileText size={20} />,
//   //   },
//   //   {
//   //     title: "Webinars",
//   //     desc: "Estratégias digitais ao vivo.",
//   //     // icon: <Calendar size={20} />,
//   //   },
//   //   {
//   //     title: "Podcasts",
//   //     desc: "Tecnologia e prestígio jurídico.",
//   //     // icon: <Mic size={20} />,
//   //   },
//   //   {
//   //     title: "Vídeos",
//   //     desc: "Análises de performance e design.",
//   //     // icon: <Play size={20} />,
//   //   },
//   //   {
//   //     title: "Briefings",
//   //     desc: "Relatórios de tendências digitais.",
//   //     // icon: <Newspaper size={20} />,
//   //   },
//   // ];

//   const showActiveState = isScrolled || activeMenu || isHeaderHovered || isOpen;

//   return (
//     <>
//       {/* Global Blur Overlay */}
//       <AnimatePresence>
//         {(activeMenu === "services" || activeMenu === "insights") && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/10 backdrop-blur-[6px] z-40 pointer-events-none"
//           />
//         )}
//       </AnimatePresence>

//       <motion.header
//         animate={{
//           y: isVisible || activeMenu || isHeaderHovered || isOpen ? 0 : -100,
//           borderBottomLeftRadius:
//             activeMenu === "services" || activeMenu === "insights"
//               ? "32px"
//               : "0px",
//           borderBottomRightRadius:
//             activeMenu === "services" || activeMenu === "insights"
//               ? "32px"
//               : "0px",
//         }}
//         transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//         style={{ willChange: "transform, border-radius" }}
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//           showActiveState ? "bg-white shadow-sm" : "bg-transparent shadow-none"
//         }`}
//         onMouseEnter={() => setIsHeaderHovered(true)}
//         onMouseLeave={() => {
//           setIsHeaderHovered(false);
//           setActiveMenu(null);
//           setActiveServiceCategory(0);
//         }}
//       >
//         <div
//           className={`container mx-auto px-6 lg:px-20 flex justify-between items-center transition-all duration-500 ${showActiveState ? "py-4" : "py-5"}`}
//         >
//           <a
//             href="/"
//             className={`text-2xl font-sans font-bold tracking-tighter flex items-center gap-1 transition-colors duration-300 ${
//               showActiveState
//                 ? "text-[#005F6B]"
//                 : isDarkPage
//                   ? "text-white"
//                   : "text-[#005F6B] lg:text-white"
//             }`}
//           >
//             <span className="text-3xl">AQ</span>
//             <div className="flex flex-col leading-none ml-1">
//               <span className="text-sm font-bold uppercase tracking-tighter">
//                 Ad
//               </span>
//               <span className="text-sm font-bold uppercase tracking-tighter">
//                 Quem
//               </span>
//             </div>
//           </a>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {menuItems.map((item, i) => (
//               <div
//                 key={item.id}
//                 className="relative py-2"
//                 onMouseEnter={() => setActiveMenu(item.id)}
//               >
//                 <a
//                   href={`/${item.href}`}
//                   className={`text-[15px] font-medium transition-colors duration-300 ${
//                     showActiveState
//                       ? "text-gray-800 hover:text-[#00A3B1]"
//                       : "text-white hover:text-gold-pale"
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               </div>
//             ))}
//             <div className="flex items-center gap-5 ml-4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <a
//                   href={CONTACT_LINKS.whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-7 py-2.5 bg-[#005F6B] text-white text-[14px] font-bold rounded-full hover:bg-[#007A8A] transition-all block text-center"
//                   aria-label="Falar conosco pelo WhatsApp"
//                 >
//                   Fale Conosco
//                 </a>
//               </motion.div>
//             </div>
//           </nav>

//           {/* Mobile Toggle & CTA */}
//           <div className="lg:hidden flex items-center gap-3">
//             <motion.div whileTap={{ scale: 0.95 }}>
//               <a
//                 href={CONTACT_LINKS.whatsapp}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-3 py-1.5 bg-[#005F6B] text-white text-[11px] font-bold rounded-full transition-all shadow-lg block text-center"
//                 aria-label="Falar conosco pelo WhatsApp"
//               >
//                 Fale Conosco
//               </a>
//             </motion.div>
//             <button
//               className={`transition-colors p-2 ${showActiveState ? "text-gray-900" : isDarkPage ? "text-white" : "text-gray-900 lg:text-white"}`}
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
//               aria-expanded={isOpen}
//               aria-controls="mobile-menu"
//             >
//               {isOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* Mega Menu Content - Now part of the header's height flow */}
//         <AnimatePresence mode="wait">
//           {activeMenu === "services" && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//               className="w-full bg-white border-t border-gray-100 overflow-hidden hidden lg:block rounded-b-[32px]"
//             >
//               <div className="container mx-auto px-20 py-12 flex gap-20">
//                 <div className="w-1/4 border-r border-gray-100 pr-10">
//                   <ul className="space-y-4">
//                     {servicesData.map((data, i) => (
//                       <li
//                         key={i}
//                         onMouseEnter={() => setActiveServiceCategory(i)}
//                         className={`text-[15px] font-bold transition-all cursor-pointer relative ${
//                           activeServiceCategory === i
//                             ? "text-[#00A3B1] pl-4"
//                             : "text-gray-400 hover:text-gray-700 pl-0"
//                         }`}
//                       >
//                         {activeServiceCategory === i && (
//                           <motion.div
//                             layoutId="activeBar"
//                             className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A3B1]"
//                           />
//                         )}
//                         {data.category}
//                       </li>
//                     ))}
//                   </ul>
//                   {/* <div className="mt-10 space-y-3">
//                     <button className="flex items-center gap-2 text-[13px] font-bold text-[#005F6B] border border-[#005F6B] px-4 py-2 rounded-full hover:bg-[#005F6B] hover:text-white transition-all w-full justify-between">
//                       Ver todos os serviços <ChevronRight size={14} />
//                     </button>
//                     <button className="flex items-center gap-2 text-[13px] font-bold text-[#005F6B] border border-[#005F6B] px-4 py-2 rounded-full hover:bg-[#005F6B] hover:text-white transition-all w-full justify-between">
//                       Serviços Internacionais <ChevronRight size={14} />
//                     </button>
//                   </div> */}
//                 </div>
//                 <div className="flex-1">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeServiceCategory}
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="grid grid-cols-2 gap-x-10 gap-y-6"
//                     >
//                       {servicesData[activeServiceCategory].items.map(
//                         (item, i) => (
//                           <div key={i} className="group cursor-pointer">
//                             {item === "Real-Time Performance Audit" ? (
//                               <a
//                                 href="/performance"
//                                 className="text-[15px] font-bold text-[#00A3B1] group-hover:translate-x-1 transition-transform inline-block"
//                               >
//                                 {item}
//                               </a>
//                             ) : item === "Modelo de Proposta" ? (
//                               <a
//                                 href="/proposta"
//                                 className="text-[15px] font-bold text-[#00A3B1] group-hover:translate-x-1 transition-transform inline-block"
//                               >
//                                 {item}
//                               </a>
//                             ) : (
//                               <div className="text-[15px] font-bold text-[#00A3B1] group-hover:translate-x-1 transition-transform inline-block">
//                                 {item}
//                               </div>
//                             )}
//                             <div className="h-[1px] w-0 group-hover:w-full bg-[#00A3B1]/30 transition-all duration-300" />
//                           </div>
//                         ),
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* {activeMenu === "insights" && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//               className="w-full bg-white border-t border-gray-100 overflow-hidden hidden lg:block rounded-b-[32px]"
//             >
//               <div className="container mx-auto px-20 py-12">
//                 <div className="grid grid-cols-3 gap-10">
//                   {insightsData.map((item, i) => (
//                     <div key={i} className="flex gap-4 group cursor-pointer">
//                       <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-[#00A3B1] group-hover:bg-[#00A3B1] group-hover:text-white transition-all">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h4 className="text-[16px] font-sans font-bold text-[#005F6B] mb-1">
//                           {item.title}
//                         </h4>
//                         <p className="text-[13px] text-gray-500">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-12 pt-8 border-t border-gray-100">
//                   <button className="flex items-center gap-2 text-[13px] font-bold text-[#005F6B] border border-[#005F6B] px-4 py-2 rounded-full hover:bg-[#005F6B] hover:text-white transition-all">
//                     Notícias e Insights <ChevronRight size={14} />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )} */}
//         </AnimatePresence>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               id="mobile-menu"
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] lg:hidden overflow-y-auto"
//               role="dialog"
//               aria-modal="true"
//               aria-label="Menu de navegação móvel"
//             >
//               <div className="flex flex-col h-full">
//                 <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
//                   <a href="/" className="text-xl font-bold text-[#005F6B]">
//                     AQ{" "}
//                     <span className="text-sm font-normal uppercase tracking-widest ml-1">
//                       Arquiteto
//                     </span>
//                     <span className="text-sm font-normal uppercase tracking-widest ml-1">
//                       Digital
//                     </span>
//                   </a>
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="p-2 text-gray-900"
//                   >
//                     <X size={28} />
//                   </button>
//                 </div>

//                 <div className="flex-1 px-6 py-8 space-y-6">
//                   {menuItems.map((item) => (
//                     <div key={item.id} className="border-b border-gray-50 pb-4">
//                       <div
//                         className="flex justify-between items-center cursor-pointer"
//                         onClick={() =>
//                           item.hasSubmenu
//                             ? toggleMobileMenu(item.id)
//                             : setIsOpen(false)
//                         }
//                       >
//                         {item.hasSubmenu ? (
//                           <span className="text-2xl font-bold text-[#005F6B]">
//                             {item.name}
//                           </span>
//                         ) : (
//                           <a
//                             href={`/${item.href}`}
//                             onClick={() => setIsOpen(false)}
//                             className="text-2xl font-bold text-[#005F6B]"
//                           >
//                             {item.name}
//                           </a>
//                         )}
//                         {item.hasSubmenu && (
//                           <motion.div
//                             animate={{
//                               rotate: expandedMobileMenu === item.id ? 90 : 0,
//                             }}
//                           >
//                             <ChevronRight
//                               size={24}
//                               className="text-[#00A3B1]"
//                             />
//                           </motion.div>
//                         )}
//                       </div>

//                       <AnimatePresence>
//                         {expandedMobileMenu === "services" &&
//                           item.id === "services" && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               className="overflow-hidden mt-4 space-y-6"
//                             >
//                               {servicesData.map((category, idx) => (
//                                 <div
//                                   key={idx}
//                                   className="pl-4 border-l-2 border-[#00A3B1]/20"
//                                 >
//                                   <div
//                                     className="flex justify-between items-center cursor-pointer py-2"
//                                     onClick={() => toggleMobileSubcategory(idx)}
//                                   >
//                                     <h4
//                                       className={`text-sm font-bold uppercase tracking-wider transition-colors ${expandedMobileSubcategory === idx ? "text-[#00A3B1]" : "text-gray-400"}`}
//                                     >
//                                       {category.category}
//                                     </h4>
//                                     <motion.div
//                                       animate={{
//                                         rotate:
//                                           expandedMobileSubcategory === idx
//                                             ? 90
//                                             : 0,
//                                       }}
//                                     >
//                                       <ChevronRight
//                                         size={16}
//                                         className="text-[#00A3B1]/50"
//                                       />
//                                     </motion.div>
//                                   </div>

//                                   <AnimatePresence>
//                                     {expandedMobileSubcategory === idx && (
//                                       <motion.div
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         className="overflow-hidden space-y-3 mt-2 pb-2"
//                                       >
//                                         {category.items.map((subItem, sIdx) => (
//                                           <div key={sIdx}>
//                                             {subItem ===
//                                             "Real-Time Performance Audit" ? (
//                                               <a
//                                                 href="/performance"
//                                                 className="text-[16px] font-bold text-[#00A3B1] block"
//                                               >
//                                                 {subItem}
//                                               </a>
//                                             ) : subItem ===
//                                               "Modelo de Proposta" ? (
//                                               <a
//                                                 href="/proposta"
//                                                 className="text-[16px] font-bold text-[#00A3B1] block"
//                                               >
//                                                 {subItem}
//                                               </a>
//                                             ) : (
//                                               <span className="text-[16px] font-bold text-[#005F6B] block opacity-80">
//                                                 {subItem}
//                                               </span>
//                                             )}
//                                           </div>
//                                         ))}
//                                       </motion.div>
//                                     )}
//                                   </AnimatePresence>
//                                 </div>
//                               ))}
//                             </motion.div>
//                           )}

//                         {expandedMobileMenu === "insights" &&
//                           item.id === "insights" && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               className="overflow-hidden mt-4 grid grid-cols-1 gap-4 pl-4"
//                             >
//                               {/* {insightsData.map((insight, idx) => (
//                                 <div
//                                   key={idx}
//                                   className="flex items-center gap-3"
//                                 >
//                                   <div className="text-[#00A3B1]">
//                                     {insight.icon}
//                                   </div>
//                                   <div>
//                                     <h5 className="text-[16px] font-sans font-bold text-[#005F6B]">
//                                       {insight.title}
//                                     </h5>
//                                     <p className="text-[12px] text-gray-500">
//                                       {insight.desc}
//                                     </p>
//                                   </div>
//                                 </div>
//                               ))} */}
//                             </motion.div>
//                           )}
//                       </AnimatePresence>
//                     </div>
//                   ))}

//                   <div className="pt-6">
//                     <a
//                       href={`/${INTERNAL_LINKS.aplicacao}`}
//                       onClick={() => setIsOpen(false)}
//                       className="w-full py-4 bg-[#005F6B] text-white text-center font-bold rounded-xl block text-lg shadow-xl shadow-[#005F6B]/20"
//                     >
//                       Fale Conosco
//                     </a>
//                   </div>
//                 </div>

//                 <div className="px-6 py-8 bg-gray-50 mt-auto">
//                   <div className="flex justify-between items-center text-sm text-gray-500">
//                     <span>© 2026 Ad Quem</span>
//                     {/* <div className="flex gap-4">
//                       <span className="font-bold text-[#00A3B1]">PT</span>
//                       <span className="opacity-50">EN</span>
//                     </div> */}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { INTERNAL_LINKS } from "../links";
import { CONTACT_LINKS } from "../links";

interface HeaderProps {
  isDarkPage?: boolean;
}

export default function Header({ isDarkPage = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(latest > 50);
  });

  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );
  const [expandedMobileSubcategory, setExpandedMobileSubcategory] = useState<
    number | null
  >(null);

  const toggleMobileMenu = (id: string) => {
    setExpandedMobileMenu(expandedMobileMenu === id ? null : id);
    setExpandedMobileSubcategory(null); 
  };

  const toggleMobileSubcategory = (idx: number) => {
    setExpandedMobileSubcategory(
      expandedMobileSubcategory === idx ? null : idx,
    );
  };

  const menuItems = [
    {
      name: "Serviços",
      id: "services",
      href: INTERNAL_LINKS.metodo,
      hasSubmenu: true,
    },
    { name: "Nossa Equipe", id: "people", href: INTERNAL_LINKS.founder },
    { name: "Estratégia", id: "careers", href: INTERNAL_LINKS.estrategia },
    { name: "Sobre nós", id: "about", href: INTERNAL_LINKS.founder },
  ];

  const servicesData = [
    {
      category: "Arquitetura de Marca Jurídica",
      items: [
        "Identidade Visual para Bancas",
        "Design Editorial Jurídico",
        "Naming Estratégico",
      ],
    },
    {
      category: "Engenharia de Performance",
      items: [
        "Otimização de Core Web Vitals",
        "Real-Time Performance Audit",
        "Sistemas de Alta Disponibilidade",
        "Monitoramento 24/7",
      ],
    },
    {
      category: "SEO de Intenção Estratégica",
      items: [
        "SEO para Termos de Alto Valor",
        "Marketing de Conteúdo",
        "Link Building de Elite",
      ],
    },
    {
      category: "Compliance e Segurança",
      items: [
        "Proteção de Dados e LGPD",
        "Auditoria de Segurança",
      ],
    },
  ];

  const showActiveState = isScrolled || activeMenu || isHeaderHovered || isOpen;

  return (
    <>
      {/* Global Blur Overlay */}
      <AnimatePresence>
        {(activeMenu === "services" || activeMenu === "insights") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-[6px] z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.header
        animate={{
          y: isVisible || activeMenu || isHeaderHovered || isOpen ? 0 : -100,
          borderBottomLeftRadius:
            activeMenu === "services" || activeMenu === "insights"
              ? "32px"
              : "0px",
          borderBottomRightRadius:
            activeMenu === "services" || activeMenu === "insights"
              ? "32px"
              : "0px",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        style={{ willChange: "transform, border-radius" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showActiveState ? "bg-white shadow-sm" : "bg-transparent shadow-none"
        }`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => {
          setIsHeaderHovered(false);
          setActiveMenu(null);
          setActiveServiceCategory(0);
        }}
      >
        <div
          className={`container mx-auto px-6 lg:px-20 flex justify-between items-center transition-all duration-500 ${showActiveState ? "py-4" : "py-5"}`}
        >
          <a href="/" className="flex items-center transition-all duration-300">
            <img
              src="/AQ_Ad_Quem_logo.png"
              alt="Logo Ad Quem"
              className={`h-8 w-auto transition-all duration-500 ${
                showActiveState
                  ? "filter-brand-blue"
                  : isDarkPage
                    ? "filter-white"
                    : "filter-brand-blue lg:filter-white"
              }`}
            />
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item, i) => (
              <div
                key={item.id}
                className="relative py-2"
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                <a
                  href={`/${item.href}`}
                  className={`text-[15px] font-medium transition-colors duration-300 ${
                    showActiveState
                      ? "text-gray-800 hover:text-[#00A3B1]"
                      : "text-white hover:text-gold-pale"
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div className="flex items-center gap-5 ml-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-2.5 bg-[#005F6B] text-white text-[14px] font-bold rounded-full hover:bg-[#007A8A] transition-all block text-center"
                  aria-label="Falar conosco pelo WhatsApp"
                >
                  Fale Conosco
                </a>
              </motion.div>
            </div>
          </nav>

          {/* Mobile Toggle & CTA */}
          <div className="lg:hidden flex items-center gap-3">
            <motion.div whileTap={{ scale: 0.95 }}>
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#005F6B] text-white text-[11px] font-bold rounded-full transition-all shadow-lg block text-center"
                aria-label="Falar conosco pelo WhatsApp"
              >
                Fale Conosco
              </a>
            </motion.div>
            <button
              className={`transition-colors p-2 ${showActiveState ? "text-gray-900" : isDarkPage ? "text-white" : "text-gray-900 lg:text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Content - Now part of the header's height flow */}
        <AnimatePresence mode="wait">
          {activeMenu === "services" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full bg-white border-t border-gray-100 overflow-hidden hidden lg:block rounded-b-[32px]"
            >
              <div className="container mx-auto px-20 py-12 flex gap-20">
                <div className="w-1/4 border-r border-gray-100 pr-10">
                  <ul className="space-y-4">
                    {servicesData.map((data, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setActiveServiceCategory(i)}
                        className={`text-[15px] font-bold transition-all cursor-pointer relative ${
                          activeServiceCategory === i
                            ? "text-[#00A3B1] pl-4"
                            : "text-gray-400 hover:text-gray-700 pl-0"
                        }`}
                      >
                        {activeServiceCategory === i && (
                          <motion.div
                            layoutId="activeBar"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A3B1]"
                          />
                        )}
                        {data.category}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeServiceCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-2 gap-x-10 gap-y-6"
                    >
                      {servicesData[activeServiceCategory].items.map(
                        (item, i) => (
                          <div key={i} className="group cursor-pointer">
                            {item === "Real-Time Performance Audit" ? (
                              <a
                                href="/performance"
                                className="text-[15px] font-bold text-[#00A3B1] group-hover:translate-x-1 transition-transform inline-block"
                              >
                                {item}
                              </a>
                            ) : item === "Modelo de Proposta" ? (
                              <a
                                href="/proposta"
                                className="text-[15px] font-bold text-[#00A3B1] group-hover:translate-x-1 transition-transform inline-block"
                              >
                                {item}
                              </a>
                            ) : (
                              <div className="text-[15px] font-bold text-[#00A3B1] group-hover:translate-x-1 transition-transform inline-block">
                                {item}
                              </div>
                            )}
                            <div className="h-[1px] w-0 group-hover:w-full bg-[#00A3B1]/30 transition-all duration-300" />
                          </div>
                        ),
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação móvel"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
                  <a href="/" className="text-xl font-bold text-[#005F6B]">
                    <img
                      src="/AQ_Ad_Quem_logo.png"
                      alt="Logo Ad Quem"
                      className="h-8 w-auto filter-brand-blue"
                    />
                    <span className="text-sm font-normal uppercase tracking-widest ml-1">
                      Ad
                    </span>
                    <span className="text-sm font-normal uppercase tracking-widest ml-1">
                      Quem
                    </span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-900"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex-1 px-6 py-8 space-y-6">
                  {menuItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-50 pb-4">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          item.hasSubmenu
                            ? toggleMobileMenu(item.id)
                            : setIsOpen(false)
                        }
                      >
                        {item.hasSubmenu ? (
                          <span className="text-2xl font-bold text-[#005F6B]">
                            {item.name}
                          </span>
                        ) : (
                          <a
                            href={`/${item.href}`}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-[#005F6B]"
                          >
                            {item.name}
                          </a>
                        )}
                        {item.hasSubmenu && (
                          <motion.div
                            animate={{
                              rotate: expandedMobileMenu === item.id ? 90 : 0,
                            }}
                          >
                            <ChevronRight
                              size={24}
                              className="text-[#00A3B1]"
                            />
                          </motion.div>
                        )}
                      </div>

                      <AnimatePresence>
                        {expandedMobileMenu === "services" &&
                          item.id === "services" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-4 space-y-6"
                            >
                              {servicesData.map((category, idx) => (
                                <div
                                  key={idx}
                                  className="pl-4 border-l-2 border-[#00A3B1]/20"
                                >
                                  <div
                                    className="flex justify-between items-center cursor-pointer py-2"
                                    onClick={() => toggleMobileSubcategory(idx)}
                                  >
                                    <h4
                                      className={`text-sm font-bold uppercase tracking-wider transition-colors ${expandedMobileSubcategory === idx ? "text-[#00A3B1]" : "text-gray-400"}`}
                                    >
                                      {category.category}
                                    </h4>
                                    <motion.div
                                      animate={{
                                        rotate:
                                          expandedMobileSubcategory === idx
                                            ? 90
                                            : 0,
                                      }}
                                    >
                                      <ChevronRight
                                        size={16}
                                        className="text-[#00A3B1]/50"
                                      />
                                    </motion.div>
                                  </div>

                                  <AnimatePresence>
                                    {expandedMobileSubcategory === idx && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden space-y-3 mt-2 pb-2"
                                      >
                                        {category.items.map((subItem, sIdx) => (
                                          <div key={sIdx}>
                                            {subItem ===
                                            "Real-Time Performance Audit" ? (
                                              <a
                                                href="/performance"
                                                className="text-[16px] font-bold text-[#00A3B1] block"
                                              >
                                                {subItem}
                                              </a>
                                            ) : subItem ===
                                              "Modelo de Proposta" ? (
                                              <a
                                                href="/proposta"
                                                className="text-[16px] font-bold text-[#00A3B1] block"
                                              >
                                                {subItem}
                                              </a>
                                            ) : (
                                              <span className="text-[16px] font-bold text-[#005F6B] block opacity-80">
                                                {subItem}
                                              </span>
                                            )}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </motion.div>
                          )}

                        {expandedMobileMenu === "insights" &&
                          item.id === "insights" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-4 grid grid-cols-1 gap-4 pl-4"
                            >
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <div className="pt-6">
                    <a
                      href={CONTACT_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-4 bg-[#005F6B] text-white text-center font-bold rounded-xl block text-lg shadow-xl shadow-[#005F6B]/20"
                    >
                      Fale Conosco
                    </a>
                  </div>
                </div>

                <div className="px-6 py-8 bg-gray-50 mt-auto">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>© 2026 Ad Quem</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

