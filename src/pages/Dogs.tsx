import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Trophy, Heart, Camera, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import oskar1 from "@/assets/oskar-1.jpg";
import oskar2 from "@/assets/oskar-2.jpg";
import oskar3 from "@/assets/oskar-3.jpg";
import oskar4 from "@/assets/oskar-4.jpg";
import bekka1 from "@/assets/bekka-1.jpg";
import bekka3 from "@/assets/bekka-3.jpg";
import bekka4 from "@/assets/bekka-4.jpg";
import kevina1 from "@/assets/kevina-1.jpg";
import pawTrail from "@/assets/paw-trail.png";

const breadcrumbs = [
  { name: "Domů", url: "/" },
  { name: "Naši psi", url: "/nasi-psi" },
];

const dogs = [
  {
    name: "Oskar",
    fullName: "Luk-Cvet Vinný vrch",
    description: "Krásná fenka s výbornou povahou a úspěchy na výstavách. Klubová vítězka junior 2020.",
    image: oskar4,
    gallery: [oskar1, oskar2, oskar3],
    age: "5 let",
    birthDate: "1. května 2019",
    color: "Hnědá se znaky",
    weight: "3,5 kg",
    height: "25 cm",
    titles: ["Velmi nadějná 1", "Výborný 1 CAJC", "Klubový vítěz junior 2020", "BOS", "Výborný 1, vítěz třídy mladých"],
    healthTests: ["Patella: 0/1", "Oči: bez nálezu na dědičné choroby"],
    character:
      "Oskar je náš krycí pes – klidný, přátelský a povahově velmi vyrovnaný parťák, se kterým je radost fungovat v každodenním režimu. Vyniká kontaktní, jemnou povahou a schopností se snadno zklidnit, což je přesně to, co u bolonky chceme předávat dál. V chovu se dlouhodobě osvědčuje – jeho potomci bývají zdravě stavění, krásně socializovatelní a povahově úžasní. Právě proto je Oskar pro nás důležitou součástí chovu a pečlivě vybíraným tatínkem budoucích vrhů.",
    litters: [],
  },
  {
    name: "Bekka",
    fullName: "Mery od Modlivého dolu",
    description: "Fenka s krásně klidnou, stabilní povahou a velkým srdcem. Skvělá máma a základ našeho chovu.",
    image: bekka1,
    gallery: [bekka3, bekka4, bekka1],
    age: "4 roky",
    birthDate: "14. září 2020",
    color: "Černá",
    weight: "3,5 kg",
    height: "25 cm",
    titles: ["Výborná 1", "CAJC", "BOJ"],
    healthTests: ["Patella: 0/0", "Oči: Clear"],
    character:
      "Rebekka je fenka s krásně klidnou, stabilní povahou a velkým srdcem. Je přátelská, jemná a velmi vnímavá – dokáže se rychle přizpůsobit a v domácnosti působí jako 'uklidňující kotva'. Jako máma je pečlivá a trpělivá, štěňatům dává pocit bezpečí a zároveň je přirozeně vede k samostatnosti. Právě tahle kombinace klidu a citlivosti je pro nás v chovu zásadní, protože vytváří skvělý základ pro budoucí rodinné parťáky.",
    litters: [],
  },
  {
    name: "Kevina",
    fullName: "Amálka Hamvaley",
    description:
      "Uchovněná fenka, dnes hlavně rodinná parťačka pro radost, klid a pohodu, která je stále vůdkyní naší smečky.",
    image: kevina1,
    gallery: [kevina1, kevina1, kevina1],
    age: "10 let",
    birthDate: "18. září 2014",
    color: "Černá",
    weight: "3,5 kg",
    height: "25 cm",
    titles: ["Výborná 1", "CAC", "BOB"],
    healthTests: [],
    character:
      "Kevina je uchovněná fenka, která už u nás není aktivně v chovu – dnes hlavně rodinná parťačka pro radost, klid a pohodu.",
    litters: [],
  },
];

const Dogs = () => {
  const prefersReducedMotion = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images: string[], startIndex: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);

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

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Naši psi – ruská barevná bolonka | CHS Pikaro Plzeň"
        description="Chovní jedinci ruské barevné bolonky. Výstavní šampioni s PP, zdravotní testy (patella, DNA). CHS Pikaro Plzeň."
        keywords="chovní psi bolonka, ruská bolonka šampion, krycí pes bolonka Plzeň, zdravotní testy bolonka"
        url="/nasi-psi"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "Naši psi", url: "/nasi-psi" },
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
                Naši mazlíčci
              </motion.span>
              <motion.h1 className="section-heading mb-4" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Seznamte se s našimi psy
              </motion.h1>
              <motion.p className="section-subheading mx-auto" variants={fadeInUp} transition={{ duration: 0.6 }}>
                Každý náš mazlíček je členem rodiny. Pečlivě dbáme na zdraví a socializaci všech psů.
              </motion.p>

              {/* Animated Paw Trail */}
              <motion.div
                className="mt-8 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.img
                  src={pawTrail}
                  alt=""
                  aria-hidden="true"
                  className="w-full max-w-2xl mx-auto opacity-45 sepia saturate-150 hue-rotate-[-10deg]"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 0.45, x: 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.6,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Dogs Detail */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {dogs.map((dog, index) => (
                <motion.article
                  key={dog.name}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {/* Image Gallery */}
                  <motion.div
                    className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="image-frame overflow-hidden cursor-pointer"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openLightbox([dog.image, ...dog.gallery], 0)}
                    >
                      <motion.img
                        src={dog.image}
                        alt={dog.fullName}
                        className="w-full aspect-square object-cover"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                    <div className="grid grid-cols-3 gap-3">
                      {dog.gallery.map((img, i) => (
                        <motion.div
                          key={i}
                          className="image-frame overflow-hidden cursor-pointer"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                          onClick={() => openLightbox([dog.image, ...dog.gallery], i + 1)}
                        >
                          <img
                            src={img}
                            alt={`${dog.name} - foto ${i + 1}`}
                            className="w-full aspect-square object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Info */}
                  <motion.div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                      <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                        {dog.name}
                      </h2>
                      <p className="text-primary font-medium">{dog.fullName}</p>
                    </motion.div>

                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      variants={fadeInUp}
                      transition={{ duration: 0.5 }}
                    >
                      {dog.character}
                    </motion.p>

                    {/* Quick Info */}
                    <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp} transition={{ duration: 0.5 }}>
                      {[
                        { label: "Věk", value: dog.age },
                        { label: "Zbarvení", value: dog.color },
                        { label: "Hmotnost", value: dog.weight },
                        { label: "Výška", value: dog.height },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          className="bg-secondary/50 rounded-xl p-4"
                          whileHover={prefersReducedMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                        >
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground">{item.value}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Titles */}
                    {dog.titles.length > 0 && (
                      <motion.div className="card-warm" variants={fadeInUp} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="w-5 h-5 text-primary" />
                          <h3 className="font-display text-lg font-semibold text-foreground">Výstavní úspěchy</h3>
                        </div>
                        <ul className="space-y-2">
                          {dog.titles.map((title, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                              <ChevronRight className="w-4 h-4 text-primary" />
                              {title}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Health Tests */}
                    {dog.healthTests.length > 0 && (
                      <motion.div className="card-warm" variants={fadeInUp} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Heart className="w-5 h-5 text-primary" />
                          <h3 className="font-display text-lg font-semibold text-foreground">Zdravotní testy</h3>
                        </div>
                        <ul className="space-y-2">
                          {dog.healthTests.map((test, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                              <ChevronRight className="w-4 h-4 text-primary" />
                              {test}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Litters */}
                    {dog.litters.length > 0 && (
                      <motion.div className="card-warm" variants={fadeInUp} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-3">
                          <Camera className="w-5 h-5 text-primary" />
                          <h3 className="font-display text-lg font-semibold text-foreground">Vrhy</h3>
                        </div>
                        <ul className="space-y-2">
                          {dog.litters.map((litter: any, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <ChevronRight className="w-4 h-4 text-primary" />
                              {litter.year}: s {litter.partner} - {litter.puppies} štěňat
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Máte zájem o štěně?
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-2xl mx-auto mb-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Rádi vám poskytneme více informací o našich psech a plánovaných vrzích
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
                  <Link
                    to="/kontakt"
                    className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Kontaktovat nás
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur border-none">
          <DialogTitle className="sr-only">Fotogalerie - obrázek {currentImageIndex + 1}</DialogTitle>
          <div className="relative">
            {lightboxImages.length > 0 && (
              <img
                src={lightboxImages[currentImageIndex]}
                alt={`Foto ${currentImageIndex + 1}`}
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
              {currentImageIndex + 1} / {lightboxImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dogs;
