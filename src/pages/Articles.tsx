import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articlesData";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Články o ruské barevné bolonce"
        description="Užitečné články o výchově, péči a zdraví ruské barevné bolonky. Tipy pro majitele, výživa, péče o srst. Chovatelská stanice Pikaro."
        keywords="bolonka články, výchova bolonky, péče o bolonku, bolonka výživa, bolonka zdraví, tipy pro majitele"
        url="https://pikaro.cz/clanky"
        breadcrumbs={[
          { name: "Domů", url: "/" },
          { name: "Články", url: "/clanky" },
        ]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Články
              </span>
              <h1 className="section-heading mb-4">
                Užitečné články o Bolonkách
              </h1>
              <p className="section-subheading mx-auto">
                Praktické rady a tipy pro majitele i zájemce o toto úžasné plemeno
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "Všechny"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link to={`/clanky/${article.slug}`} key={article.id}>
                  <article className="card-warm group cursor-pointer h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                        <article.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Číst více <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Máte dotaz?
              </h2>
              <p className="text-muted-foreground mb-8">
                Napište nám – rádi Vám poradíme s čímkoli ohledně bolonky
              </p>
              <Link to="/kontakt" className="btn-hero">
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
