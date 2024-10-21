import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';

const ImageModal = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'scroll';
    }

    return () => {
      body.style.overflowY = 'scroll'; // Ensure body scroll is reset when modal closes
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
        <motion.div
          className="relative w-full max-w-6xl cursor-default"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image
          initial={{ scale: 0.5, rotate: '12deg' }}
          animate={{ scale: isOpen ? 1 : 0.5, rotate: isOpen ? '0deg' : '12deg' }}
          exit={{ scale: 0.5, rotate: '0deg' }}
          transition={{ duration: 0.3 }}>
          <Image
            src="/project-imgs/blurry-cut.avif"
            alt="Chromium on Wayland vs XWayland in 2019"
            width={1200} // Use actual width of the image
            height={612} // Use actual height of the image
            sizes="100svw"
            className="rounded-lg"
            style={{ userSelect: 'none' }}
            priority
          />
          {/* Close button with hover effect */}
          <button
            className="absolute -top-12 right-2 text-xl text-zinc-300 transition-colors hover:text-indigo-300"
            onClick={() => setIsOpen(false)}>
            <MdClose size={30} /> {/* Close icon */}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
