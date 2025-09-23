import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <li>Consultoria</li>
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
                <span>Brasil • Portugal • EUA</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Instagram className="w-4 h-4" />
                <span>Siga no Instagram</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Ana Carolina Tavares. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;