import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Why } from "@/components/sections/why";
import { Faq } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { notFound } from "next/navigation";
import { LANGS, type Lang } from "@/lib/content";

// Reads `params` to pick the language, so this segment blocks on navigation.
export const instant = false;

type Params = Promise<{ lang: string }>;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Landing({ params }: { params: Params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  const l = lang as Lang;

  return (
    <>
      <Hero lang={l} />
      <Marquee lang={l} />
      <Services lang={l} />
      <Process lang={l} />
      <Portfolio lang={l} />
      <Why lang={l} />
      <Faq lang={l} />
      <Pricing lang={l} />
      <Contact lang={l} />
    </>
  );
}
