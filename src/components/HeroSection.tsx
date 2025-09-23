import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import anaHero from "@/assets/ana-hero.jpg";
import { ArrowRight, Instagram, TrendingUp } from "lucide-react";
const HeroSection = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation();
  return <section className="hero-gradient min-h-screen flex items-center py-12 sm:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`space-y-6 sm:space-y-8 animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Sua presença digital nas mãos de uma{" "}
                <span className="text-gradient">especialista</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-primary">
                Eu transformo seu Instagram em uma máquina de vendas e autoridade.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Chega de postar sem resultados. Com estratégias que unem criatividade, 
                storytelling e performance, eu atraio os clientes certos para o seu negócio 
                enquanto você foca no que realmente importa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text&type=phone_number&app_absent=0', '_blank')}>
                Solicitar Orçamento
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta" size="lg" className="group w-full sm:w-auto" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text&type=phone_number&app_absent=0', '_blank')}>
                Quero Aprender com Você
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>+50 clientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Foco no mercado brasileiro</span>
              </div>
            </div>
          </div>
          
          <div className={`relative order-first lg:order-last animate-on-scroll animate-on-scroll-delay ${isVisible ? 'in-view' : ''}`}>
            <div className="relative z-10">
              <img src={anaHero} alt="Ana Carolina Tavares - Estrategista Digital" className="w-full h-auto rounded-xl sm:rounded-2xl shadow-elegant" />
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-full h-full bg-accent/20 rounded-xl sm:rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;