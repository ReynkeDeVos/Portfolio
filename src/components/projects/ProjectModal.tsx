import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const content = (
    <div className="fixed inset-0 z-50 px-4 py-12 overflow-y-scroll flex justify-center items-start">
      {/* Overlay button: clicking this closes the modal */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label="Close modal"
        className="fixed inset-0 w-full h-full bg-zinc-950/50 backdrop-blur cursor-auto"
      ></button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 md:top-6 right-4 text-xl"
          aria-label="Close"
        >
          <MdClose />
        </button>

        <img
          className="w-full max-h-[40vh] object-contain object-top"
          src={imgSrc}
          alt={title}
        />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-indigo-300">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
            {modalContent}
          </div>

          <div>
            <p className="font-bold mb-2 text-xl">
              Project Links<span className="text-indigo-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                href={code}
                aria-label={`View the source code for ${title}`}
              >
                <AiFillGithub /> Source Code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                href={projectLink}
                aria-label={`View the live project for ${title}`}
              >
                <AiOutlineExport /> Live Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
