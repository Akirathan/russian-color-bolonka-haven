// SEO Configuration for CHS Pikaro
export const SITE_CONFIG = {
  name: "Chovatelská stanice Pikaro",
  shortName: "CHS Pikaro",
  url: "https://pikaro.cz",
  locale: "cs_CZ",
  language: "cs",
  foundingDate: "1988",
  email: "ipikaro@gmail.com",
  phone: "+420724174659",
  address: {
    street: "U Černého mostu 131/13",
    city: "Plzeň",
    postalCode: "312 00",
    region: "Plzeňský kraj",
    country: "CZ",
  },
  geo: {
    latitude: 49.7384,
    longitude: 13.3776,
  },
};

// SEO title templates
export const SEO_TEMPLATES = {
  home: {
    title: "Chovatelská stanice Pikaro | Ruská barevná bolonka | Plzeň",
    description: "Profesionální chov ruských barevných bolonek od roku 1988. Zdravá štěňata s PP, výstavní šampioni. Chovatelská stanice Pikaro, Plzeň.",
  },
  about: {
    title: "O nás",
    description: "Chovatelská stanice Pikaro chová ruské barevné bolonky od roku 1988. Mezinárodně chráněný název stanice od roku 1997. Plzeň.",
  },
  breed: {
    title: "O plemeni",
    description: "Ruská barevná bolonka - standard FCI, povaha, péče o srst. Vše o tomto laskavém společenském plemeni.",
  },
  dogs: {
    title: "Naši psi",
    description: "Naši chovní jedinci ruské barevné bolonky. Výstavní šampioni s PP. Chovatelská stanice Pikaro.",
  },
  puppies: {
    title: "Štěňata",
    description: "Štěňata ruské barevné bolonky k prodeji. Aktuální vrhy a plánované vrhy. Chovatelská stanice Pikaro, Plzeň.",
  },
  articles: {
    title: "Články",
    description: "Odborné články o péči o ruskou barevnou bolonku. Výchova štěněte, péče o srst, zdraví a výživa.",
  },
  contact: {
    title: "Kontakt",
    description: "Kontaktujte chovatelskou stanici Pikaro. Plzeň, U Černého mostu 131/13. Tel: +420 724 174 659.",
  },
};

// Generate title with suffix
export const generateTitle = (pageTitle: string): string => {
  if (!pageTitle) return SEO_TEMPLATES.home.title;
  return `${pageTitle} | Chovatelská stanice Pikaro`;
};

// Generate canonical URL
export const generateCanonical = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
};

// Routes for sitemap generation
export const SITE_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/o-nas", priority: 0.8, changefreq: "monthly" },
  { path: "/o-plemeni", priority: 0.8, changefreq: "monthly" },
  { path: "/nasi-psi", priority: 0.8, changefreq: "monthly" },
  { path: "/stenata", priority: 0.9, changefreq: "weekly" },
  { path: "/stenata/vrh-leden-2026", priority: 0.85, changefreq: "weekly" },
  { path: "/clanky", priority: 0.7, changefreq: "weekly" },
  { path: "/kontakt", priority: 0.6, changefreq: "monthly" },
];

// Convert date to ISO format for sitemap
export const toISODate = (date?: string | Date): string => {
  if (!date) return new Date().toISOString().split("T")[0];
  if (date instanceof Date) return date.toISOString().split("T")[0];
  // Handle Czech date format "25. ledna 2025"
  const months: Record<string, string> = {
    ledna: "01", února: "02", března: "03", dubna: "04",
    května: "05", června: "06", července: "07", srpna: "08",
    září: "09", října: "10", listopadu: "11", prosince: "12",
  };
  const match = date.match(/(\d+)\.\s*(\w+)\s*(\d{4})/);
  if (match) {
    const [, day, month, year] = match;
    const monthNum = months[month.toLowerCase()] || "01";
    return `${year}-${monthNum}-${day.padStart(2, "0")}`;
  }
  return new Date().toISOString().split("T")[0];
};
