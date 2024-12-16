import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

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
    title: "Closelink GmbH",
    position: "Front-End Development Intern",
    time: "November 2024 - December 2024",
    location: "Hamburg, Germany",
    description:
      "Contributed to the development of a large-scale front-end codebase in a fast-paced startup environment. Worked closely with a cross-functional team of developers and designer to modernize the user interface by replacing outdated components with optimized ones. Enhanced code readability and maintainability by adhering to best practices in React and TypeScript.",
    tech: ["React", "TypeScript", "Linear", "GitHub", "Figma", "Code Reviews"],
  },
  {
    title: "WBS Coding School",
    position: "Full-Stack Web Development Bootcamp",
    time: "March 2024 - July 2024",
    location: "Berlin, Germany (Remote)",
    description:
      "Learned full-stack development using the MERN stack, with a focus on building responsive and user-friendly applications. Developed projects such as a fitness tracker and a tech news search platform, utilizing React, Tailwind CSS, Node.js, and MongoDB.",
    tech: ["React", "Tailwind CSS", "shadcn/ui", "Node.js", "MongoDB", "JWT", "API Integration"],
  },
  {
    title: "Leibniz-Institut für Virologie (LIV)",
    position: "Biological Technical Assistant",
    time: "April 2014 - September 2023",
    location: "Hamburg, Germany",
    description:
      "Collaborated in multidisciplinary teams to conduct complex laboratory analyses. Managed laboratory operations, developed software solutions for hazardous substance management, and contributed to research published in scientific journals.",
    tech: ["FIJI ImageJ", "Nikon NIS-Elements", "GraphPad Prism", "Python", "Project Management", "Data Analysis"],
  },
];
