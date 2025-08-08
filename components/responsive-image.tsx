'use client';

import Image from 'next/image';

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
  // Convert image path to WebP
  const getWebPSource = (baseSrc: string) => {
    const fileName = baseSrc.replace(/^\//, '').replace(/\.(jpg|jpeg|png)$/, '');
    return `/${fileName}.webp`;
  };

  const webpSrc = getWebPSource(src);

  return (
    <Image
      src={webpSrc}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      fill={fill}
      width={width}
      height={height}
    />
  );
}