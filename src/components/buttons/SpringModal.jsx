import { AnimatePresence, motion } from "framer-motion";
import CodeBlockWithCopy from "./CodeBlockWithCopy";

const MotionDiv = motion.create("div");

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <MotionDiv
            className="bg-zinc-800 p-4 rounded-md shadow-md relative w-full max-w-md mx-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.5, rotate: "12deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0.5, rotate: "0deg" }}>
            <button
              className="absolute top-2 right-2 text-white p-2 transition-all duration-300 hover:bg-zinc-700 rounded-md"
              onClick={() => setIsOpen(false)}>
              Close
            </button>
            <h2 className="text-lg font-bold text-indigo-400 mb-2">GSettings Command</h2>
            <p className="text-zinc-100 mb-2 text-sm">
              Use the following command to set GNOME's experimental features for better scaling:
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
