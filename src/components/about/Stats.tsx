import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Technologies I Use</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {/* Front-End */}
            <Chip>React</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>shadcn/ui</Chip>
            <Chip>Redux</Chip>

            {/* Back-End */}
            <Chip>Node.js</Chip>
            <Chip>Express</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Postgres</Chip>
            <Chip>JWT</Chip>
            <Chip>OAuth</Chip>

            {/* Tools */}
            <Chip>Arch Linux</Chip>
            <Chip>Git</Chip>
            <Chip>Figma</Chip>
            <Chip>Linear</Chip>
            <Chip>Trello</Chip>
            <Chip>Excalidraw</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Technologies I&apos;m Exploring</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Next.js</Chip>
            <Chip>Svelte</Chip>
            <Chip>Docker</Chip>
            <Chip>Python</Chip>

            {/* Back-End */}
            <Chip>FastAPI</Chip>

            {/* Tools */}
            <Chip>Whimsical</Chip>
            <Chip>CI/CD</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
