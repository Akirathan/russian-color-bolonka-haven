import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Shield, Smile, Sparkles, Ruler, Weight, Dog, Palette } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "O plemeni", url: "/o-plemeni" },
];

const features = [
  {
    icon: Heart,
    title: "Oddanost",
    description: "Laskavý pes s vyrovnaným charakterem a živým temperamentem",
  },
  {
    icon: Sparkles,
    title: "Srst",
    description: "Dlouhá, sametová, lesklá srst s dobře vyvinutou podsadou",
  },
  {
    icon: Smile,
    title: "Povaha",
    description: "Milý a příjemný společník s lehce hravým a laskavým výrazem",
  },
  {
    icon: Shield,
    title: "Stavba",
    description: "Malý, harmonicky stavěný pes kompaktní konstituce",
  },
];

const breedStandard = {
  general: "Malý, o něco delší než čtvercový rámec, harmonicky stavěný pes. Působí atraktivně díky efektně zbarvené bohaté srsti. Výraz milého a příjemného společníka. Barevná bolonka se nesmí typem přibližovat pudlovi anebo Shih-Tzu.",
  characteristics: [
    {
      icon: Ruler,
      label: "Výška",
      value: "do 26 cm",
      description: "Optimální výška v kohoutku",
    },
    {
      icon: Weight,
      label: "Hmotnost",
      value: "3-4 kg",
      description: "Psi i feny",
    },
    {
      icon: Dog,
      label: "Skupina FCI",
      value: "9. skupina",
      description: "Psi společenští",
    },
    {
      icon: Palette,
      label: "Zbarvení",
      value: "Jednobarevné",
      description: "Jakékoliv mimo bílé a skvrnité",
    },
  ],
  sections: [
    {
      title: "Hlava",
      content: "Proporcionální k celkové stavbě těla. Lebka okrouhlá, lehce vypouklá, týlní hrbol málo výrazný. Stop krátký, dobře znatelný. Čenich není dlouhý, suchý, lehce se zužující k nosu. Nosní hřbet je rovný, mezi očima široký.",
    },
    {
      title: "Oči a uši",
      content: "Oči střední velikosti, tmavé, okrouhlé, přímo hledící. Výraz lehce hravý a laskavý. Uši střední velikosti, trojúhelníkového tvaru s lehce okrouhlou špičkou, povislé, úměrně vysoce posazené, s bohatou srstí.",
    },
    {
      title: "Trup",
      content: "Kompaktní, středně široký. Hřbet rovný, silný, široký, osvalený. Bedra krátká, mírně klenutá. Záď zaoblená, přiměřené délky, dost široká, lehce spáditá. Hrudní koš středně široký, oválný, dlouhý, hluboký v loktech.",
    },
    {
      title: "Srst",
      content: "Dlouhá, sametová, lesklá, hustá s dobře vyvinutou podsadou, rovnoměrně pokrývá celého psa. Vlas je silný a 'těžký'. Preferována je kadeřavá srst, povolená vlnitá.",
    },
    {
      title: "Končetiny",
      content: "Při pohledu zepředu jsou rovné a v postoji paralelní, poměrně široce postavené. Lopatky šikmo umístěné, dobře osvalené. Tlapky nevelké, okrouhlé formy, prsty jsou klenuté a pevně semknuté.",
    },
    {
      title: "Ocas",
      content: "Střední délky, vysoce nasazený, zatočený srpovitě na zádech anebo leží na zádi. Konec ocasu se dotýká těla. Ocas je plně osrstěný.",
    },
  ],
  proportions: [
    "Délka trupu nepřevyšuje výšku v kohoutku o víc než o 15%",
    "Hloubka hrudníku přibližně do poloviny kohoutkové výšky",
    "Délka mordy je o něco delší než 1/3 celkové délky hlavy",
  ],
  faults: {
    minor: [
      "Čtvercový anebo příliš dlouhý rámec",
      "Vysokonohý anebo krátkonohý jedinec",
      "Plochá lebeční část, nevýrazný stop",
      "Příliš dlouhá tlama",
      "Chybějící řezák",
      "Rovná srst",
      "Slabá srst",
    ],
    serious: [
      "Polostojící anebo stojící uši",
      "Vyboulené oči",
      "Chybění dvou a více řezáků",
      "Předkus s mezerou",
      "Chybějící podsada",
      "Zálomek ocasu",
      "Krátké křivé předloktí",
      "Velká bílá náprsenka, bílé tlapky",
    ],
    disqualifying: [
      "Nestandardní zbarvení",
      "Chybějící dlouhá srst na hlavě",
      "Podkus, zkřížený skus",
      "Výška v kohoutku nad 28 cm",
      "Nezvládnutelně agresivní jedinec",
      "Modré oči, různé zbarvení očí",
      "Kupírovaný anebo geneticky krátký ocas",
      "Výrazné znaky zakrslosti",
    ],
  },
  history: `Při šlechtění barevné bolonky byli použiti francouzská bolonka, Shih-Tzu a Lhasa-apso. Vývoj plemene začal v r. 1951, kdy byly založeny sekce "dekorativní kynologie" při klubech loveckých a služebných plemen psů.

Přísnou selekcí a výběrem do chovu v leningradském spolku myslivců a rybářů (LODiR) byla vybrána skupina exteriérově blízkých jedinců. Hlavními plemennými znaky byla malá velikost 20-24 cm a velice bohatá srst efektního jednobarevného zbarvení.

V r. 1964 byl napsán první standard plemene barevná bolonka. V r. 1966 Kynologická rada při Ministerstvu zemědělství uznala standard plemene barevná bolonka.

V r. 1973 dle rozhodnutí sekce pokojových psíků Sverdlovského meziokresního spolku byl založen Moskevský městský spolek milovníků psů (MGOLS). Aktivní šlechtitelská práce a spolupráce s kynology Leningradu přenesla centrum selekce plemene do Moskvy.

V 80. letech rostla popularita plemene, zakládají se nové kluby a chovatelské stanice. Vytvořen je národní klub plemene barevná bolonka.`,
};

const About = () => {
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
        title="O plemeni ruská barevná bolonka"
        description="Ruská barevná bolonka - standard plemene, charakteristika, historie. Malý, hypoalergenní pes ideální do bytu. Vše o tomto úžasném plemeni."
        keywords="ruská barevná bolonka, standard plemene, bolonka charakteristika, bolonka povaha, malý pes, hypoalergenní pes"
        url="https://pikaro.cz/o-plemeni"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "O plemeni", url: "/o-plemeni" },
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
                Standard plemene
              </motion.span>
              <motion.h1 
                className="section-heading mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Ruská Barevná Bolonka
              </motion.h1>
              <motion.p 
                className="text-sm text-muted-foreground mb-2"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                (Russkaya Tsvetnaya Bolonka)
              </motion.p>
              <motion.p 
                className="section-subheading mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Země původu: Rusko • FCI skupina 9 • Psi společenští
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="card-warm text-center group cursor-pointer"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                  >
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* General Description */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-warm">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Celkový vzhled
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {breedStandard.general}
                </p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Důležité proporce
                </h3>
                <ul className="space-y-2">
                  {breedStandard.proportions.map((prop, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {prop}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Základní parametry
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {breedStandard.characteristics.map((char, index) => (
                <motion.div 
                  key={char.label} 
                  className="card-warm text-center group"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center"
                    whileHover={prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    <char.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <p className="text-sm text-muted-foreground mb-1">{char.label}</p>
                  <p className="font-display text-2xl font-bold text-foreground mb-1">
                    {char.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{char.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Detailed Standard */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Podrobný standard
              </h2>
              <p className="text-muted-foreground">
                Detailní popis jednotlivých částí těla dle standardu FCI
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {breedStandard.sections.map((section, index) => (
                <motion.div 
                  key={section.title} 
                  className="card-warm"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Faults Section */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Vady
              </h2>
              <p className="text-muted-foreground">
                Jakákoliv odchylka od standardu je považována za vadu
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Minor Faults */}
              <motion.div 
                className="card-warm"
                variants={scaleIn}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  Vady
                </h3>
                <ul className="space-y-2">
                  {breedStandard.faults.minor.map((fault, index) => (
                    <motion.li 
                      key={index} 
                      className="text-muted-foreground text-sm flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {fault}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Serious Faults */}
              <motion.div 
                className="card-warm"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500" />
                  Vážné vady
                </h3>
                <ul className="space-y-2">
                  {breedStandard.faults.serious.map((fault, index) => (
                    <motion.li 
                      key={index} 
                      className="text-muted-foreground text-sm flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {fault}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Disqualifying Faults */}
              <motion.div 
                className="card-warm"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  Diskvalifikující vady
                </h3>
                <ul className="space-y-2">
                  {breedStandard.faults.disqualifying.map((fault, index) => (
                    <motion.li 
                      key={index} 
                      className="text-muted-foreground text-sm flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {fault}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Krátká historie plemene
                </h2>
              </motion.div>
              <motion.div 
                className="card-warm prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {breedStandard.history.split('\n\n').map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
