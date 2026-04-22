"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, TrendingUp, Star, Clock, MessageCircle } from "lucide-react";

const CTASection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="contato"
      className="relative section-padding overflow-hidden bg-primary"
      ref={sectionRef}
    >
      {/* Decoração de fundo orgânica */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl -z-0" />

      {/* Padrão de pontos sutil */}
      <div
        className="absolute inset-0 -z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-10 reveal ${isVisible ? "in-view" : ""}`}>

          {/* Ícone animado */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground fill-primary-foreground/60" />
              </div>
              {/* Anel pulsando */}
              <div className="absolute inset-0 w-16 h-16 rounded-2xl border border-primary-foreground/20 animate-ping-slow" />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Pronto para levar seu negócio{" "}
              <span className="text-accent">para o próximo nível?</span>
            </h2>
            <p className="text-base sm:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
              Seja para gerenciar completamente sua presença digital ou para aprender
              minhas estratégias — estou aqui para ajudar você a alcançar seus objetivos.
            </p>
          </div>

          {/* Garantias */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: Clock, text: "Resposta em até 24h" },
              { icon: MessageCircle, text: "Consultoria personalizada" },
              { icon: Star, text: "Atendimento premium" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primário — Orçamento */}
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20gestão%20de%20Instagram%20e%20solicitar%20um%20orçamento.", "_blank")}
              className="group relative btn-shimmer w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-foreground text-primary rounded-full font-semibold px-8 py-4 text-base hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_25%_97%/0.2)] hover:scale-[1.02]"
            >
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Solicitar orçamento
            </button>

            {/* Secundário — Mentoria */}
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=555192319521&text=Olá%20Ana%2C%20tenho%20interesse%20na%20sua%20mentoria%20e%20gostaria%20de%20mais%20informações.", "_blank")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground rounded-full font-semibold px-8 py-4 text-base hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all duration-300"
            >
              Quero aprender com você
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
