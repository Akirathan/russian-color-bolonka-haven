import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Calendar, Baby, ChevronLeft, ChevronRight, Dog, Weight, Palette } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import litterA from "@/assets/litter-2026-01-a.jpg";
import litterB from "@/assets/litter-2026-01-b.jpg";
import litterC from "@/assets/litter-2026-01-c.jpg";
import litterMain from "@/assets/litter-2026-01.jpg";
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
    weight: "320 g",
    color: "Černá",
    description:
      "Černý pejsek je malý pohodář, který se rád drží nablízku. Je klidný, mazlivý a zvědavý — všechno si nejdřív prohlédne, a pak si přijde pro pohlazení.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Freddy",
    photo: puppy2,
    sex: "pejsek",
    weight: "350 g",
    color: "Černá se znaky",
    description:
      "Tenhle černobílý klučík je malý pohodář. Je klidný, vyrovnaný, zvědavě sleduje dění kolem a nejradši je tam, kde jsou lidi – a kde se může nechat pomazlit.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Faye",
    photo: puppy3,
    sex: "fenka",
    weight: "290 g",
    color: "Krémová",
    description: "Nejmenší ze sourozenců, ale největší osobnost. Hravá a společenská, vždy u všeho.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Beny",
    photo: puppy4,
    sex: "pejsek",
    weight: "340 g",
    color: "Černá s pálením",
    description: "Aktivní a hravý kluk s výrazným zbarvením. Rád se honí za míčkem a baví celou smečku.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Bibi",
    photo: puppy5,
    sex: "fenka",
    weight: "310 g",
    color: "Hnědá",
    description: "Jemná a citlivá fenka s krásným kudrnatým kožíškem. Miluje blízkost lidí a mazlení.",
    status: "new-home" as PuppyStatus,
  },
  {
    name: "Bětka",
    photo: puppy6,
    sex: "fenka",
    weight: "305 g",
    color: "Šedá",
    description: "Klidná pozorovatelka s roztomilým výrazem. Ráda sleduje dění kolem a pak se přidá k zábavě.",
    status: "new-home" as PuppyStatus,
  },
];

const LitterDetail = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [litterMain, litterA, litterB, litterC];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () =>
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

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
        <section className="py-12 gradient-warm">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Vrh leden 2026
              </span>
            </div>
            <h1 className="section-heading mb-4">Merry od Modlivého dolu × Zeus Země snů</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>9. ledna 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-primary" />
                <span>6 štěňat (2 pejsci, 4 fenky)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Main Image */}
              <div
                className="image-frame overflow-hidden mb-8 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(0)}
              >
                <img src={litterMain} alt="Štěňata s maminkou" className="w-full aspect-video object-cover" />
              </div>

              {/* Text */}
              <div className="prose prose-lg max-w-none mb-12">
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
              </div>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                <div className="card-warm text-center">
                  <p className="text-sm text-muted-foreground mb-1">Zbarvení</p>
                  <p className="font-semibold text-foreground">Černá, hnědá, světlá</p>
                </div>
                <div className="card-warm text-center">
                  <p className="text-sm text-muted-foreground mb-1">K odběru od</p>
                  <p className="font-semibold text-foreground">7. března 2026</p>
                </div>
                <div className="card-warm text-center">
                  <p className="text-sm text-muted-foreground mb-1">Počet štěňat</p>
                  <p className="font-semibold text-foreground">2 pejsci, 4 fenky</p>
                </div>
              </div>

              {/* Puppies Section */}
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Naše štěňátka</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {puppies.map((puppy, i) => (
                  <motion.div
                    key={puppy.name}
                    className="card-warm overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="image-frame overflow-hidden mb-4 -mx-6 -mt-6">
                      <img
                        src={puppy.photo}
                        alt={`Štěně ${puppy.name}`}
                        className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
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
              </div>

              {/* Gallery */}
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Fotogalerie</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="image-frame overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(i)}
                  >
                    <img src={img} alt={`Štěňata - foto ${i + 1}`} className="w-full aspect-square object-cover" />
                  </div>
                ))}
              </div>

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
              <div className="card-warm text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Máte zájem o štěně z tohoto vrhu?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Kontaktujte nás pro více informací o dostupnosti a rezervaci
                </p>
                <Link to="/kontakt" className="btn-hero inline-block">
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

export default LitterDetail;
