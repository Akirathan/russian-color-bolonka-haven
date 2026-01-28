import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Users, Award, Calendar, Dog, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import heroDog from "@/assets/hero-dog.jpg";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "O nás", url: "/o-nas" },
];

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

const stats = [
  { icon: Calendar, value: "1988", label: "Založení stanice" },
  { icon: Award, value: "1997", label: "Mezinárodní ochrana" },
  { icon: Users, value: "150+", label: "Šťastných rodin" },
  { icon: Heart, value: "35+", label: "Let zkušeností" },
];

const AboutUs = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="O nás | CHS Pikaro – chov bolonek od 1988"
        description="CHS Pikaro – rodinný chov ruských barevných bolonek v Plzni od roku 1988. Mezinárodně chráněný název stanice od 1997. 35+ let zkušeností."
        keywords="chovatelská stanice Pikaro, chov bolonek Plzeň, ruská bolonka chovatel, historie chovu"
        url="/o-nas"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "O nás", url: "/o-nas" },
        ]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={breadcrumbs} className="mb-8 justify-center" />
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                O nás
              </motion.span>
              <motion.h1 
                className="section-heading mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Chovatelská stanice Pikaro
              </motion.h1>
              <motion.p 
                className="section-subheading mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                S láskou chováme psy již přes 35 let
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="card-warm text-center group"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  </motion.div>
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="image-frame overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <motion.img 
                  src={heroDog} 
                  alt="Chovatelská stanice Pikaro"
                  className="w-full aspect-[4/3] object-cover"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 
                  className="font-display text-3xl md:text-4xl font-semibold text-foreground"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Náš příběh
                </motion.h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {[
                    <>Naše chovatelská stanice <strong className="text-foreground">PIKARO</strong> byla založena v roce 1988 a od roku 1997 je její název mezinárodně chráněn.</>,
                    "V prvních letech jsme se věnovali plemenům dalmatin a trpasličí pinč, postupně jsme ale hledali menšího psa s klidnější a vyrovnanější povahou do rodinného režimu.",
                    <>Díky našim přátelům, kteří chovali boloňského psíka, jsme se blíž seznámili se světem „boleneček" – malých, odolných a překvapivě houževnatých psů. Ivana měla v té době jedno přání: plemeno, které může být podle standardu ve více barevných variantách. A právě tehdy pro nás byla volba jasná: <strong className="text-foreground">ruská barevná bolonka</strong>.</>,
                    <>Ruská bolonka je malý, harmonicky stavěný pes s bohatou srstí a milou, kontaktní povahou. Na našem chovu si nejvíc zakládáme na tom, aby štěňata odcházela do nových rodin nejen krásná, ale hlavně <strong className="text-foreground">zdravá, dobře socializovaná a povahově vyrovnaná</strong>.</>
                  ].map((text, index) => (
                    <motion.p 
                      key={index}
                      variants={fadeInUp}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 
                  className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Kdo jsme
                </motion.h2>
                
                <motion.div 
                  className="card-warm"
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Jsme <strong className="text-foreground">Ivana a Karel Roubalovi</strong> a žijeme v Plzni v rodinném domě. 
                      Psi jsou pro nás součástí rodiny – Ivana vyrůstala v prostředí, kde se psi chovali po generace 
                      (choval je už její tatínek), a chovatelství je pro ni dlouholetý koníček i srdcová záležitost.
                    </p>
                    <p>
                      Dáváme přednost <strong className="text-foreground">malému rodinnému chovu</strong>, kde se můžeme štěňátkům 
                      věnovat naplno a každý vrh je událostí pro celou rodinu; proto máme maximálně jeden vrh za rok.
                    </p>
                    <p>
                      Kromě psů u nás doma najdete i kachny, křepelky a slepice – to je zase Karlova velká vášeň. 
                      Dnes jsme už v důchodu a o to víc si užíváme čas se psy: milujeme dlouhé procházky v lese a výlety do přírody.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Naše hodnoty
              </motion.h2>
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Psi jsou součástí naší rodiny dlouhou řadu let, zpříjemňují nám každý den, 
                žijí s námi aktivní život a jsme přesvědčení, že jsou u nás šťastní.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="card-warm text-center group cursor-pointer"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { 
                    y: -8, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center"
                    whileHover={prefersReducedMotion ? {} : { 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Bolonka */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Proč právě ruská barevná bolonka?
                </h2>
              </motion.div>

              <motion.div 
                className="card-warm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {[
                      { icon: Sparkles, title: "Povahově dokonalý pejsek", desc: "Přátelský, poslušný, nebojácný. Zbytečně neštěká a je nekonfliktní k ostatním psům i lidem." },
                      { icon: Home, title: "Ideální do bytu", desc: "Malá váha, klidná povaha. Dovede prolenošit klidně celý den s vámi na gauči, ale zvládne i dlouhé vycházky." }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.title}
                        className="flex items-start gap-3 group"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <motion.div
                          whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {[
                      { icon: Dog, title: "Skvělý společník", desc: "Doprovází vás na vycházkách, jezdí s vámi rádi v autě. Milá, přátelská a nekonfliktní povaha." },
                      { icon: Heart, title: "Snadná péče o srst", desc: "Pravidelná chvilka péče o srst není zatěžující — je to chvíle pohody. A když se nechce česat? Srst lze stříhat." }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.title}
                        className="flex items-start gap-3 group"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <motion.div
                          whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <motion.div 
                  className="mt-8 pt-6 border-t border-border text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg text-foreground font-medium mb-2">
                    Co víc si přát od rodinného mazlíčka?
                  </p>
                  <p className="text-muted-foreground">
                    Ruská barevná bolonka je velmi oblíbené plemeno pro svoji malou váhu, 
                    milou, přátelskou a nekonfliktní povahu.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Chcete se stát součástí naší rodiny?
              </motion.h2>
              <motion.p 
                className="text-muted-foreground max-w-2xl mx-auto mb-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Rádi vám odpovíme na všechny dotazy a pomůžeme vybrat ideálního společníka
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Link to="/stenata" className="btn-hero inline-block">
                    Zobrazit štěňata
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Link to="/kontakt" className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    Kontaktovat nás
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
