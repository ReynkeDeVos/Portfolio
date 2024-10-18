import { useAnimation, useInView, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { ProjectModal } from './ProjectModal';
import Reveal from '../util/Reveal';
import NextImage from 'next/image'; // Renamed import to avoid conflict with commonjs Image name

const MotionDiv = motion.create('div');

export const Project = ({ modalContent, projectLink, description, imgSrc, title, code, tech, blurDataURL }) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // This just kills performance of the modal in a really bad way! Images are not cached anymore!
  // // Preload the image using the native Image constructor
  // useEffect(() => {
  //   const imagesToPreload = [imgSrc];

  //   imagesToPreload.forEach((src) => {
  //     const img = new Image(); // Using the native Image constructor
  //     img.src = src;
  // }, [imgSrc]);

  return (
    <>
      <MotionDiv
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-zinc-700"
          style={{
            transform: hovered ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          onClick={() => setIsOpen(true)}>
          <NextImage
            src={imgSrc} // Using Next.js's Image component with the updated import
            alt={`An image of the ${title} project.`}
            fill
            className="absolute left-0 top-0 object-cover object-top"
            placeholder="blur"
            blurDataURL={blurDataURL}
            // priority // Ensures high priority for the image (preloads it)
            // sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px" // Serve different sizes based on screen width
            unoptimized={imgSrc.endsWith('pokebattle.webp')}
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex w-full items-center gap-2">
              <h4 className="max-w-[calc(100%_-_150px)] shrink-0 text-lg font-bold">{title}</h4>
              <div className="h-[1px] w-full bg-zinc-600" />

              <Link href={code} target="_blank" rel="nofollow" aria-label="View Source Code on GitHub">
                <AiFillGithub className="text-xl text-zinc-300 transition-colors hover:text-indigo-300" />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow" aria-label="View Live Project">
                <AiOutlineExport className="text-xl text-zinc-300 transition-colors hover:text-indigo-300" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="my-2 flex flex-wrap gap-4 text-sm text-indigo-300">{tech.join(' - ')}</div>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              {description}{' '}
              <span className="inline-block cursor-pointer text-sm text-indigo-300" onClick={() => setIsOpen(true)}>
                Learn more {'>'}
              </span>
            </p>
          </Reveal>
        </div>
      </MotionDiv>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
        blurDataURL={blurDataURL}
      />
    </>
  );
};
