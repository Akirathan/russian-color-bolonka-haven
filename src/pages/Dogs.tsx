import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Heart, Camera, ChevronRight } from "lucide-react";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const dogs = [
  {
    name: "Bella",
    fullName: "Bella z Pohádkového snu",
    description: "Láskyplná a hravá holčička, šampionka České republiky. Bella je srdcem naší chovatelské stanice a skvělá matka štěňat.",
    image: dog1,
    gallery: [dog1, dog2, dog3],
    age: "2 roky",
    birthDate: "15. března 2022",
    color: "Krémová",
    weight: "3,2 kg",
    height: "25 cm",
    titles: [
      "Šampion České republiky",
      "Klubový vítěz 2023",
      "Nejkrásnější pes výstavy Brno 2023",
    ],
    healthTests: ["Patella: 0/0", "Oči: Clear", "DNA testy: Clear"],
    character: "Bella je naprosto úžasná holčička s nekonečnou láskou ke všem lidem. Je veselá, hravá a velmi inteligentní. Miluje procházky i odpočinek na gauči.",
    litters: [
      { year: "2024", partner: "Baron", puppies: 5 },
    ],
  },
  {
    name: "Baron",
    fullName: "Baron vom Königsberg",
    description: "Inteligentní a klidný chlapeček, interšampion. Baron přináší do chovu výborné genetické vlastnosti a klidnou povahu.",
    image: dog2,
    gallery: [dog2, dog1, dog3],
    age: "3 roky",
    birthDate: "8. ledna 2021",
    color: "Zlatavá",
    weight: "3,8 kg",
    height: "26 cm",
    titles: [
      "Interšampion",
      "Šampion České republiky",
      "Šampion Slovenska",
      "Šampion Rakouska",
    ],
    healthTests: ["Patella: 0/0", "Oči: Clear", "DNA testy: Clear"],
    character: "Baron je klidný, vyrovnaný pes s královským vystupováním. Je velmi oddaný a věrný. Skvěle vychází s ostatními psy i dětmi.",
    litters: [
      { year: "2024", partner: "Bella", puppies: 5 },
      { year: "2023", partner: "Luna", puppies: 4 },
    ],
  },
  {
    name: "Teddy",
    fullName: "Teddy z Pohádkového snu",
    description: "Okouzlující štěně, potomek našich šampionů Belly a Barona. Teddy je hvězdou našeho chovu.",
    image: dog3,
    gallery: [dog3, dog1, dog2],
    age: "4 měsíce",
    birthDate: "15. září 2024",
    color: "Zrzavá s bílou",
    weight: "1,8 kg",
    height: "18 cm",
    titles: [],
    healthTests: ["Veterinární kontrola: OK"],
    character: "Teddy je zvědavé, hravé štěně s úžasnou povahou. Již nyní ukazuje krásnou strukturu srsti a typický výraz plemene.",
    litters: [],
  },
];

const Dogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Naši mazlíčci
              </span>
              <h1 className="section-heading mb-4">
                Seznamte se s našimi psy
              </h1>
              <p className="section-subheading mx-auto">
                Každý náš mazlíček je členem rodiny. Pečlivě dbáme na 
                zdraví a socializaci všech psů.
              </p>
            </div>
          </div>
        </section>

        {/* Dogs Detail */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {dogs.map((dog, index) => (
                <article 
                  key={dog.name} 
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Gallery */}
                  <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="image-frame overflow-hidden">
                      <img
                        src={dog.image}
                        alt={dog.fullName}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {dog.gallery.map((img, i) => (
                        <div key={i} className="image-frame overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                          <img
                            src={img}
                            alt={`${dog.name} - foto ${i + 1}`}
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                        {dog.name}
                      </h2>
                      <p className="text-primary font-medium">{dog.fullName}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {dog.character}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Věk</p>
                        <p className="font-semibold text-foreground">{dog.age}</p>
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Zbarvení</p>
                        <p className="font-semibold text-foreground">{dog.color}</p>
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Hmotnost</p>
                        <p className="font-semibold text-foreground">{dog.weight}</p>
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground">Výška</p>
                        <p className="font-semibold text-foreground">{dog.height}</p>
                      </div>
                    </div>

                    {/* Titles */}
                    {dog.titles.length > 0 && (
                      <div className="card-warm">
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="w-5 h-5 text-primary" />
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            Výstavní úspěchy
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {dog.titles.map((title, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <ChevronRight className="w-4 h-4 text-primary" />
                              {title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Health Tests */}
                    <div className="card-warm">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          Zdravotní testy
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {dog.healthTests.map((test, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <ChevronRight className="w-4 h-4 text-primary" />
                            {test}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Litters */}
                    {dog.litters.length > 0 && (
                      <div className="card-warm">
                        <div className="flex items-center gap-2 mb-3">
                          <Camera className="w-5 h-5 text-primary" />
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            Vrhy
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {dog.litters.map((litter, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <ChevronRight className="w-4 h-4 text-primary" />
                              {litter.year}: s {litter.partner} - {litter.puppies} štěňat
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Máte zájem o štěně?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Rádi vám poskytneme více informací o našich psech a plánovaných vrzích
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/stenata" className="btn-hero inline-block">
                  Zobrazit štěňata
                </Link>
                <Link to="/kontakt" className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Kontaktovat nás
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dogs;
