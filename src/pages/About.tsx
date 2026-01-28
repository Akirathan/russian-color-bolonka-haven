import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Smile, Sparkles, Ruler, Weight, Clock, Palette } from "lucide-react";

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

const breedStandard = {
  general: "Ruská barevná bolonka je malý, elegantní pes harmonické stavby s vlnitou nebo kudrnatou srstí různých barev. Je to veselý, vyrovnaný a oddaný společník.",
  characteristics: [
    {
      icon: Ruler,
      label: "Výška",
      value: "24-26 cm",
      description: "Ideální výška v kohoutku",
    },
    {
      icon: Weight,
      label: "Hmotnost",
      value: "2-4 kg",
      description: "Optimální hmotnost dospělého jedince",
    },
    {
      icon: Clock,
      label: "Délka života",
      value: "14-16 let",
      description: "Při správné péči",
    },
    {
      icon: Palette,
      label: "Zbarvení",
      value: "Různobarevné",
      description: "Černá, hnědá, šedá, béžová, červená a další",
    },
  ],
  sections: [
    {
      title: "Hlava",
      content: "Proporcionální k tělu, s výrazným stopem. Nos černý nebo odpovídající zbarvení srsti. Oči velké, kulaté, tmavé s přátelským výrazem. Uši středně dlouhé, visící, pokryté bohatou srstí.",
    },
    {
      title: "Tělo",
      content: "Kompaktní, téměř čtvercového formátu. Hřbet rovný a pevný. Hruď středně široká, dobře klenutá žebra. Ocas nesen vesele, zakroucený na hřbet.",
    },
    {
      title: "Srst",
      content: "Dlouhá, hedvábná, vlnitá nebo kudrnatá srst pokrývající celé tělo včetně hlavy. Srst je hypoalergenní a téměř nelinající, vyžaduje pravidelnou péči a kartáčování.",
    },
    {
      title: "Povaha",
      content: "Veselá, přátelská a vyrovnaná. Bolonka je inteligentní, snadno cvičitelná a velmi oddaná svým majitelům. Je to ideální společník pro rodiny i jednotlivce, vhodná do bytů.",
    },
    {
      title: "Pohyb",
      content: "Lehký, volný a elegantní. Krok je pružný a sebevědomý. Bolonka nepotřebuje nadměrnou fyzickou zátěž, ale těší se z pravidelných procházek a hry.",
    },
  ],
  history: `Ruská barevná bolonka je relativně mladé plemeno, které vzniklo v Sovětském svazu, především v Leningradu (dnes Petrohrad) v 50. letech 20. století. 

Plemeno bylo vyšlechtěno křížením různých malých okrasných plemen včetně Bišonků, Lhasa Apso a Shi-Tzu. Cílem bylo vytvořit malého, odolného společníka vhodného pro život v bytě, který by měl atraktivní barevnou srst - na rozdíl od tehdy běžných bílých bišonků.

Po pádu Sovětského svazu se plemeno začalo šířit do západní Evropy a Ameriky. FCI uznala Ruskou barevnou bolonku jako samostatné plemeno v roce 2004. Dnes je to oblíbený společník oceňovaný pro svou přátelskou povahu a nízké nároky na péči.`,
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                O plemeni
              </span>
              <h1 className="section-heading mb-4">
                Ruská Barevná Bolonka
              </h1>
              <p className="section-subheading mx-auto">
                Unikátní ruské okrasné plemeno psů vyšlechtěné v 
                Leningradu v 50. letech. Ideální společník pro městský život.
              </p>
            </div>

            {/* Features Grid */}
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
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

        {/* Breed Standard */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Standard plemene
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {breedStandard.general}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {breedStandard.characteristics.map((char) => (
                <div key={char.label} className="card-warm text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center">
                    <char.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{char.label}</p>
                  <p className="font-display text-2xl font-bold text-foreground mb-1">
                    {char.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{char.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed Standard */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {breedStandard.sections.map((section) => (
                <div key={section.title} className="card-warm">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Historie plemene
                </h2>
              </div>
              <div className="card-warm prose prose-lg max-w-none">
                {breedStandard.history.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
