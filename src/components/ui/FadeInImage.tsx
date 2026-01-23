"use client";
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { Skeleton } from './Skeleton';

interface FadeInImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function FadeInImage({
  className,
  containerClassName,
  alt,
  src,
  width,
  height,
  fill = false,
  priority = false,
  sizes
}: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  return (
    <div className={cn("relative overflow-hidden bg-stone-100", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        onLoad={handleLoad}
        onError={() => {
          setError(true);
          setIsLoaded(true);
        }}
        className={cn(
          "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isLoaded && !error
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-md scale-105",
          className
        )}
      />

      {/* Overlay Skeleton: Visible while image is loading, then fades out */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-700",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      >
        <Skeleton className="w-full h-full rounded-none" />
      </div>

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400 text-xs font-sans">
          Image not found
        </div>
      )}
    </div>
  );
}
