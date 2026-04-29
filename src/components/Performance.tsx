import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  Shield,
  Search,
  ArrowRight,
  Activity,
  BarChart3,
  Globe,
  Loader2,
  AlertCircle,
} from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

interface PageSpeedMetrics {
  score: number;
  lcp: string;
  tbt: string;
  cls: string;
  fcp: string;
  speedIndex: string;
  tti: string;
  firstInputDelay?: string;
}

interface AuditResult {
  mobile: PageSpeedMetrics;
  desktop: PageSpeedMetrics;
  url: string;
}

const AUDIT_STEPS = [
  "Iniciando conexão com Google PageSpeed API...",
  "Analisando renderização e performance...",
  "Calculando Core Web Vitals (LCP, TBT, CLS)...",
  "Avaliando tempo de resposta do servidor...",
  "Finalizando diagnóstico de autoridade digital...",
];

const fetchPageSpeedData = async (
  url: string,
  onProgress: (step: number) => void,
): Promise<AuditResult> => {
  let formattedUrl = url.trim();
  if (!formattedUrl.startsWith("http")) {
    formattedUrl = `https://${formattedUrl}`;
  }

  const apiKey = import.meta.env.VITE_PAGESPEED_API_KEY;

  onProgress(0);

  try {
    onProgress(1);
    let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(formattedUrl)}&strategy=mobile&category=performance`;

    if (apiKey) {
      apiUrl += `&key=${apiKey}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error?.message?.includes("Quota exceeded")) {
        throw new Error(
          "Limite de requisições do Google atingido. Por favor, configure uma API Key nas configurações do projeto para continuar.",
        );
      }
      throw new Error(errorData.error?.message || `Falha na API`);
    }

    const data = await response.json();

    if (data.lighthouseResult?.runtimeError) {
      const errorCode = data.lighthouseResult.runtimeError.code;
      const errorMessage = data.lighthouseResult.runtimeError.message;

      if (errorCode === "FAILED_DOCUMENT_REQUEST") {
        throw new Error(
          "Não foi possível acessar o site. Verifique se a URL está correta e se o site está online.",
        );
      }
      if (errorCode === "DNS_FAILURE") {
        throw new Error(
          "Erro de DNS: Não foi possível encontrar o servidor para esta URL.",
        );
      }
      if (errorMessage?.includes("Something went wrong")) {
        throw new Error(
          "O Google PageSpeed encontrou um erro interno ao analisar seu site. Isso geralmente acontece se o site estiver bloqueando o acesso do Lighthouse ou se houver muitos redirecionamentos.",
        );
      }
      throw new Error(
        `Erro do Lighthouse: ${errorMessage || "Ocorreu um problema ao analisar a página."}`,
      );
    }

    const lighthouse = data.lighthouseResult;

    if (!lighthouse || !lighthouse.categories?.performance) {
      throw new Error(
        "O Google PageSpeed não conseguiu gerar um relatório de performance para este site no momento.",
      );
    }

    onProgress(2);
    onProgress(3);

    const metrics = {
      score: Math.round(lighthouse.categories.performance.score * 100),
      lcp: lighthouse.audits["largest-contentful-paint"]?.displayValue || "N/A",
      tbt: lighthouse.audits["total-blocking-time"]?.displayValue || "N/A",
      cls: lighthouse.audits["cumulative-layout-shift"]?.displayValue || "N/A",
      fcp: lighthouse.audits["first-contentful-paint"]?.displayValue || "N/A",
      speedIndex: lighthouse.audits["speed-index"]?.displayValue || "N/A",
      tti: lighthouse.audits["interactive"]?.displayValue || "N/A",
    };

    onProgress(4);
    await new Promise((r) => setTimeout(r, 800)); // Final polish delay

    return {
      url: formattedUrl,
      mobile: metrics,
      desktop: metrics,
    };
  } catch (err) {
    console.error("PageSpeed Audit Error:", err);
    throw err instanceof Error
      ? err
      : new Error("Ocorreu um erro inesperado durante a auditoria.");
  }
};

export default function Performance() {
  const [urlInput, setUrlInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) return;

    setIsLoading(true);
    setCurrentStep(0);
    setError(null);
    setAuditResult(null);

    try {
      const data = await fetchPageSpeedData(urlInput, (step) =>
        setCurrentStep(step),
      );
      setAuditResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao processar auditoria.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      title: "Monitoramento em Tempo Real",
      desc: "Acompanhe a performance da sua banca com precisão.",
      icon: Activity,
    },
    {
      title: "Auditoria de Core Web Vitals",
      desc: "Análise profunda de LCP, FID e CLS.",
      icon: Zap,
    },
    {
      title: "Segurança de Dados Jurídicos",
      desc: "Auditoria completa de protocolos de segurança.",
      icon: Shield,
    },
    {
      title: "Análise de SEO Técnico",
      desc: "Verificação de indexação e arquitetura.",
      icon: Search,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-teal-deep lg:rounded-br-[120px]">
        <div className="absolute inset-0 z-0 text-left">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
            alt="Escritório jurídico moderno com design de alta performance e tecnologia integrada"
            className="w-full h-full object-cover opacity-40 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-teal-deep/85 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10 pt-20 text-left">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold-pale font-mono text-sm uppercase tracking-[0.3em] mb-6 block font-bold"
            >
              Engenharia de Performance
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-sans font-bold text-sandstone mb-8 leading-[1.1] tracking-tight text-white"
            >
              Real-Time <br />
              <span className="text-white/30">Performance Audit</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-sandstone/70 leading-relaxed max-w-2xl font-medium"
            >
              No mercado jurídico de elite, a velocidade é uma forma de
              autoridade. Nossa auditoria em tempo real garante que sua presença
              digital seja impecável.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Live Dashboard Simulation */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 text-left">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-teal-deep mb-8 tracking-wide text-[#002B36]">
                Visibilidade Total <br />
                <span className="text-[#00A3B1]">Sobre sua Infraestrutura</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#00A3B1] group-hover:bg-[#00A3B1] group-hover:text-white transition-all">
                    <BarChart3 size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-teal-deep mb-1 group-hover:text-[#00A3B1] transition-colors">
                      Métricas de Negócio
                    </h4>
                    <p className="text-gray-500">
                      Transformamos dados técnicos em insights estratégicos para
                      sua banca.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#00A3B1] group-hover:bg-[#00A3B1] group-hover:text-white transition-all">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-teal-deep mb-1 group-hover:text-[#00A3B1] transition-colors">
                      Alcance Global
                    </h4>
                    <p className="text-gray-500">
                      Monitoramento de latência em todos os continentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="bg-teal-deep rounded-[40px] p-8 lg:p-12 shadow-2xl relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-10">
                  <div className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">
                        Status do Sistema
                      </div>
                      <div className="text-2xl font-bold text-white">
                        Operacional
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">
                        Uptime
                      </div>
                      <div className="text-2xl font-bold text-emerald-500">
                        99.99%
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">
                        Latência Média
                      </div>
                      <div className="text-3xl font-bold text-white">42ms</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">
                        Padrão Arquiteto
                      </div>
                      <div className="text-3xl font-bold text-[#00A3B1]">
                        99+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Audit Tool */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-24 text-left">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-deep mb-8 text-[#002B36]">
              Auditoria de Performance Instantânea
            </h2>
            <p className="text-gray-600">
              Insira a URL da sua banca para uma análise técnica profunda.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <form
              onSubmit={handleAudit}
              className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  type="url"
                  placeholder="https://suabanca.com.br"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00A3B1]/20 focus:border-[#00A3B1] transition-all text-teal-deep font-medium"
                  required
                />
                {isLoading && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Loader2
                      className="animate-spin text-[#00A3B1]"
                      size={20}
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-teal-deep text-white font-bold rounded-2xl hover:bg-[#005F6B] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? "Analisando..." : "Executar Auditoria"}
                {!isLoading && <ArrowRight size={18} />}
              </button>
            </form>

            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-gray-50 rounded-3xl p-10 text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="absolute inset-0 border-4 border-[#00A3B1]/20 rounded-full" />
                    <motion.div
                      className="absolute inset-0 border-4 border-[#00A3B1] rounded-full border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-teal-deep font-bold text-lg mb-2"
                  >
                    {AUDIT_STEPS[currentStep]}
                  </motion.p>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-600 rounded-xl flex gap-3 mb-8"
                >
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium font-bold">{error}</p>
                </motion.div>
              )}
              {auditResult && !isLoading && (
                <div className="space-y-12">
                  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 max-w-2xl mx-auto text-left">
                    <div className="flex items-center gap-6 mb-10 text-left">
                      <div
                        className={`text-5xl font-black ${auditResult.mobile.score >= 90 ? "text-emerald-500" : auditResult.mobile.score >= 50 ? "text-amber-500" : "text-red-500"}`}
                      >
                        {auditResult.mobile.score}
                      </div>
                      <div className="text-sm text-gray-500 font-medium uppercase tracking-widest font-bold">
                        Performance Score
                      </div>
                    </div>
                    <div className="space-y-4">
                      <MetricRow label="LCP" value={auditResult.mobile.lcp} />
                      <MetricRow label="TBT" value={auditResult.mobile.tbt} />
                      <MetricRow label="CLS" value={auditResult.mobile.cls} />
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-24 text-left">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[#00A3B1] mb-6 group-hover:bg-[#00A3B1] group-hover:text-white transition-all">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-teal-deep mb-4 group-hover:text-[#00A3B1] transition-colors uppercase tracking-[0.2em] text-xs pb-1 border-b border-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="text-sm text-gray-500 font-medium font-bold uppercase tracking-widest">
        {label}
      </span>
      <span className="text-sm text-teal-deep font-bold">{value}</span>
    </div>
  );
}
