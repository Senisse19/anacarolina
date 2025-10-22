import { Target, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SolutionsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const solutions = [
    {
      icon: Target,
      title: "Posicionamento de Marca",
      description: "Transformo seu perfil em uma vitrine fiel da sua marca, destacando sua autenticidade e autoridade para que você seja reconhecido como um profissional diferenciado."
    },
    {
      icon: Users,
      title: "Atração de Clientes Qualificados",
      description: "Com uma estratégia personalizada e anúncios direcionados, atraio potenciais clientes que realmente se identificam com seus serviços e valores, transformando seu perfil em um canal de vendas."
    },
    {
      icon: Clock,
      title: "Devolvo o seu Tempo",
      description: "Enquanto você se dedica ao seu negócio, nós cuidamos de toda a sua presença digital, desde o planejamento e criação de conteúdo até a postagem. Assumo o trabalho pesado para que você tenha tranquilidade."
    }
  ];

  return (
    <section id="solucoes" className="py-12 sm:py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Como eu posso transformar{" "}
            <span className="text-gradient">o seu negócio?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofereço soluções completas para elevar sua presença digital e gerar resultados reais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`bg-card p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll text-center ${index === 1 ? 'animate-on-scroll-delay' : index === 2 ? 'animate-on-scroll-delay-2' : ''} ${isVisible ? 'in-view' : ''}`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                  <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">
                    {solution.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;