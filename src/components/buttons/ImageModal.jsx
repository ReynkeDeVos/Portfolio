import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { MdClose } from 'react-icons/md'; // Import the close icon

const ImageModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <motion.div
            className="relative w-full max-w-6xl cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image itself
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}>
            <Image
              src="/project-imgs/blurry-cut.avif" // The same image as used earlier
              alt="Chromium on Wayland vs XWayland in 2019"
              width={1200} // Use actual width of the image
              height={612} // Use actual height of the image
              className="rounded-lg"
            />

            {/* Close button placed very close to the image */}
            <button
              className="absolute -top-12 right-2 text-xl text-zinc-300 transition-colors hover:text-indigo-300"
              onClick={() => setIsOpen(false)}>
              <MdClose size={30} /> {/* Close icon with a size of 30px */}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
