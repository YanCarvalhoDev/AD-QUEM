// import React from "react";
import { Mail } from "lucide-react";
import { CONTACT_LINKS, INTERNAL_LINKS } from "../links";

const Linkedin = ({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-teal-deep py-20 border-t border-gold-pale/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-3xl font-serif tracking-tight">
              <span className="text-gold-pale">A</span>D
              <span className="text-gold-pale">J</span>
            </div>
            <p className="text-sandstone/80 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Construímos a presença digital de bancas que se recusam a parecer
              genéricas.
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-pale/20 flex items-center justify-center hover:bg-gold-pale hover:text-teal-deep transition-all"
                aria-label="Siga-nos no LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={CONTACT_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-pale/20 flex items-center justify-center hover:bg-gold-pale hover:text-teal-deep transition-all"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_LINKS.email}`}
                className="w-10 h-10 rounded-full border border-gold-pale/20 flex items-center justify-center hover:bg-gold-pale hover:text-teal-deep transition-all"
                aria-label="Envie-nos um e-mail"
              >
                <Mail size={18} />
              </a>
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-pale/20 flex items-center justify-center hover:bg-gold-pale hover:text-teal-deep transition-all"
                aria-label="Fale conosco via WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_LINKS.jusbrasil}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-pale/20 flex items-center justify-center hover:bg-gold-pale hover:text-teal-deep transition-all"
                aria-label="Siga-nos no Jusbrasil"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://w3.org"
                >
                  <path d="M12 3.5L3.5 18.5H7.5L12 10.5L16.5 18.5H20.5L12 3.5Z" />
                  <path
                    opacity="0.5"
                    d="M12 3.5L9.5 7.5L12 12L14.5 7.5L12 3.5Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Links Institucionais">
            <h3 className="text-gold-pale uppercase tracking-widest text-xs font-bold mb-8">
              Institucional
            </h3>
            <ul className="space-y-4 text-sm text-sandstone/90">
              <li>
                <a href={`/${INTERNAL_LINKS.metodo}`} className="gold-hover">
                  Método
                </a>
              </li>
              {/* <li>
                <a href={`/${INTERNAL_LINKS.portfolio}`} className="gold-hover">
                  Portfólio
                </a>
              </li> */}
              <li>
                <a
                  href={`/${INTERNAL_LINKS.estrategia}`}
                  className="gold-hover"
                >
                  Arquitetura de Ativos
                </a>
              </li>
              <li>
                <a href={`/${INTERNAL_LINKS.founder}`} className="gold-hover">
                  Founder
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Informações de Contato">
            <h3 className="text-gold-pale uppercase tracking-widest text-xs font-bold mb-8">
              Contato
            </h3>
            <ul className="space-y-4 text-sm text-sandstone/90">
              <li>
                <a
                  href={`mailto:${CONTACT_LINKS.email}`}
                  className="gold-hover"
                >
                  {CONTACT_LINKS.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-hover"
                >
                  WhatsApp
                </a>
              </li>
              <li>Brasil</li>
            </ul>
          </nav>

          <nav aria-label="Links Legais">
            <h3 className="text-gold-pale uppercase tracking-widest text-xs font-bold mb-8">
              Legal
            </h3>
            <ul className="space-y-4 text-sm text-sandstone/90">
              <li>
                <a href={INTERNAL_LINKS.privacidade} className="gold-hover">
                  Privacidade
                </a>
              </li>
              <li>
                <a href={INTERNAL_LINKS.termos} className="gold-hover">
                  Termos de Uso
                </a>
              </li>
              {/* <li>
                <span className="opacity-80">Compliance OAB</span>
              </li>
              <li>
                <span className="opacity-80">Segurança</span>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-gold-pale/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-sandstone/70 font-bold">
            © 2026 AD QUEM. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-sandstone/70 font-bold">
            Desenvolvido com Precisão Algorítmica.
          </p>
        </div>
      </div>
    </footer>
  );
}
