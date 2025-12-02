import { WorkEducationTabs } from '@/components/experience/work-education-tabs';
import { Footer } from '@/components/footer/footer';
import { HeroSection } from '@/components/hero/hero-section';
import { FeaturedProjects } from '@/components/projects/featured-projects';
import { SkillsSection } from '@/components/skills/skills-section';
import { education, experiences, projects } from '@/data';

function App() {
  return (
    <div className='dark min-h-screen bg-[#0a0a0f] text-gray-100'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <HeroSection />
        <SkillsSection />
        <WorkEducationTabs experiences={experiences} education={education} />
        <FeaturedProjects projects={projects} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
