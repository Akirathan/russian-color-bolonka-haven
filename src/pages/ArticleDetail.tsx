import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getArticleBySlug } from "@/data/articlesData";
import { ArrowLeft, Clock, CheckCircle, AlertTriangle, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-2xl font-display font-semibold mb-4">Článek nenalezen</h1>
            <Link to="/clanky" className="text-primary hover:underline">Zpět na články</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title={article.seoTitle} description={article.metaDescription} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 gradient-warm">
          <div className="container mx-auto px-6">
            <Link to="/clanky" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Zpět na články
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{article.category}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="w-4 h-4" />{article.readTime}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">{article.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{article.excerpt}</p>
          </div>
        </section>

        {/* Boxes */}
        {(article.canDoBox || article.vetBox) && (
          <section className="py-8 bg-background">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {article.canDoBox && (
                  <div className="card-warm border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-display font-semibold text-foreground">Zvládnete to</h3>
                    </div>
                    <ul className="space-y-2">
                      {article.canDoBox.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {article.vetBox && (
                  <div className="card-warm border-l-4 border-orange-500">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <h3 className="font-display font-semibold text-foreground">Kdy hledat pomoc</h3>
                    </div>
                    <ul className="space-y-2">
                      {article.vetBox.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-10">
              {article.sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
                  {section.subsections?.map((sub, i) => (
                    <div key={i} className="ml-4 mb-4 pl-4 border-l-2 border-primary/20">
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">{sub.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {article.faq.length > 0 && (
          <section className="py-12 gradient-warm">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">Často kladené otázky</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {article.faq.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="card-warm border-none">
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center card-warm">
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Máte dotaz?</h2>
              <p className="text-muted-foreground mb-4">Pokud si nejste jistí, napište nám – rádi poradíme.</p>
              <Link to="/kontakt" className="btn-hero inline-block">Kontaktujte nás</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
