import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { WorkHistorySection } from '@/sections/WorkHistorySection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { EducationSection } from '@/sections/EducationSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkHistorySection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
