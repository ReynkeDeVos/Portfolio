import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

const CodeBlockWithCopy = ({ code }) => {
  const [tooltipText, setTooltipText] = useState('');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setTooltipText('Copied!');
    setCopied(true);

    // Reset tooltip and animation after 2 seconds
    setTimeout(() => {
      setTooltipText('');
      setCopied(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    if (!copied) {
      setTooltipText('Copy to clipboard');
    }
  };

  const handleMouseLeave = () => {
    if (!copied) {
      setTooltipText('');
    }
  };

  return (
    <div className="relative mb-4 flex items-center">
      <pre className="flex-grow touch-pan-x overflow-x-auto rounded bg-zinc-800 p-4 text-blue-400">
        <code>{code}</code>
      </pre>
      <button
        aria-label="Copy code to clipboard"
        className={`ml-2 rounded p-2 text-white transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          copied ? 'animate-copied' : 'hover:scale-110'
        }`}
        onClick={copyToClipboard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <FiCopy size={20} />
      </button>
      {tooltipText && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2 transform rounded bg-zinc-700 px-2 py-1 text-xs text-white shadow-lg">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default CodeBlockWithCopy;
