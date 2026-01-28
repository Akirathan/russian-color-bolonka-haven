import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articlesData";
import { motion, useReducedMotion } from "framer-motion";

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("Všechny");
  const prefersReducedMotion = useReducedMotion();

  const filteredArticles = selectedCategory === "Všechny"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

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
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Články
              </motion.span>
              <motion.h1 
                className="section-heading mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Užitečné články o Bolonkách
              </motion.h1>
              <motion.p 
                className="section-subheading mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Praktické rady a tipy pro majitele i zájemce o toto úžasné plemeno
              </motion.p>
            </motion.div>

            {/* Categories */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              key={selectedCategory}
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/clanky/${article.slug}`}>
                    <motion.article 
                      className="card-warm group cursor-pointer h-full"
                      whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center"
                          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                        >
                          <article.icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
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
                        <motion.span 
                          className="text-primary font-medium text-sm flex items-center gap-2"
                          whileHover={prefersReducedMotion ? {} : { x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Číst více <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-warm overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
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
                Máte dotaz?
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Napište nám – rádi Vám poradíme s čímkoli ohledně bolonky
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Link to="/kontakt" className="btn-hero inline-block">
                  Kontaktujte nás
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
