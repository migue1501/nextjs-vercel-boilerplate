import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, Stagger, Item } from "@/components/motion/reveal";
import { getCopy, LANGS, SITE, type Lang } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PROMO_COPY, getPromoWhatsAppLink, isPromoEnabled, promoConfig } from "@/config/promo";

// Promo content is controlled in src/config/promo.ts (enabled + copy).
// Update the config and redeploy to activate/deactivate or edit future promos.

type Params = Promise<{ lang: string }>;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) return {};
  const l = lang as Lang;
  const c = PROMO_COPY[l];
  const enabled = isPromoEnabled();
  const path = `/${l}/promo`;
  return buildMetadata({
    title: enabled ? c.metaTitle : c.disabledTitle,
    description: c.metaDescription,
    path,
    locale: l === "es" ? "es_ES" : "en_US",
    alternates: {
      language: { es: "/es/promo", en: "/en/promo", "x-default": "/es/promo" },
    },
  });
}

export default async function PromoPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const t = getCopy(l);
  const c = PROMO_COPY[l];
  const enabled = isPromoEnabled();
  const wa = getPromoWhatsAppLink(l);
  const homeHref = l === "es" ? "/" : `/${l}`;

  if (!enabled) {
    return (
      <article className="relative min-h-screen bg-nsat-deep pt-28 pb-24 sm:pt-32">
        <div aria-hidden className="grid-dots absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-72"
          style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(249,115,22,0.16), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6">
          <nav aria-label="breadcrumb" className="font-mono text-[11.5px] text-slate-500">
            <Link href={homeHref} className="transition-colors hover:text-orange-400">~/nsat</Link>
            <span className="mx-2 text-slate-700">/</span>
            <span className="text-orange-400">promo</span>
          </nav>
          <Reveal>
            <p className="mt-8 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 font-mono text-xs tracking-[0.16em] text-orange-300 uppercase">
              {c.badge}
            </p>
            <h1 className="mt-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-tight text-slate-100">
              {c.disabledTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{c.disabledText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none"
              >
                {c.disabledCta} <span aria-hidden>→</span>
              </a>
              <Link
                href={homeHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-orange-500/50"
              >
                {l === "es" ? "Ir al inicio" : "Go to home"}
              </Link>
            </div>
            <p className="mt-8 font-mono text-xs text-slate-500">
              {SITE.phone} · {SITE.email}
            </p>
          </Reveal>
        </div>
      </article>
    );
  }

  return (
    <article className="relative min-h-screen bg-nsat-deep pt-28 pb-24 sm:pt-32">
      <div aria-hidden className="grid-dots absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{ background: "radial-gradient(70% 100% at 50% 0%, rgba(249,115,22,0.20), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <nav aria-label="breadcrumb" className="font-mono text-[11.5px] text-slate-500">
          <Link href={homeHref} className="transition-colors hover:text-orange-400">~/nsat</Link>
          <span className="mx-2 text-slate-700">/</span>
          <span className="text-orange-400">promo</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="inline-flex rounded-full border border-orange-500/35 bg-orange-500/10 px-4 py-1.5 font-mono text-xs tracking-[0.16em] text-orange-300 uppercase">
              {c.badge} · {l === "es" ? "hasta vie 20/11/2026" : "until Fri Nov 20, 2026"}
            </p>
            <h1 className="mt-5 text-[clamp(2.2rem,5.2vw,3.8rem)] leading-[1.04] font-bold tracking-tight text-slate-100">
              <span className="text-gradient">{c.title}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">{c.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-end gap-4 rounded-2xl border border-orange-500/25 bg-white/[0.03] p-5 sm:p-6">
              <div>
                <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">{l === "es" ? "Landing Express" : "Landing Express"}</p>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-mono text-lg text-slate-500 line-through">{promoConfig.prices.landingPromoOld}</span>
                  <span className="text-5xl font-bold tracking-tight text-orange-400 sm:text-6xl">{promoConfig.prices.landingPromo}</span>
                  <span className="text-sm text-slate-400">USD</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {l === "es"
                    ? `Con subdominio gratis. Con dominio .com propio: ${promoConfig.prices.landingWithDomain} USD.`
                    : `With free subdomain. With your own .com domain: ${promoConfig.prices.landingWithDomain} USD.`}
                </p>
              </div>
              <div className="ml-auto flex flex-wrap gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 glow-orange focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none"
                >
                  {c.cta} <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <p className="mt-3 font-mono text-xs text-slate-500">{c.ctaHint}</p>

            <Stagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {c.highlights.map((h) => (
                <Item key={h.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <p className="text-xl font-bold text-orange-400 sm:text-2xl">{h.value}</p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-slate-500 uppercase">{h.label}</p>
                </Item>
              ))}
            </Stagger>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.05}>
              <section className="rounded-2xl border border-white/10 bg-nsat-slate/60 p-6 sm:p-7">
                <h2 className="text-lg font-semibold text-slate-100">{c.includesTitle}</h2>
                <ul className="mt-4 space-y-3">
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
            <Reveal delay={0.08}>
              <section className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-6 sm:p-7">
                <h2 className="text-lg font-semibold text-slate-100">{c.termsTitle}</h2>
                <ul className="mt-4 space-y-2.5">
                  {c.terms.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-mono text-xs leading-relaxed text-slate-500">{c.priceNote}</p>
                <div className="mt-4 flex flex-wrap gap-3 font-mono text-sm">
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="text-green-400 transition-colors hover:text-green-300">
                    WhatsApp {promoConfig.whatsappDisplay}
                  </a>
                  <span className="text-slate-700">·</span>
                  <a href={`mailto:${promoConfig.email}`} className="text-slate-300 transition-colors hover:text-orange-400">
                    {promoConfig.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
            <Link href={`${homeHref}#precios`} className="text-sm text-slate-400 transition-colors hover:text-orange-400">
              {l === "es" ? "← Ver todos los precios" : "← See all pricing"}
            </Link>
            <Link href={`${homeHref}#contacto`} className="text-sm text-slate-400 transition-colors hover:text-orange-400">
              {t.nav.contacto}
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
