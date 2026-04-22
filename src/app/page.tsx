import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Página principal da Landing Page.
 * Organiza as seções da página e os componentes de navegação.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ResultsSection />
        <ServicesSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
