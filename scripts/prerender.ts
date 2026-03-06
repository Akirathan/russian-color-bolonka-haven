/**
 * Post-build prerender script.
 * Copies dist/index.html into each route folder so that every URL
 * returns 200 OK on static hosting (GitHub Pages, etc.).
 *
 * Usage: node --import tsx scripts/prerender.ts
 * Or add to package.json build: "build": "vite build && node --import tsx scripts/prerender.ts"
 */

import { mkdirSync, copyFileSync, existsSync } from "fs";
import { join } from "path";

const routes = [
  "/o-nas",
  "/o-plemeni",
  "/nasi-psi",
  "/stenata",
  "/aktualni-vrhy",
  "/planovane-vrhy",
  "/nase-odchovy",
  "/kontakt",
  "/clanky",
  "/stenata/vrh-leden-2026",
  // Article routes
  "/clanky/samota-bolonka-14denni-plan",
  "/clanky/cistota-stenete-bolonky",
  "/clanky/stekani-bolonka-v-byte",
  "/clanky/klid-na-dece-bolonka",
  "/clanky/zuby-bolonka-cisteni-plan",
  "/clanky/jak-poznat-seriozniho-chovatele-bolonka",
  "/clanky/vychova-stenete-ruske-barevne-bolonky",
  "/clanky/bolonka-do-bytu",
  "/clanky/pece-o-srst-bolonky-bez-stresu",
  "/clanky/vyziva-stenete-bolonky",
  "/clanky/zdravi-bolonky-prevence",
  // Old routes (redirects)
  "/plemeno/ruska-barevna-bolonka",
  "/o-plemeni",
];

const distDir = "dist";

// Detect base path from vite build (production mode uses /russian-color-bolonka-haven/)
const basePath = process.env.VITE_BASE_PATH || "";
const baseDir = basePath ? join(distDir, basePath.replace(/^\/|\/$/g, "")) : distDir;

const sourceIndex = join(baseDir, "index.html");

if (!existsSync(sourceIndex)) {
  console.error(`❌ ${sourceIndex} not found. Run 'vite build' first.`);
  process.exit(1);
}

let count = 0;
const uniqueRoutes = [...new Set(routes)];

for (const route of uniqueRoutes) {
  const targetDir = join(baseDir, route.replace(/^\//, ""));
  const targetFile = join(targetDir, "index.html");

  // Don't overwrite if already exists (e.g. the root index.html)
  if (existsSync(targetFile)) continue;

  mkdirSync(targetDir, { recursive: true });
  copyFileSync(sourceIndex, targetFile);
  count++;
}

console.log(`✓ Prerender complete: ${count} route(s) generated`);
