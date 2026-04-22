"use client";
import { Instagram, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@anacarolinadomarketing",
    url: "https://www.instagram.com/anacarolinadomarketing/",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    handle: "@anacarolinaamkt",
    url: "https://www.tiktok.com/@anacarolinaamkt",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Ana Carolina Tavares",
    url: "https://www.linkedin.com/in/ana-carolina-tavares-marketing/",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-foreground text-background">
      {/* Separador de onda SVG */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="w-full h-14 fill-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,56 C360,0 1080,0 1440,56 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container-wide pt-20 pb-10 space-y-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Marca */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="inline-block">
              <h3 className="font-display text-xl font-bold text-background">
                Ana Carolina Tavares
              </h3>
            </button>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Estrategista digital especializada em transformar Instagram em
              ferramentas de vendas e autoridade.
            </p>
            <div className="flex items-center gap-1.5 justify-center md:justify-start text-background/50 text-xs">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Porto Alegre, RS</span>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-widest uppercase text-background/40">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {["Social media", "Tráfego pago", "Mentoria"].map((s) => (
                <li key={s}>
                  <span className="text-background/70 text-sm hover:text-background transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-widest uppercase text-background/40">
              Redes sociais
            </h4>
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, handle, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 justify-center md:justify-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Icon className="w-4 h-4 text-background/70 group-hover:text-background transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-background/40 leading-none">{label}</div>
                    <div className="text-sm text-background/70 group-hover:text-background transition-colors font-medium flex items-center gap-1">
                      {handle}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisória + Copyright */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">
            © 2026 Ana Carolina Tavares. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors group"
          >
            <svg
              className="w-4 h-4 text-background/60 group-hover:text-background group-hover:-translate-y-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
