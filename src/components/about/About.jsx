import { AiOutlineArrowRight } from 'react-icons/ai';
import { SectionHeader } from '../util/SectionHeader';
import Reveal from '../util/Reveal';
import { MyLinks } from '../nav/Header';
import { Stats } from './Stats';

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="float-left mr-1 rounded bg-indigo-500 px-3 py-2 text-2xl font-bold text-white">H</span>
              i! I&apos;m Renke Brixel, a web developer with experience in both front-end and back-end technologies. After
              completing a Full-Stack Web & App Development Bootcamp at WBS Coding School, I’ve developed a foundation
              in building scalable, efficient, and user-centric applications across the full stack.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I have worked with modern front-end frameworks like React and Tailwind CSS, while also being proficient in
              back-end technologies such as Node.js, Express, and MongoDB. Whether it&apos;s developing responsive user
              interfaces or managing robust server-side architectures, I enjoy creating seamless digital experiences
              from start to finish.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              My previous career in virology taught me to approach complex problems methodically, a skill I now bring to
              software development. I&apos;m passionate about writing clean, maintainable code and constantly exploring new
              technologies to stay on the cutting edge of web development.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of coding, I’m an avid runner and hiker, which helps me stay focused and energized. I&apos;m always on
              the lookout for new challenges where I can apply my skills and collaborate with talented teams to build
              innovative solutions. Let&apos;s connect and discuss how we can work together!
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
