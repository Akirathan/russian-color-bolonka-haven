import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import oskar4 from "@/assets/oskar-4.jpg";
import bekka1 from "@/assets/bekka-1.jpg";
import kevina1 from "@/assets/kevina-1.jpg";
import pawTrail from "@/assets/paw-trail.png";

const dogs = [
  {
    name: "Oskar",
    description: "Klidný, přátelský a povahově vyrovnaný krycí pes",
    image: oskar4,
    age: "5 let",
    color: "Hnědá se znaky",
  },
  {
    name: "Bekka",
    description: "Fenka s krásně klidnou, stabilní povahou a velkým srdcem",
    image: bekka1,
    age: "4 roky",
    color: "Černá",
  },
  {
    name: "Kevina",
    description: "Uchovněná fenka, rodinná parťačka pro radost a pohodu",
    image: kevina1,
    age: "10 let",
    color: "Černá",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const OurDogs = () => {
  return (
    <section id="dogs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Naši mazlíčci
          </span>
          <h2 className="section-heading mb-4">
            Seznamte se s našimi psy
          </h2>
          <p className="section-subheading mx-auto">
            Každý náš mazlíček je členem rodiny. Pečlivě dbáme na 
            zdraví a socializaci všech psů.
          </p>
          
          {/* Animated Paw Trail */}
          <motion.div 
            className="mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={pawTrail}
              alt=""
              aria-hidden="true"
              className="w-full max-w-2xl mx-auto opacity-20"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 0.2, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 2, 
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {dogs.map((dog) => (
            <motion.article
              key={dog.name}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-frame mb-5 overflow-hidden">
                <motion.img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full aspect-square object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {dog.name}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {dog.age}
                  </span>
                </div>
                <p className="text-muted-foreground">{dog.description}</p>
                <p className="text-sm text-primary font-medium">
                  Zbarvení: {dog.color}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/stenata" className="btn-hero inline-block">
            Zjistit o dostupných štěňatech
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurDogs;
