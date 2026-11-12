"use client";

import { getCopy, STACK, type Lang } from "@/lib/content";

export function Marquee({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const doubled = [...STACK, ...STACK];

  return (
    <section
      aria-label={t.marquee.label}
      className="relative overflow-hidden border-b border-white/10 bg-nsat-deep py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-nsat-deep to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-nsat-deep to-transparent sm:w-40" />

      <div className="flex marquee-track w-max gap-10 sm:gap-14">
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex shrink-0 items-center gap-10 font-mono text-sm tracking-wide whitespace-nowrap text-slate-500 sm:gap-14 sm:text-base"
          >
            <span className="text-orange-500/70">◆</span>
            <span className="transition-colors hover:text-slate-200">{s}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
