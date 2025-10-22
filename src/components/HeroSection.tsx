import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import anaHero from "@/assets/ana-services.jpg";
import { ArrowRight, Instagram, TrendingUp, Linkedin } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
const HeroSection = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation();
  return <section className="hero-gradient min-h-screen flex items-center py-12 sm:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Seu Instagram não precisa de mais posts. Precisa de{" "}
                <span className="text-gradient">direção</span>.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-primary">
                Eu transformo seu Instagram em uma máquina de vendas e autoridade.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Seja para entregar a gestão completa do seu Instagram ou aprender as estratégias que aplico nos bastidores, o objetivo é o mesmo: construir um perfil que conecta, fortalece sua autoridade e transforma seguidores em clientes.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551991587917&text=Oii+Ana%2C+gostaria+de+saber+mais+sobre+teus+serviços&type=phone_number&app_absent=0', '_blank')}>
                Solicitar Orçamento
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta" size="lg" className="group w-full sm:w-auto" onClick={() => window.open('https://forms.gle/P44Ewhcph7725YqK8', '_blank')}>
                Quero Aprender com Você
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4">
              <Button variant="outline" size="icon" className="group hover:bg-primary hover:text-primary-foreground transition-colors" onClick={() => window.open('https://www.instagram.com/anacarolinaadt/', '_blank')}>
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="group hover:bg-primary hover:text-primary-foreground transition-colors" onClick={() => window.open('https://www.linkedin.com/in/ana-carolina-tavares-marketing/', '_blank')}>
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="group hover:bg-primary hover:text-primary-foreground transition-colors" onClick={() => window.open('https://www.tiktok.com/@anacarolinaamkt', '_blank')}>
                <TikTokIcon className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>+150 clientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                
                
              </div>
            </div>
          </div>
          
          <div className={`relative animate-on-scroll animate-on-scroll-delay ${isVisible ? 'in-view' : ''}`}>
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