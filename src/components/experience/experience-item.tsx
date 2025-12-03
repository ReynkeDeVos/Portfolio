import { Button } from '@/components/ui/button';
import type { Experience } from '@/types';
import { ExternalLink } from 'lucide-react';

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience: exp }: ExperienceItemProps) {
  return (
    <div className='relative flex gap-6 border-l border-border py-8 pl-12'>
      {/* Company Logo - positioned on the vertical line */}
      {exp.logo ? (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 ring-4 ring-background'>
          <img src={exp.logo} alt={exp.company} className='h-full w-full object-contain' />
        </div>
      ) : (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-xs font-bold ring-4 ring-background'>
          {exp.shortName}
        </div>
      )}

      <div className='flex-1 pl-4'>
        <p className='mb-1 text-sm text-muted-foreground'>{exp.period}</p>
        <h3 className='mb-1 text-lg font-semibold text-foreground'>{exp.company}</h3>
        <p className='mb-3 text-muted-foreground'>{exp.role}</p>
        <ul className='mb-3 list-inside list-disc space-y-1 text-muted-foreground'>
          {exp.description.map((item) => (
            <li key={`${exp.company}-${item}`}>{item}</li>
          ))}
        </ul>
        {exp.link && (
          <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
            <a href={exp.link.url} target='_blank' rel='noopener noreferrer'>
              <ExternalLink size={14} />
              {exp.link.label}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
