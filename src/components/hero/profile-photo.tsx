import profileImageFull from '@/assets/photo/photo-original.avif';
import profileImage from '@/assets/photo/photo.avif';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useRef, useState } from 'react';

export function ProfilePhoto() {
  const imageRef = useRef<HTMLDivElement>(null);
  const preloadedImageRef = useRef<HTMLImageElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  // Preload full-resolution image after page has loaded
  useEffect(() => {
    // Use requestIdleCallback to preload when browser is idle, with fallback
    const preloadImage = () => {
      // Store in ref to prevent garbage collection
      preloadedImageRef.current = new Image();
      preloadedImageRef.current.src = profileImageFull;
    };

    if ('requestIdleCallback' in window) {
      const idleId = requestIdleCallback(preloadImage, { timeout: 3000 });
      return () => cancelIdleCallback(idleId);
    } else {
      // Fallback: preload after a short delay
      const timeoutId = setTimeout(preloadImage, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div className='w-fit shrink-0' style={{ perspective: '1000px' }}>
      <div
        ref={imageRef}
        className='relative w-fit transition-transform duration-150 ease-out'
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card container with subtle border */}
        <div className='border-border/30 bg-muted/50 relative w-fit rounded-lg border p-0.5'>
          {/* Front face - the image */}
          <button
            type='button'
            className='relative z-10 block cursor-pointer rounded-md border-none bg-transparent p-0'
            onClick={() => setIsLightboxOpen(true)}
            aria-label='View full size photo'
          >
            <img
              src={profileImage}
              alt='Renke'
              className='block h-64 w-64 rounded-md object-cover md:h-80 md:w-80'
            />
          </button>

          {/* Shine effect on front */}
          <div
            className='pointer-events-none absolute inset-0.5 z-20 hidden rounded-md md:block'
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
            className='absolute top-0 right-0 hidden h-full w-1 rounded-r-lg md:block'
            style={{
              transform: 'translateX(100%) rotateY(90deg)',
              transformOrigin: 'left',
              background: 'linear-gradient(to right, #1f2937, #2d3748)',
            }}
          />

          {/* Card edge - bottom side */}
          <div
            className='absolute bottom-0 left-0 hidden h-1 w-full rounded-b-lg md:block'
            style={{
              transform: 'translateY(100%) rotateX(-90deg)',
              transformOrigin: 'top',
              background: 'linear-gradient(to bottom, #1f2937, #2d3748)',
            }}
          />

          {/* Card edge - left side */}
          <div
            className='absolute top-0 left-0 hidden h-full w-1 rounded-l-lg md:block'
            style={{
              transform: 'translateX(-100%) rotateY(-90deg)',
              transformOrigin: 'right',
              background: 'linear-gradient(to left, #1f2937, #2d3748)',
            }}
          />

          {/* Card edge - top side */}
          <div
            className='absolute top-0 left-0 hidden h-1 w-full rounded-t-lg md:block'
            style={{
              transform: 'translateY(-100%) rotateX(90deg)',
              transformOrigin: 'bottom',
              background: 'linear-gradient(to top, #1f2937, #2d3748)',
            }}
          />

          {/* Back face */}
          <div
            className='absolute inset-0 hidden rounded-lg md:block'
            style={{
              transform: 'translateZ(-4px)',
              background: '#1a1a2e',
            }}
          />
        </div>

        {/* Dynamic shadow */}
        <div
          className='absolute -z-10 hidden rounded-xl bg-black/40 blur-xl md:block'
          style={{
            inset: '10%',
            transform: `translateX(${tilt.rotateY * 2}px) translateY(${-tilt.rotateX * 2 + 15}px) translateZ(-50px)`,
          }}
        />
      </div>

      {/* Image lightbox modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent
          className='max-w-[90vw] border-none bg-transparent p-0 shadow-none sm:max-w-fit [&>button]:text-white/70 [&>button]:hover:text-white'
          overlayClassName='bg-black/90 backdrop-blur-sm'
          showCloseButton
        >
          <DialogTitle className='sr-only'>Profile photo of Renke</DialogTitle>
          <img
            src={profileImageFull}
            alt='Renke - Full resolution'
            className='max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl'
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
