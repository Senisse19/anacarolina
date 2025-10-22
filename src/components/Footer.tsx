import { Instagram, Mail, MapPin, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ana Carolina Tavares</h3>
            <p className="text-primary-foreground/80">
              Estrategista Digital especializada em transformar Instagram em 
              ferramentas de vendas e autoridade.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Social Media</li>
              <li>Tráfego Pago</li>
              <li>Mentoria</li>
              
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>Disponível via WhatsApp</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>Porto Alegre, RS</span>
              </div>
              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-primary-foreground">Redes Sociais</h5>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="https://www.instagram.com/anacarolinaadt/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.tiktok.com/@anacarolinaamkt" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <span>TikTok</span>
                  </a>
                  <a href="https://www.linkedin.com/in/ana-carolina-tavares-marketing/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Ana Carolina Tavares. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;