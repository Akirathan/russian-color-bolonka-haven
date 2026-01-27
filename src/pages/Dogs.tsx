import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const dogs = [
  {
    name: "Bella",
    description: "Láskyplná a hravá holčička, šampionka České republiky",
    image: dog1,
    age: "2 roky",
    color: "Krémová",
  },
  {
    name: "Baron",
    description: "Inteligentní a klidný chlapeček, interšampion",
    image: dog2,
    age: "3 roky",
    color: "Zlatavá",
  },
  {
    name: "Teddy",
    description: "Okouzlující štěně, připraveno k nastěhování do nového domova",
    image: dog3,
    age: "4 měsíce",
    color: "Zrzavá s bílou",
  },
];

const Dogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dogs.map((dog, index) => (
                <article
                  key={dog.name}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="image-frame mb-5 overflow-hidden">
                    <img
                      src={dog.image}
                      alt={dog.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {dog.name}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {dog.age}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{dog.description}</p>
                    <p className="text-sm text-primary font-medium">
                      Zbarvení: {dog.color}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/kontakt" className="btn-hero inline-block">
                Zjistit o dostupných štěňatech
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dogs;
