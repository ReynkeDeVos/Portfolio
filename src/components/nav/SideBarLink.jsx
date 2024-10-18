import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion.create(Link);

export const SideBarLink = ({ setSelected, selected, children, href, value }) => {
  return (
    <MotionLink
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      href={href}
      onClick={() => setSelected(value)}
      className={`flex h-24 w-full items-center justify-center border-r-2 text-sm transition-all ${
        selected === value
          ? 'border-indigo-500 bg-zinc-800 opacity-100'
          : 'border-transparent opacity-50 hover:border-r-zinc-50 hover:bg-zinc-900'
      }`}>
      <span className="inline-block whitespace-nowrap [transform-origin:center] [transform:rotate(-90deg)]">
        {children}
      </span>
    </MotionLink>
  );
};
