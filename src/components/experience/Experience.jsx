import { SectionHeader } from '../util/SectionHeader';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: 'WBS Coding School',
    position: 'Full-Stack Web Development Bootcamp',
    time: 'March 2024 - July 2024',
    location: 'Berlin, Germany (Remote)',
    description:
      'Learned full-stack development using the MERN stack, with a focus on building responsive and user-friendly applications. Developed projects such as a fitness tracker and a tech news search platform, utilizing React, Tailwind CSS, Node.js, and MongoDB.',
    tech: ['React', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'MongoDB', 'JWT', 'API Integration'],
  },
  {
    title: 'Leibniz-Institut für Virologie (LIV)',
    position: 'Biological Technical Assistant',
    time: 'April 2014 - September 2023',
    location: 'Hamburg, Germany',
    description:
      'Collaborated in multidisciplinary teams to conduct complex laboratory analyses. Managed laboratory operations, developed software solutions for hazardous substance management, and contributed to research published in scientific journals.',
    tech: ['FIJI ImageJ', 'Nikon NIS-Elements', 'GraphPad Prism', 'Python', 'Project Management', 'Data Analysis'],
  },
];
