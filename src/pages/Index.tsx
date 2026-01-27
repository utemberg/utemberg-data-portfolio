import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
