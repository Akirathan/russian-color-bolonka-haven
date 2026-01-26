import { Heart, Shield, Smile, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Преданность",
    description: "Болонки невероятно привязаны к своим хозяевам и дарят безграничную любовь",
  },
  {
    icon: Sparkles,
    title: "Гипоаллергенность",
    description: "Практически не линяют, подходят для людей с аллергией на шерсть",
  },
  {
    icon: Smile,
    title: "Характер",
    description: "Веселые, игривые и умные собаки, легко поддаются дрессировке",
  },
  {
    icon: Shield,
    title: "Здоровье",
    description: "Крепкое здоровье и долголетие при правильном уходе до 15-16 лет",
  },
];

const AboutBreed = () => {
  return (
    <section id="about" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            О породе
          </span>
          <h2 className="section-heading mb-4">
            Русская Цветная Болонка
          </h2>
          <p className="section-subheading mx-auto">
            Уникальная российская декоративная порода собак, выведенная в 
            Ленинграде в 1950-х годах. Идеальный компаньон для городской жизни.
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
              <p className="text-muted-foreground">лет опыта</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                150+
              </div>
              <p className="text-muted-foreground">счастливых семей</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <p className="text-muted-foreground">чемпионов выставок</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBreed;
