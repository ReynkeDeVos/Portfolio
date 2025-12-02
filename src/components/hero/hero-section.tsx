import { useEffect, useRef, useState } from 'react';

import profileImage from '@/assets/photo/photo.avif';

import { SocialLinks } from '../social-links/social-links';

export function HeroSection() {
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
    <section className='mb-16 flex flex-col gap-12 md:flex-row md:items-start md:justify-between'>
      <div className='flex-1'>
        <h1 className='mb-4 text-5xl tracking-tight md:text-6xl'>hi, Renke here.</h1>

        <pre className='mb-6 rounded-lg bg-[#12121a] p-4 text-base whitespace-pre-wrap'>
          <code>
            <span className='text-purple-400'>const</span> <span className='text-blue-400'>me</span>{' '}
            = [
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;Full-Stack Dev&quot;</span>,
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;Instructor at WBS Coding School&quot;</span>,
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;Ultra runner&quot;</span>,
            <br />
            {'  '}
            <span className='text-yellow-300'>&quot;I use Arch btw&quot;</span>{' '}
            {/** biome-ignore lint/suspicious/noCommentText: <explanation> */}
            <span className='text-gray-500'>// 20+ years</span>
            <br />
            ];
          </code>
        </pre>

        <p className='mb-8 text-lg text-gray-400'>Germany, Hamburg</p>

        <SocialLinks variant='hero' />
      </div>

      {/* Profile Image with 3D tilt effect */}
      <div className='shrink-0' style={{ perspective: '1000px' }}>
        <div
          ref={imageRef}
          className='relative transition-transform duration-150 ease-out'
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src={profileImage}
            alt='Renke'
            className='h-64 w-64 rounded-lg object-cover shadow-2xl md:h-80 md:w-80'
          />
          {/* Subtle shine effect */}
          <div
            className='pointer-events-none absolute inset-0 rounded-lg'
            style={{
              background: `linear-gradient(
                ${135 + tilt.rotateY * 5}deg,
                rgba(255,255,255,${0.05 + Math.abs(tilt.rotateY) * 0.01}) 0%,
                transparent 50%
              )`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
