import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Calendar, Baby, ChevronLeft, ChevronRight, Dog, Weight, Palette } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion, useReducedMotion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import litterA from "@/assets/litter-2026-01-a.jpg";
import litterB from "@/assets/litter-2026-01-b.jpg";
import litterC from "@/assets/litter-2026-01-c.jpg";
import litterMain from "@/assets/litter-2026-01.jpg";
import faye2 from "@/assets/faye-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import puppy1 from "@/assets/puppy-1.jpg";
import puppy2 from "@/assets/puppy-2.jpg";
import puppy3 from "@/assets/puppy-3.jpg";
import puppy4 from "@/assets/puppy-4.jpg";
import puppy5 from "@/assets/puppy-5.jpg";
import puppy6 from "@/assets/puppy-6.jpg";

type PuppyStatus = "reserved" | "available" | "waitlist" | "new-home";

const puppyStatusConfig: Record<PuppyStatus, { label: string; emoji: string; className: string }> = {
  reserved: {
    label: "Zamluven/a",
    emoji: "🎀",
    className: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800",
  },
  available: {
    label: "Volný/á",
    emoji: "💚",
    className:
      "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  },
  waitlist: {
    label: "V evidenci zájemců",
    emoji: "📋",
    className:
      "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  },
  "new-home": {
    label: "V novém domově",
    emoji: "🏡",
    className: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
  },
};

const puppies = [
  {
    name: "Fifo",
    photo: puppy1,
    sex: "pejsek",
    weight: "1490 g",
    color: "Černá",
    description:
      "Černý pejsek je malý pohodář, který se rád drží nablízku. Je klidný, mazlivý a zvědavý — všechno si nejdřív prohlédne, a pak si přijde pro pohlazení.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Freddy",
    photo: puppy2,
    sex: "pejsek",
    weight: "1595 g",
    color: "Černá se znaky",
    description:
      "Tenhle černobílý klučík je malý pohodář. Je klidný, vyrovnaný, zvědavě sleduje dění kolem a nejradši je tam, kde jsou lidi – a kde se může nechat pomazlit.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Faye",
    photo: puppy3,
    sex: "fenka",
    weight: "1050 g",
    color: "Vlkošedá",
    description:
      "Tahle vlkošedá holčička je malý „motor“ vrhu. Miluje hry, sama je často začne a umí strhnout celou smečku. Veselá, akční parťačka, se kterou doma nebude nuda.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Filiha",
    photo: puppy4,
    sex: "pejsek",
    weight: "1120 g",
    color: "Černá se znaky",
    description:
      "Tahle černá holčička se znaky je malý zdroj radosti. Je energická, hravá a pořád v pohybu, ale jakmile má chvilku, hned se přijde přitulit a vyžádat si pohlazení. Veselá parťačka do rodiny, se kterou bude doma pořád živo a zároveň hodně mazlení.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Francis",
    photo: puppy5,
    sex: "fenka",
    weight: "1500 g",
    color: "Černá se znaky",
    description:
      "černá fenka se znaky je akční hračička, která miluje společnost a zábavu. Ráda se zapojuje do her, umí strhnout ostatní a pak se s klidem nechá pomazlit v lidské náruči. Je to ten typ, který rozdává dobrou náladu a chce být u všeho.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Freya",
    photo: puppy6,
    sex: "fenka",
    weight: "920 g",
    color: "krémová, žíhaná",
    description:
      "Krémová žíhaná fenka je naše nejmenší šikulka – samostatná, veselá a plná života. Ve hře doslova poskakuje jako malý kozlík, všechno ji baví a s radostí se zapojuje do každé zábavy. Je to hravá holčička se sebevědomím většího pejska, která umí rozzářit celý vrh.",
    status: "new-home" as PuppyStatus,
  },
];

const LitterDetail = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const images = [
    litterMain,
    litterA,
    litterB,
    litterC,
    faye2,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () =>
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

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

  const breadcrumbs = [
    { name: "Domů", url: "/" },
    { name: "Štěňata", url: "/stenata" },
    { name: "Vrh leden 2026", url: "/stenata/vrh-leden-2026" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Štěňata bolonky – vrh leden 2026 | Plzeň – Pikaro"
        description="Štěňata ruské barevné bolonky z vrhu leden 2026. 6 štěňat s PP od CHS Pikaro v Plzni. Zdravá, socializovaná, k odběru od března."
        keywords="štěňata bolonky 2026, štěně bolonky Plzeň, ruská bolonka štěně, štěňata ruské bolonky"
        url="/stenata/vrh-leden-2026"
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div className="flex items-center gap-4 mb-4" variants={fadeInUp} transition={{ duration: 0.5 }}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Vrh leden 2026
                </span>
              </motion.div>
              <motion.h1 className="section-heading mb-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Merry od Modlivého dolu × Zeus Země snů
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-6 text-muted-foreground"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>9. ledna 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Baby className="w-5 h-5 text-primary" />
                  <span>6 štěňat (2 pejsci, 4 fenky)</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Main Image */}
              <motion.div
                className="image-frame overflow-hidden mb-8 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(0)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <OptimizedImage src={litterMain} alt="Štěňata s maminkou" className="w-full aspect-video" priority />
              </motion.div>

              {/* Text */}
              <motion.div
                className="prose prose-lg max-w-none mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-foreground leading-relaxed text-lg">
                  V naší chovatelské stanici Pikaro (Plzeň) se 9. ledna 2026 narodilo 6 štěňátek ruské barevné bolonky –
                  2 pejsci a 4 fenky. Všichni se mají krásně k světu, jsou čilí, dobře prospívají a každý den je radost
                  je pozorovat, jak objevují svůj malý svět.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Štěňátka vyrůstají v domácím prostředí v klidném režimu – dbáme na dostatek spánku, pohodlí a
                  postupné, citlivé zvykání na běžné věci, které je v budoucnu čekají (manipulace, hřeben/kartáč, doteky
                  na tlapkách, zvuky domácnosti). Na této stránce budeme průběžně přidávat nové fotografie a krátké
                  aktuality, jak rostou a vyvíjí se jejich osobnosti.
                </p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                className="grid sm:grid-cols-3 gap-4 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                {[
                  { label: "Zbarvení", value: "Černá, hnědá, světlá" },
                  { label: "K odběru od", value: "7. března 2026" },
                  { label: "Počet štěňat", value: "2 pejsci, 4 fenky" },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    className="card-warm text-center"
                    variants={scaleIn}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  >
                    <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
                    <p className="font-semibold text-foreground">{card.value}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Puppies Section */}
              <motion.h2
                className="font-display text-2xl font-semibold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Naše štěňátka
              </motion.h2>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                {puppies.map((puppy, i) => (
                  <motion.div
                    key={puppy.name}
                    className="card-warm overflow-hidden"
                    variants={scaleIn}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={prefersReducedMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="image-frame overflow-hidden mb-4 -mx-6 -mt-6"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <OptimizedImage src={puppy.photo} alt={`Štěně ${puppy.name}`} className="w-full aspect-square" />
                    </motion.div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">{puppy.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {puppy.sex}
                      </span>
                    </div>
                    {/* Status Badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${puppyStatusConfig[puppy.status].className}`}
                      >
                        <span>{puppyStatusConfig[puppy.status].emoji}</span>
                        {puppy.status === "available"
                          ? puppy.sex === "fenka"
                            ? "Volná"
                            : "Volný"
                          : puppy.status === "reserved"
                            ? puppy.sex === "fenka"
                              ? "Zamluvena"
                              : "Zamluven"
                            : puppyStatusConfig[puppy.status].label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Weight className="w-3.5 h-3.5 text-primary" />
                        {puppy.weight}
                      </span>
                      <span className="flex items-center gap-1">
                        <Palette className="w-3.5 h-3.5 text-primary" />
                        {puppy.color}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{puppy.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gallery */}
              <motion.h2
                className="font-display text-2xl font-semibold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Fotogalerie
              </motion.h2>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="image-frame overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(i)}
                    variants={scaleIn}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <OptimizedImage src={img} alt={`Štěňata - foto ${i + 1}`} className="w-full aspect-square" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Lightbox Dialog */}
              <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
                <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur border-none">
                  <DialogTitle className="sr-only">
                    Fotogalerie - obrázek {selectedImage !== null ? selectedImage + 1 : 0}
                  </DialogTitle>
                  <div className="relative">
                    {selectedImage !== null && (
                      <img
                        src={images[selectedImage]}
                        alt={`Štěňata - foto ${selectedImage + 1}`}
                        className="w-full max-h-[85vh] object-contain"
                      />
                    )}

                    {/* Navigation buttons */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                      aria-label="Předchozí fotka"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                      aria-label="Další fotka"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 text-sm">
                      {selectedImage !== null ? selectedImage + 1 : 0} / {images.length}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* CTA */}
              <motion.div
                className="card-warm text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Máte zájem o štěně z tohoto vrhu?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Kontaktujte nás pro více informací o dostupnosti a rezervaci
                </p>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  className="inline-block"
                >
                  <Link to="/kontakt" className="btn-hero inline-block">
                    Kontaktovat nás
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LitterDetail;
