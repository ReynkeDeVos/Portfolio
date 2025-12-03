import type { Education } from '@/types';

type EducationItemProps = {
  education: Education;
};

export function EducationItem({ education: edu }: EducationItemProps) {
  return (
    <div className='border-border relative flex gap-6 border-l py-8 pl-12'>
      {/* Institution Logo - positioned on the vertical line */}
      {edu.logo ? (
        <div className='ring-background absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 ring-4'>
          <img src={edu.logo} alt={edu.institution} className='h-full w-full object-contain' />
        </div>
      ) : (
        <div className='bg-muted ring-background absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg text-xs font-bold ring-4'>
          {edu.shortName}
        </div>
      )}

      <div className='flex-1 pl-4'>
        <p className='text-muted-foreground mb-1 text-sm'>{edu.period}</p>
        <h3 className='text-foreground mb-1 text-lg font-semibold'>{edu.institution}</h3>
        <p className='text-muted-foreground mb-3'>{edu.degree}</p>
        {edu.description && (
          <ul className='text-muted-foreground list-inside list-disc space-y-1'>
            {edu.description.map((item) => (
              <li key={`${edu.institution}-${item}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
