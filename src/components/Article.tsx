import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Printer,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


// Definição das interfaces para tipagem do Keystatic
interface Person {
  name: string;
  role: string;
  image: string;
}

interface ArticleProps {
  title: string;
  subtitle?: string;
  slug: string;
  readingTime: string;
  publishedDate: string;
  category?: string;
  content: React.ReactNode; // Ou string, caso use um renderizador de Markdown/HTML
  relatedPeople?: Person[];
  podcastText?: string;
}

export default function Article({
  title,
  subtitle,
  slug,
  readingTime,
  publishedDate,
  category = "INSIGHT",
  content,
  relatedPeople = [],
  podcastText,
}: ArticleProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: subtitle || title,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast("Artigo compartilhado com sucesso!");
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        showToast("Link copiado para a área de transferência!");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copiado para a área de transferência!");
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Artigo interessante: ${title}`);
    const body = encodeURIComponent(
      `Olá,\n\nRecomendo a leitura deste artigo:\n\n${window.location.href}\n\nAbraços.`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold-pale/30 text-black">
      <div className="no-print">
        <Header isDarkPage={true} />
      </div>

      <main className="pb-40">
        {/* Hero Section */}
        <div className="bg-teal-deep pt-48 pb-16 mb-20 relative overflow-hidden no-print">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-pale/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <nav className="flex items-center justify-between border-b border-white/15 pb-8">
              <Link
                to="/blog"
                className="flex items-center gap-2.5 text-white hover:text-gold-pale transition-colors group"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1.5 transition-transform"
                />
                <span className="text-[12px] font-bold uppercase tracking-[0.2em]">
                  Voltar para Insights
                </span>
              </Link>

              <div className="flex items-center gap-6">
                <button
                  className="text-white/60 hover:text-white transition-colors"
                  title="Compartilhar"
                  onClick={handleShare}
                >
                  <Share2 size={18} />
                </button>
                <button
                  className="text-white/60 hover:text-white transition-colors"
                  title="Enviar por E-mail"
                  onClick={handleEmail}
                >
                  <Mail size={18} />
                </button>
                <button
                  className="text-white/60 hover:text-white transition-colors"
                  title="Imprimir Artigo"
                  onClick={handlePrint}
                >
                  <Printer size={18} />
                </button>
                <div className="w-px h-4 bg-white/20" />
                <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                  {slug.toUpperCase()}
                </span>
              </div>
            </nav>
          </div>
        </div>

        <article className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Sidebar - Metadata Rail */}
            <aside className="lg:col-span-3 space-y-12">
              <div className="space-y-10">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 border-t border-gray-100 pt-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-2">
                      Tempo de Leitura
                    </h4>
                    <div className="flex items-center gap-2 text-teal-deep font-bold text-xs uppercase tracking-wider">
                      <Clock size={14} className="text-[#005F6B]" />
                      <span>{readingTime}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-2">
                      Publicado em
                    </h4>
                    <div className="flex items-center gap-2 text-teal-deep font-bold text-xs uppercase tracking-wider">
                      <Calendar size={14} className="text-[#005F6B]" />
                      <span>{publishedDate}</span>
                    </div>
                  </div>
                </div>

                {relatedPeople.length > 0 && (
                  <div className="border-t border-gray-100 pt-8">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-6">
                      Pessoas Relacionadas
                    </h4>
                    <div className="space-y-6">
                      {relatedPeople.map((person, i) => (
                        <div key={i} className="group cursor-pointer">
                          <div className="flex items-center gap-3.5">
                            <img
                              src={person.image}
                              alt={person.name}
                              className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all shadow-sm"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="text-xs font-bold text-teal-deep group-hover:text-gold-pale transition-colors">
                                {person.name}
                              </p>
                              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-light mt-0.5">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {podcastText && (
                <div className="pt-10 border-t border-gray-100">
                  <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100/50">
                    <span className="text-[9px] font-bold text-gold-pale uppercase tracking-[0.3em] mb-3 block">
                      Podcast Insight
                    </span>
                    <p className="text-[13px] text-teal-deep leading-relaxed mb-4 font-medium">
                      {podcastText}
                    </p>
                    <button className="text-[11px] font-bold text-teal-deep uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Ouvir agora <ArrowLeft size={12} className="rotate-180" />
                    </button>
                  </div>
                </div>
              )}
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-8 lg:col-offset-1">
              {/* Print-only header */}
              <div className="hidden print:block mb-10 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                  <span>ARCHIVE</span>
                  <span>{category}</span>
                </div>
                <div className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider font-light">
                  Publicado em: {publishedDate}
                </div>
              </div>

              <div className="mb-14">
                <span className="inline-block text-[10px] font-bold text-teal-deep uppercase tracking-[0.3em] mb-6 no-print">
                  {category}
                </span>
                <h1 className="text-5xl lg:text-[64px] font-sans font-bold text-teal-deep leading-[1.1] tracking-tight mb-12">
                  {title}
                </h1>

                {subtitle && (
                  <p className="text-lg lg:text-xl text-black leading-relaxed font-normal mb-8 border-b border-gray-100 pb-10">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Corpo do Artigo dinâmico injetado via Keystatic */}
              <div className="space-y-12 text-black text-lg leading-[1.8] [&_p]:text-black [&_p]:font-normal [&_p]:mb-10 [&_p]:leading-[1.8] [&_strong]:text-black [&_strong]:font-bold [&_h2]:text-teal-deep [&_h2]:font-sans [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:mt-20 [&_h2]:mb-10 [&_h2]:text-[calc(0.7211538462vw_+_21.6153846154px)]">
                {content}
              </div>

              {/* Print-only authors section */}
              {relatedPeople.length > 0 && (
                <div className="hidden print:block mt-16 pt-10 border-t border-gray-200">
                  <h3 className="text-xs font-bold text-teal-deep uppercase tracking-[0.25em] mb-8">
                    Autores do Artigo
                  </h3>
                  <div className="flex flex-row gap-12">
                    {relatedPeople.slice(0, 2).map((person, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-12 h-12 rounded-full object-cover grayscale"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-sm font-bold text-black">
                            {person.name}
                          </p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-light mt-0.5">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Print-only Website Call to Action */}
              <div className="hidden print:block mt-16 pt-10 border-t border-dotted border-gray-300 text-center">
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  Este artigo foi impresso a partir de nosso arquivo digital
                  oficial.
                </p>
                <p className="text-sm font-bold text-teal-deep mt-3 tracking-widest uppercase mb-1">
                  {window.location.host}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter / CTA Section */}
        <section className="container mx-auto px-6 lg:px-20 mt-40 no-print">
          <div className="bg-teal-deep text-white p-12 lg:p-24 rounded-[64px] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-pale/5 blur-[120px] rounded-full translate-x-1/2" />
            <div className="max-w-xl relative z-10">
              <h3 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                Interessado neste{" "}
                <span className="text-gold-pale italic">tema</span>?
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Assine nossos alertas mensais para receber análises profundas.
              </p>
            </div>
            <div className="w-full lg:w-auto relative z-10">
              <button className="w-full lg:w-auto bg-gold-pale text-teal-deep px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all shadow-2xl">
                Assinar Insight{" "}
                <ArrowLeft size={16} className="inline rotate-180 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className="no-print">
        <Header />
        <Footer />
      </div>

      {/* Custom styles for high-fidelity PDF print layout */}
      <style>{`
        @media print {
          @page {
            size: auto;
            margin: 0mm !important;
          }
          html, body, #root, .min-h-screen, main {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }
          body {
            padding: 2.2cm 2.2cm !important;
          }
          header, footer, nav, aside, section, .no-print, button, input, iframe, .origin-left, a[aria-label="Contato via WhatsApp"], a[href*="whatsapp"], a[href*="wa.me"] {
            display: none !important;
          }
          article {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
          }
          .grid {
            display: block !important;
          }
          .print\\:block {
            display: block !important;
          }
          h1 {
            font-size: 26pt !important;
            color: #000000 !important;
            margin-top: 10pt !important;
            margin-bottom: 24pt !important;
            line-height: 1.2 !important;
            font-weight: bold !important;
            page-break-after: avoid;
          }
          h2 {
            font-size: 16pt !important;
            color: #004d57 !important;
            margin-top: 24pt !important;
            margin-bottom: 12pt !important;
            font-weight: bold !important;
            page-break-after: avoid;
            page-break-inside: avoid;
          }
          p {
            font-size: 11pt !important;
            color: #111111 !important;
            line-height: 1.6 !important;
            margin-bottom: 14pt !important;
            page-break-inside: avoid;
          }
          strong {
            color: #000000 !important;
            font-weight: bold !important;
          }
          li {
            font-size: 11pt !important;
            color: #111111 !important;
            line-height: 1.6 !important;
            margin-bottom: 8pt !important;
            page-break-inside: avoid;
          }
          ol {
            margin-bottom: 14pt !important;
            padding-left: 20pt !important;
          }
          img {
            filter: grayscale(100%) !important;
            max-width: 100% !important;
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* Floating Toast feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-[9999] bg-teal-deep border border-gold-pale/30 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold text-sm tracking-wide"
          >
            <div className="w-2 h-2 rounded-full bg-gold-pale animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
