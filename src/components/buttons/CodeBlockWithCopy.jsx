import { useState } from "react";
import { FiClipboard } from "react-icons/fi";

const CodeBlockWithCopy = ({ code }) => {
  const [tooltipText, setTooltipText] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setTooltipText("Copied!");
    setCopied(true);

    // Reset tooltip and animation after 2 seconds
    setTimeout(() => {
      setTooltipText("");
      setCopied(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    if (!copied) {
      setTooltipText("Copy to clipboard");
    }
  };

  const handleMouseLeave = () => {
    if (!copied) {
      setTooltipText("");
    }
  };

  return (
    <div className="relative flex items-center mb-4">
      <pre className="bg-zinc-800 text-blue-400 p-4 rounded overflow-x-auto flex-grow touch-pan-x">
        <code>{code}</code>
      </pre>
      <button
        aria-label="Copy code to clipboard"
        className={`ml-2 text-white p-2 rounded transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          copied ? "animate-copied" : "hover:scale-110"
        }`}
        onClick={copyToClipboard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <FiClipboard size={20} />
      </button>
      {tooltipText && (
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-zinc-700 text-white text-xs py-1 px-2 rounded shadow-lg">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default CodeBlockWithCopy;
