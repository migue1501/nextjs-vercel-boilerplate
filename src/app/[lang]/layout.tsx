import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getCopy, LANGS, type Lang } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

// The whole layout is language-dependent (header, footer, metadata),
// so this segment blocks instead of sharing one App Shell across /es and /en.
export const instant = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) return {};
  const t = getCopy(lang as Lang);
  const path = lang === "es" ? "/" : "/en";

  return buildMetadata({
    title: t.meta.title,
    description: t.meta.description,
    path,
    locale: lang === "es" ? "es_ES" : "en_US",
    alternates: { language: { es: "/es", en: "/en" } },
  });
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();

  const l = lang as Lang;

  return (
    <>
      <Header lang={l} />
      <main>{children}</main>
      <Footer lang={l} />
    </>
  );
}
