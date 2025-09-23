import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Sparkles className="w-12 h-12 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Pronto para levar seu negócio{" "}
              <span className="text-gradient">para o próximo nível?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Seja para gerenciar completamente sua presença digital ou para aprender 
              minhas estratégias, estou aqui para ajudar você a alcançar seus objetivos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="group w-full sm:w-auto"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text&type=phone_number&app_absent=0', '_blank')}
            >
              Solicitar Orçamento
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="cta" 
              size="lg"
              className="group w-full sm:w-auto"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text&type=phone_number&app_absent=0', '_blank')}
            >
              Quero Aprender com Você
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            <p>✨ Resposta em até 24 horas • Consultoria personalizada • Resultados garantidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;