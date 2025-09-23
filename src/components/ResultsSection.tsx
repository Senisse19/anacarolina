import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import feedbackAmanda from "@/assets/feedback-amanda-becker.jpg";
import feedbackLuana from "@/assets/feedback-luana.jpg";
import feedbackBeatriz from "@/assets/feedback-beatriz.jpg";
import feedbackAndriolli from "@/assets/feedback-andriolli.jpg";
import feedbackTovi from "@/assets/feedback-tovi.jpg";

const ResultsSection = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const feedbacks = [
    { image: feedbackAmanda, alt: "Feedback Amanda Becker" },
    { image: feedbackLuana, alt: "Feedback Luana" },
    { image: feedbackBeatriz, alt: "Feedback Beatriz MKT" },
    { image: feedbackAndriolli, alt: "Feedback Andriolli" },
    { image: feedbackTovi, alt: "Feedback Professor Tovi" }
  ];

  const clients = [
    { name: "@dra_amandatavares", url: "https://www.instagram.com/dra_amandatavares?igsh=MWQyYTI0YWVucnlsYg==" },
    { name: "@amandamertzadv", url: "https://www.instagram.com/amandamertzadv?igsh=MW11d2NnNTRsYm8ydQ==" },
    { name: "@amandabecker.psicopedagoga", url: "https://www.instagram.com/amandabecker.psicopedagoga?igsh=MWl0a2U3ZzdiZjFrbQ==" },
    { name: "@locallelanches", url: "https://www.instagram.com/locallelanches?igsh=aTA2aGZ3aXV4OTV6" },
    { name: "@drabeatriz.med", url: "https://www.instagram.com/drabeatriz.med?igsh=ZzRlcGtjYjRrc3Bm" },
    { name: "@luana.negron", url: "https://www.instagram.com/luana.negron?igsh=NnR0OGx1cDV3enkw" },
    { name: "@bethinaendler", url: "https://www.instagram.com/bethinaendler" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <section id="resultados" className="py-20 bg-card">
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

        {/* Dynamic Feedback Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-elegant">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentFeedback ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={feedback.image} 
                  alt={feedback.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeedback(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentFeedback ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Simplified Client List */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-primary">
            Clientes que Confiam no Nosso Trabalho:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <button
                key={index}
                onClick={() => window.open(client.url, '_blank')}
                className="group flex items-center justify-center space-x-2 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-primary font-medium">{client.name}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;