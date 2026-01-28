import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import heroDog from "@/assets/hero-dog.jpg";

// Simple paw SVG icon
const PawIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 32 32" 
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <ellipse cx="16" cy="20" rx="6" ry="5" />
    <ellipse cx="9" cy="11" rx="3" ry="3.5" />
    <ellipse cx="16" cy="8" rx="3" ry="3.5" />
    <ellipse cx="23" cy="11" rx="3" ry="3.5" />
    <ellipse cx="25" cy="18" rx="2.5" ry="3" />
    <ellipse cx="7" cy="18" rx="2.5" ry="3" />
  </svg>
);

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroDog}
          alt="Ruská barevná bolonka"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Chov psů s láskou od roku 1988
          </motion.span>
          
          <motion.h1 
            className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Ruská Barevná{" "}
            <span className="text-gradient">Bolonka</span>
          </motion.h1>
          
          <motion.p 
            className="section-subheading mb-8 text-lg md:text-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Objevte dokonalého společníka pro váš domov. Přátelský, oddaný 
            a nekonfliktní pejsek, který vám zpříjemní každý den.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 0.6, 
                delay: 2,
                ease: "easeInOut"
              }}
            >
              <Link to="/stenata" className="btn-hero text-center block">
                Dostupná štěňata
              </Link>
            </motion.div>
            <Link to="/o-nas" className="btn-outline-hero text-center">
              Poznejte nás
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative bouncing paw icon */}
      <motion.div
        className="absolute bottom-24 right-6 md:bottom-28 md:right-8 z-10"
        initial={prefersReducedMotion ? { opacity: 0.6 } : { opacity: 0, y: 0 }}
        animate={prefersReducedMotion 
          ? { opacity: 0.6 } 
          : { 
              opacity: 0.6, 
              y: [0, -12, 0, -6, 0],
            }
        }
        transition={{ 
          duration: 0.8, 
          delay: 1.5,
          ease: "easeOut",
          y: { duration: 0.6, delay: 1.5 }
        }}
        onMouseEnter={() => !prefersReducedMotion && setHasHovered(true)}
        onMouseLeave={() => setHasHovered(false)}
        whileHover={prefersReducedMotion ? {} : { 
          y: [0, -8, 0],
          transition: { duration: 0.3 }
        }}
      >
        <PawIcon className="w-8 h-8 md:w-12 md:h-12 text-primary drop-shadow-md" />
      </motion.div>

      {/* Decorative scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1.2 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 bg-primary/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
