import type { Project } from '@/types';

import { ProjectCard } from './project-card';

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const privateProjects = projects.filter((p) => p.type === 'private');
  const clientProjects = projects.filter((p) => p.type === 'client');

  return (
    <section id='projects'>
      <h2 className='mb-8 text-2xl font-bold'>Featured Projects</h2>

      {clientProjects.length > 0 && (
        <div className='mb-8'>
          <h3 className='text-muted-foreground mb-4 text-lg font-semibold'>Client Work</h3>
          <div className='grid gap-6 md:grid-cols-2'>
            {clientProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      {privateProjects.length > 0 && (
        <div>
          {clientProjects.length > 0 && (
            <h3 className='text-muted-foreground mb-4 text-lg font-semibold'>Private Projects</h3>
          )}
          <div className='grid gap-6 md:grid-cols-2'>
            {privateProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
