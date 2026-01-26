import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-semibold text-foreground">
            Русская Цветная Болонка
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>для любителей болонок</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
