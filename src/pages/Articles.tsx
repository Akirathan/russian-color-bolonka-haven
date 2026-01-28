import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calendar, Clock, ArrowRight, Dog, Home, Heart, Scissors, Apple, Baby } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    slug: "vychova-stenete-bolonky",
    title: "Výchova štěněte Ruské barevné bolonky",
    excerpt: "Kompletní průvodce výchovou štěněte od prvního dne v novém domově. Základní povely, socializace a budování zdravých návyků.",
    category: "Výchova",
    readTime: "8 min",
    date: "15. ledna 2025",
    icon: Baby,
    content: `
      <h2>Základy výchovy</h2>
      <p>Ruská barevná bolonka je inteligentní a vnímavé plemeno, které se snadno cvičí. Klíčem k úspěchu je důslednost, trpělivost a pozitivní posilování.</p>
      
      <h3>První dny v novém domově</h3>
      <p>Připravte štěněti klidné místo pro odpočinek. Nechte ho postupně poznávat nové prostředí a nezahrnujte ho příliš mnoha novými podněty najednou.</p>
      
      <h3>Základní povely</h3>
      <ul>
        <li><strong>Sedni</strong> - první a nejjednodušší povel</li>
        <li><strong>Ke mně</strong> - zásadní pro bezpečnost</li>
        <li><strong>Zůstaň</strong> - učíme postupně</li>
        <li><strong>Lehni</strong> - navazuje na "sedni"</li>
      </ul>
    `,
  },
  {
    id: 2,
    slug: "bolonka-do-bytu",
    title: "Proč je Bolonka ideální do bytu",
    excerpt: "Objevte důvody, proč je Ruská barevná bolonka perfektním společníkem pro život v bytě. Velikost, temperament a nároky na prostor.",
    category: "Životní styl",
    readTime: "5 min",
    date: "10. ledna 2025",
    icon: Home,
    content: `
      <h2>Ideální městský společník</h2>
      <p>Ruská barevná bolonka byla vyšlechtěna přímo pro život v bytě. Je to malý, tichý a přizpůsobivý pes.</p>
      
      <h3>Výhody pro bydlení v bytě</h3>
      <ul>
        <li>Malá velikost (2-4 kg)</li>
        <li>Minimální štěkání</li>
        <li>Nenáročnost na prostor</li>
        <li>Přizpůsobivost životnímu stylu majitele</li>
      </ul>
    `,
  },
  {
    id: 3,
    slug: "pece-o-srst",
    title: "Péče o srst Ruské barevné bolonky",
    excerpt: "Kompletní návod na péči o krásnou srst bolonky. Kartáčování, koupání, stříhání a prevence zacuchání.",
    category: "Péče",
    readTime: "6 min",
    date: "5. ledna 2025",
    icon: Scissors,
    content: `
      <h2>Základy péče o srst</h2>
      <p>Srst bolonky je hebká, vlnitá a téměř nelinající. Vyžaduje pravidelnou péči, ale odměnou je krásný vzhled a minimum alergenů.</p>
      
      <h3>Kartáčování</h3>
      <p>Kartáčujte minimálně 3x týdně, ideálně denně. Použijte kvalitní kartáč s dlouhými zuby.</p>
      
      <h3>Koupání</h3>
      <p>Koupejte 1x za 2-3 týdny nebo dle potřeby. Používejte šampony pro psy s dlouhou srstí.</p>
    `,
  },
  {
    id: 4,
    slug: "vyziva-bolonky",
    title: "Správná výživa Ruské barevné bolonky",
    excerpt: "Vše o výživě malého psa. Kvalitní krmivo, domácí strava, doplňky a čemu se vyhnout.",
    category: "Výživa",
    readTime: "7 min",
    date: "1. ledna 2025",
    icon: Apple,
    content: `
      <h2>Základy výživy</h2>
      <p>Správná výživa je základem zdraví a dlouhověkosti. Bolonka potřebuje kvalitní stravu přizpůsobenou jejím potřebám.</p>
      
      <h3>Doporučená krmiva</h3>
      <p>Vybírejte prémiová krmiva určená pro malá plemena. Sledujte obsah bílkovin a tuků.</p>
    `,
  },
  {
    id: 5,
    slug: "zdravi-a-prevence",
    title: "Zdraví a prevence u Bolonky",
    excerpt: "Přehled častých zdravotních problémů a jak jim předcházet. Očkování, prevence a pravidelné prohlídky.",
    category: "Zdraví",
    readTime: "6 min",
    date: "20. prosince 2024",
    icon: Heart,
    content: `
      <h2>Prevence je základ</h2>
      <p>Ruská barevná bolonka je obecně zdravé plemeno s průměrnou délkou života 14-16 let.</p>
      
      <h3>Pravidelné kontroly</h3>
      <p>Navštěvujte veterináře minimálně 1x ročně pro preventivní prohlídku.</p>
    `,
  },
  {
    id: 6,
    slug: "vyhody-plemene",
    title: "10 důvodů proč zvolit Ruskou barevnou bolonku",
    excerpt: "Souhrn hlavních výhod tohoto úžasného plemene. Proč je bolonka perfektním rodinným společníkem.",
    category: "O plemeni",
    readTime: "4 min",
    date: "15. prosince 2024",
    icon: Dog,
    content: `
      <h2>Proč zvolit Bolonku?</h2>
      <ol>
        <li>Hypoalergenní srst - minimální línání</li>
        <li>Ideální velikost do bytu</li>
        <li>Přátelská povaha</li>
        <li>Snadná výchova</li>
        <li>Dlouhověkost</li>
        <li>Přizpůsobivost</li>
        <li>Nízké nároky na pohyb</li>
        <li>Vhodná pro začátečníky</li>
        <li>Skvělá s dětmi</li>
        <li>Oddanost majiteli</li>
      </ol>
    `,
  },
];

const categories = ["Všechny", "Výchova", "Životní styl", "Péče", "Výživa", "Zdraví", "O plemeni"];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Články o ruské barevné bolonce"
        description="Užitečné články o výchově, péči a zdraví ruské barevné bolonky. Tipy pro majitele, výživa, péče o srst. Chovatelská stanice Pikaro."
        keywords="bolonka články, výchova bolonky, péče o bolonku, bolonka výživa, bolonka zdraví, tipy pro majitele"
        url="https://pikaro.cz/clanky"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "Články", url: "/clanky" },
        ]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Články
              </span>
              <h1 className="section-heading mb-4">
                Užitečné články o Bolonkách
              </h1>
              <p className="section-subheading mx-auto">
                Praktické rady a tipy pro majitele i zájemce o toto úžasné plemeno
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "Všechny"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="card-warm group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                      <article.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Číst více <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Zůstaňte v obraze
              </h2>
              <p className="text-muted-foreground mb-8">
                Přihlaste se k odběru novinek a dostávejte nejnovější články přímo do emailu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                <button className="btn-hero whitespace-nowrap">
                  Odebírat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
