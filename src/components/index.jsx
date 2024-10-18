import { SideBar } from './nav/SideBar';
import { Header } from './nav/Header';
import Hero from './hero/Hero';
import { About } from './about/About';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Contact } from './contact/Contact';

export const HomePage = () => {
  return (
    <div className="grid grid-cols-[54px_1fr]">
      <SideBar />
      <main>
        <Header />
        <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
};
