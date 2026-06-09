import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValueSection } from "@/components/ValueSection";
import { ProgramSection } from "@/components/ProgramSection";
import { MethodologySection } from "@/components/MethodologySection";
import { InstructorsSection } from "@/components/InstructorsSection";
import { ProfileSection } from "@/components/ProfileSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <ProgramSection />
        <MethodologySection />
        <InstructorsSection />
        <ProfileSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
