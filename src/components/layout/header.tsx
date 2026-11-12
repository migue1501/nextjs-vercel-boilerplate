"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getCopy, SITE, type Lang } from "@/lib/content";

const NAV = [
  { key: "servicios", href: "#servicios" },
  { key: "proceso", href: "#proceso" },
  { key: "portafolio", href: "#portafolio" },
  { key: "nosotros", href: "#nosotros" },
  { key: "faq", href: "#faq" },
  { key: "contacto", href: "#contacto" },
] as const;

export function Header({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const other: Lang = lang === "es" ? "en" : "es";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#090e19]/88 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
        {/* logo */}
        <Link href={lang === "es" ? "/" : `/${lang}`} className="group flex items-center gap-2.5" aria-label={SITE.name}>
          <span
            className="flex size-10 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:rotate-[-8deg]"
            style={{
              WebkitMaskImage: "radial-gradient(closest-side, black 72%, transparent 100%)",
              maskImage: "radial-gradient(closest-side, black 72%, transparent 100%)",
            }}
          >
            <Image
              src="/images/logo-nsat.webp"
              alt="NSAT Computers"
              width={40}
              height={40}
              priority
              loading="eager"
              className="size-10 object-cover"
            />
          </span>
          <span className="leading-none">
            <span className="block text-[15px] font-bold tracking-tight text-slate-100">
              NSAT
            </span>
            <span className="block font-mono text-[9.5px] tracking-[0.18em] text-slate-500 uppercase">
              Computers
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.key}
              href={n.href}
              className="relative rounded-lg px-3 py-2 text-[13.5px] text-slate-300 transition-colors hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:outline-none"
            >
              {t.nav[n.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* language switch */}
          <Link
            href={other === "es" ? "/" : `/${other}`}
            hrefLang={other}
            className="flex size-9 items-center justify-center rounded-lg border border-white/14 font-mono text-[11.5px] font-bold text-slate-300 transition-all hover:border-orange-500/60 hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            aria-label={t.nav.langLabel}
            title={t.nav.langLabel}
          >
            {t.nav.lang}
          </Link>

          <Link
            href="#contacto"
            className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-[13.5px] font-semibold text-[#0b1220] transition-all hover:bg-orange-400 hover:shadow-[0_12px_30px_-12px_rgba(249,115,22,0.9)] focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none sm:inline-flex"
          >
            {t.nav.cta}
          </Link>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-lg border border-white/14 text-slate-200 transition-colors hover:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#090e19]/97 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6" aria-label="Mobile">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.key}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.06 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] text-slate-200 transition-colors hover:bg-white/[0.05] hover:text-orange-400"
                  >
                    {t.nav[n.key]}
                    <span className="font-mono text-xs text-slate-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 flex flex-col gap-2.5 pt-3 border-t border-white/10"
              >
                <Link
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-[#0b1220]"
                >
                  {t.nav.cta}
                </Link>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#25d366]/40 bg-[#25d366]/12 px-5 py-3 text-center text-sm font-semibold text-[#25d366]"
                >
                  WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
