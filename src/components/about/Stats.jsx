import { Chip } from '../util/Chip';
import Reveal from '../util/Reveal';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="mb-6 flex items-center">
            <AiFillCode className="text-2xl text-indigo-500" />
            <span className="ml-2 font-bold">Technologies I Use</span>
          </h4>
          <div className="mb-12 flex flex-wrap gap-2">
            {/* Front-End */}
            <Chip>JavaScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>React</Chip>
            <Chip>shadcn/ui</Chip>
            <Chip>Redux</Chip>

            {/* Back-End */}
            <Chip>Node.js</Chip>
            <Chip>Express</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Postgres</Chip>
            <Chip>GraphQL</Chip>
            <Chip>JWT</Chip>
            <Chip>OAuth</Chip>

            {/* Tools */}
            <Chip>Arch Linux</Chip>
            <Chip>Git</Chip>
            <Chip>Figma</Chip>
            <Chip>Excalidraw</Chip>
            <Chip>Trello</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="mb-6 flex items-center">
            <AiFillSmile className="text-2xl text-indigo-500" />
            <span className="ml-2 font-bold">Technologies I'm Exploring</span>
          </h4>
          <div className="mb-12 flex flex-wrap gap-2">
            <Chip>Next.js</Chip>
            <Chip>TypeScript</Chip>
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
