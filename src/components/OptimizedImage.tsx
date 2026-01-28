import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

/**
 * OptimizedImage - Lazy loading image component with fade-in effect
 * 
 * Features:
 * - Lazy loading with IntersectionObserver
 * - Smooth fade-in animation on load
 * - Placeholder blur effect
 * - Proper alt text for SEO
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  priority = false,
  objectFit = "cover",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-muted/30",
        className
      )}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse" />
      )}
      
      {/* Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          className={cn(
            "w-full h-full transition-opacity duration-500",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            objectFit === "none" && "object-none",
            objectFit === "scale-down" && "object-scale-down",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
