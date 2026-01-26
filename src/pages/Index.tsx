import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutBreed from "@/components/AboutBreed";
import OurDogs from "@/components/OurDogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutBreed />
        <OurDogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
