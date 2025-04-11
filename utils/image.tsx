import Image from 'next/image';
import { CSSProperties } from 'react';

/**
 * Interface for OptimizedImage component props
 */
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Default image sizes for responsive design
 */
const defaultSizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

/**
 * OptimizedImage component that uses Next.js Image with best practices
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style,
  sizes = defaultSizes,
  quality = 80,
  fill = false,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  // Handle external URLs vs local images
  const isExternal = src.startsWith('http') || src.startsWith('//');
  
  // Default blur placeholder for local images when not provided
  const defaultBlurDataURL = !isExternal && !blurDataURL && placeholder === 'blur' 
    ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+'
    : blurDataURL;

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      priority={priority}
      className={className}
      style={style}
      sizes={sizes}
      quality={quality}
      fill={fill}
      placeholder={placeholder}
      blurDataURL={defaultBlurDataURL}
      // Add loading="eager" for above-the-fold images with priority
      {...(priority ? { loading: 'eager' as const } : {})}
      // Add appropriate settings for external images
      {...(isExternal ? { 
        loader: ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`,
        unoptimized: false
      } : {})}
    />
  );
}

/**
 * Generate a responsive image srcSet for use in CSS backgrounds or other cases
 * @param basePath Base path of the image
 * @param widths Array of widths to generate
 * @param format Image format (jpg, png, webp, avif)
 * @returns srcSet string
 */
export function generateResponsiveSrcSet(
  basePath: string, 
  widths: number[] = [640, 750, 828, 1080, 1200, 1920, 2048], 
  format: string = 'webp'
): string {
  return widths
    .map(width => `${basePath}?w=${width}&q=75&format=${format} ${width}w`)
    .join(', ');
}

/**
 * Generate a blur data URL for an image
 * @param color Background color in hex format
 * @returns Base64 encoded SVG
 */
export function generateBlurDataURL(color: string = '#f1f1f1'): string {
  const svg = `<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}