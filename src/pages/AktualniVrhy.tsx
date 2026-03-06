import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CrossLinks from "@/components/CrossLinks";
import { Baby, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "Štěňata", url: "/stenata" },
  { name: "Aktuální vrhy", url: "/aktualni-vrhy" },
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

const AktualniVrhy = () => {
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
        title="Aktuální vrhy ruské barevné bolonky | Pikaro"
        description="Novinky a fotky z vrhů ruské barevné bolonky. Aktuální dostupnost sdělíme na dotaz – část zájemců bývá domluvená předem."
        keywords="aktuální vrhy bolonka, ruská barevná bolonka štěňata, štěňata s PP Plzeň"
        url="/aktualni-vrhy"
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
                Aktuální vrhy
              </motion.span>
              <motion.h1 className="section-heading mb-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Aktuální vrhy ruské barevné bolonky
              </motion.h1>
              <motion.p className="section-subheading mx-auto" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Sledujte vývoj štěňátek od prvních dnů. Dostupnost se může lišit, protože část zájemců bývá domluvená dopředu – neváhejte se zeptat na aktuální stav.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Current Litters */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
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
                          alt={`Štěňata ruské barevné bolonky – vrh ${litter.parents}`}
                          className="w-full h-full"
                        />
                      </motion.div>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {litter.parents}
                      </h2>
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
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  Momentálně neprobíhá žádný vrh
                </h2>
                <p className="text-muted-foreground mb-6">
                  V tuto chvíli nemáme aktivní vrh ruské barevné bolonky. Pokud máte zájem o štěně, podívejte se na naše{" "}
                  <Link to="/planovane-vrhy" className="text-primary hover:underline">plánované vrhy</Link>{" "}
                  nebo se zapište do čekací listiny.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/planovane-vrhy" className="btn-hero inline-block">
                    Plánované vrhy
                  </Link>
                  <Link to="/kontakt" className="btn-outline-hero inline-block">
                    Zapsat se do čekací listiny
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Info note */}
            <motion.div
              className="max-w-2xl mx-auto mt-12 card-warm border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">
                Jak funguje dostupnost štěňat?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Část štěňat z každého vrhu bývá zamluvena ještě před narozením – zájemci, kteří se ozvou s dostatečným předstihem, mají přirozeně větší šanci.
                Aktuální dostupnost vám rádi sdělíme osobně. Ruská barevná bolonka (barevný boloňský psík) je oblíbený společenský pes a poptávka po kvalitních štěňatech s PP bývá vysoká.
              </p>
            </motion.div>
          </div>
        </section>

        <CrossLinks exclude={["/aktualni-vrhy"]} />
      </main>
      <Footer />
    </div>
  );
};

export default AktualniVrhy;
