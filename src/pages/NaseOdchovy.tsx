import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CrossLinks from "@/components/CrossLinks";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import litter202601 from "@/assets/litter-2026-01.jpg";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "Štěňata", url: "/stenata" },
  { name: "Naše odchovy", url: "/nase-odchovy" },
];

const pastLitters = [
  {
    title: "Merry od Modlivého dolu × Zeus Země snů",
    birthDate: "9. ledna 2026",
    puppies: "6 (2 pejsci, 4 fenky)",
    colors: "Černá, Hnědá, Světlá",
    image: litter202601,
    slug: "vrh-leden-2026",
    status: "Všechna štěňata v nových domovech",
    statusEmoji: "🏡",
  },
];

const NaseOdchovy = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Naše odchovy ruské barevné bolonky | Pikaro"
        description="Předchozí vrhy ruské barevné bolonky, fotografie a naše chovatelská historie. CHS Pikaro Plzeň."
        keywords="odchovy bolonka, ruská barevná bolonka vrhy, chovatelská stanice Pikaro historie"
        url="/nase-odchovy"
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={breadcrumbs} className="mb-8 justify-center" />
            <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Archiv vrhů
              </motion.span>
              <motion.h1 className="section-heading mb-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Naše odchovy ruské barevné bolonky
              </motion.h1>
              <motion.p className="section-subheading mx-auto" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Přehled předchozích vrhů chovatelské stanice Pikaro. Všechna štěňata žijí v milujících rodinách.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Past Litters */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {pastLitters.map((litter, index) => (
                <motion.div key={index} variants={scaleIn} transition={{ duration: 0.5 }}>
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
                        alt={`Štěňata ruské barevné bolonky – vrh ${litter.birthDate}`}
                        className="w-full h-full"
                      />
                    </motion.div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {litter.title}
                    </h2>
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800">
                        <span>{litter.statusEmoji}</span>
                        {litter.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Datum narození:</span> {litter.birthDate}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Počet štěňat:</span> {litter.puppies}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Zbarvení:</span> {litter.colors}
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

            {/* SEO text */}
            <motion.div
              className="max-w-2xl mx-auto mt-16 card-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Naše chovatelská historie
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Chovatelská stanice Pikaro se věnuje chovu ruské barevné bolonky (ruská barevná boloňka, Russian Tsvetnaya Bolonka)
                v Plzni. Každý vrh plánujeme s ohledem na zdraví, povahu a plemenný standard – a každé štěně odchází do nového
                domova očkované, čipované, socializované a s průkazem původu (PP).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Na této stránce najdete přehled všech našich předchozích vrhů. Jsme hrdí na to, že naši odchovaní psi
                žijí v spokojených rodinách po celé České republice. Pokud máte zájem o štěně z budoucího vrhu,
                podívejte se na naše{" "}
                <Link to="/planovane-vrhy" className="text-primary hover:underline">plánované vrhy</Link> nebo nás{" "}
                <Link to="/kontakt" className="text-primary hover:underline">kontaktujte</Link>.
              </p>
            </motion.div>
          </div>
        </section>

        <CrossLinks exclude={["/nase-odchovy"]} />
      </main>
      <Footer />
    </div>
  );
};

export default NaseOdchovy;
