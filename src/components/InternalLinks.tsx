import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { articles } from "@/data/articlesData";
import { SITE_CONFIG } from "@/lib/seo";

interface RelatedArticlesProps {
  currentSlug: string;
  maxArticles?: number;
}

// Related articles component for internal linking
export const RelatedArticles = ({ currentSlug, maxArticles = 4 }: RelatedArticlesProps) => {
  const relatedArticles = articles
    .filter(article => article.slug !== currentSlug)
    .slice(0, maxArticles);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Související články
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/clanky/${article.slug}`}
                className="card-warm group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <article.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {article.readTime}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
          
          {/* CTA Links */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border">
            <Link
              to="/stenata"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Štěňata k prodeji <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              to="/kontakt"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Kontaktujte nás <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              to="/plemeno/ruska-barevna-bolonka"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              O plemeni <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA box for article pages
export const ArticleCTA = () => (
  <section className="py-12 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto card-warm border-l-4 border-primary">
        <h2 className="font-display text-xl font-semibold text-foreground mb-2">
          Potřebujete poradit? Jsme tu pro vás.
        </h2>
        <p className="text-muted-foreground mb-4">
          Rádi vám pomůžeme s výchovou, péčí i výběrem štěněte ruské barevné bolonky.
        </p>
        <div className="text-sm text-foreground font-medium mb-3">
          {SITE_CONFIG.shortName} – {SITE_CONFIG.address.city} (návštěvy po domluvě)
        </div>
        <div className="flex flex-wrap gap-4">
          <a 
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Phone className="w-4 h-4" />
            {SITE_CONFIG.phoneFormatted}
          </a>
          <a 
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Mail className="w-4 h-4" />
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Puppies page internal links for articles
export const PuppiesArticleLinks = () => (
  <section className="py-12 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
          Užitečné články pro budoucí majitele
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { slug: "vychova-stenete-ruske-barevne-bolonky", title: "Výchova štěněte" },
            { slug: "bolonka-do-bytu", title: "Bolonka do bytu" },
            { slug: "pece-o-srst-bolonky-bez-stresu", title: "Péče o srst" },
            { slug: "vyziva-stenete-bolonky", title: "Výživa štěněte" },
            { slug: "zdravi-bolonky-prevence", title: "Zdraví a prevence" },
          ].map((article) => (
            <Link
              key={article.slug}
              to={`/clanky/${article.slug}`}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              {article.title} <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RelatedArticles;
