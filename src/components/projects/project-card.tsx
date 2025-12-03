import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className='border-border bg-surface transition-colors hover:bg-muted'>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mb-4 flex flex-wrap gap-2'>
          {project.tech.map((tech) => (
            <Badge key={`${project.title}-${tech}`} variant='secondary'>
              {tech}
            </Badge>
          ))}
        </div>
        <div className='flex gap-3'>
          {project.link && (
            <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <ExternalLink size={14} />
                Website
              </a>
            </Button>
          )}
          {project.source && (
            <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
              <a href={project.source} target='_blank' rel='noopener noreferrer'>
                <Github size={14} />
                Source
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
