// SEO Configuration for CHS Pikaro
// Production URL: https://pikaro.cz

export const SITE_CONFIG = {
  name: "Chovatelská stanice Pikaro",
  shortName: "CHS Pikaro",
  url: "https://pikaro.cz",
  locale: "cs_CZ",
  language: "cs",
  foundingDate: "1988",
  internationalProtectionYear: "1997",
  email: "ipikaro@gmail.com",
  phone: "+420724174659",
  phoneFormatted: "+420 724 174 659",
  address: {
    street: "U Černého mostu 131/13",
    city: "Plzeň",
    postalCode: "312 00",
    region: "Plzeňský kraj",
    country: "CZ",
    countryName: "Česká republika",
  },
  geo: {
    latitude: 49.7384,
    longitude: 13.3776,
  },
  // Surrounding regions for local SEO
  serviceAreas: ["Plzeň", "Rokycany", "Klatovy", "Domažlice", "Tachov", "Karlovy Vary"],
};

// Check if current environment is preview (for noindex)
export const isPreviewEnvironment = (): boolean => {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname;
  return hostname.includes('lovable.app') || 
         hostname.includes('github.io') || 
         hostname.includes('localhost') ||
         hostname.includes('127.0.0.1');
};

// SEO title templates with keywords for each page
export const SEO_TEMPLATES = {
  home: {
    title: "CHS Pikaro – ruská barevná bolonka | Plzeň",
    h1: "Chovatelská stanice Pikaro",
    description: "Profesionální chov ruských barevných bolonek od roku 1988. Zdravá štěňata s PP, výstavní šampioni. Chovatelská stanice Pikaro, Plzeň.",
    keywords: "ruská barevná bolonka, štěňata ruské bolonky, ruská bolonka štěně, bolonka zwetna štěňata, chovatelská stanice Plzeň",
  },
  aboutUs: {
    title: "O nás | CHS Pikaro – chov bolonek od 1988",
    h1: "O chovatelské stanici Pikaro",
    description: "CHS Pikaro – rodinný chov ruských barevných bolonek v Plzni od roku 1988. Mezinárodně chráněný název stanice od 1997.",
    keywords: "chovatelská stanice Pikaro, chov bolonek Plzeň, ruská bolonka chovatel",
  },
  breed: {
    title: "Ruská barevná bolonka: povaha, péče, byt | CHS Pikaro Plzeň",
    h1: "Ruská barevná bolonka – povaha a péče",
    description: "Ruská barevná bolonka: povaha, nároky na péči, vhodnost do bytu. Vše o tomto společenském plemeni od CHS Pikaro v Plzni.",
    keywords: "ruská barevná bolonka povaha, bolonka do bytu, ruská bolonka nároky, bolonka zkušenosti",
  },
  dogs: {
    title: "Naši psi – ruská barevná bolonka | CHS Pikaro Plzeň",
    h1: "Naši chovní psi",
    description: "Chovní jedinci ruské barevné bolonky. Výstavní šampioni s PP, zdravotními testy (patella, DNA). CHS Pikaro Plzeň.",
    keywords: "chovní psi bolonka, ruská bolonka šampion, krycí pes bolonka Plzeň",
  },
  puppies: {
    title: "Štěňata ruské bolonky | CHS Pikaro Plzeň",
    h1: "Štěňata ruské barevné bolonky",
    description: "Štěňata ruské barevné bolonky k prodeji. Aktuální a plánované vrhy s PP. Profesionální chov v Plzni od roku 1988.",
    keywords: "štěňata ruské bolonky, štěně ruské barevné bolonky, bolonka zwetna štěňata, štěně bolonky Plzeň, ruská bolonka štěně",
  },
  articles: {
    title: "Výchova a péče o bolonku | CHS Pikaro Plzeň",
    h1: "Články o výchově a péči",
    description: "Odborné články o výchově štěněte bolonky, péči o srst, zdraví a životě s bolonkou v bytě. Rady od CHS Pikaro.",
    keywords: "výchova štěněte bolonky, péče o srst bolonky, bolonka v bytě, samota bolonka",
  },
  contact: {
    title: "Kontakt | CHS Pikaro Plzeň",
    h1: "Kontaktujte nás",
    description: "Kontaktujte CHS Pikaro v Plzni. Tel: +420 724 174 659, email: ipikaro@gmail.com. Adresa: U Černého mostu 131/13.",
    keywords: "kontakt chovatelská stanice Plzeň, ruská bolonka Plzeň, štěně bolonky kontakt",
  },
};

// Generate title (for pages without custom title)
export const generateTitle = (pageTitle: string): string => {
  if (!pageTitle) return SEO_TEMPLATES.home.title;
  return `${pageTitle} | CHS Pikaro`;
};

// Generate canonical URL (always production domain)
export const generateCanonical = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedPath = cleanPath === "/" ? "" : cleanPath;
  return `${SITE_CONFIG.url}${normalizedPath}`;
};

// Litter page title template
export const generateLitterTitle = (month: string, year: string): string => {
  return `Štěňata bolonky – vrh ${month} ${year} | Plzeň – Pikaro`;
};

// Litter page description template
export const generateLitterDescription = (month: string, year: string): string => {
  return `Štěňata ruské barevné bolonky z vrhu ${month} ${year}. Zdravá štěňata s PP od CHS Pikaro v Plzni. Rezervace a informace.`;
};

// Article title template
export const generateArticleTitle = (articleTitle: string): string => {
  return `${articleTitle} | CHS Pikaro`;
};

// Routes for sitemap generation (with SEO-friendly URLs)
export const SITE_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/o-nas", priority: 0.7, changefreq: "monthly" },
  { path: "/plemeno/ruska-barevna-bolonka", priority: 0.9, changefreq: "monthly" },
  { path: "/nasi-psi", priority: 0.8, changefreq: "monthly" },
  { path: "/stenata", priority: 0.95, changefreq: "weekly" },
  { path: "/clanky", priority: 0.8, changefreq: "weekly" },
  { path: "/kontakt", priority: 0.6, changefreq: "monthly" },
];

// Article routes for sitemap
export const ARTICLE_ROUTES = [
  { path: "/clanky/samota-bolonka-14denni-plan", priority: 0.75 },
  { path: "/clanky/cistota-stenete-bolonky", priority: 0.75 },
  { path: "/clanky/stekani-bolonka-v-byte", priority: 0.75 },
  { path: "/clanky/klid-na-dece-bolonka", priority: 0.75 },
  { path: "/clanky/zuby-bolonka-cisteni-plan", priority: 0.75 },
  { path: "/clanky/jak-poznat-seriozniho-chovatele-bolonka", priority: 0.75 },
  { path: "/clanky/vychova-stenete-ruske-barevne-bolonky", priority: 0.75 },
  { path: "/clanky/bolonka-do-bytu", priority: 0.75 },
  { path: "/clanky/pece-o-srst-bolonky-bez-stresu", priority: 0.75 },
  { path: "/clanky/vyziva-stenete-bolonky", priority: 0.75 },
  { path: "/clanky/zdravi-bolonky-prevence", priority: 0.75 },
];

// Litter routes for sitemap
export const LITTER_ROUTES = [
  { path: "/stenata/vrh-leden-2026", priority: 0.85 },
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

// Target keywords mapping (for reference)
export const TARGET_KEYWORDS = {
  transactional: [
    "štěňata ruské bolonky",
    "štěně ruské barevné bolonky",
    "bolonka zwetna štěňata",
    "ruská bolonka štěně",
    "štěně bolonky Plzeň",
  ],
  informational: [
    "ruská barevná bolonka povaha",
    "bolonka do bytu",
    "ruská bolonka nároky",
    "bolonka zkušenosti",
  ],
  longTail: [
    "samota bolonka",
    "čistota štěněte bolonky",
    "štěkání bolonka v bytě",
    "péče o srst bolonky",
    "zuby bolonka čištění",
    "patella bolonka prevence",
    "jak poznat seriózního chovatele bolonky",
    "PP vs bez PP bolonka",
  ],
  local: [
    "ruská barevná bolonka Plzeň",
    "štěně bolonky Plzeň",
    "chovatelská stanice Plzeň",
  ],
};
