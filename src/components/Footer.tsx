import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-semibold text-foreground">
            Ruská Barevná Bolonka
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Vytvořeno s</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>pro milovníky bolonek</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Všechna práva vyhrazena
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
