import { ProfilePhoto } from './profile-photo';
import { SocialLinks } from '../social-links/social-links';

export function HeroSection() {
  return (
    <section className='mb-16 flex flex-col gap-12 md:flex-row md:items-start md:justify-between'>
      <div className='flex-1'>
        <h1 className='mb-4 text-5xl tracking-tight md:text-6xl'>hi, Renke here.</h1>

        <pre className='mb-6 rounded-lg bg-[#12121a] p-4 text-base whitespace-pre-wrap'>
          <code>
            <span className='text-purple-400'>const</span> <span className='text-blue-400'>me</span>{' '}
            = [
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
            {/** biome-ignore lint/suspicious/noCommentText: <explanation> */}
            <span className='text-gray-500'>// 20+ years</span>
            <br />
            ];
          </code>
        </pre>

        <p className='mb-8 text-lg text-gray-400'>Germany, Hamburg</p>

        <SocialLinks variant='hero' />
      </div>

      <ProfilePhoto />
    </section>
  );
}
