import oskar4 from "@/assets/oskar-4.jpg";
import bekka1 from "@/assets/bekka-1.jpg";
import kevina1 from "@/assets/kevina-1.jpg";

const dogs = [
  {
    name: "Oskar",
    description: "Klidný, přátelský a povahově vyrovnaný krycí pes",
    image: oskar4,
    age: "5 let",
    color: "Hnědá se znaky",
  },
  {
    name: "Bekka",
    description: "Fenka s krásně klidnou, stabilní povahou a velkým srdcem",
    image: bekka1,
    age: "4 roky",
    color: "Černá",
  },
  {
    name: "Kevina",
    description: "Uchovněná fenka, rodinná parťačka pro radost a pohodu",
    image: kevina1,
    age: "10 let",
    color: "Černá",
  },
];

const OurDogs = () => {
  return (
    <section id="dogs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Naši mazlíčci
          </span>
          <h2 className="section-heading mb-4">
            Seznamte se s našimi psy
          </h2>
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
          <a href="#contact" className="btn-hero inline-block">
            Zjistit o dostupných štěňatech
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurDogs;
