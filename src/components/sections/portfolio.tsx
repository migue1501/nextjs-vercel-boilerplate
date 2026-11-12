"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, Item } from "@/components/motion/reveal";
import { DEMOS, IMAGES, SITE, getCopy, type Lang } from "@/lib/content";

export function Portfolio({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const reduce = useReducedMotion();

  return (
    <section id="portafolio" className="relative scroll-mt-24 overflow-hidden bg-nsat-ink py-20 sm:py-28">
      {/* backdrop image */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={IMAGES.coding.src}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover opacity-[0.14] saturate-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nsat-ink via-nsat-ink/92 to-nsat-ink" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
              {t.portfolio.kicker}
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
              {t.portfolio.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.portfolio.subtitle}
            </p>
          </div>

          <Reveal delay={0.1}>
            <Link
              href={SITE.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-orange group inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 hover:shadow-[0_18px_46px_-14px_rgba(249,115,22,0.9)] focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] focus-visible:outline-none"
            >
              {t.portfolio.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* demo chips */}
        <Stagger className="mt-12 flex flex-wrap gap-3">
          {DEMOS.map((d) => (
            <Item key={d.slug}>
              <a
                href={`${SITE.portfolio}/${lang}/${d.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-orange-500/15 font-mono text-[11px] font-bold text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-[#0b1220]">
                  {d.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-medium text-slate-100">{d.name}</span>
                  <span className="block font-mono text-[10.5px] text-slate-500">
                    {d.sector[lang]}
                  </span>
                </span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-orange-400">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Item>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-col gap-5 rounded-2xl border border-orange-500/25 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-sm leading-relaxed text-slate-300">{t.portfolio.note}</p>
              <p className="mt-2 font-mono text-[11.5px] text-slate-500">{t.portfolio.built}</p>
            </div>
            <motion.a
              href={SITE.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { x: 4 }}
              className="shrink-0 font-mono text-sm font-semibold text-orange-400 underline decoration-orange-500/40 underline-offset-4 transition-colors hover:text-orange-300"
            >
              nsat-portfolio.vercel.app →
            </motion.a>
          </div>
        </Reveal>

        <p className="mt-8 font-mono text-[11px] text-slate-600">{IMAGES.coding.credit}</p>
      </div>
    </section>
  );
}
