
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <Statistics />
        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
