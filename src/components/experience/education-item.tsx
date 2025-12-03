import type { Education } from '@/types';

type EducationItemProps = {
  education: Education;
};

export function EducationItem({ education: edu }: EducationItemProps) {
  return (
    <div className='relative flex gap-6 border-l border-border py-8 pl-12'>
      {/* Institution Logo - positioned on the vertical line */}
      {edu.logo ? (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 ring-4 ring-background'>
          <img src={edu.logo} alt={edu.institution} className='h-full w-full object-contain' />
        </div>
      ) : (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-xs font-bold ring-4 ring-background'>
          {edu.shortName}
        </div>
      )}

      <div className='flex-1 pl-4'>
        <p className='mb-1 text-sm text-muted-foreground'>{edu.period}</p>
        <h3 className='mb-1 text-lg font-semibold text-foreground'>{edu.institution}</h3>
        <p className='mb-3 text-muted-foreground'>{edu.degree}</p>
        {edu.description && (
          <ul className='list-inside list-disc space-y-1 text-muted-foreground'>
            {edu.description.map((item) => (
              <li key={`${edu.institution}-${item}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
