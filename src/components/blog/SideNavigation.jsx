import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NUM_LINES = 30; // Adjust this as needed

const MotionNav = motion.create("nav");

const SideNavigation = ({ blogEntries, onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseY = useMotionValue(Infinity);

  return (
    <MotionNav
      onMouseMove={(e) => {
        mouseY.set(e.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className="fixed right-0 top-0 flex h-screen flex-col items-end justify-between py-4 pl-8 z-50">
      {Array.from(Array(NUM_LINES).keys()).map((i) => {
        const linkContent = blogEntries[i];

        return (
          <LinkLine
            key={i}
            title={linkContent?.date}
            isHovered={isHovered}
            mouseY={mouseY}
            onClick={() => linkContent && onNavigate(linkContent.id)}
          />
        );
      })}
    </MotionNav>
  );
};

const SPRING_OPTIONS = {
  mass: 1,
  stiffness: 200,
  damping: 15,
};

const LinkLine = ({ mouseY, isHovered, title, onClick }) => {
  const ref = useRef(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();

    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 100, 15]);
  const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

  const linkWidth = useSpring(25, SPRING_OPTIONS);

  useEffect(() => {
    if (isHovered) {
      linkWidth.set(150);
    } else {
      linkWidth.set(25);
    }
  }, [isHovered, linkWidth]);

  if (title) {
    return (
      <button onClick={onClick}>
        <motion.div
          ref={ref}
          className="group relative bg-neutral-500 transition-colors hover:bg-indigo-300"
          style={{ width: linkWidth, height: 2 }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute left-0 top-0 z-10 w-full pt-2 font-bold uppercase text-neutral-500 transition-colors group-hover:text-indigo-300">
            {title}
          </motion.span>
        </motion.div>
      </button>
    );
  } else {
    return <motion.div ref={ref} className="relative bg-neutral-500" style={{ width: lineWidth, height: 2 }} />;
  }
};

export default SideNavigation;
