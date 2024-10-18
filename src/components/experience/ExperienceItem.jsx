import { Chip } from '../util/Chip';
import Reveal from '../util/Reveal';

export const ExperienceItem = ({ title, position, time, location, description, tech }) => {
  return (
    <div className="mb-6 border-b border-zinc-700 pb-6">
      <div className="mb-2 flex items-center justify-between">
        <Reveal>
          <span className="text-xl font-bold">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <Reveal>
          <span className="font-bold text-indigo-300">{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-6 leading-relaxed text-zinc-300">{description}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
