import { OutlineButton } from "../buttons/OutlineButton";
import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
              Hi, I'm Renke<span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              I'm an <span className="font-semibold text-indigo-500">Entry-Level Web & App Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
              I recently transitioned into full-stack web development after a career in virology. With a solid
              foundation in front-end and back-end technologies, I am eager to apply my analytical mindset and
              problem-solving skills to build responsive, user-friendly web applications. Let's collaborate and create
              something exceptional!
            </p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="
    pointer-events-auto 
    before:bg-indigo-600 
    text-white 
    border-indigo-600 
    hover:bg-indigo-700 
    hover:border-indigo-700 
    mt-4 md:mt-6
  ">
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
