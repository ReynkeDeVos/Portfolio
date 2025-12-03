import type { Education } from '@/types';

type EducationItemProps = {
  education: Education;
  isLast?: boolean;
};

export function EducationItem({ education: edu, isLast = false }: EducationItemProps) {
  return (
    <div
      className={`border-border relative flex gap-6 border-l pl-12 ${
        isLast ? 'pt-8 pb-4' : 'py-8'
      } ${isLast ? 'before:bg-surface before:absolute before:bottom-0 before:left-0 before:h-4 before:w-px before:content-[""]' : ''}`}
    >
      {/* Institution Logo - positioned on the vertical line */}
      {edu.logo ? (
        edu.websiteUrl ? (
          <a
            href={edu.websiteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 transition-opacity hover:opacity-80'
          >
            <img src={edu.logo} alt={edu.institution} className='h-full w-full object-contain' />
          </a>
        ) : (
          <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2'>
            <img src={edu.logo} alt={edu.institution} className='h-full w-full object-contain' />
          </div>
        )
      ) : edu.websiteUrl ? (
        <a
          href={edu.websiteUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-muted absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg text-xs font-bold transition-opacity hover:opacity-80'
        >
          {edu.shortName}
        </a>
      ) : (
        <div className='bg-muted absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg text-xs font-bold'>
          {edu.shortName}
        </div>
      )}

      <div className='flex-1 pl-4'>
        <p className='text-muted-foreground mb-1 text-sm'>{edu.period}</p>
        <h3 className='text-foreground mb-1 text-lg font-semibold'>{edu.institution}</h3>
        <p className='text-muted-foreground mb-3'>{edu.degree}</p>
        {edu.description && (
          <ul className='text-muted-foreground mb-3 list-inside list-disc space-y-1'>
            {edu.description.map((item) => (
              <li key={`${edu.institution}-${item}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
