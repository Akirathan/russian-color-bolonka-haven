import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
