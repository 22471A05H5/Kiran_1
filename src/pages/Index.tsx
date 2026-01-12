import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Index;
