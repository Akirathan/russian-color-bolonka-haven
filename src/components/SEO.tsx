import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  product?: {
    name: string;
    description: string;
    image: string;
    availability: string;
  };
}

const DEFAULT_TITLE = "Chovatelská stanice Pikaro | Ruská barevná bolonka | Plzeň";
const DEFAULT_DESCRIPTION = "Profesionální chov ruských barevných bolonek od roku 1988. Zdravá štěňata s PP, výstavní šampioni. Chovatelská stanice Pikaro, Plzeň.";
const DEFAULT_IMAGE = "https://pikaro.cz/og-image.jpg";
const SITE_URL = "https://pikaro.cz";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  type = "website",
  article,
  breadcrumbs,
  product,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Chovatelská stanice Pikaro` : DEFAULT_TITLE;

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.url}`,
        })),
      }
    : null;

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        image: image,
        author: {
          "@type": "Organization",
          name: "Chovatelská stanice Pikaro",
        },
        publisher: {
          "@type": "Organization",
          name: "Chovatelská stanice Pikaro",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        datePublished: article.publishedTime,
        articleSection: article.section,
      }
    : null;

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image,
        brand: {
          "@type": "Organization",
          name: "Chovatelská stanice Pikaro",
        },
        offers: {
          "@type": "Offer",
          availability: `https://schema.org/${product.availability}`,
          priceCurrency: "CZK",
        },
      }
    : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Chovatelská stanice Pikaro" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}

      {/* Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
      {productSchema && (
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
