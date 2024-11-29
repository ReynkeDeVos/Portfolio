import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import CodeBlockWithCopy from './CodeBlockWithCopy';

const MotionDiv = motion.create('div');

const SpringModal = ({ isOpen, setIsOpen }) => {
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
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <MotionDiv
            className="relative mx-4 w-full max-w-md cursor-default rounded-md bg-zinc-800 p-4 shadow-md"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.5, rotate: '12deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0.5, rotate: '0deg' }}>
            <button
              className="absolute right-2 top-2 rounded-md p-2 text-white transition-all duration-300 hover:bg-zinc-700"
              onClick={() => setIsOpen(false)}>
              Close
            </button>
            <h2 className="mb-2 text-lg font-bold text-indigo-400">GSettings Command</h2>
            <p className="mb-2 text-sm text-zinc-100">
              Use the following command to set GNOME&apos;s experimental features for better scaling:
            </p>
            <CodeBlockWithCopy
              code={`gsettings set org.gnome.mutter experimental-features '["scale-monitor-framebuffer", "xwayland-native-scaling"]'`}
            />
          </MotionDiv>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
