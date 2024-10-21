import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

const MotionDiv = motion.create('div');

export const ProjectModal = ({ modalContent, projectLink, setIsOpen, imgSrc, isOpen, title, code, tech }) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'scroll';
    }

    // Cleanup to reset overflow on unmount
    return () => {
      body.style.overflowY = 'scroll';
    };
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 flex cursor-pointer justify-center overflow-y-scroll bg-zinc-950/50 px-4 py-12 backdrop-blur"
      onClick={() => setIsOpen(false)}>
      <button
        className="absolute right-4 top-4 text-xl text-zinc-300 transition-colors hover:text-indigo-300 md:top-6"
        onClick={() => setIsOpen(false)}>
        <MdClose />
      </button>

      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="h-fit w-full max-w-2xl cursor-auto overflow-hidden rounded-lg bg-zinc-900 shadow-lg">
        {/* Image container with object-contain */}
        <div className="relative h-64 w-full md:h-96">
          {/* Adjust height as necessary */}
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            layout="fill"
            objectFit="contain" // Ensures image fits without cropping
            // placeholder="blur"
            // blurDataURL={blurDataURL}
            // priority // Ensures high priority for the image (preloads it)
            // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Serve different sizes based on screen width
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
    </div>
  );

  if (!isOpen) return null;

  return ReactDOM.createPortal(content, document.getElementById('__next'));
};
