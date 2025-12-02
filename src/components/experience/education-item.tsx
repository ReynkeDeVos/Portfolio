import type { Education } from '@/types';

type EducationItemProps = {
  education: Education;
};

export function EducationItem({ education: edu }: EducationItemProps) {
  return (
    <div className='relative flex gap-6 border-l border-gray-800 py-8 pl-12'>
      {/* Institution Logo - positioned on the vertical line */}
      {edu.logo ? (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 ring-4 ring-[#0a0a0f]'>
          <img src={edu.logo} alt={edu.institution} className='h-full w-full object-contain' />
        </div>
      ) : (
        <div className='absolute top-8 -left-6 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-gray-700 to-gray-900 text-xs font-bold ring-4 ring-[#0a0a0f]'>
          {edu.shortName}
        </div>
      )}

      <div className='flex-1 pl-4'>
        <p className='mb-1 text-sm text-gray-500'>{edu.period}</p>
        <h3 className='mb-1 text-lg font-semibold text-white'>{edu.institution}</h3>
        <p className='mb-3 text-gray-400'>{edu.degree}</p>
        {edu.description && (
          <ul className='list-inside list-disc space-y-1 text-gray-400'>
            {edu.description.map((item) => (
              <li key={`${edu.institution}-${item}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
