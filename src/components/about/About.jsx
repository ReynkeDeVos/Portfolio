import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">H</span>
              i! I'm Renke Brixel, a front-end developer with a focus on crafting seamless and responsive user
              interfaces using Tailwind CSS and React. After completing a Full-Stack Web & App Development Bootcamp at
              WBS Coding School, I’ve gained extensive experience in building user-centric applications that are both
              functional and visually appealing.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My expertise lies in front-end development, particularly with technologies like React and Tailwind CSS,
              but I'm comfortable working across the stack when needed. I enjoy creating efficient, clean, and scalable
              code that brings designs to life.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              When I'm not coding, you can often find me staying active with hobbies like running and hiking. These
              activities help me maintain a clear mind and a fresh perspective, which I bring into my development work
              to tackle complex challenges.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I'm always open to new opportunities where I can apply my skills and collaborate on innovative projects.
              If you're looking for a passionate developer who can deliver engaging user experiences, feel free to reach
              out!
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My Links</span>
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
