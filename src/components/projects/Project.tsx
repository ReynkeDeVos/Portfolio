import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import Reveal from "../util/Reveal";
import { ProjectModal } from "./ProjectModal";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({ modalContent, projectLink, description, imgSrc, title, code, tech }: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}>
        <button
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden select-none"
          aria-label={`Open details about the ${title} project`}>
          <img
            src={imgSrc}
            alt={`The ${title} project.`}
            className={`w-full h-full object-cover object-top transition-transform duration-300 ${
              hovered ? "scale-105 rotate-1" : "scale-100 rotate-0"
            }`}
          />
        </button>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%-150px)]">{title}</h4>
              <div className="w-full h-px bg-zinc-600" />

              <Link href={code} target="_blank" rel="nofollow" aria-label={`View the source code for ${title}`}>
                <AiFillGithub className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow" aria-label={`View the live project for ${title}`}>
                <AiOutlineExport className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 text-sm text-indigo-300 my-2">{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <button
                type="button"
                className="inline-block text-sm text-indigo-300 cursor-pointer hover:underline focus:underline"
                onClick={() => setIsOpen(true)}
                aria-label={`Learn more details about ${title}`}>
                Learn more {">"}
              </button>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
