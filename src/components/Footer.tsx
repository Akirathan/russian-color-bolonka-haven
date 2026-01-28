import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/seo";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & NAP */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-display text-2xl font-semibold text-foreground mb-2">
              {SITE_CONFIG.shortName} – {SITE_CONFIG.address.city}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Profesionální chov ruských barevných bolonek od roku {SITE_CONFIG.foundingDate}. 
              Mezinárodně chráněný název stanice od roku {SITE_CONFIG.internationalProtectionYear}.
            </p>
            
            {/* NAP (Name, Address, Phone) - consistent for local SEO */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <address className="not-italic">
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                </address>
              </div>
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.phoneFormatted}</span>
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
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
                { to: "/plemeno/ruska-barevna-bolonka", label: "O plemeni" },
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

          {/* Service Areas - Local SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4">
              Působíme v regionu
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Štěňata předáváme osobně v Plzni a blízkém okolí:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              {SITE_CONFIG.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  {area}
                </li>
              ))}
            </ul>
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
            <span>pro milovníky ruských barevných bolonek</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Všechna práva vyhrazena.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
