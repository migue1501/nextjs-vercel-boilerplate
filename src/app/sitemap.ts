import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nsatwebdesign.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const langs = ["es", "en"];

  const home = langs.map((lang) => ({
    url: lang === "es" ? `${BASE}/` : `${BASE}/${lang}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: { es: `${BASE}/es`, en: `${BASE}/en` },
    },
  }));

  const privacy = langs.map((lang) => ({
    url: `${BASE}/${lang}/privacidad`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.4,
    alternates: {
      languages: { es: `${BASE}/es/privacidad`, en: `${BASE}/en/privacidad` },
    },
  }));

  const external = [
    { url: "https://nsat-portfolio.vercel.app", priority: 0.8 },
    { url: "https://nsatcomputers.infinityfreeapp.com", priority: 0.7 },
  ].map((e) => ({ ...e, lastModified: now, changeFrequency: "monthly" as const }));

  return [...home, ...privacy, ...external];
}
