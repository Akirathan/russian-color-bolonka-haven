import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CrossLinks from "@/components/CrossLinks";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "Štěňata", url: "/stenata" },
  { name: "Plánované vrhy", url: "/planovane-vrhy" },
];

const plannedLitters = [
  {
    parents: "Coco Pikaro × vybíráme ženicha",
    expectedDate: "2026",
    description:
      "Plánujeme vrh s naší fenkou Coco. Aktuálně pečlivě vybíráme vhodného krycího psa s ohledem na zdraví, povahu a exteriér. U ruské barevné bolonky (Russian Tsvetnaya Bolonka) dbáme na to, aby rodiče měli vyřešené zdravotní testy – patella, oči – a výbornou povahu.",
    colors: ["Bude upřesněno"],
    status: "V přípravě",
  },
];

const PlanovaneVrhy = () => {
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
        title="Plánované vrhy ruské barevné bolonky | Pikaro"
        description="Přehled plánovaných spojení ruské barevné bolonky. Termíny jsou orientační – prioritou je zdraví a pohoda fenky."
        keywords="plánované vrhy bolonka, ruská barevná bolonka štěňata, štěně bolonky Plzeň"
        url="/planovane-vrhy"
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
                Plánované vrhy
              </motion.span>
              <motion.h1 className="section-heading mb-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Plánované vrhy ruské barevné bolonky
              </motion.h1>
              <motion.p className="section-subheading mx-auto" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Naše nejbližší chovatelské plány. Termíny jsou vždy orientační – upřednostňujeme zdraví fenky i budoucích štěňátek.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Planned Litters */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
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
                  <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                    {litter.parents}
                  </h2>
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

            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Máte zájem o štěně z plánovaného vrhu? Doporučujeme se ozvat co nejdříve –
                u ruské bolonky bývá zájem velký a část míst se obsazuje ještě před narozením štěňat.
              </p>
              <Link to="/kontakt" className="btn-hero inline-block">
                Zapsat se do čekací listiny
              </Link>
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
                Jak plánujeme vrhy ruské barevné bolonky
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Každý plánovaný vrh v naší chovatelské stanici Pikaro (Plzeň) vychází z pečlivého výběru rodičovského páru.
                Hledáme zdravé jedince s vyrovnanou povahou a exteriérem odpovídajícím standardu FCI. Ruská barevná bolonka
                (ruská barevná boloňka, Russkaya Tsvetnaya Bolonka) je společenský pes, u kterého je klíčová právě povaha –
                a tu můžeme ovlivnit už výběrem rodičů.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Termíny plánovaných vrhů jsou orientační. Nikdy neuspěcháme reprodukci na úkor zdraví. Fenka musí být
                v optimální kondici – fyzicky i psychicky. Tento přístup nám umožňuje odchovávat štěňata, která jsou
                skutečně připravená stát se parťáky do rodin.
              </p>
            </motion.div>
          </div>
        </section>

        <CrossLinks exclude={["/planovane-vrhy"]} />
      </main>
      <Footer />
    </div>
  );
};

export default PlanovaneVrhy;
