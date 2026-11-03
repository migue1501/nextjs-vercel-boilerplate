import type { Metadata } from "next";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({ title, description, path = "/", image = "/og.png" }: SeoInput): Metadata {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  return {
    metadataBase: new URL(url),
    title: `${title} | Tu Marca`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${url}${path}`,
      siteName: "Tu Marca",
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
      locale: "es_ES",
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    robots: { index: true, follow: true },
  };
}
