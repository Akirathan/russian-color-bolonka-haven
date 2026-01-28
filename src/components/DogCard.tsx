import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface DogCardProps {
  name: string;
  image: string;
  description?: string;
  href?: string;
}

const DogCard = ({ name, image, description, href = "#" }: DogCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card shadow-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link to={href} className="block">
        {/* Image container with zoom effect */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <motion.h3 
            className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
          >
            {name}
          </motion.h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Subtle border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary/0 pointer-events-none"
          whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default DogCard;
