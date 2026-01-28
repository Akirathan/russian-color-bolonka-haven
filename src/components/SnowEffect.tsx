import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Snowflake component
const Snowflake = ({ style, delay, duration }: { 
  style: React.CSSProperties; 
  delay: number;
  duration: number;
}) => (
  <motion.svg
    viewBox="0 0 24 24"
    className="absolute text-primary/20 pointer-events-none"
    style={style}
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{ 
      y: "100vh", 
      opacity: [0, 0.8, 0.8, 0],
      rotate: 360
    }}
    transition={{
      duration,
      delay,
      ease: "linear",
      opacity: { duration, times: [0, 0.1, 0.9, 1] }
    }}
  >
    <path
      fill="currentColor"
      d="M12 0L12 24M0 12L24 12M3.5 3.5L20.5 20.5M20.5 3.5L3.5 20.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </motion.svg>
);

const SnowEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Check if it's December and if reduced motion is not preferred
  const shouldShowSnow = useMemo(() => {
    // Check if it's December
    const isDecember = new Date().getMonth() === 11;
    
    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if mobile (viewport width < 768px)
    const isMobile = typeof window !== 'undefined' && 
      window.innerWidth < 768;
    
    return isDecember && !prefersReducedMotion && !isMobile;
  }, []);

  // Generate snowflakes data
  const snowflakes = useMemo(() => {
    if (!shouldShowSnow) return [];
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 12, // 8-20px
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7, // 8-15s
    }));
  }, [shouldShowSnow]);

  useEffect(() => {
    if (!shouldShowSnow) return;

    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldShowSnow]);

  if (!shouldShowSnow || hasScrolled) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
          className="fixed inset-0 z-40 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {snowflakes.map((flake) => (
            <Snowflake
              key={flake.id}
              style={{
                left: flake.left,
                width: flake.size,
                height: flake.size,
              }}
              delay={flake.delay}
              duration={flake.duration}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default SnowEffect;
