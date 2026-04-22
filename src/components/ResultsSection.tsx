"use client";
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const clients = [
  { name: "@dra_amandatavares", url: "https://www.instagram.com/dra_amandatavares?igsh=MWQyYTI0YWVucnlsYg==" },
  { name: "@amandamertzadv", url: "https://www.instagram.com/amandamertzadv?igsh=MW11d2NnNTRsYm8ydQ==" },
  { name: "@drabeatriz.med", url: "https://www.instagram.com/drabeatriz.med?igsh=ZzRlcGtjYjRrc3Bm" },
  { name: "@bethinaendler", url: "https://www.instagram.com/bethinaendler" },
  { name: "@draraissaelias", url: "https://www.instagram.com/draraissaelias/" },
  { name: "@dravickvendramini", url: "https://www.instagram.com/dravickvendramini/" },
  { name: "@drabrunavargas", url: "https://www.instagram.com/drabrunavargas/" },
  { name: "@dra.mariaeduardaw", url: "https://www.instagram.com/dra.mariaeduardaw/" },
  { name: "@dra.marcellydesa", url: "https://www.instagram.com/dra.marcellydesa/" },
  { name: "@dra.mariajulia.andrade", url: "https://www.instagram.com/dra.mariajulia.andrade/" },
  { name: "@dra.cristianegoncalves", url: "https://www.instagram.com/dra.cristianegoncalves/" },
  { name: "@mundoverdeiguatemipoa", url: "https://www.instagram.com/mundoverdeiguatemipoa/" },
  { name: "@sabrasul", url: "https://www.instagram.com/sabrasul/" },
  { name: "@dr.rafaeldeyl", url: "https://www.instagram.com/dr.rafaeldeyl/" },
];

const ResultsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeAnimRef = useRef<number | null>(null);
  const marqueeX = useRef(0);

  useEffect(() => {
    const tick = () => {
      if (!marqueeRef.current) return;
      marqueeX.current += 1.4;
      const half = marqueeRef.current.scrollWidth / 2;
      if (marqueeX.current >= half) marqueeX.current -= half;
      marqueeRef.current.style.transform = `translateX(-${marqueeX.current}px)`;
      marqueeAnimRef.current = requestAnimationFrame(tick);
    };
    marqueeAnimRef.current = requestAnimationFrame(tick);
    return () => { if (marqueeAnimRef.current) cancelAnimationFrame(marqueeAnimRef.current); };
  }, []);

  return (
    <section id="resultados" className="section-padding bg-card" ref={sectionRef}>
      <div className="container-wide space-y-12">
        
        {/* Cabeçalho */}
        <div className={`max-w-3xl mx-auto text-center space-y-4 reveal ${isVisible ? "in-view" : ""}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Marcas e profissionais que{" "}
            <span className="text-gradient">confiam no nosso trabalho</span>
          </h2>
        </div>


        {/* Clientes — Marquee automático */}
        <div className={`reveal delay-300 ${isVisible ? "in-view" : ""}`}>
          {/* Faixa com marquee */}
          <div className="relative overflow-hidden">
            {/* Fade nas bordas */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10" />

            {/* Conteúdo duplicado para loop infinito */}
            <div ref={marqueeRef} className="flex" style={{ willChange: "transform" }}>
              {[...clients, ...clients].map((client, index) => (
                <button
                  key={index}
                  onClick={() => window.open(client.url, "_blank")}
                  className="group flex items-center gap-2 mx-3 px-5 py-3 bg-background rounded-xl border border-border/60 hover:border-accent/40 hover:bg-accent/5 hover:shadow-sm transition-all duration-300 shrink-0"
                >
                  <span className="text-sm text-primary font-medium whitespace-nowrap">{client.name}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
