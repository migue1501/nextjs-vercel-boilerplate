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
      languages: { es: `${BASE}/`, en: `${BASE}/en`, "x-default": `${BASE}/` },
    },
  }));

  const privacy = langs.map((lang) => ({
    url: `${BASE}/${lang}/privacidad`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.4,
    alternates: {
      languages: {
        es: `${BASE}/es/privacidad`,
        en: `${BASE}/en/privacidad`,
        "x-default": `${BASE}/es/privacidad`,
      },
    },
  }));

  return [...home, ...privacy];
}
