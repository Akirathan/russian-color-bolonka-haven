import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-semibold text-foreground mb-2">
              Chovatelská stanice Pikaro
            </div>
            <p className="text-sm text-muted-foreground">
              Chov psů s láskou od roku 1988
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Rychlé odkazy
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/o-plemeni" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                O plemeni
              </Link>
              <Link to="/nasi-psi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Naši psi
              </Link>
              <Link to="/stenata" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Štěňata
              </Link>
              <Link to="/clanky" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Články
              </Link>
              <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Kontakt
            </h3>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=U+Černého+mostu+131/13,+Plzeň" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>U Černého mostu 131/13, Plzeň</span>
              </a>
              <a 
                href="tel:+420724174659" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+420 724 174 659</span>
              </a>
              <a 
                href="mailto:ipikaro@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>ipikaro@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Vytvořeno s</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>pro milovníky bolonek</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chovatelská stanice Pikaro. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
