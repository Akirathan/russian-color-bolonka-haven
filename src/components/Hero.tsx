import { Link } from "react-router-dom";
import heroDog from "@/assets/hero-dog.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDog}
          alt="Ruská barevná bolonka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Chov psů s láskou od roku 1988
          </span>
          
          <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Ruská Barevná{" "}
            <span className="text-gradient">Bolonka</span>
          </h1>
          
          <p className="section-subheading mb-8 text-lg md:text-xl">
            Objevte dokonalého společníka pro váš domov. Přátelský, oddaný 
            a nekonfliktní pejsek, který vám zpříjemní každý den.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/stenata" className="btn-hero text-center">
              Dostupná štěňata
            </Link>
            <Link to="/o-nas" className="btn-outline-hero text-center">
              Poznejte nás
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
