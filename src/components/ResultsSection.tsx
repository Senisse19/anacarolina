import { Star, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResultsSection = () => {
  const cases = [
    { name: "@dra_amandatavares", type: "Estética", url: "https://www.instagram.com/dra_amandatavares?igsh=MWQyYTI0YWVucnlsYg==" },
    { name: "@amandamertzadv", type: "Advogada", url: "https://www.instagram.com/amandamertzadv?igsh=MW11d2NnNTRsYm8ydQ==" },
    { name: "@amandabecker.psicopedagoga", type: "Psicopedagoga", url: "https://www.instagram.com/amandabecker.psicopedagoga?igsh=MWl0a2U3ZzdiZjFrbQ==" },
    { name: "@locallelanches", type: "Lancheria", url: "https://www.instagram.com/locallelanches?igsh=aTA2aGZ3aXV4OTV6" },
    { name: "@drabeatriz.med", type: "Médica Nutricionista", url: "https://www.instagram.com/drabeatriz.med?igsh=ZzRlcGtjYjRrc3Bm" },
    { name: "@luana.negron", type: "Massoterapeuta", url: "https://www.instagram.com/luana.negron?igsh=NnR0OGx1cDV3enkw" },
    { name: "@bethinaendler", type: "Fotógrafa", url: "https://www.instagram.com/bethinaendler" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Resultados Reais que{" "}
            <span className="text-gradient">Falam por Si</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira o impacto do nosso trabalho em diferentes negócios
          </p>
        </div>

        {/* Testimonial */}
        <div className="bg-background p-8 rounded-2xl shadow-elegant mb-12 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <blockquote className="mt-4 text-lg text-muted-foreground italic leading-relaxed">
            "eu já havia trabalhado com 3 agências antes que fizeram um trabalho muito robotizado, 
            sem essa pegada de contar minha história, ter minha personalidade. acho que você pegou 
            a essência muito bem, obrigada!"
          </blockquote>
          <cite className="mt-4 block text-sm font-semibold text-primary">
            @dra.mariaeduardaw
          </cite>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((case_item, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <div>
                    <div className="font-semibold text-primary">{case_item.name}</div>
                    <div className="text-sm text-muted-foreground">{case_item.type}</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => window.open(case_item.url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="h-24 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Perfil do Instagram</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;