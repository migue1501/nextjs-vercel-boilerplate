import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCopy, LANGS, SITE, type Lang } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";

// Reads `params` to pick the language, so this segment blocks on navigation.
export const instant = false;

type Params = Promise<{ lang: string }>;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) return {};
  const t = getCopy(lang as Lang);

  return buildMetadata({
    title: t.privacy.title,
    description: t.privacy.lead,
    path: `/${lang}/privacidad`,
    locale: lang === "es" ? "es_ES" : "en_US",
    alternates: { language: { es: "/es/privacidad", en: "/en/privacidad" } },
  });
}

export default async function Privacy({ params }: { params: Params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const t = getCopy(l).privacy;

  return (
    <article className="relative min-h-screen bg-nsat-deep pt-28 pb-24 sm:pt-32">
      <div aria-hidden className="grid-dots absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-72"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(249,115,22,0.16), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6">
        {/* breadcrumb */}
        <nav aria-label="breadcrumb" className="font-mono text-[11.5px] text-slate-500">
          <Link href={`/${l}`} className="transition-colors hover:text-orange-400">
            ~/nsat
          </Link>
          <span className="mx-2 text-slate-700">/</span>
          <span className="text-orange-400">privacidad.md</span>
        </nav>

        <Reveal>
          <h1 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-tight">
            {t.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">{t.lead}</p>

          <div className="mt-6 rounded-2xl border border-orange-500/25 bg-orange-500/[0.07] p-5">
            <p className="text-sm leading-relaxed text-slate-300">{t.intro}</p>
          </div>
        </Reveal>

        {/* table of contents */}
        <Reveal delay={0.06}>
          <nav
            aria-label="Índice"
            className="mt-10 rounded-2xl border border-white/10 bg-nsat-slate/60 p-5"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] text-orange-500 uppercase">
              {/* index */}
              {l === "es" ? "índice" : "index"}
            </p>
            <ol className="mt-3.5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {t.sections.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#s-${i}`}
                    className="flex items-baseline gap-2.5 text-sm text-slate-400 transition-colors hover:text-orange-400"
                  >
                    <span className="font-mono text-[11px] text-slate-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        {/* sections */}
        <div className="mt-10 space-y-3">
          {t.sections.map((s, i) => (
            <Reveal key={s.title} delay={0.03}>
              <section
                id={`s-${i}`}
                className="scroll-mt-28 rounded-2xl border border-white/10 bg-nsat-slate/50 p-6 transition-colors hover:border-orange-500/25 sm:p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">{s.title}</h2>
                </div>
                <div className="mt-4 space-y-3">
                  {s.body.map((p, k) => (
                    <p key={k} className="text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* contact block */}
        <Reveal>
          <div className="mt-10 rounded-2xl border border-white/10 bg-nsat-slate/60 p-6 sm:p-7">
            <p className="font-mono text-[11px] tracking-[0.18em] text-orange-500 uppercase">
              {l === "es" ? "contacto" : "contact"}
            </p>
            <address className="mt-4 space-y-2 not-italic text-sm text-slate-400">
              <p>{SITE.address}</p>
              <p>
                <a href={SITE.phoneHref} className="font-mono text-slate-200 transition-colors hover:text-orange-400">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(l === "es" ? "Privacidad" : "Privacy")}`}
                  className="font-mono break-all text-slate-200 transition-colors hover:text-orange-400"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="font-mono text-[12.5px] text-slate-500">{SITE.hours[l]}</p>
            </address>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/${l}`}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {t.back}
            </Link>
            <a
              href={`${SITE.mainSite}/politica-de-privacidad/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              {l === "es" ? "Versión del sitio principal" : "Main site version"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
