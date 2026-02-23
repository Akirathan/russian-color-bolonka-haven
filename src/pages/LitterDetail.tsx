import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Calendar, Baby, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import litterA from "@/assets/litter-2026-01-a.jpg";
import litterB from "@/assets/litter-2026-01-b.jpg";
import litterC from "@/assets/litter-2026-01-c.jpg";
import litterMain from "@/assets/litter-2026-01.jpg";

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
