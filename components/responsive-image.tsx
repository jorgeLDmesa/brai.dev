'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 150px, (max-width: 1024px) 300px, 600px",
  fill = false,
  width,
  height,
}: ResponsiveImageProps) {
  const [imageError, setImageError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);
  
  // Check if WebP version exists, otherwise use original
  const getImageSource = (baseSrc: string) => {
    // If already WebP or if first attempt failed, use original
    if (imageError || baseSrc.endsWith('.webp')) {
      return baseSrc;
    }
    // Try WebP version first
    const fileName = baseSrc.replace(/^\//, '').replace(/\.(jpg|jpeg|png)$/, '');
    return `/${fileName}.webp`;
  };

  const imageSrc = getImageSource(src);

  const handleError = () => {
    console.warn(`Image failed to load: ${imageSrc}`);
    if (!imageError) {
      // First error - try fallback to original format
      setImageError(true);
    } else {
      // Second error - original format also failed
      setFallbackError(true);
    }
  };

  // If both WebP and original failed, show a placeholder
  if (fallbackError) {
    return (
      <div 
        className={`${className} bg-zinc-800 flex items-center justify-center text-zinc-400 text-sm`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        No Image
      </div>
    );
  }

  return (
    <Image
      src={imageError ? src : imageSrc}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      fill={fill}
      width={width}
      height={height}
      onError={handleError}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}