import { Atom, Code2, Database, Network, Server, Sparkles } from 'lucide-react';

const skills = [
  { name: 'React', icon: Atom, color: 'text-blue-500' },
  { name: 'TypeScript', icon: Code2, color: 'text-blue-600' },
  { name: 'TailwindCSS', icon: Sparkles, color: 'text-cyan-500' },
  { name: 'Node.js', icon: Server, color: 'text-green-600' },
  { name: 'Express.js', icon: Network, color: 'text-gray-300' },
  { name: 'MongoDB', icon: Database, color: 'text-green-500' },
];

export function SkillsSection() {
  return (
    <section className='mb-20'>
      <h2 className='mb-8 text-2xl font-bold'>Skills</h2>
      <div className='flex flex-wrap gap-4'>
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'
            >
              <Icon className={`text-2xl ${skill.color}`} />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
