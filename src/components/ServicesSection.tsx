"use client";
import Image from "next/image";
import { Smartphone, TrendingUp, Calendar, PenTool, Video, BarChart3, CheckCircle2, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import anaServices from "@/assets/ana-services-new.jpg";

const socialMediaServices = [
  { icon: PenTool, text: "Estudo de marca" },
  { icon: Calendar, text: "Planejamento de conteúdo mensal" },
  { icon: Smartphone, text: "Criação dos posts + legendas + design" },
  { icon: TrendingUp, text: "Estruturação do perfil" },
  { icon: Video, text: "Edição e orientação de Reels" },
  { icon: BarChart3, text: "Postagem direta no perfil" },
];

const ServicesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="servicos" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-wide space-y-20">

        {/* Cabeçalho */}
        <div className={`max-w-2xl mx-auto text-center space-y-4 reveal ${isVisible ? "in-view" : ""}`}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
            O que ofereço
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Nossos{" "}
            <span className="text-gradient">Serviços</span>
          </h2>
        </div>

        {/* Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lista de serviços */}
          <div className={`space-y-8 reveal-left delay-100 ${isVisible ? "in-view" : ""}`}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">Social Media</h3>
                {/* Tag mais popular */}
                <span className="flex items-center gap-1 bg-accent/20 text-accent text-[11px] font-bold tracking-wide uppercase rounded-full px-3 py-1 border border-accent/30">
                  <Zap className="w-3 h-3 fill-accent" />
                  Mais popular
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Um serviço completo que cuida de toda sua presença digital no Instagram,
                desde a estratégia até a execução.
              </p>
            </div>

            {/* Grid de itens interativos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialMediaServices.map((service, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-default reveal delay-${(index + 1) * 100} ${isVisible ? "in-view" : ""}`}
                >
                  <div className="w-8 h-8 bg-accent/15 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/25 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-foreground font-medium">{service.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card de valor */}
          <div className={`bg-gradient-to-br from-card to-secondary/30 p-8 sm:p-10 rounded-2xl shadow-elegant border border-border/50 reveal-right delay-300 ${isVisible ? "in-view" : ""}`}>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-xl font-bold text-primary">Estratégia Completa</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Desenvolvemos uma presença digital autêntica que conecta sua marca
                  com o público certo e gera resultados mensuráveis.
                </p>
              </div>
              <ul className="space-y-3">
                {["Conteúdo estratégico e consistente", "Identidade visual coesa", "Análise de métricas mensais"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tráfego Pago */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className={`relative order-2 lg:order-1 reveal-left delay-100 ${isVisible ? "in-view" : ""}`}>
            <div className="absolute -inset-4 bg-gradient-to-bl from-accent/10 to-secondary/40 rounded-3xl -z-10" />
            <Image
              src={anaServices}
              alt="Ana Carolina — Tráfego Pago"
              className="w-full h-auto rounded-2xl shadow-elegant relative z-10"
            />
          </div>

          {/* Texto */}
          <div className={`space-y-8 order-1 lg:order-2 reveal-right delay-200 ${isVisible ? "in-view" : ""}`}>
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">Tráfego Pago</h3>
              <p className="text-muted-foreground leading-relaxed">
                O tráfego pago é conduzido de forma estratégica e orientada por dados.
                Com gestão técnica do nosso especialista em performance digital, cada
                campanha é planejada com objetivos claros e segmentação criteriosa para
                garantir que seu investimento seja direcionado ao público certo.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: BarChart3, title: "Análise de Dados", desc: "Decisões baseadas em métricas reais" },
                { icon: TrendingUp, title: "Otimização Contínua", desc: "Ajustes constantes para melhor performance" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 sm:p-5 bg-card rounded-xl shadow-sm border border-border/50 hover:border-accent/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent/25 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
