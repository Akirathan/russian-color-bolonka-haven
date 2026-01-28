import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, generateCanonical, isPreviewEnvironment } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "product";
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  article?: {
    datePublished: string;
    dateModified?: string;
    author?: string;
  };
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  url,
  image = "/og-image.jpg",
  type = "website",
  breadcrumbs,
  faq,
  article,
  noIndex = false,
}: SEOProps) => {
  const isPreview = isPreviewEnvironment();
  const shouldNoIndex = noIndex || isPreview;
  
  // Always use production canonical
  const canonicalUrl = url ? generateCanonical(url.replace(SITE_CONFIG.url, "")) : generateCanonical("/");
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`;
  
  // Truncate title to ~60 chars, description to ~155 chars
  const safeTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  const safeDescription = description.length > 155 ? description.substring(0, 152) + "..." : description;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    foundingDate: SITE_CONFIG.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: SITE_CONFIG.serviceAreas.map(area => ({
      "@type": "City",
      name: area,
    })),
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: "Profesionální chov ruských barevných bolonek v Plzni od roku 1988. Zdravá štěňata s PP, výstavní šampioni.",
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: SITE_CONFIG.serviceAreas,
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: safeDescription,
    inLanguage: SITE_CONFIG.language,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: generateCanonical(item.url),
    })),
  } : null;

  // Article Schema
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: safeTitle,
    description: safeDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  } : null;

  // FAQ Schema
  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_CONFIG.name} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="language" content={SITE_CONFIG.language} />
      
      {/* Robots */}
      {shouldNoIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content={`${SITE_CONFIG.address.country}-${SITE_CONFIG.address.region}`} />
      <meta name="geo.placename" content={SITE_CONFIG.address.city} />
      <meta name="geo.position" content={`${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`} />
      <meta name="ICBM" content={`${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
