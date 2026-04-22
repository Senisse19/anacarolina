"use client";
import { Target, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solutions = [
  {
    icon: Target,
    number: "01",
    title: "Posicionamento de Marca",
    description:
      "Transformo seu perfil em uma vitrine fiel da sua marca, destacando sua autenticidade e autoridade para que você seja reconhecido como um profissional diferenciado.",
    tag: "Estratégia",
  },
  {
    icon: Users,
    number: "02",
    title: "Atração de Clientes Qualificados",
    description:
      "Com estratégia personalizada e anúncios direcionados, atraio potenciais clientes que realmente se identificam com seus serviços e valores, transformando seu perfil em um canal de vendas.",
    tag: "Crescimento",
  },
  {
    icon: Clock,
    number: "03",
    title: "Devolvo o seu Tempo",
    description:
      "Enquanto você se dedica ao seu negócio, nós cuidamos de toda a sua presença digital, desde o planejamento e criação de conteúdo até a postagem. Assumo o trabalho pesado para que você tenha tranquilidade.",
    tag: "Resultado",
  },
];

const SolutionsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="solucoes" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-wide">
        {/* Cabeçalho */}
        <div className={`max-w-2xl mx-auto text-center space-y-4 mb-16 reveal ${isVisible ? "in-view" : ""}`}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
            Como posso ajudar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            Como eu posso{" "}
            <span className="text-gradient">transformar o seu negócio?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Soluções completas para elevar sua presença digital e gerar resultados reais
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative group bg-card rounded-2xl p-8 shadow-card card-interactive border border-border/50 overflow-hidden reveal ${
                index === 1 ? "delay-200" : index === 2 ? "delay-400" : ""
              } ${isVisible ? "in-view" : ""}`}
            >
              {/* Número decorativo de fundo */}
              <span className="absolute top-4 right-4 font-display text-7xl font-bold text-primary/5 select-none leading-none group-hover:text-primary/8 transition-colors duration-500">
                {solution.number}
              </span>

              {/* Ícone */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-secondary/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <solution.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Tag */}
              <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-accent mb-3">
                {solution.tag}
              </span>

              {/* Conteúdo */}
              <h3 className="font-display text-xl font-bold text-primary mb-3 leading-snug">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>

              {/* Borda decorativa na parte inferior que aparece no hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
