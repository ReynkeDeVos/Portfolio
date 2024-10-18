import { useState } from 'react';
import CodeBlockWithCopy from '../../buttons/CodeBlockWithCopy';
import SpringModal from '../../buttons/SpringModal';

const AdjustingProgramsToUseWayland = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-auto text-zinc-300">
      <h2 className="mb-2 mt-8 text-2xl font-bold">Introduction</h2>
      <p className="mb-2">
        Okay, picture this: you're sitting there, feeling like a tech wizard 🧙‍♂️ with your Arch setup, running GNOME with
        fractional scaling enabled with the fancy{' '}
        <span
          className="relative cursor-pointer rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100"
          onClick={() => setIsOpen(true)}>
          gsettings
        </span>{' '}
        command going on, allowing you to scale your desktop to 125%, 150%, or even 175%. Life should be good, right?
        But wait! Some of your apps look like they’ve been put through an Instagram blur filter, and not in a good way.
        😠
      </p>
      <p className="mb-2">
        Turns out, XWayland is the culprit—this compatibility layer just doesn’t understand the concept of making things
        look crisp. So, naturally, I had to do what any self-respecting Arch Linux user would do:{' '}
        <strong>configure it!</strong> 🛠️
      </p>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <p className="mb-2">
        Adjusting the launch settings of the programs to run natively on Wayland and boom 💥—sharp visuals, better
        hardware acceleration, and a much happier me. Below are the steps I took to make this magic happen, so you too
        can escape the dreaded XWayland blur and join the crispy-clear side of Wayland. 😎 To be fair, KDE Plasma 6 &
        GNOME 47 have made great strides in improving XWayland support, but nothing beats native Wayland.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-bold text-indigo-400">
        How to configure popular programs to run on Wayland
      </h2>

      {/* Section 1: Google Chrome/Chromium */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">
        1. Google Chrome/Chromium/Other Chromium-Based Browsers
      </h3>
      <p className="mb-2">
        To run Google Chrome or Chromium natively on Wayland, create a{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">chrome-flags.conf</span> (or{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">chromium-flags.conf</span> for
        Chromium) in your <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">~/.config</span>{' '}
        directory and add:
      </p>
      <CodeBlockWithCopy
        code={`--ozone-platform=wayland
--enable-features=VaapiVideoDecodeLinuxGL`}
      />
      <p className="mb-2">
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">--ozone-platform=wayland</span>:
        Forces Chrome/Chromium to use Wayland.
      </p>
      <p className="mb-2">
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">
          --enable-features=VaapiVideoDecodeLinuxGL
        </span>
        : Enables VA-API (hardware video acceleration) for using your GPU when watching videos in your browser.
      </p>
      <p className="mb-2">Additional flags:</p>
      <CodeBlockWithCopy code={`--enable-features=TouchpadOverscrollHistoryNavigation`} />
      <p className="mb-2">Enables touchpad navigation (note: conflicts with VA-API).</p>
      <p className="mb-4">
        Enable “Overlay Scrollbars” by visiting <code>chrome://flags/</code> for a visually sleeker scrollbar
        experience.
      </p>

      {/* Section 2: Firefox */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">2. Firefox</h3>
      <p className="mb-4">
        Firefox works out of the box on Wayland, with VA-API support and touchpad navigation enabled by default. 🎉
      </p>

      {/* Section 3: Text Editors and IDEs */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">3. Text Editors and IDEs</h3>
      <p className="mb-2">
        <strong>Visual Studio Code:</strong> Create or modify{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">code-flags.conf</span> and add:
      </p>
      <CodeBlockWithCopy code={`--ozone-platform=wayland`} />
      <p className="mb-2">
        Alternatively, use{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">--ozone-platform-hint=auto</span> for
        automatic switching between X11 and Wayland.
      </p>
      <p className="mb-2">
        <strong>Zed Text Editor:</strong> The Zed text editor works out of the box with Wayland. ⚡
      </p>
      <p className="mb-2">
        <strong>JetBrains IntelliJ IDEs:</strong> JetBrains IntelliJ IDEs are still working on proper Wayland support.
        Currently, input method support, drag and drop, window decorations, and hardware acceleration are inconsistent.
        It is recommended to use X11 if you rely on JetBrains IntelliJ IDEs.
      </p>
      <p className="mb-2">
        To preview Wayland support, go to the main menu, select{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">Help | Edit Custom VM Options</span>,
        and add:
      </p>
      <CodeBlockWithCopy code={`-Dawt.toolkit.name=WLToolkit`} />

      {/* Section 4: Insomnia and Signal Desktop */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">4. Insomnia and Signal Desktop</h3>
      <p className="mb-2">
        <strong>Insomnia:</strong> Edit the desktop file (easily done via{' '}
        <a
          href="https://github.com/bluesabre/menulibre"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          Menu Editor (menulibre)
        </a>
        ) and add{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">--ozone-platform=wayland</span>.
      </p>
      <p className="mb-2">
        <strong>Signal Desktop:</strong> Follow the same procedure as Insomnia. Optionally, add{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">--use-tray-icon</span> for improved
        tray integration if using the{' '}
        <a
          href="https://extensions.gnome.org/extension/615/appindicator-support/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          AppIndicator and KStatusNotifierItem Support
        </a>{' '}
        GNOME extension.
      </p>

      {/* Section 5: MongoDB Compass */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">5. MongoDB Compass</h3>
      <p className="mb-2">Update the desktop file to:</p>
      <CodeBlockWithCopy
        code={`env MONGODB_COMPASS_TEST_LOG_DIR=/dev/null mongodb-compass
--enable-features=UseOzonePlatform,WaylandWindowDecorations
--ozone-platform=wayland --ignore-additional-command-line-flags %U`}
      />

      {/* Section 6: Spotify */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">6. Spotify</h3>
      <p className="mb-2">Edit the desktop file to include:</p>
      <CodeBlockWithCopy code={`spotify --enable-features=UseOzonePlatform --ozone-platform=wayland %U`} />
      <p className="mb-4">
        Note: Spotify will have a blue app header when running this way. Alternatively, you can install it as a{' '}
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          web app
        </a>
        .
      </p>

      {/* Section 7: Flatpak Applications */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">7. Flatpak Applications</h3>
      <p className="mb-2">
        For Flatpak apps, install{' '}
        <a
          href="https://flathub.org/apps/com.github.tchx84.Flatseal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline">
          Flatseal
        </a>{' '}
        to manage permissions. Open Flatseal, select All Applications, and enable the Wayland windowing system{' '}
        <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-zinc-100">socket=wayland</span>.
      </p>

      {/* Section 8: Steam */}
      <h3 className="mb-2 mt-6 text-xl font-bold text-indigo-300">8. Steam</h3>
      <p className="mb-2">
        Unfortunately, Steam is not Wayland-compatible yet. 😢 You'll still have to deal with XWayland, meaning it will
        remain blurry or won't scale properly for the time being. Let's hope Valve releases updates soon!
      </p>

      {/* Conclusion */}
      <h2 className="mb-2 mt-8 text-2xl font-bold">Conclusion</h2>
      <p className="mb-2">
        By configuring your applications to run on Wayland, you can significantly improve visual quality and enjoy a
        more consistent experience, especially with fractional scaling on GNOME. 🚀
      </p>
      <p className="mb-8">Happy tweaking! 🧑‍💻</p>
    </div>
  );
};

export default AdjustingProgramsToUseWayland;
