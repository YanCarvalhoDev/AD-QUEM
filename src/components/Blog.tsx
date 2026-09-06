import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Clock,
} from "lucide-react";
import type { ImageMetadata } from "astro";

interface KeystaticPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  // image: string;
  image: ImageMetadata | null;
}

interface BlogProps {
  postsDoKeystatic?: KeystaticPost[];
  categoriasDoKeystatic?: string[];
}

export default function Blog({
  postsDoKeystatic = [],
  categoriasDoKeystatic = ["Todos"],
}: BlogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filtro resiliente
  const filteredPosts = useMemo(() => {
    return postsDoKeystatic.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todos" ||
        post.category.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, postsDoKeystatic]);

  // Paginação
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatarDataBR = (dataString: string) => {
    try {
      return new Date(dataString).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dataString;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E6F4F6] text-black">
      {/* Hero Section */}
      <section className="bg-[#002B30] pt-28 pb-24 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A880]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <span className="text-[#C5A880] font-mono text-xs tracking-[0.3em] uppercase mb-6 block font-bold">
            Conhecimento
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
            Ideias que transformam
            <br />
            <span className="text-[#C5A880] italic font-normal font-serif">
              o mercado jurídico
            </span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-wide">
            Conteúdo produzido por profissionais que acompanham as mudanças que
            estão redefinindo o mercado jurídico.
          </p>
        </div>
      </section>

      {/* Filtros Dinâmicos */}
      <section className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm shadow-gray-50/50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
              {categoriasDoKeystatic.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                    selectedCategory.trim().toLowerCase() ===
                    category.trim().toLowerCase()
                      ? "bg-[#002B30] text-white shadow-md shadow-teal-950/10"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#002B30]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative min-w-[280px] lg:min-w-[340px]">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-gray-50 text-[#002B30] pl-12 pr-6 py-3 rounded-full border border-gray-100 focus:outline-none focus:border-[#C5A880] focus:bg-white text-sm transition-all placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-20 pt-20 pb-32">
        {currentPosts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-100 rounded-[32px]">
            <p className="text-gray-400 font-medium">
              Nenhum artigo encontrado para os critérios selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            <AnimatePresence mode="popLayout">
              {currentPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col justify-between"
                >
                  <a href={`/blog/${post.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-8 border border-gray-100 shadow-sm bg-gray-50">
                      {post.image && (
                        <img
                          src={post.image?.src}
                          width={post.image?.width}
                          height={post.image?.height}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002B30]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-[#002B30] uppercase tracking-widest shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[12px] text-gray-400 font-medium tracking-wide">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {formatarDataBR(post.date)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-[#002B30] leading-tight group-hover:text-[#C5A880] transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="text-[15px] text-gray-500 line-clamp-3 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                    </div>
                  </a>

                  <div className="pt-6 mt-6 flex items-center justify-between border-t border-gray-50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#005F6B]/10 flex items-center justify-center text-[#005F6B] shrink-0">
                        <User size={14} />
                      </div>
                      <span className="text-[13px] font-bold text-[#002B30] tracking-tight">
                        {post.author}
                      </span>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-[13px] font-bold text-[#002B30] group-hover:text-[#C5A880] transition-all transform group-hover:translate-x-1"
                    >
                      <span>Ler mais</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-24 border-t border-gray-100 pt-8">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-100 text-[#002B30] hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
              <ArrowLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${
                  currentPage === i + 1
                    ? "bg-[#002B30] text-white shadow-md shadow-teal-950/10"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-100 text-[#002B30] hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter - Corrigida contra avisos do Chrome */}
      {/* <section className="bg-[#001F22] py-24 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C5A880]/2 blur-[100px] rounded-full pointer-events-none translate-y-1/2"></div>
        <div className="container mx-auto max-w-2xl relative z-10">
          <span className="text-[#C5A880] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">
            Newsletter Privativa
          </span>
          <h2 className="text-4xl lg:text-5xl font-sans font-bold text-white mb-8">
            Receba briefings de{" "}
            <span className="text-[#C5A880] italic font-serif font-normal">
              engenharia digital
            </span>{" "}
            diretamente.
          </h2>
          <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
            Briefings técnicos semanais sobre segurança, engenharia de
            performance e arquiteturas digitais exclusivas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              id="email-newsletter"
              name="email"
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-white/5 border border-white/10 rounded-full py-4 px-8 text-white focus:outline-none focus:border-[#C5A880] transition-all placeholder:text-white/20 text-sm font-medium"
            />
            <button className="bg-[#C5A880] text-[#002B30] px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl shadow-teal-950/20 text-sm whitespace-nowrap">
              Inscrever
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
