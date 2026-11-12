"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { getCopy, type Lang } from "@/lib/content";

export function Process({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const reduce = useReducedMotion();

  return (
    <section id="proceso" className="relative scroll-mt-24 overflow-hidden bg-nsat-ink py-20 sm:py-28">
      <div aria-hidden className="grid-dots absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
            {t.process.kicker}
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {t.process.subtitle}
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-7 left-7 hidden h-px w-[calc(100%-56px)] origin-left bg-gradient-to-r from-orange-500/70 via-orange-500/35 to-transparent lg:block"
          />

          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative">
              <li className="h-full">
                <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-orange-500/35 bg-nsat-slate font-mono text-lg font-bold text-orange-400 shadow-[0_10px_30px_-14px_rgba(249,115,22,0.8)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-100">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
