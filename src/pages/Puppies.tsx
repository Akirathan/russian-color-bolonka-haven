import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import CrossLinks from "@/components/CrossLinks";
import { Heart, Calendar, CheckCircle, Phone, Clock, Shield, Baby, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import litter202601 from "@/assets/litter-2026-01.jpg";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "Štěňata", url: "/stenata" },
];

type LitterStatus = "sold-out" | "waitlist" | "available";

const litterStatusConfig: Record<LitterStatus, { label: string; emoji: string; className: string }> = {
  "sold-out": {
    label: "Plně zamluveno",
    emoji: "🐾",
    className: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800",
  },
  "waitlist": {
    label: "V evidenci zájemců",
    emoji: "📋",
    className: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  },
  "available": {
    label: "Volní pejsci/fenky",
    emoji: "💛",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  },
};

const currentLitters: {
  parents: string;
  birthDate: string;
  available: number;
  totalPuppies: number;
  puppiesDetail: string;
  colors: string[];
  readyDate: string;
  image: string;
  slug: string;
  status: LitterStatus;
}[] = [];

const plannedLitters = [
  {
    parents: "Coco Pikaro × vybíráme ženicha",
    expectedDate: "2026",
    description: "Plánujeme vrh s naší fenkou Coco. Aktuálně pečlivě vybíráme vhodného krycího psa s ohledem na zdraví, povahu a exteriér.",
    colors: ["Bude upřesněno"],
    status: "V přípravě",
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
    description: "Navštivte nás a seznamte se s maminkou štěňat i samotnými štěňaty",
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
    description:
      "Štěňata jsou od narození v kontaktu s lidmi, dětmi i dalšími zvířaty. Učíme je základním návykům a hygieně.",
  },
  {
    icon: Shield,
    title: "Zdravotní péče",
    description:
      "Všechna štěňata jsou očkována podle věku, odčervena a čipována. Předáváme kompletní zdravotní dokumentaci.",
  },
  {
    icon: Baby,
    title: "Výchova od začátku",
    description:
      "Od raného věku štěňata citlivě navykáme na manipulaci a péči: hřeben/kartáč, tlapky, uši, tlamu, zvuky domácnosti a krátké zklidnění. Je to praktický základ pro pohodovou srst i veterinární ošetření.",
  },
  {
    icon: Clock,
    title: "Příprava na nový domov",
    description: "Štěňata postupně připravujeme na samostatnost a přechod do nového prostředí.",
  },
];

const Puppies = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Štěňata ruské barevné bolonky s PP | Vrhy Pikaro"
        description="Aktuální a plánované vrhy ruské barevné bolonky, informace pro zájemce a průběh rezervace. Plzeň, ČR."
        keywords="ruská barevná bolonka štěňata, štěňata s PP, ruská bolonka štěně, bolonka zwetna štěňata"
        url="/stenata"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "Štěňata", url: "/stenata" },
        ]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={breadcrumbs} className="mb-8 justify-center" />
            <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Štěňata
              </motion.span>
              <motion.h1 className="section-heading mb-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Štěňata ruské barevné bolonky s PP
              </motion.h1>
              <motion.p className="section-subheading mx-auto" variants={fadeInUp} transition={{ duration: 0.6 }}>
                S láskou vychováváme štěňata ruské barevné bolonky (Russkaya Tsvetnaya Bolonka). Každé štěně odchází do nového domova
                socializované, zdravé a s průkazem původu. Níže najdete přehled aktuálních i plánovaných vrhů.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Current Litters */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Aktuální vrhy ruské bolonky</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tady sdílíme informace o vrzích, které právě probíhají. Dostupnost štěňátek se může lišit, protože část zájemců bývá domluvená dopředu.{" "}
                <Link to="/aktualni-vrhy" className="text-primary hover:underline">Zobrazit podrobnosti →</Link>
              </p>
            </motion.div>

            {currentLitters.length > 0 ? (
              <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {currentLitters.map((litter, index) => (
                  <motion.div key={index} variants={scaleIn} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <Link
                      to={`/stenata/${litter.slug}`}
                      className="card-warm overflow-hidden group hover:shadow-lg transition-shadow block"
                    >
                      <motion.div
                        className="aspect-video overflow-hidden rounded-xl mb-4"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <OptimizedImage
                          src={litter.image}
                          alt={`Vrh ${litter.parents}`}
                          className="w-full h-full"
                        />
                      </motion.div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {litter.parents}
                      </h3>
                      {/* Status Badge */}
                      <div className="mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${litterStatusConfig[litter.status].className}`}>
                          <span>{litterStatusConfig[litter.status].emoji}</span>
                          {litterStatusConfig[litter.status].label}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Datum narození:</span> {litter.birthDate}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Počet štěňat:</span> {litter.totalPuppies}{" "}
                          {litter.puppiesDetail && `(${litter.puppiesDetail})`}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Zbarvení:</span> {litter.colors.join(", ")}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">K odběru od:</span> {litter.readyDate}
                        </p>
                      </div>
                      <motion.span
                        className="btn-hero inline-block mt-4 text-center w-full"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      >
                        Zobrazit detail
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12 card-warm max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
            )}
           </div>
        </section>

        {/* Planned Litters */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Plánované vrhy ruské barevné bolonky</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Naše nejbližší chovatelské plány. Termíny jsou orientační – vždy upřednostňujeme zdraví fenky i budoucích štěňátek.{" "}
                <Link to="/planovane-vrhy" className="text-primary hover:underline">Zobrazit podrobnosti →</Link>
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {plannedLitters.map((litter, index) => (
                <motion.div
                  key={index}
                  className="card-warm relative overflow-hidden"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-muted-foreground font-medium text-xs">
                      {litter.status}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-primary font-medium">
                      <Calendar className="w-4 h-4" />
                      {litter.expectedDate}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {litter.parents}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {litter.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Očekávaná zbarvení:</span>{" "}
                    {litter.colors.join(", ")}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/kontakt" className="btn-outline-hero inline-block">
                Zapsat se do čekací listiny
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Past Litters */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">Naše odchovy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Přehled předchozích vrhů naší chovatelské stanice. Všechna štěňata ruské barevné bolonky jsou v milujících domovech.{" "}
                <Link to="/nase-odchovy" className="text-primary hover:underline">Zobrazit archiv →</Link>
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={scaleIn}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/stenata/vrh-leden-2026"
                  className="card-warm overflow-hidden group hover:shadow-lg transition-shadow block"
                >
                  <motion.div
                    className="aspect-video overflow-hidden rounded-xl mb-4"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OptimizedImage
                      src={litter202601}
                      alt="Vrh leden 2026"
                      className="w-full h-full"
                    />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Merry od Modlivého dolu × Zeus Země snů
                  </h3>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800">
                      <span>🏡</span>
                      Všechna štěňata v nových domovech
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Datum narození:</span> 9. ledna 2026
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Počet štěňat:</span> 6 (2 pejsci, 4 fenky)
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Zbarvení:</span> Černá, Hnědá, Světlá
                    </p>
                  </div>
                  <motion.span
                    className="btn-hero inline-block mt-4 text-center w-full"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    Zobrazit detail
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

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
                Jak vychováváme štěňata
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Každé naše štěně dostává tu nejlepší péči od prvního dne
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {puppyCareTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  className="card-warm text-center group cursor-pointer"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-accent flex items-center justify-center"
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }
                    }
                  >
                    <tip.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/clanky/co-dostanete-se-stenetem" className="btn-outline-hero inline-block">
                Co dostanete se štěnětem
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Reservation Process */}
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
                Jak rezervovat štěně
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Jednoduchý proces v několika krocích</p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {reservationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <motion.div
                    className="card-warm text-center h-full"
                    whileHover={prefersReducedMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                    >
                      {index + 1}
                    </motion.div>
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center"
                      whileHover={
                        prefersReducedMotion ? {} : { rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }
                      }
                    >
                      <step.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Link to="/kontakt" className="btn-hero inline-block">
                  Kontaktujte nás
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 gradient-warm overflow-hidden">
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
                  Co dostanete se štěnětem
                </h2>
              </motion.div>

              <motion.div
                className="card-warm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ul className="space-y-4">
                  {[
                    "Očkovací průkaz s dosavadním očkováním a záznamy o odčervení",
                    "Čip",
                    "Převodní list štěněte",
                    "Smlouvu o prodeji štěněte",
                    "Potvrzení veterinárního lékaře o zdravotním stavu štěněte",
                    "Základní výbavička - krmení do začátku, oblíbená hračka, savé podložky...",
                    "Podrobné pokyny k péči a výživě",
                    "Celoživotní poradenskou podporu",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 8 * 0.08 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <Link to="/clanky/prukaz-puvodu-psa-bolonka" className="text-primary hover:underline font-medium">
                        Průkaz původu
                      </Link>
                      {" "}– chovatelka zašle ihned po vyhotovení plemennou knihou
                    </span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Useful Articles - Internal Linking */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
                Užitečné články pro budoucí majitele
              </h2>
              <motion.div
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {[
                  {
                    slug: "vychova-stenete-ruske-barevne-bolonky",
                    title: "Výchova štěněte",
                    desc: "Socializace, rutina, samota",
                  },
                  { slug: "bolonka-do-bytu", title: "Bolonka do bytu", desc: "Štěkání, citlivost, režim" },
                  { slug: "pece-o-srst-bolonky-bez-stresu", title: "Péče o srst", desc: "Česání, koupání, salon" },
                  { slug: "vyziva-stenete-bolonky", title: "Výživa štěněte", desc: "Krmení, dávkování, režim" },
                  { slug: "zdravi-bolonky-prevence", title: "Zdraví a prevence", desc: "Patella, oči, zuby" },
                ].map((article, index) => (
                  <motion.div
                    key={article.slug}
                    variants={scaleIn}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  >
                    <Link
                      to={`/clanky/${article.slug}`}
                      className="card-warm group hover:border-primary/30 transition-colors p-4 block h-full"
                    >
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{article.desc}</p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <div className="text-center mt-6">
                <Link to="/clanky" className="text-sm text-primary hover:underline">
                  Zobrazit všechny články →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          items={[
            {
              question: "Jak probíhá rezervace štěněte ruské barevné bolonky?",
              answer: "Rezervace začíná kontaktem – napište nám nebo zavolejte. Domluvíme osobní setkání, kde se seznámíte s maminkou i štěňaty. Po vzájemné dohodě složíte zálohu a štěně bude rezervováno pro vás. K odběru je připravené po dovršení 8–10 týdnů.",
            },
            {
              question: "Co je PP (průkaz původu) a proč je důležitý?",
              answer: "Průkaz původu (PP) je jediný oficiální doklad potvrzující, že štěně pochází z kontrolovaného chovu s ověřeným rodokmenem. Zaručuje, že rodiče prošli zdravotními testy a splňují plemenný standard. Štěně bez PP nemá garantovaný původ ani zdravotní historii rodičů.",
            },
            {
              question: "V jakém věku lze štěně bolonky odebrat?",
              answer: "Štěňata ruské barevné bolonky odcházejí do nových domovů ve věku 8–10 týdnů. Do té doby potřebují být s maminkou a sourozenci pro správný vývoj a socializaci. Předčasný odběr může negativně ovlivnit povahu i zdraví štěněte.",
            },
            {
              question: "Co dostanu se štěnětem od chovatele?",
              answer: "Se štěnětem dostanete očkovací průkaz, čip, převodní list, smlouvu o prodeji, potvrzení od veterináře, základní výbavičku (krmení, hračka, savé podložky), pokyny k péči a výživě. Průkaz původu (PP) zašleme po vyhotovení plemennou knihou. Nabízíme celoživotní poradenskou podporu.",
            },
            {
              question: "Jak poznat seriózního chovatele ruské bolonky?",
              answer: "Seriózní chovatel vám umožní návštěvu, ukáže podmínky chovu, představí rodiče štěňat a doloží zdravotní testy (patella, oči). Štěňata prodává s PP, smlouvou a zajímá se o to, kam štěně půjde. Nikdy neinzeruje více plemen současně a netlačí na rychlé rozhodnutí.",
            },
            {
              question: "Jsou štěňata očkovaná a čipovaná?",
              answer: "Ano, všechna naše štěňata ruské barevné bolonky jsou očkována podle věku, odčervena a čipována. Předáváme kompletní zdravotní dokumentaci. Každé štěně je před odchodem prohlédnuto veterinárním lékařem.",
            },
          ]}
          title="Často kladené otázky o štěňatech"
          subtitle="Informace pro zájemce o štěně ruské barevné bolonky"
        />

        <CrossLinks exclude={["/stenata"]} />
      </main>
      <Footer />
    </div>
  );
};

export default Puppies;
