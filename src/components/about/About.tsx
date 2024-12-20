import { AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "../nav/Header";
import Reveal from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              {/*
               */}
              i! I'm Renke Brixel, a web developer with experience in both
              front-end and back-end technologies. After completing a Full-Stack
              Web & App Development Bootcamp at WBS Coding School, I’ve
              developed a foundation in building scalable, efficient, and
              user-centric applications across the full stack.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I have worked with modern front-end frameworks like React and
              Tailwind CSS, while also being proficient in back-end technologies
              such as Node.js, Express, and MongoDB. Whether it's developing
              responsive user interfaces or managing robust server-side
              architectures, I enjoy creating seamless digital experiences from
              start to finish.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My previous career in virology taught me to approach complex
              problems methodically, a skill I now bring to software
              development. I'm passionate about writing clean, maintainable code
              and constantly exploring new technologies to stay on the cutting
              edge of web development.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of coding, I’m an avid runner and hiker, which helps me
              stay focused and energized. I'm always on the lookout for new
              challenges where I can apply my skills and collaborate with
              talented teams to build innovative solutions. Let's connect and
              discuss how we can work together!
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
