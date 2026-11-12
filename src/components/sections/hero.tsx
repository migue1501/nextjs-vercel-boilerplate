"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES, SITE, getCopy, type Lang } from "@/lib/content";
import { Terminal } from "./terminal";

export function Hero({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.15]);

  const waText =
    lang === "es"
      ? "Hola 👋 Vengo de nsatwebdesign.vercel.app. Quiero cotizar mi página web."
      : "Hi 👋 I came from nsatwebdesign.vercel.app. I'd like a quote for my website.";

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden border-b border-white/10 bg-nsat-ink pt-24 pb-16 sm:pt-28 md:pt-32 md:pb-24"
    >
      {/* photographic backdrop */}
      <motion.div style={{ y: bgY, opacity: fade }} className="absolute inset-0 -z-20">
        <Image
          src={IMAGES.hero.src}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          quality={72}
          className="object-cover object-center opacity-[0.30] saturate-[0.75]"
        />
      </motion.div>

      {/* colour washes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 65% at 12% 8%, rgba(249,115,22,0.22), transparent 60%)," +
            "radial-gradient(60% 60% at 92% 82%, rgba(56,189,248,0.12), transparent 65%)," +
            "linear-gradient(180deg, rgba(2,6,23,0.72) 0%, rgba(9,14,25,0.94) 78%, #090e19 100%)",
        }}
      />
      <div aria-hidden className="grid-dots absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ---------------- copy ---------------- */}
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/35 bg-orange-500/10 px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-wider text-orange-300 uppercase sm:text-xs"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-orange-500" />
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.98] font-bold tracking-tight"
          >
            {t.hero.title1}{" "}
            <span className="text-gradient">{t.hero.title2}</span>
            <br />
            {t.hero.title3}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#contacto"
              className="glow-orange group relative inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 hover:shadow-[0_18px_46px_-14px_rgba(249,115,22,0.85)] focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090e19] focus-visible:outline-none"
            >
              {t.hero.ctaPrimary}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href={SITE.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition-all hover:border-orange-500/50 hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
            >
              {t.hero.ctaSecondary}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>

            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25d366]/40 bg-[#25d366]/12 px-5 py-3.5 text-sm font-semibold text-[#25d366] transition-all hover:bg-[#25d366]/22 focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:outline-none"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Z" />
              </svg>
              WhatsApp
            </a>
          </motion.div>

          {/* stats */}
          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {t.hero.stats.map((s, i) => (
              <div key={i}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl font-bold text-orange-400 sm:text-[1.7rem]">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-[11.5px] leading-tight text-slate-500 sm:text-xs">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---------------- terminal ---------------- */}
        <div className="relative">
          <Terminal lang={lang} />
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-slate-600 uppercase">
          {t.hero.scroll}
        </span>
        <span className="h-9 w-px bg-gradient-to-b from-orange-500/70 to-transparent" />
      </motion.div>
    </section>
  );
}
