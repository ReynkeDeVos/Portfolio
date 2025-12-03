import { Button } from '@/components/ui/button';
import type { Experience } from '@/types';
import { ExternalLink } from 'lucide-react';

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience: exp }: ExperienceItemProps) {
  return (
    <div className='border-border relative flex gap-6 border-l py-8 pl-12'>
      {/* Company Logo - positioned on the vertical line */}
      {exp.logo ? (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2'>
          <img src={exp.logo} alt={exp.company} className='h-full w-full object-contain' />
        </div>
      ) : (
        <div className='bg-muted absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg text-xs font-bold'>
          {exp.shortName}
        </div>
      )}

      <div className='flex-1 pl-4'>
        <p className='text-muted-foreground mb-1 text-sm'>{exp.period}</p>
        <h3 className='text-foreground mb-1 text-lg font-semibold'>{exp.company}</h3>
        <p className='text-muted-foreground mb-3'>{exp.role}</p>
        <ul className='text-muted-foreground mb-3 list-inside list-disc space-y-1'>
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
