import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SideBarLink } from './SideBarLink';

const MotionNav = motion.create('nav');

export const SideBar = () => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <MotionNav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="no-scrollbar sticky left-0 top-0 z-20 flex h-screen flex-col items-center overflow-y-scroll bg-zinc-950">
      <span className="my-4 flex size-10 shrink-0 items-center justify-center text-xl font-black leading-[1]">
        R<span className="text-indigo-500">.</span>
      </span>
      <SideBarLink selected={selected} setSelected={setSelected} value="about" href="#about">
        About
      </SideBarLink>
      <SideBarLink selected={selected} setSelected={setSelected} value="projects" href="#projects">
        Projects
      </SideBarLink>
      <SideBarLink selected={selected} setSelected={setSelected} value="experience" href="#experience">
        Exp.
      </SideBarLink>
      <SideBarLink selected={selected} setSelected={setSelected} value="contact" href="#contact">
        Contact
      </SideBarLink>
      <SideBarLink href="/blog" value="blog" selected={selected} setSelected={setSelected}>
        Blog
      </SideBarLink>
    </MotionNav>
  );
};
