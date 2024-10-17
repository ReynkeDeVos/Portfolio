import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/CV_Renke_Brixel.pdf")}>My Resume</OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.linkedin.com/in/rbrixel/"
      target="_blank"
      rel="nofollow">
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://github.com/ReynkeDeVos"
      target="_blank"
      rel="nofollow">
      <SiGithub />
    </Link>
    <Link className="text-zinc-300 hover:text-indigo-300 transition-colors" href="/blog">
      Blog
    </Link>
  </div>
);
