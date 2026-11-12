"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, Item } from "@/components/motion/reveal";
import { IMAGES, getCopy, type Lang } from "@/lib/content";

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-orange-400" aria-hidden>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export function Why({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const reduce = useReducedMotion();

  return (
    <section id="nosotros" className="relative scroll-mt-24 bg-nsat-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* image */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[30px] opacity-70 blur-2xl"
              style={{ background: "radial-gradient(60% 60% at 30% 30%, rgba(249,115,22,0.3), transparent 70%)" }}
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={IMAGES.escritorio.src}
                alt={IMAGES.escritorio.alt}
                width={1280}
                height={916}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-nsat-ink via-nsat-ink/25 to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/12 bg-nsat-ink/85 px-3.5 py-2.5 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25d366] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#25d366]" />
                </span>
                <span className="font-mono text-[11px] text-slate-300">nsatcomputers@gmail.com</span>
              </div>
            </div>
            <p className="mt-3 text-right font-mono text-[10.5px] text-slate-600">
              {IMAGES.escritorio.credit}
            </p>
          </div>
        </Reveal>

        {/* copy */ }
        <div className="order-1 lg:order-2">
          <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
            {t.why.kicker}
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
            {t.why.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {t.why.subtitle}
          </p>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.why.items.map((w) => (
              <Item key={w.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-nsat-slate/60 p-5 transition-colors duration-300 hover:border-orange-500/35">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-500/15 text-orange-400">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    <h3 className="text-[15px] font-semibold text-slate-100">{w.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{w.text}</p>
                </div>
              </Item>
            ))}
          </Stagger>

          {/* misión / visión / valores */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/10 bg-nsat-slate/60"
          >
            {[
              { k: t.about.misionTitle, v: t.about.mision },
              { k: t.about.visionTitle, v: t.about.vision },
              { k: t.about.valoresTitle, v: t.about.valores },
            ].map((row) => (
              <div key={row.k} className="flex gap-4 px-5 py-4">
                <span className="w-20 shrink-0 font-mono text-[11px] tracking-wider text-orange-400 uppercase">
                  {row.k}
                </span>
                <span className="text-sm leading-relaxed text-slate-400">{row.v}</span>
              </div>
            ))}
          </motion.div>

          <ul className="mt-6 space-y-2.5">
            {t.about.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400">
                {CHECK}
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
