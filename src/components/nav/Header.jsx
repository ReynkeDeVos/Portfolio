import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { OutlineButton } from '../buttons/OutlineButton';

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between bg-zinc-900/50 px-4 backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open('/CV_Renke_Brixel.pdf')}>My Resume</OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center gap-4 text-lg">
    <Link
      className="text-zinc-300 transition-colors hover:text-indigo-300"
      href="https://www.linkedin.com/in/rbrixel/"
      target="_blank"
      rel="nofollow">
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 transition-colors hover:text-indigo-300"
      href="https://github.com/ReynkeDeVos"
      target="_blank"
      rel="nofollow">
      <SiGithub />
    </Link>
    <Link className="text-zinc-300 transition-colors hover:text-indigo-300" href="/blog">
      Blog
    </Link>
  </div>
);
