import { useState } from "react";

const AdjustingProgramsToUseWayland = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="text-zinc-300 relative">
      <h2 className="text-2xl font-bold mb-2">Introduction</h2>
      <p className="mb-4">
        Okay, picture this: you're sitting there, feeling like a tech wizard with your Arch setup, running GNOME with
        fractional scaling enabled. You’ve got the fancy{" "}
        <span
          className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono relative cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)}>
          gsettings
          {showTooltip && (
            <div className="absolute bg-zinc-800 text-zinc-100 text-sm p-2 rounded shadow-lg mt-1 z-10 -top-20 left-1/2 transform -translate-x-1/2 w-72 text-center">
              <div className="relative">
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-zinc-800 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
                gsettings set org.gnome.mutter experimental-features '["scale-monitor-framebuffer",
                "xwayland-native-scaling"]'
              </div>
            </div>
          )}
        </span>{" "}
        command going on, allowing you to scale your desktop to 125%, 150%, or even 175%. Life should be good, right?
        But wait! Some of your apps look like they’ve been put through an Instagram blur filter, and not in a good way.
        😠
      </p>
      <p className="mb-4">
        Turns out, XWayland is the culprit—this compatibility layer just doesn’t understand the concept of making things
        look crisp. So, naturally, I had to do what any self-respecting Arch Linux user would do: configure it myself.
      </p>
      <p className="mb-4">
        Adjusting the programs to run natively on Wayland and boom—sharp visuals, better hardware acceleration, and a
        much happier me. Below are the steps I took to make this magic happen, so you too can escape the dreaded
        XWayland blur and join the crispy-clear side of Wayland.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-indigo-400">
        Here are the instructions for configuring popular programs to run on Wayland.
      </h2>

      <h3 className="text-xl font-bold mb-2 text-indigo-300">
        1. Google Chrome/Chromium/other Chromium based browsers
      </h3>
      <p className="mb-4">
        To run Google Chrome or Chromium natively on Wayland, create a{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">chrome-flags.conf</span> (or{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">chromium-flags.conf</span> for
        Chromium) in your configuration directory and add:
      </p>
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded mb-4">
        <code>
          --ozone-platform=wayland
          <br />
          --enable-features=VaapiVideoDecodeLinuxGL
        </code>
      </pre>
      <p className="mb-4">
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">--ozone-platform=wayland</span>:
        Forces Chrome/Chromium to use Wayland.
      </p>
      <p className="mb-4">
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">
          --enable-features=VaapiVideoDecodeLinuxGL
        </span>
        : Enables VA-API (hardware video acceleration) for using your GPU when watching videos in you browser.
      </p>
      <p className="mb-4">Additional flags:</p>
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded mb-4">
        <code>--enable-features=TouchpadOverscrollHistoryNavigation</code>
      </pre>
      <p className="mb-4">Enables smooth touchpad navigation (note: conflicts with VA-API).</p>
      <p className="mb-4">
        Enable “Overlay Scrollbars” by visiting{" "}
        <a href="chrome://flags/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
          chrome://flags/
        </a>{" "}
        for a visually sleeker scrollbar experience.
      </p>

      <h3 className="text-xl font-bold mb-2 text-indigo-300">2. Firefox</h3>
      <p className="mb-4">
        Firefox works out of the box on Wayland, with VA-API support, and touchpad navigation enabled by default.
      </p>

      <h3 className="text-xl font-bold mb-2 text-indigo-300">3. Text Editors and IDEs</h3>
      <p className="mb-4">
        <strong>Visual Studio Code:</strong> Create or modify{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">code-flags.conf</span> and add:
      </p>
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded mb-4">
        <code>--ozone-platform=wayland</code>
      </pre>
      <p className="mb-4">
        Alternatively, use{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">--ozone-platform-hint=auto</span> for
        automatic switching between X11 and Wayland.
      </p>
      <p className="mb-4">
        <strong>Zed Text Editor:</strong> The Zed text editor works out of the box with Wayland.
      </p>
      <p className="mb-4">
        <strong>JetBrains IntelliJ IDEs:</strong> JetBrains IntelliJ IDEs are still working on proper Wayland support.
        Currently, input method support, drag and drop, window decorations, and hardware acceleration are inconsistent.
        It is recommended to use X11 if you rely on JetBrains IntelliJ IDEs.
      </p>
      <p className="mb-4">
        To preview Wayland support, go to the main menu, select{" "}
        <span className="bg-zinc-800 text-zinc-100 px-1 py-0.5 rounded font-mono">Help | Edit Custom VM Options</span>,
        and add:
      </p>
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded mb-4">
        <code>-Dawt.toolkit.name=WLToolkit</code>
      </pre>

      <h3 className="text-xl font-bold mb-2 text-indigo-300">4. Insomnia and Signal Desktop</h3>
      <p className="mb-4">
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
      <p className="mb-4">
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

      <h3 className="text-xl font-bold mb-2 text-indigo-300">5. MongoDB Compass</h3>
      <p className="mb-4">Update the desktop file to:</p>
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded mb-4">
        <code>
          env MONGODB_COMPASS_TEST_LOG_DIR=/dev/null mongodb-compass
          --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform=wayland
          --ignore-additional-command-line-flags %U
        </code>
      </pre>

      <h3 className="text-xl font-bold mb-2 text-indigo-300">6. Spotify</h3>
      <p className="mb-4">Edit the desktop file to include:</p>
      <pre className="bg-zinc-800 text-blue-400 p-2 rounded mb-4">
        <code>spotify --enable-features=UseOzonePlatform --ozone-platform=wayland %U</code>
      </pre>
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

      <h3 className="text-xl font-bold mb-2 text-indigo-300">7. Flatpak Applications</h3>
      <p className="mb-4">
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

      <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
      <p className="mb-4">
        By configuring your applications to run on Wayland, you can significantly improve visual quality and enjoy a
        more consistent experience, especially with fractional scaling on GNOME.
      </p>
      <p className="mb-4">Happy tweaking!</p>
    </div>
  );
};

export default AdjustingProgramsToUseWayland;
