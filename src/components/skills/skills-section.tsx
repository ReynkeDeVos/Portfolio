import * as SimpleIcons from 'simple-icons';

// Helper component to render Simple Icons SVG
function SimpleIcon({ icon, className }: { icon: typeof SimpleIcons.siReact; className?: string }) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={className}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

const skills = [
  { name: 'React', icon: SimpleIcons.siReact },
  { name: 'TypeScript', icon: SimpleIcons.siTypescript },
  { name: 'Tailwind CSS', icon: SimpleIcons.siTailwindcss },
  { name: 'Node.js', icon: SimpleIcons.siNodedotjs },
  { name: 'Express.js', icon: SimpleIcons.siExpress },
  { name: 'Mongoose', icon: SimpleIcons.siMongoose },
];

export function SkillsSection() {
  return (
    <section className='mb-16'>
      <div className='grid grid-cols-2 gap-3 md:flex md:flex-wrap'>
        {skills.map((skill) => {
          const isMongoose = skill.name === 'Mongoose';
          return (
            <div
              key={skill.name}
              className='bg-surface flex cursor-default items-center gap-2 rounded-lg px-4 py-3 select-none'
            >
              <span className={`text-foreground h-6 w-6 ${isMongoose ? 'scale-125' : ''}`}>
                <SimpleIcon icon={skill.icon} className='h-full w-full' />
              </span>
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
