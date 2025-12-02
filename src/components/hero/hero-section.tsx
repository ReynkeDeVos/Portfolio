import profileImage from '@/assets/photo/photo.avif';
import { SocialLinks } from '../social-links/social-links';

export function HeroSection() {
  return (
    <section className='mb-20 flex flex-col gap-12 md:flex-row md:items-start md:justify-between'>
      <div className='flex-1'>
        <h1 className='mb-4 font-serif text-5xl font-bold italic md:text-6xl'>
          hi, Renke here.
        </h1>

        <pre className='mb-6 rounded-lg bg-[#12121a] p-4 text-base whitespace-pre-wrap'>
          <code className='font-mono'>
            <span className='text-purple-400'>const</span>{' '}
            <span className='text-blue-400'>bio</span> = [
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;Full-Stack Dev&quot;</span>,
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;Instructor at WBS Coding School&quot;</span>,
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;Ultra runner&quot;</span>,
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;I use Arch btw&quot;</span>{' '}
            <span className='text-gray-500'>// 20+ years</span>
            <br />
            ];
          </code>
        </pre>

        <p className='mb-8 text-lg text-gray-400'>Germany, Hamburg</p>

        <SocialLinks variant='hero' />
      </div>

      {/* Profile Image */}
      <div className='shrink-0'>
        <div className='relative'>
          <img
            src={profileImage}
            alt='Renke'
            className='h-64 w-64 rotate-3 rounded-lg object-cover shadow-2xl duration-300 hover:rotate-0 md:h-80 md:w-80'
          />
        </div>
      </div>
    </section>
  );
}

