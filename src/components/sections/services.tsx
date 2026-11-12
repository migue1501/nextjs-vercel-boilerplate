"use client";

import Link from "next/link";
import { Stagger, Item } from "@/components/motion/reveal";
import { getCopy, type Lang } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3Z" />
      <path d="M14.7 6.3 17.5 3.5a4 4 0 0 1 3 3l-2.8 2.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 8.3 7 9.4 4-1.1 7-5 7-9.4V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
      <path d="M12 7.2v4.3M12 11.5 6.4 17M12 11.5 17.6 17" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
};

export function Services({ lang }: { lang: Lang }) {
  const t = getCopy(lang);

  return (
    <section id="servicios" className="relative scroll-mt-24 bg-nsat-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
            {t.services.kicker}
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* grid */}
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s) => {
            const body = (
              <>
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:border-orange-500/60 group-hover:bg-orange-500/20 group-hover:shadow-[0_10px_30px_-12px_rgba(249,115,22,0.7)]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {ICONS[s.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-100">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
                {"link" in s && s.link && (
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-orange-400 transition-all group-hover:gap-2.5">
                    {s.link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </>
            );

            const className =
              "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-nsat-slate/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40 hover:bg-nsat-slate";

            return (
              <Item key={s.title}>
                {s.link ? (
                  <Link
                    href={s.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "radial-gradient(circle, rgba(249,115,22,0.35), transparent 70%)" }}
                    />
                  </Link>
                ) : (
                  <div className={className}>
                    {body}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "radial-gradient(circle, rgba(249,115,22,0.35), transparent 70%)" }}
                    />
                  </div>
                )}
              </Item>
            );
          })}
        </Stagger>

        <p className="mt-8 font-mono text-[11px] text-slate-600">{t.services.credit}</p>
      </div>
    </section>
  );
}
