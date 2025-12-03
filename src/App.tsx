import { WorkEducationTabs } from '@/components/experience/work-education-tabs';
import { Footer } from '@/components/footer/footer';
import { HeroSection } from '@/components/hero/hero-section';
import { FeaturedProjects } from '@/components/projects/featured-projects';
import { SkillsSection } from '@/components/skills/skills-section';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { education, experiences, projects } from '@/data';
import { ThemeProvider } from '@/lib/theme';

function App() {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <div className='relative mx-auto max-w-6xl px-6 py-12'>
          <ThemeToggle />
          <HeroSection />
          <SkillsSection />
          <WorkEducationTabs experiences={experiences} education={education} />
          <FeaturedProjects projects={projects} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
