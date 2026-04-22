"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import Image from "next/image";
import anaAbout from "@/assets/ana-about.jpg";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 150 clientes atendidos desde 2022",
  "Agência com equipe de design, tráfego e vídeo",
  "Estratégias de storytelling e performance",
  "Mentoria para profissionais de marketing",
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { count: clientCount, ref: clientRef } = useCounter(150, 1800);
  const { count: segCount, ref: segRef } = useCounter(20, 1500);

  return (
    <section id="sobre-mim" className="section-padding bg-card wave-separator" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagem */}
          <div className={`relative reveal-left ${isVisible ? "in-view" : ""}`}>
            {/* Decoração geométrica de fundo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/60 to-accent/10 rounded-3xl -z-10" />

            <Image
              src={anaAbout}
              alt="Ana Carolina Tavares"
              className="w-full h-auto rounded-2xl shadow-elegant object-cover relative z-10"
            />

            {/* Card flutuante de stats */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-20 bg-white rounded-2xl shadow-elegant p-5 border border-border animate-float">
              <div className="flex gap-6">
                <div className="text-center">
                  <div
                    className="text-2xl font-display font-bold text-primary"
                    ref={clientRef as React.RefObject<HTMLDivElement>}
                  >
                    {clientCount}+
                  </div>
                  <div className="text-[11px] text-muted-foreground font-medium">Clientes</div>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <div
                    className="text-2xl font-display font-bold text-primary"
                    ref={segRef as React.RefObject<HTMLDivElement>}
                  >
                    {segCount}+
                  </div>
                  <div className="text-[11px] text-muted-foreground font-medium">Segmentos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className={`space-y-8 text-center lg:text-left reveal-right delay-200 ${isVisible ? "in-view" : ""}`}>
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
                Sobre mim
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight mt-4">
                Prazer, me chamo{" "}
                <span className="text-gradient">Ana Carolina</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Fiz meu primeiro post como Social Media em Fevereiro de 2022 e desde então
                já atendi mais de 150 clientes de diversos segmentos.
              </p>
              <p>
                Hoje, lidero uma agência de marketing com um time de profissionais de edição
                de vídeo, tráfego pago e design. Juntos, criamos estratégias completas que
                unem criatividade, storytelling e performance.
              </p>
            </div>

            {/* Lista de destaques */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-sm text-foreground reveal delay-${(i + 2) * 100} ${isVisible ? "in-view" : ""}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
