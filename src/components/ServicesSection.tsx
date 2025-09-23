import { Smartphone, TrendingUp, Calendar, PenTool, Video, BarChart3 } from "lucide-react";
import anaServices from "@/assets/ana-services.jpg";

const ServicesSection = () => {
  const socialMediaServices = [
    { icon: PenTool, text: "Estudo de marca" },
    { icon: Calendar, text: "Planejamento de conteúdo mensal" },
    { icon: Smartphone, text: "Criação dos posts + legendas + design" },
    { icon: TrendingUp, text: "Estruturação do perfil" },
    { icon: Video, text: "Edição e orientação de Reels" },
    { icon: BarChart3, text: "Postagem direta no perfil" }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Nossos{" "}
            <span className="text-gradient">Serviços</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Social Media Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Social Media</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Um serviço completo que cuida de toda sua presença digital no Instagram, 
                  desde a estratégia até a execução.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socialMediaServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <service.icon className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-elegant">
              <div className="text-center space-y-4">
                <TrendingUp className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-semibold text-primary">Estratégia Completa</h4>
                <p className="text-muted-foreground">
                  Desenvolvemos uma presença digital autêntica que conecta sua marca 
                  com o público certo e gera resultados mensuráveis.
                </p>
              </div>
            </div>
          </div>

          {/* Tráfego Pago Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img 
                  src={anaServices} 
                  alt="Ana Carolina - Tráfego Pago"
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Tráfego Pago</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O tráfego pago é conduzido de forma estratégica e orientada por dados. 
                  Com gestão técnica do nosso especialista em performance digital, cada 
                  campanha é planejada com objetivos claros e segmentação criteriosa para 
                  garantir que seu investimento seja direcionado ao público certo, com 
                  otimização constante e relatórios transparentes.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm">
                  <BarChart3 className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium text-primary">Análise de Dados</div>
                    <div className="text-sm text-muted-foreground">Decisões baseadas em métricas reais</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-medium text-primary">Otimização Contínua</div>
                    <div className="text-sm text-muted-foreground">Ajustes constantes para melhor performance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;