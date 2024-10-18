import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";
import Image from "next/image";

const MotionDiv = motion.create("div");

export const Project = ({ modalContent, projectLink, description, imgSrc, title, code, tech, blurDataURL }) => {
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
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
          style={{
            transform: hovered ? "scale(1.05) rotate(2deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          onClick={() => setIsOpen(true)}>
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            fill
            className="absolute top-0 left-0 object-cover object-top"
            placeholder="blur"
            blurDataURL={blurDataURL}
            unoptimized={imgSrc.endsWith("pokebattle.webp")}
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">{title}</h4>
              <div className="w-full h-[1px] bg-zinc-600" />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow">
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
              <span className="inline-block text-sm text-indigo-300 cursor-pointer" onClick={() => setIsOpen(true)}>
                Learn more {">"}
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
