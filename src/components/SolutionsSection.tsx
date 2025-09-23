import { Target, Users, Clock } from "lucide-react";

const SolutionsSection = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Como eu posso transformar{" "}
            <span className="text-gradient">o seu negócio?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofereço soluções completas para elevar sua presença digital e gerar resultados reais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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