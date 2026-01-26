import { Heart, Shield, Smile, Sparkles } from "lucide-react";

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

const AboutBreed = () => {
  return (
    <section id="about" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-warm text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                20+
              </div>
              <p className="text-muted-foreground">let zkušeností</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                150+
              </div>
              <p className="text-muted-foreground">šťastných rodin</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <p className="text-muted-foreground">výstavních šampionů</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBreed;
