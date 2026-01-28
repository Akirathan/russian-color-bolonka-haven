// Sitemap Generator for CHS Pikaro
// Run at build time to generate sitemap.xml

import { writeFileSync } from 'fs';
import { SITE_CONFIG, SITE_ROUTES, ARTICLE_ROUTES, LITTER_ROUTES } from '../src/lib/seo';

const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const allRoutes = [
    ...SITE_ROUTES,
    ...ARTICLE_ROUTES.map(r => ({ ...r, changefreq: 'monthly' })),
    ...LITTER_ROUTES.map(r => ({ ...r, changefreq: 'weekly' })),
  ];

  const urlEntries = allRoutes.map(route => `
  <url>
    <loc>${SITE_CONFIG.url}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap.trim());
  console.log('✓ Sitemap generated successfully');
};

generateSitemap();
