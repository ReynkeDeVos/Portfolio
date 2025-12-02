import { handleEmailClick } from '@/lib/email';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';

type SocialLinksProps = {
  variant?: 'hero' | 'footer';
};

export function SocialLinks({ variant = 'hero' }: SocialLinksProps) {
  const iconSize = variant === 'hero' ? 20 : 18;

  if (variant === 'hero') {
    return (
      <div className='flex flex-wrap items-center gap-4'>
        <a
          href='/CV_Renke_Brixel.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-white hover:bg-[#12121a]'
        >
          Resume
          <FileDown size={16} />
        </a>
        <a
          href='https://www.linkedin.com/in/rbrixel/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='cursor-pointer text-gray-400 hover:text-white'
        >
          <Linkedin size={iconSize} />
        </a>
        <a
          href='https://github.com/ReynkeDeVos'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='cursor-pointer text-gray-400 hover:text-white'
        >
          <Github size={iconSize} />
        </a>
        <button
          type='button'
          onClick={handleEmailClick}
          aria-label='Email'
          className='cursor-pointer text-gray-400 hover:text-white'
        >
          <Mail size={iconSize} />
        </button>
      </div>
    );
  }

  return (
    <div className='flex justify-center gap-4'>
      <a href='https://www.linkedin.com/in/rbrixel/' className='hover:text-white'>
        <Linkedin size={iconSize} />
      </a>
      <a href='https://github.com/ReynkeDeVos' className='hover:text-white'>
        <Github size={iconSize} />
      </a>
      <button type='button' onClick={handleEmailClick} className='cursor-pointer hover:text-white'>
        <Mail size={iconSize} />
      </button>
    </div>
  );
}
