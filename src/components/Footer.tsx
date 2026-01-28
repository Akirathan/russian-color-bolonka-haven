import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-display text-2xl font-semibold text-foreground mb-2">
              Chovatelská stanice Pikaro
            </div>
            <p className="text-sm text-muted-foreground">
              Chov psů s láskou od roku 1988
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4">
              Rychlé odkazy
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/o-plemeni", label: "O plemeni" },
                { to: "/nasi-psi", label: "Naši psi" },
                { to: "/stenata", label: "Štěňata" },
                { to: "/clanky", label: "Články" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4">
              Kontakt
            </h3>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=U+Černého+mostu+131/13,+Plzeň" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>U Černého mostu 131/13, Plzeň</span>
              </a>
              <a 
                href="tel:+420724174659" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+420 724 174 659</span>
              </a>
              <a 
                href="mailto:ipikaro@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>ipikaro@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Vytvořeno s</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-primary fill-current" />
            </motion.div>
            <span>pro milovníky bolonek</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chovatelská stanice Pikaro. Všechna práva vyhrazena.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
