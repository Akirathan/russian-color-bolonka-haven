import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ReservationStepper from "@/components/ReservationStepper";
import SnowEffect from "@/components/SnowEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CHS Pikaro – ruská barevná bolonka | Plzeň"
        description="Chovatelksá stanice ruských barevných bolonek od roku 1988. Zdravá štěňata s PP, výstavní šampioni. CHS Pikaro Plzeň."
        keywords="ruská barevná bolonka, štěňata ruské bolonky, ruská bolonka štěně, bolonka zwetna štěňata, chovatelská stanice Plzeň"
        url="/"
        breadcrumbs={[{ name: "Domů", url: "/" }]}
      />
      <SnowEffect />
      <Header />
      <main>
        <Hero />
        <ReservationStepper />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
