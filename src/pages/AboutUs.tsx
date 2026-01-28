import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Award, Calendar, Dog, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroDog from "@/assets/hero-dog.jpg";

const values = [
  {
    icon: Heart,
    title: "Láska a péče",
    description: "Všechna štěňata odchováváme s láskou v domácím prostředí jako součást naší rodiny",
  },
  {
    icon: Users,
    title: "Socializace",
    description: "Dbáme na správnou socializaci štěňat s lidmi, dětmi i ostatními zvířaty",
  },
  {
    icon: Award,
    title: "Kvalita",
    description: "Klademe důraz na zdraví, povahu a soulad s plemenným standardem",
  },
  {
    icon: Dog,
    title: "Celoživotní podpora",
    description: "Jsme tu pro vás i po převzetí štěněte s radou a podporou",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                O nás
              </span>
              <h1 className="section-heading mb-4">
                Chovatelská stanice Pikaro
              </h1>
              <p className="section-subheading mx-auto">
                S láskou chováme ruské barevné bolonky již přes 35 let
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="card-warm text-center">
                <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">1988</div>
                <p className="text-sm text-muted-foreground">Založení stanice</p>
              </div>
              <div className="card-warm text-center">
                <Award className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">1997</div>
                <p className="text-sm text-muted-foreground">Mezinárodní ochrana</p>
              </div>
              <div className="card-warm text-center">
                <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">150+</div>
                <p className="text-sm text-muted-foreground">Šťastných rodin</p>
              </div>
              <div className="card-warm text-center">
                <Heart className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">35+</div>
                <p className="text-sm text-muted-foreground">Let zkušeností</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="image-frame overflow-hidden">
                <img 
                  src={heroDog} 
                  alt="Chovatelská stanice Pikaro"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  Náš příběh
                </h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Naše chovatelská stanice <strong className="text-foreground">PIKARO</strong> byla založena v roce 1988 
                    a od roku 1997 je její název mezinárodně chráněn.
                  </p>
                  <p>
                    V prvních letech po založení jsme chovali plemeno dalmatin a trpasličí pinč. 
                    Postupem času jsme se začali poohlížet po plemeni menším, klidnějším, vyrovnanějším.
                  </p>
                  <p>
                    Vlastně náhodou díky našim přátelům, kteří chovali plemeno boloňský psík, jsme se seznámili 
                    s tímto skvělým, malým, houževnatým pejskem. V té době jsem měla jediný požadavek — 
                    chtěla jsem plemeno, které dle standardu může mít více barev.
                  </p>
                  <p>
                    No a výběr byl pro nás jasný: <strong className="text-foreground">ruská barevná bolonka</strong>. 
                    Malý, harmonicky stavěný pejsek, který působí atraktivně díky efektně zbarvené bohaté srsti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Naše hodnoty
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Psi jsou součástí naší rodiny dlouhou řadu let, zpříjemňují nám každý den, 
                žijí s námi aktivní život a jsme přesvědčení, že jsou u nás šťastní.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-warm text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Bolonka */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Proč právě ruská barevná bolonka?
                </h2>
              </div>

              <div className="card-warm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Povahově dokonalý pejsek</h3>
                        <p className="text-muted-foreground text-sm">
                          Přátelský, poslušný, nebojácný. Zbytečně neštěká a je nekonfliktní 
                          k ostatním psům i lidem.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Ideální do bytu</h3>
                        <p className="text-muted-foreground text-sm">
                          Malá váha, klidná povaha. Dovede prolenošit klidně celý den s vámi 
                          na gauči, ale zvládne i dlouhé vycházky.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Dog className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Skvělý společník</h3>
                        <p className="text-muted-foreground text-sm">
                          Doprovází vás na vycházkách, jezdí s vámi rádi v autě. Milá, 
                          přátelská a nekonfliktní povaha.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Snadná péče o srst</h3>
                        <p className="text-muted-foreground text-sm">
                          Pravidelná chvilka péče o srst není zatěžující — je to chvíle pohody. 
                          A když se nechce česat? Srst lze stříhat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-lg text-foreground font-medium mb-2">
                    Co víc si přát od rodinného mazlíčka?
                  </p>
                  <p className="text-muted-foreground">
                    Ruská barevná bolonka je velmi oblíbené plemeno pro svoji malou váhu, 
                    milou, přátelskou a nekonfliktní povahu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Chcete se stát součástí naší rodiny?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Rádi vám odpovíme na všechny dotazy a pomůžeme vybrat ideálního společníka
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

export default AboutUs;
