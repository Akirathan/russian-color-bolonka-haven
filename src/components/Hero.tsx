import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroDog from "@/assets/hero-dog.jpg";
import pikaroLogo from "@/assets/pikaro-logo.png";

const Hero = () => {

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
            <Link to="/o-nas" className="btn-outline-hero text-center">
              Poznejte nás
            </Link>
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
          </motion.div>
        </div>
      </div>

      {/* Pikaro logo */}
      <motion.div
        className="absolute top-24 right-6 md:top-28 md:right-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <img 
          src={pikaroLogo} 
          alt="Pikaro logo" 
          className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-md"
        />
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
