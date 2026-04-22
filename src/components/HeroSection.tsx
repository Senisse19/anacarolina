"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import anaHero from "@/assets/ana-hero.jpg";
import { ArrowRight, Instagram, TrendingUp, Linkedin, ChevronDown } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

const HeroSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  // Contadores — versões separadas para mobile e desktop (refs distintos)
  const { count: clientCountM, ref: clientRefM } = useCounter(150, 1800);
  const { count: yearCountM, ref: yearRefM } = useCounter(3, 1200);
  const { count: clientCountD, ref: clientRefD } = useCounter(150, 1800);
  const { count: yearCountD, ref: yearRefD } = useCounter(3, 1200);

  const scrollDown = () => {
    document.getElementById("sobre-mim")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient relative overflow-hidden" ref={sectionRef}>
      {/* Decoração de fundo */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-0 animate-float-slow" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/40 rounded-full blur-2xl -z-0" />

      {/* ── MOBILE: Zona 1 — acima do fold ── */}
      <div
        className="lg:hidden flex flex-col"
        style={{ minHeight: "100svh", paddingTop: 72, paddingBottom: 24 }}
      >
        <div className="container-wide flex-1 flex flex-col justify-start">
          <div className={`space-y-6 text-center reveal ${isVisible ? "in-view" : ""}`}>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
                Seu Instagram não precisa de mais posts.
                <br />
                <span className="text-gradient">Precisa de direção.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seja para entregar a gestão completa do seu Instagram ou aprender as estratégias
                que aplico nos bastidores — o objetivo é o mesmo: construir um perfil que conecta,
                fortalece sua autoridade e transforma seguidores em clientes.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <Button
                variant="hero"
                size="lg"
                className="group btn-shimmer rounded-full font-semibold gap-2 px-7"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20gestão%20de%20Instagram%20e%20solicitar%20um%20orçamento.", "_blank")}
              >
                Solicitar orçamento
                <TrendingUp className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full font-semibold gap-2 px-7 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20tenho%20interesse%20na%20sua%20mentoria%20e%20gostaria%20de%20mais%20informações.", "_blank")}
              >
                Quero aprender com você
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Indicador de scroll — fixado ao fim da zona 1 */}
        <div className="container-wide flex justify-center pt-6">
          <button
            onClick={scrollDown}
            aria-label="Rolar para baixo"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              Saiba mais
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce-chevron" />
          </button>
        </div>
      </div>

      {/* ── MOBILE: Zona 2 — abaixo do fold ── */}
      <div className="lg:hidden container-wide pt-14 pb-20">
        <div className={`space-y-10 text-center reveal ${isVisible ? "in-view" : ""}`}>

          {/* Métricas */}
          <div className="flex flex-wrap items-center gap-8 justify-center">
            <div className="text-center">
              <div
                className="text-3xl font-display font-bold text-primary"
                ref={clientRefM as React.RefObject<HTMLDivElement>}
              >
                {clientCountM}+
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">
                Clientes atendidos
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div
                className="text-3xl font-display font-bold text-primary"
                ref={yearRefM as React.RefObject<HTMLDivElement>}
              >
                {yearCountM}+
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">
                Anos de experiência
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">
                Dedicação ao cliente
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-3 justify-center">
            <span className="text-xs text-muted-foreground font-medium">Me encontre:</span>
            {[
              { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/anacarolinadomarketing/", label: "Instagram" },
              { icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/ana-carolina-tavares-marketing/", label: "LinkedIn" },
              { icon: <TikTokIcon className="w-4 h-4" />, url: "https://www.tiktok.com/@anacarolinaamkt", label: "TikTok" },
            ].map(({ icon, url, label }) => (
              <button
                key={url}
                onClick={() => window.open(url, "_blank")}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/80 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Imagem */}
          <div className={`relative mt-6 reveal-right delay-200 ${isVisible ? "in-view" : ""}`}>
            <div className="absolute -top-4 -left-4 z-20 animate-float">
              <div className="bg-white rounded-2xl shadow-elegant px-4 py-3 flex items-center gap-3 border border-border">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">150+ clientes</div>
                  <div className="text-[10px] text-muted-foreground">atendidos com sucesso</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 z-20 animate-float-slow">
              <div className="bg-primary text-primary-foreground rounded-2xl shadow-elegant px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold">Resultados reais</div>
                  <div className="text-[10px] text-primary-foreground/80">estratégias comprovadas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl transform rotate-3 scale-[1.02]" />
              <Image
                src={anaHero}
                alt="Ana Carolina Tavares — Estrategista Digital"
                className="relative z-10 w-full h-auto rounded-2xl shadow-elegant object-cover"
                priority
              />
              <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: Layout completo em grid ── */}
      <div
        className="hidden lg:flex container-wide relative z-10 min-h-screen items-center"
        style={{ paddingTop: 112, paddingBottom: 112 }}
      >
        <div className="grid grid-cols-[1fr_0.8fr] gap-16 items-center w-full">

          {/* Coluna de texto */}
          <div className={`space-y-8 text-left reveal ${isVisible ? "in-view" : ""}`}>
            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                Seu Instagram não precisa de mais posts.
                <br />
                <span className="text-gradient">Precisa de direção.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Seja para entregar a gestão completa do seu Instagram ou aprender as estratégias
                que aplico nos bastidores — o objetivo é o mesmo: construir um perfil que conecta,
                fortalece sua autoridade e transforma seguidores em clientes.
              </p>
            </div>

            <div className="flex sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                className="group btn-shimmer rounded-full font-semibold gap-2 px-7"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20gestão%20de%20Instagram%20e%20solicitar%20um%20orçamento.", "_blank")}
              >
                Solicitar orçamento
                <TrendingUp className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full font-semibold gap-2 px-7 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20tenho%20interesse%20na%20sua%20mentoria%20e%20gostaria%20de%20mais%20informações.", "_blank")}
              >
                Quero aprender com você
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Métricas */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <div
                  className="text-3xl font-display font-bold text-primary"
                  ref={clientRefD as React.RefObject<HTMLDivElement>}
                >
                  {clientCountD}+
                </div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">
                  Clientes atendidos
                </div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div
                  className="text-3xl font-display font-bold text-primary"
                  ref={yearRefD as React.RefObject<HTMLDivElement>}
                >
                  {yearCountD}+
                </div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">
                  Anos de experiência
                </div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-3xl font-display font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">
                  Dedicação ao cliente
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground font-medium">Me encontre:</span>
              {[
                { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/anacarolinadomarketing/", label: "Instagram" },
                { icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/ana-carolina-tavares-marketing/", label: "LinkedIn" },
                { icon: <TikTokIcon className="w-4 h-4" />, url: "https://www.tiktok.com/@anacarolinaamkt", label: "TikTok" },
              ].map(({ icon, url, label }) => (
                <button
                  key={url}
                  onClick={() => window.open(url, "_blank")}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/80 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className={`relative reveal-right delay-200 ${isVisible ? "in-view" : ""}`}>
            <div className="absolute -top-6 -left-6 z-20 animate-float">
              <div className="bg-white rounded-2xl shadow-elegant px-4 py-3 flex items-center gap-3 border border-border">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">150+ clientes</div>
                  <div className="text-[10px] text-muted-foreground">atendidos com sucesso</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-20 animate-float-slow">
              <div className="bg-primary text-primary-foreground rounded-2xl shadow-elegant px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold">Resultados reais</div>
                  <div className="text-[10px] text-primary-foreground/80">estratégias comprovadas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl transform rotate-3 scale-[1.02]" />
              <Image
                src={anaHero}
                alt="Ana Carolina Tavares — Estrategista Digital"
                className="relative z-10 w-full h-auto rounded-3xl shadow-elegant object-cover"
                priority
              />
              <div className="absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/20" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollDown}
            aria-label="Rolar para baixo"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              Saiba mais
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce-chevron" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
