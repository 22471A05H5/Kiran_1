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
      <div aria-hidden className="relative h-10 md:h-14">
        <div className="absolute inset-x-6 md:inset-x-12 lg:inset-x-24 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-gradient-to-b from-background/0 via-muted/20 to-background/0 blur-2xl" />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Index;
