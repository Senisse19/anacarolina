"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import feedbackAmanda from "@/assets/feedback-amanda-becker.jpg";
import feedbackLuana from "@/assets/feedback-luana.jpg";
import feedbackBeatriz from "@/assets/feedback-beatriz.jpg";
import feedbackAndriolli from "@/assets/feedback-andriolli.jpg";
import feedbackTovi from "@/assets/feedback-tovi.jpg";

const SLIDE_DURATION = 4000;

const feedbacks = [
  { image: feedbackAmanda, alt: "Feedback Amanda Becker" },
  { image: feedbackLuana, alt: "Feedback Luana" },
  { image: feedbackBeatriz, alt: "Feedback Beatriz MKT" },
  { image: feedbackAndriolli, alt: "Feedback Andriolli" },
  { image: feedbackTovi, alt: "Feedback Professor Tovi" },
];

const clients = [
  { name: "@dra_amandatavares", url: "https://www.instagram.com/dra_amandatavares?igsh=MWQyYTI0YWVucnlsYg==" },
  { name: "@amandamertzadv", url: "https://www.instagram.com/amandamertzadv?igsh=MW11d2NnNTRsYm8ydQ==" },
  { name: "@amandabecker.psicopedagoga", url: "https://www.instagram.com/amandabecker.psicopedagoga?igsh=MWl0a2U3ZzdiZjFrbQ==" },
  { name: "@locallelanches", url: "https://www.instagram.com/locallelanches?igsh=aTA2aGZ3aXV4OTV6" },
  { name: "@drabeatriz.med", url: "https://www.instagram.com/drabeatriz.med?igsh=ZzRlcGtjYjRrc3Bm" },
  { name: "@luana.negron", url: "https://www.instagram.com/luana.negron?igsh=NnR0OGx1cDV3enkw" },
  { name: "@bethinaendler", url: "https://www.instagram.com/bethinaendler" },
];

const ResultsSection = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeAnimRef = useRef<number | null>(null);
  const marqueeX = useRef(0);

  const goTo = (index: number) => {
    setCurrentFeedback(index);
    setProgressKey((k) => k + 1);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, SLIDE_DURATION);
  };

  const advance = () => {
    setCurrentFeedback((prev) => {
      const next = (prev + 1) % feedbacks.length;
      return next;
    });
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(advance, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

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

  const prev = () => goTo((currentFeedback - 1 + feedbacks.length) % feedbacks.length);
  const next = () => goTo((currentFeedback + 1) % feedbacks.length);

  return (
    <section id="resultados" className="section-padding bg-card" ref={sectionRef}>
      <div className="container-wide space-y-16">

        {/* Cabeçalho */}
        <div className={`max-w-2xl mx-auto text-center space-y-4 reveal ${isVisible ? "in-view" : ""}`}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
            Provas sociais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Resultados Reais que{" "}
            <span className="text-gradient">Falam por Si</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Confira o impacto do nosso trabalho em diferentes negócios
          </p>
        </div>

        {/* Carousel de feedbacks */}
        <div className={`max-w-3xl mx-auto reveal-scale delay-200 ${isVisible ? "in-view" : ""}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-background">
            {/* Imagens sobrepostas com fade */}
            <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentFeedback ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={feedback.image}
                    alt={feedback.alt}
                    className="w-full h-full object-contain bg-background"
                    fill={false}
                    width={900}
                    height={520}
                  />
                </div>
              ))}

              {/* Setas de navegação */}
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-all duration-200 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-all duration-200 z-10"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Barra de progresso e indicadores */}
            <div className="px-6 pb-5 pt-4 bg-background space-y-3">
              {/* Progress bar */}
              <div className="w-full h-0.5 bg-muted rounded-full overflow-hidden">
                <div
                  key={progressKey}
                  className="h-full bg-accent rounded-full"
                  style={{
                    animation: `progress-fill ${SLIDE_DURATION}ms linear forwards`,
                  }}
                />
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2">
                {feedbacks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    aria-label={`Slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentFeedback
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clientes — Marquee automático */}
        <div className={`space-y-6 reveal delay-300 ${isVisible ? "in-view" : ""}`}>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-primary text-center">
            Clientes que Confiam no Nosso Trabalho
          </h3>

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
