import { useEffect, useRef, useState } from 'react';

import profileImage from '@/assets/photo/photo.avif';

export function ProfilePhoto() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from image center (normalized -1 to 1)
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Subtle tilt (max 8 degrees)
      const maxTilt = 8;
      setTilt({
        rotateX: -deltaY * maxTilt,
        rotateY: deltaX * maxTilt,
      });
    };

    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='shrink-0' style={{ perspective: '1000px' }}>
      <div
        ref={imageRef}
        className='relative transition-transform duration-150 ease-out'
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card container with subtle border */}
        <div className='relative rounded-lg border border-gray-700/30 bg-gray-800/50 p-0.5'>
          {/* Front face - the image */}
          <img
            src={profileImage}
            alt='Renke'
            className='relative z-10 h-64 w-64 rounded-md object-cover md:h-80 md:w-80'
          />

          {/* Shine effect on front */}
          <div
            className='pointer-events-none absolute inset-0.5 z-20 rounded-md'
            style={{
              background: `linear-gradient(
                ${135 + tilt.rotateY * 5}deg,
                rgba(255,255,255,${0.08 + Math.abs(tilt.rotateY) * 0.01}) 0%,
                transparent 60%
              )`,
            }}
          />

          {/* Card edge - right side */}
          <div
            className='absolute top-0 right-0 h-full w-1 rounded-r-lg'
            style={{
              transform: 'translateX(100%) rotateY(90deg)',
              transformOrigin: 'left',
              background: 'linear-gradient(to right, #1f2937, #2d3748)',
            }}
          />

          {/* Card edge - bottom side */}
          <div
            className='absolute bottom-0 left-0 h-1 w-full rounded-b-lg'
            style={{
              transform: 'translateY(100%) rotateX(-90deg)',
              transformOrigin: 'top',
              background: 'linear-gradient(to bottom, #1f2937, #2d3748)',
            }}
          />

          {/* Card edge - left side */}
          <div
            className='absolute top-0 left-0 h-full w-1 rounded-l-lg'
            style={{
              transform: 'translateX(-100%) rotateY(-90deg)',
              transformOrigin: 'right',
              background: 'linear-gradient(to left, #1f2937, #2d3748)',
            }}
          />

          {/* Card edge - top side */}
          <div
            className='absolute top-0 left-0 h-1 w-full rounded-t-lg'
            style={{
              transform: 'translateY(-100%) rotateX(90deg)',
              transformOrigin: 'bottom',
              background: 'linear-gradient(to top, #1f2937, #2d3748)',
            }}
          />

          {/* Back face */}
          <div
            className='absolute inset-0 rounded-lg'
            style={{
              transform: 'translateZ(-4px)',
              background: '#1a1a2e',
            }}
          />
        </div>

        {/* Dynamic shadow */}
        <div
          className='absolute -z-10 rounded-xl bg-black/40 blur-xl'
          style={{
            inset: '10%',
            transform: `translateX(${tilt.rotateY * 2}px) translateY(${-tilt.rotateX * 2 + 15}px) translateZ(-50px)`,
          }}
        />
      </div>
    </div>
  );
}

