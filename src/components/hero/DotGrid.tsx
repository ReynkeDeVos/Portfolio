import { animate, stagger } from "animejs";

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e: any) => {
    animate(".dot-point", {
      scale: [
        { to: 1.35, ease: "outSine", duration: 250 },
        { to: 1, ease: "inOutQuad", duration: 500 },
      ],
      translateY: [
        { to: -15, ease: "outSine", duration: 250 },
        { to: 1, ease: "inOutQuad", duration: 500 },
      ],
      opacity: [
        { to: 1, ease: "outSine", duration: 250 },
        { to: 0.5, ease: "inOutQuad", duration: 500 },
      ],
      delay: stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: parseInt(e.target.dataset.index),
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-zinc-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-linear-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-indigo-500 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%]"
    >
      {dots}
    </div>
  );
};

export default DotGrid;
