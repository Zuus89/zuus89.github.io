'use client';

import { useRef, useEffect } from 'react';

interface VideoThumbnailProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function VideoThumbnail({ src, alt, className = '' }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      className={`w-full rounded-md object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
