import { Button } from "@/components/ui/button";
import anaHero from "@/assets/ana-hero.jpg";
import { ArrowRight, Instagram, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Sua presença digital nas mãos de uma{" "}
                <span className="text-gradient">especialista</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-primary">
                Eu transformo seu Instagram em uma máquina de vendas e autoridade.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chega de postar sem resultados. Com estratégias que unem criatividade, 
                storytelling e performance, eu atraio os clientes certos para o seu negócio 
                enquanto você foca no que realmente importa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text&type=phone_number&app_absent=0', '_blank')}
              >
                Solicitar Orçamento
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="cta" 
                size="lg"
                className="group"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text&type=phone_number&app_absent=0', '_blank')}
              >
                Quero Aprender com Você
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>+150 clientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Foco no mercado brasileiro</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={anaHero} 
                alt="Ana Carolina Tavares - Estrategista Digital"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;