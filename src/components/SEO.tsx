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
    modifiedTime?: string;
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
  faq?: Array<{ question: string; answer: string }>;
  noindex?: boolean;
}

const SITE_URL = "https://pikaro.cz";
const DEFAULT_TITLE = "Chovatelská stanice Pikaro | Ruská barevná bolonka | Plzeň";
const DEFAULT_DESCRIPTION = "Profesionální chov ruských barevných bolonek od roku 1988. Zdravá štěňata s PP, výstavní šampioni. Chovatelská stanice Pikaro, Plzeň.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

// Check if we're on preview/dev environment
const isPreview = typeof window !== "undefined" && 
  (window.location.hostname.includes("lovable.app") || 
   window.location.hostname.includes("localhost") ||
   window.location.hostname.includes("127.0.0.1"));

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  article,
  breadcrumbs,
  product,
  faq,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Chovatelská stanice Pikaro` : DEFAULT_TITLE;
  const canonicalUrl = url || SITE_URL;
  const shouldNoindex = noindex || isPreview;

  // Breadcrumb Schema
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

  // Article Schema
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
          url: SITE_URL,
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
        dateModified: article.modifiedTime || article.publishedTime,
        articleSection: article.section,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      }
    : null;

  // Product Schema
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

  // FAQ Schema
  const faqSchema = faq && faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  // WebSite Schema (for homepage)
  const webSiteSchema = type === "website" && !article
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Chovatelská stanice Pikaro",
        url: SITE_URL,
        description: "Profesionální chov ruských barevných bolonek od roku 1988",
        inLanguage: "cs-CZ",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }
    : null;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Chovatelská stanice Pikaro",
    alternateName: "CHS Pikaro",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 200,
    },
    image: DEFAULT_IMAGE,
    description: "Profesionální chovatelská stanice ruských barevných bolonek s více než 35 lety zkušeností. Mezinárodně chráněný název od roku 1997.",
    foundingDate: "1988",
    email: "ipikaro@gmail.com",
    telephone: "+420724174659",
    address: {
      "@type": "PostalAddress",
      streetAddress: "U Černého mostu 131/13",
      addressLocality: "Plzeň",
      postalCode: "312 00",
      addressCountry: "CZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+420724174659",
      contactType: "customer service",
      availableLanguage: ["Czech"],
    },
    areaServed: {
      "@type": "Country",
      name: "Česká republika",
    },
  };

  // Place/LocalBusiness Schema
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Chovatelská stanice Pikaro",
    image: DEFAULT_IMAGE,
    url: SITE_URL,
    telephone: "+420724174659",
    email: "ipikaro@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "U Černého mostu 131/13",
      addressLocality: "Plzeň",
      postalCode: "312 00",
      addressRegion: "Plzeňský kraj",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.7384,
      longitude: 13.3776,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical & Robots */}
      <link rel="canonical" href={canonicalUrl} />
      {shouldNoindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Language & Geo */}
      <meta name="language" content="Czech" />
      <meta httpEquiv="content-language" content="cs" />
      <meta name="geo.region" content="CZ-PL" />
      <meta name="geo.placename" content="Plzeň" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Chovatelská stanice Pikaro" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}

      {/* Structured Data - Always include Organization & Place */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(placeSchema)}</script>

      {/* Conditional Schemas */}
      {webSiteSchema && (
        <script type="application/ld+json">{JSON.stringify(webSiteSchema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
      {productSchema && (
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
