import anaAbout from "@/assets/ana-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img 
                src={anaAbout} 
                alt="Ana Carolina Tavares"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-secondary/30 rounded-2xl -z-10"></div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Prazer, me chamo{" "}
                <span className="text-gradient">Ana Carolina</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fiz meu primeiro post como Social Media em Fevereiro de 2022 e desde então 
                  já atendi mais de 150 clientes em todo o Brasil.
                </p>
                <p>
                  Hoje, lidero uma agência de marketing com um time de profissionais de edição 
                  de vídeo, tráfego pago e design. Juntos, criamos estratégias completas que 
                  unem criatividade, storytelling e performance.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">Brasil</div>
                <div className="text-sm text-muted-foreground">Foco Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;