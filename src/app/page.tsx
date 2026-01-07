import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <ScrollProgress />
      <Navigation />
      <main className="bg-transparent">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingMenu />
    </div>
  );
}
