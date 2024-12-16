import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="mx-auto max-w-xl rounded-xl bg-zinc-800 px-8 py-12">
        <Reveal width="w-full">
          <h4 className="text-center text-4xl font-black md:text-5xl">
            Contact<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="my-8 text-center leading-relaxed text-zinc-300">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/rbrixel/"
              target="_blank"
              className="text-indigo-300 hover:underline"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              href="https://github.com/ReynkeDeVos"
              target="_blank"
              className="text-indigo-300 hover:underline"
              aria-label="GitHub Profile"
            >
              GitHub
            </Link>{" "}
            if that's more your speed.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:renke.brixel@gmail.com">
            <div className="mx-auto flex w-fit items-center justify-center gap-2 whitespace-normal text-lg transition-colors hover:text-indigo-300 md:text-2xl">
              <AiFillMail />
              <span>renke.brixel@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
