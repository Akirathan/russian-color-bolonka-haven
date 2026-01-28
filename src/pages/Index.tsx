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
        title="Domů"
        description="Chovatelská stanice Pikaro - profesionální chov ruských barevných bolonek od roku 1988. Zdravá štěňata s PP, výstavní šampioni. Plzeň."
        keywords="ruská barevná bolonka, štěňata, chovatelská stanice Pikaro, Plzeň, bolonka štěně, malý pes"
        url="https://pikaro.cz/"
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
