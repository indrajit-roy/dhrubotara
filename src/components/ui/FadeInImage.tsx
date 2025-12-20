import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Skeleton } from './Skeleton';

interface FadeInImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function FadeInImage({ className, containerClassName, alt, ...props }: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-stone-100", containerClassName)}>
      <img
        {...props}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isLoaded 
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
    </div>
  );
}
