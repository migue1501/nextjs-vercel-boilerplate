import type { Metadata } from "next";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  locale?: string;
  alternates?: { language?: Record<string, string> };
};

const DEFAULT_URL = "https://nsatwebdesign.vercel.app";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og.png",
  locale = "es_ES",
  alternates,
}: SeoInput): Metadata {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_URL;
  const canonical = `${url}${path}`;

  return {
    metadataBase: new URL(url),
    title,
    description,
    alternates: { canonical, ...(alternates ? { languages: alternates.language } : {}) },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "NSAT Computers",
      images: [{ url: `${url}${image}`, width: 1200, height: 630 }],
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${url}${image}`],
    },
    robots: { index: true, follow: true },
    verification: {
      google: "p4jW6ivU_ASPv5iOq4Y5XLdXVDIbnPJ3gSjXUCIuAe8",
    },
  };
}
