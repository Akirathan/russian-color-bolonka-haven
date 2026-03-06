import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ReservationStepper from "@/components/ReservationStepper";
import SnowEffect from "@/components/SnowEffect";
import CrossLinks from "@/components/CrossLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chovatelská stanice ruské barevné bolonky | Pikaro Plzeň"
        description="Rodinní společníci – ruská barevná bolonka. Vrhy, odchovy, výchova a péče. CHS Pikaro, Plzeň, ČR."
        keywords="ruská barevná bolonka, chovatelská stanice ruská barevná bolonka, ruská barevná bolonka Plzeň, štěňata bolonky"
        url="/"
        breadcrumbs={[{ name: "Domů", url: "/" }]}
      />
      <SnowEffect />
      <Header />
      <main>
        <Hero />
        <ReservationStepper />
        <CrossLinks exclude={["/"]} title="Prozkoumejte náš web" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
