import { handleEmailClick } from '@/lib/email';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { memo } from 'react';

type SocialLinksProps = {
  variant?: 'hero' | 'footer';
};

export const SocialLinks = memo(function SocialLinks({ variant = 'hero' }: SocialLinksProps) {
  const iconSize = variant === 'hero' ? 20 : 18;

  if (variant === 'hero') {
    return (
      <div className='flex flex-wrap items-center gap-4'>
        <a
          href='/CV_Renke_Brixel.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='border-border text-foreground hover:bg-surface flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm'
        >
          Resume
          <FileDown size={16} />
        </a>
        <a
          href='https://www.linkedin.com/in/rbrixel/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-muted-foreground hover:text-foreground cursor-pointer'
        >
          <Linkedin size={iconSize} />
        </a>
        <a
          href='https://github.com/ReynkeDeVos'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-muted-foreground hover:text-foreground cursor-pointer'
        >
          <Github size={iconSize} />
        </a>
        <button
          type='button'
          onClick={handleEmailClick}
          aria-label='Email'
          className='text-muted-foreground hover:text-foreground cursor-pointer'
        >
          <Mail size={iconSize} />
        </button>
      </div>
    );
  }

  return (
    <div className='flex justify-center gap-4'>
      <a href='https://www.linkedin.com/in/rbrixel/' className='hover:text-foreground'>
        <Linkedin size={iconSize} />
      </a>
      <a href='https://github.com/ReynkeDeVos' className='hover:text-foreground'>
        <Github size={iconSize} />
      </a>
      <button
        type='button'
        onClick={handleEmailClick}
        className='hover:text-foreground cursor-pointer'
      >
        <Mail size={iconSize} />
      </button>
    </div>
  );
});
