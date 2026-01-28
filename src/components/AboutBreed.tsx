import { Heart, Shield, Smile, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Heart,
    title: "Oddanost",
    description: "Bolonky jsou neuvěřitelně oddané svým majitelům a dávají neomezenou lásku",
  },
  {
    icon: Sparkles,
    title: "Hypoalergenní",
    description: "Téměř nelínají, vhodné pro lidi s alergií na srst",
  },
  {
    icon: Smile,
    title: "Povaha",
    description: "Veselí, hraví a inteligentní psi, snadno se cvičí",
  },
  {
    icon: Shield,
    title: "Zdraví",
    description: "Pevné zdraví a dlouhověkost při správné péči až 15-16 let",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  );
};

const AboutBreed = () => {
  return (
    <section id="about" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            O plemeni
          </span>
          <h2 className="section-heading mb-4">
            Ruská Barevná Bolonka
          </h2>
          <p className="section-subheading mx-auto">
            Unikátní ruské okrasné plemeno psů vyšlechtěné v 
            Leningradu v 50. letech. Ideální společník pro městský život.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="card-warm text-center group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-card overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={20} suffix="+" />
              </div>
              <p className="text-muted-foreground">let zkušeností</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={150} suffix="+" />
              </div>
              <p className="text-muted-foreground">šťastných rodin</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={50} suffix="+" />
              </div>
              <p className="text-muted-foreground">výstavních šampionů</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBreed;
