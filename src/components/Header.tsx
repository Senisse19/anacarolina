"use client";
import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Sobre", id: "sobre-mim" },
  { label: "Soluções", id: "solucoes" },
  { label: "Resultados", id: "resultados" },
  { label: "Serviços", id: "servicos" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detecta scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta seção ativa via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setIsMenuOpen(false); }
  };

  const openWhatsApp = () =>
    window.open(
      "https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20gostaria%20de%20solicitar%20um%20orçamento.",
      "_blank"
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? "bg-background/98 backdrop-blur-md shadow-[0_2px_20px_hsl(25_35%_25%/0.08)] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <span className="font-display text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
              Ana Carolina
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground font-medium tracking-wide">
              Estrategista digital
            </span>
          </button>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {/* Indicador de seção ativa */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              onClick={openWhatsApp}
              className="btn-shimmer gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 font-medium"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Solicitar orçamento
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu mobile — slide suave */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-border flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <Button onClick={openWhatsApp} className="w-full rounded-full btn-shimmer" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Solicitar orçamento
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
