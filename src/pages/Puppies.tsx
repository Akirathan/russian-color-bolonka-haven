import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Heart, Calendar, CheckCircle, Phone, Clock, Shield, Baby, Home } from "lucide-react";
import { Link } from "react-router-dom";
import dog3 from "@/assets/dog-3.jpg";

const currentLitters = [
  {
    parents: "Bella × Baron",
    birthDate: "15. prosince 2024",
    available: 3,
    totalPuppies: 5,
    colors: ["Krémová", "Zlatavá", "Zrzavá"],
    readyDate: "15. února 2025",
    image: dog3,
  },
];

const reservationSteps = [
  {
    icon: Phone,
    title: "Kontaktujte nás",
    description: "Zavolejte nebo napište email s dotazem o dostupných štěňatech",
  },
  {
    icon: Calendar,
    title: "Osobní setkání",
    description: "Navštivte nás a seznamte se s rodiči štěňat i samotnými štěňaty",
  },
  {
    icon: CheckCircle,
    title: "Rezervace",
    description: "Po vzájemné dohodě složíte zálohu a štěně bude rezervováno pro vás",
  },
  {
    icon: Home,
    title: "Převzetí štěněte",
    description: "Po dovršení 8-10 týdnů si štěně můžete odvézt do nového domova",
  },
];

const puppyCareTips = [
  {
    icon: Heart,
    title: "Socializace",
    description: "Štěňata jsou od narození v kontaktu s lidmi, dětmi i dalšími zvířaty. Učíme je základním návykům a hygieně.",
  },
  {
    icon: Shield,
    title: "Zdravotní péče",
    description: "Všechna štěňata jsou očkována, odčervena a čipována. Předáváme kompletní zdravotní dokumentaci.",
  },
  {
    icon: Baby,
    title: "Výchova od začátku",
    description: "Začínáme s výchovou již od raného věku - základní povely, čistotnost, chůze na vodítku.",
  },
  {
    icon: Clock,
    title: "Příprava na nový domov",
    description: "Štěňata postupně připravujeme na samostatnost a přechod do nového prostředí.",
  },
];

const Puppies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Štěňata ruské barevné bolonky"
        description="Štěňata ruské barevné bolonky k prodeji. Zdravá štěňata s PP, očkovaná, čipovaná. Rezervace štěňat, aktuální vrhy. Chovatelská stanice Pikaro."
        keywords="štěňata bolonky, ruská barevná bolonka štěně, štěňata k prodeji, bolonka prodej, Pikaro štěňata"
        url="https://pikaro.cz/stenata"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "Štěňata", url: "/stenata" },
        ]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Štěňata
              </span>
              <h1 className="section-heading mb-4">
                Naše štěňata
              </h1>
              <p className="section-subheading mx-auto">
                S láskou vychováváme štěňata Ruské barevné bolonky. 
                Každé štěně odchází do nového domova připravené, socializované a zdravé.
              </p>
            </div>
          </div>
        </section>

        {/* Current Litters */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Aktuální vrhy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Přehled aktuálně dostupných štěňat a plánovaných vrhů
              </p>
            </div>

            {currentLitters.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {currentLitters.map((litter, index) => (
                  <div key={index} className="card-warm overflow-hidden">
                    <div className="aspect-video overflow-hidden rounded-xl mb-4">
                      <img 
                        src={litter.image} 
                        alt={`Vrh ${litter.parents}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {litter.parents}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Datum narození:</span> {litter.birthDate}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Počet štěňat:</span> {litter.totalPuppies} ({litter.available} k dispozici)
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Zbarvení:</span> {litter.colors.join(", ")}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">K odběru od:</span> {litter.readyDate}
                      </p>
                    </div>
                    <Link to="/kontakt" className="btn-hero inline-block mt-4 text-center w-full">
                      Mám zájem
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 card-warm max-w-2xl mx-auto">
                <Baby className="w-16 h-16 mx-auto text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Momentálně nemáme volná štěňata
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pokud máte zájem o štěně, zapište se do naší čekací listiny
                </p>
                <Link to="/kontakt" className="btn-hero inline-block">
                  Zapsat se do čekací listiny
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Puppy Care */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Jak vychováváme štěňata
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Každé naše štěně dostává tu nejlepší péči od prvního dne
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {puppyCareTips.map((tip, index) => (
                <div
                  key={tip.title}
                  className="card-warm text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tip.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Jak rezervovat štěně
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jednoduchý proces v několika krocích
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {reservationSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="card-warm text-center h-full">
                    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/kontakt" className="btn-hero inline-block">
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Co dostanete se štěnětem
                </h2>
              </div>

              <div className="card-warm">
                <ul className="space-y-4">
                  {[
                    "Průkaz původu (PP) s rodokmenem",
                    "Očkovací průkaz s kompletním očkováním",
                    "Čip registrovaný v centrální databázi",
                    "Smlouvu o prodeji štěněte",
                    "Startovací balíček krmiva",
                    "Oblíbenou hračku štěněte",
                    "Podrobné pokyny k péči a výživě",
                    "Celoživotní poradenskou podporu",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Puppies;
