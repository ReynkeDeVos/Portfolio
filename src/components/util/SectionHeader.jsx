import { Reveal } from './Reveal';

export const SectionHeader = ({ title, dir = 'r' }) => {
  return (
    <div className="mb-12 flex items-center gap-8" style={{ flexDirection: dir === 'r' ? 'row' : 'row-reverse' }}>
      <div className="h-[1px] w-full bg-zinc-700" />
      <h2>
        <Reveal>
          <span className="text-end text-3xl font-black md:text-5xl">
            {title}
            <span className="text-indigo-500">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
