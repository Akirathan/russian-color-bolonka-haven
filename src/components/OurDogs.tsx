import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const dogs = [
  {
    name: "Белла",
    description: "Ласковая и игривая девочка, чемпион России",
    image: dog1,
    age: "2 года",
    color: "Кремовый",
  },
  {
    name: "Барон",
    description: "Умный и спокойный мальчик, интерчемпион",
    image: dog2,
    age: "3 года",
    color: "Золотистый",
  },
  {
    name: "Тедди",
    description: "Очаровательный щенок, готов к переезду в новый дом",
    image: dog3,
    age: "4 месяца",
    color: "Рыжий с белым",
  },
];

const OurDogs = () => {
  return (
    <section id="dogs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Наши питомцы
          </span>
          <h2 className="section-heading mb-4">
            Познакомьтесь с нашими собаками
          </h2>
          <p className="section-subheading mx-auto">
            Каждый наш питомец — это член семьи. Мы тщательно следим за 
            здоровьем и социализацией всех собак.
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
                  Окрас: {dog.color}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-hero inline-block">
            Узнать о доступных щенках
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurDogs;
