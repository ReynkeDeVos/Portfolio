import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

const MotionDiv = motion.div;

export const ProjectModal = ({ modalContent, projectLink, setIsOpen, imgSrc, isOpen, title, code, tech }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Make sure modal only renders on the client to avoid SSR issues
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflowY = isOpen ? 'hidden' : 'scroll';

    return () => {
      body.style.overflowY = 'scroll'; // Reset overflow when modal closes
    };
  }, [isOpen]);

  if (!mounted) return null; // Prevent SSR rendering issues

  // Modal and backdrop animations
  const modalAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const overlayAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex justify-center overflow-y-scroll bg-zinc-950/50 px-4 py-12 backdrop-blur transition-opacity ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={() => setIsOpen(false)}>
      <button
        className="absolute right-4 top-4 text-xl text-zinc-300 transition-colors hover:text-indigo-300 md:top-6"
        onClick={() => setIsOpen(false)}>
        <MdClose />
      </button>

      <MotionDiv
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className="h-fit w-full max-w-2xl cursor-auto overflow-hidden rounded-lg bg-zinc-900 shadow-lg"
        variants={modalAnimation}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}>
        {/* Image container */}
        <div className="relative h-64 w-full md:h-96">
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            fill
            sizes="100svw"
            style={{ objectFit: 'contain', userSelect: 'none' }} // Ensures the image fits without cropping
            unoptimized={imgSrc.endsWith('pokebattle.avif')}
          />
        </div>

        <div className="p-8">
          <h4 className="mb-2 text-3xl font-bold">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-indigo-300">{tech.join(' - ')}</div>

          <div className="my-6 space-y-4 text-sm leading-relaxed text-zinc-300">{modalContent}</div>

          <div>
            <p className="mb-2 text-xl font-bold">
              Project Links<span className="text-indigo-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-1 text-zinc-300 transition-colors hover:text-indigo-300"
                href={code}
                aria-label="View Source Code on GitHub">
                <AiFillGithub /> Source Code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-1 text-zinc-300 transition-colors hover:text-indigo-300"
                href={projectLink}
                aria-label="View Live Project">
                <AiOutlineExport /> Live Project
              </Link>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>,
    document.getElementById('__next'),
  );
};
