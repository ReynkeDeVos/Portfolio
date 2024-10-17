import { AnimatePresence, motion } from "framer-motion";
import { FiClipboard } from "react-icons/fi";
import { useState } from "react";

// CodeBlockWithCopy component
const CodeBlockWithCopy = ({ code }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative flex items-start mb-2">
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded overflow-x-auto flex-grow touch-pan-x">
        <code>{code}</code>
      </pre>
      <button
        className="ml-2 text-white p-1 mt-2"
        onClick={copyToClipboard}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}>
        <FiClipboard size={18} />
      </button>
      {tooltipVisible && (
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-zinc-700 text-white text-xs p-1 rounded">
          Copy to clipboard
        </div>
      )}
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `gsettings set org.gnome.mutter experimental-features '["scale-monitor-framebuffer", "xwayland-native-scaling"]'`
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer">
          <motion.div
            initial={{ scale: 0.5, rotate: "12deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0.5, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            className="bg-zinc-800 p-4 rounded-md shadow-md relative w-full max-w-md mx-4 cursor-default">
            <button
              className="absolute top-2 right-2 text-white p-2 transition-all duration-300 hover:bg-zinc-700 rounded-md"
              onClick={() => setIsOpen(false)}>
              Close
            </button>
            <h2 className="text-lg font-bold text-indigo-400 mb-2">GSettings Command</h2>
            <p className="text-zinc-100 mb-2 text-sm">
              Use the following command to set GNOME's experimental features for better scaling:
            </p>
            <div className="relative flex items-start">
              <pre className="bg-zinc-900 text-blue-400 p-2 rounded overflow-x-auto flex-grow touch-pan-x">
                <code>
                  gsettings set org.gnome.mutter experimental-features '["scale-monitor-framebuffer",
                  "xwayland-native-scaling"]'
                </code>
              </pre>
              <button
                className="ml-2 text-white p-1 mt-2"
                onClick={copyToClipboard}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}>
                <FiClipboard size={18} />
              </button>
              {tooltipVisible && (
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-zinc-700 text-white text-xs p-1 rounded">
                  Copy to clipboard
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AdjustingProgramsToUseWayland = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-zinc-300 relative mx-auto">
      <h2 className="text-2xl font-bold mt-8 mb-2">Introduction</h2>
      <p className="mb-2">
        Okay, picture this: you're sitting there, feeling like a tech wizard with your Arch Linux setup, running GNOME
        with fractional scaling enabled. You’ve got the fancy{" "}
        <span
          className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono relative cursor-pointer"
          onClick={() => setIsOpen(true)}>
          gsettings
        </span>{" "}
        command going on, allowing you to scale your desktop to 125%, 150%, or even 175%. Life should be good, right?
        But wait! Some of your apps look like they’ve been put through an Instagram blur filter, and not in a good way.
        😠
      </p>
      <p className="mb-2">
        Turns out, XWayland is the culprit—this compatibility layer just doesn’t understand the concept of making things
        look crisp. So, naturally, I had to do what any self-respecting Arch Linux user would do:{" "}
        <strong>configure it!</strong>
      </p>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <p className="mb-2">
        Adjusting the programs to run natively on Wayland and boom—sharp visuals, better hardware acceleration, and a
        much happier me. Below are the steps I took to make this magic happen, so you too can escape the dreaded
        XWayland blur and join the crispy-clear side of Wayland.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-indigo-400">
        Here are the instructions for configuring popular programs to run on Wayland
      </h2>

      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">
        1. Google Chrome/Chromium/other Chromium based browsers
      </h3>
      <p className="mb-2">
        To run Google Chrome or Chromium natively on Wayland, create a{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">chrome-flags.conf</span> (or{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">chromium-flags.conf</span> for
        Chromium) in your configuration directory and add:
      </p>
      <CodeBlockWithCopy
        code={`--ozone-platform=wayland
--enable-features=VaapiVideoDecodeLinuxGL`}
      />
      <p className="mb-2">
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">--ozone-platform=wayland</span>:
        Forces Chrome/Chromium to use Wayland.
      </p>
      <p className="mb-2">
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">
          --enable-features=VaapiVideoDecodeLinuxGL
        </span>
        : Enables VA-API (hardware video acceleration) for using your GPU when watching videos in your browser.
      </p>
      <p className="mb-2">Additional flags:</p>
      <CodeBlockWithCopy code={`--enable-features=TouchpadOverscrollHistoryNavigation`} />
      <p className="mb-2">Enables touchpad navigation (note: conflicts with VA-API).</p>
      <p className="mb-4">
        Enable “Overlay Scrollbars” by visiting{" "}
        <a href="chrome://flags/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
          chrome://flags/
        </a>{" "}
        for a visually sleeker scrollbar experience.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">2. Firefox</h3>
      <p className="mb-4">
        Firefox works out of the box on Wayland, with VA-API support, and touchpad navigation enabled by default.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">3. Text Editors and IDEs</h3>
      <p className="mb-2">
        <strong>Visual Studio Code:</strong> Create or modify{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">code-flags.conf</span> and add:
      </p>
      <CodeBlockWithCopy code={`--ozone-platform=wayland`} />
      <p className="mb-2">
        Alternatively, use{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">--ozone-platform-hint=auto</span> for
        automatic switching between X11 and Wayland.
      </p>
      <p className="mb-2">
        <strong>Zed Text Editor:</strong> The Zed text editor works out of the box with Wayland.
      </p>
      <p className="mb-2">
        <strong>JetBrains IntelliJ IDEs:</strong> JetBrains IntelliJ IDEs are still working on proper Wayland support.
        Currently, input method support, drag and drop, window decorations, and hardware acceleration are inconsistent.
        It is recommended to use X11 if you rely on JetBrains IntelliJ IDEs.
      </p>
      <p className="mb-2">
        To preview Wayland support, go to the main menu, select{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">Help | Edit Custom VM Options</span>,
        and add:
      </p>
      <CodeBlockWithCopy code={`-Dawt.toolkit.name=WLToolkit`} />
      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">4. Insomnia and Signal Desktop</h3>
      <p className="mb-2">
        <strong>Insomnia:</strong> Edit the desktop file (easily done via{" "}
        <a
          href="https://github.com/bluesabre/menulibre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          Menu Editor (menulibre)
        </a>
        ) and add{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">--ozone-platform=wayland</span>.
      </p>
      <p className="mb-2">
        <strong>Signal Desktop:</strong> Follow the same procedure as Insomnia. Optionally, add{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">--use-tray-icon</span> for improved
        tray integration if using the{" "}
        <a
          href="https://extensions.gnome.org/extension/615/appindicator-support/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          AppIndicator and KStatusNotifierItem Support
        </a>
        &nbsp;GNOME extension.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">5. MongoDB Compass</h3>
      <p className="mb-2">Update the desktop file to:</p>
      <CodeBlockWithCopy
        code={`env MONGODB_COMPASS_TEST_LOG_DIR=/dev/null mongodb-compass
--enable-features=UseOzonePlatform,WaylandWindowDecorations
--ozone-platform=wayland --ignore-additional-command-line-flags %U`}
      />

      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">6. Spotify</h3>
      <p className="mb-2">Edit the desktop file to include:</p>
      <CodeBlockWithCopy code={`spotify --enable-features=UseOzonePlatform --ozone-platform=wayland %U`} />
      <p className="mb-4">
        Note: Spotify will have a blue app header when running this way. Alternatively, you can install it as a{" "}
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          web app
        </a>
        .
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2 text-indigo-300">7. Flatpak Applications</h3>
      <p className="mb-2">
        For Flatpak apps, install{" "}
        <a
          href="https://flathub.org/apps/com.github.tchx84.Flatseal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          Flatseal
        </a>{" "}
        to manage permissions. Open Flatseal, select All Applications, and enable the Wayland windowing system{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">socket=wayland</span>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2">Conclusion</h2>
      <p className="mb-2">
        By configuring your applications to run on Wayland, you can significantly improve visual quality and enjoy a
        more consistent experience, especially with fractional scaling on GNOME.
      </p>
      <p className="mb-8">Happy tweaking!</p>
    </div>
  );
};

export default AdjustingProgramsToUseWayland;
