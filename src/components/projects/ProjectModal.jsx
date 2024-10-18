import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const MotionDiv = motion.create("div");

export const ProjectModal = ({ modalContent, projectLink, setIsOpen, imgSrc, isOpen, title, code, tech }) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }

    // Cleanup to reset overflow on unmount
    return () => {
      body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}>
      <button
        className="absolute top-4 md:top-6 text-xl right-4 text-zinc-300 hover:text-indigo-300 transition-colors"
        onClick={() => setIsOpen(false)}>
        <MdClose />
      </button>

      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto">
        {/* Image container with object-contain */}
        <div className="relative w-full h-64 md:h-96">
          {" "}
          {/* Adjust height as necessary */}
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            layout="fill"
            objectFit="contain" // Ensures image fits without cropping
            blurDataURL={imgSrc.endsWith("pokebattle.webp")}
          />
        </div>

        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-indigo-300">{tech.join(" - ")}</div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">{modalContent}</div>

          <div>
            <p className="font-bold mb-2 text-xl">
              Project Links<span className="text-indigo-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                href={code}>
                <AiFillGithub /> Source Code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                href={projectLink}>
                <AiOutlineExport /> Live Project
              </Link>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );

  if (!isOpen) return null;

  return ReactDOM.createPortal(content, document.getElementById("__next"));
};
