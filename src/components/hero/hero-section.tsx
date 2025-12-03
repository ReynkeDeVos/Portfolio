import { SocialLinks } from '../social-links/social-links';
import { ProfilePhoto } from './profile-photo';

export function HeroSection() {
  return (
    <section className='mb-16 flex flex-col gap-12 md:flex-row md:items-start md:justify-between'>
      <div className='flex-1'>
        <h1 className='mb-4 text-5xl tracking-tight md:text-6xl'>hi, Renke here.</h1>

        <pre className='bg-surface mb-6 rounded-lg p-4 text-base whitespace-pre-wrap'>
          <code>
            <span className='text-purple-500 dark:text-purple-400'>const</span>{' '}
            <span className='text-blue-600 dark:text-blue-400'>me</span> = [
            <br />
            {'  '}
            <span className='text-amber-600 dark:text-yellow-300'>&quot;Full-Stack Dev&quot;</span>
            ,
            <br />
            {'  '}
            <span className='text-amber-600 dark:text-yellow-300'>
              &quot;Instructor at WBS Coding School&quot;
            </span>
            ,
            <br />
            {'  '}
            <span className='text-amber-600 dark:text-yellow-300'>&quot;Ultra runner&quot;</span>
            ,
            <br />
            {'  '}
            <span className='text-amber-600 dark:text-yellow-300'>
              &quot;I use Arch btw&quot;
            </span>{' '}
            {/* biome-ignore lint/suspicious/noCommentText: intentional JS comment display */}
            <span className='text-muted-foreground'>// 20+ years</span>
            <br />
            ];
          </code>
        </pre>

        <p className='text-muted-foreground mb-8 text-lg'>Germany, Hamburg</p>

        <SocialLinks variant='hero' />
      </div>

      <ProfilePhoto />
    </section>
  );
}
