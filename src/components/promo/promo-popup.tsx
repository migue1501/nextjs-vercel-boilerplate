"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { isPromoActive } from "@/config/promo";

const STORAGE_KEY = "nsat-promo-popup-landing-2026-12-dismissed";

const COPY = {
  es: {
    badge: "Promo diciembre",
    title: "Landing page profesional en promo",
    body: "Extendimos la promo de landing pages durante todo diciembre: tu página lista para vender desde $149 USD. Se desactiva automáticamente el 1 de enero.",
    cta: "Ver promo",
    close: "Cerrar",
    href: "/es/promo",
  },
  en: {
    badge: "December promo",
    title: "Professional landing page promo",
    body: "We extended our landing page promo through all December: your page ready to sell from $149 USD. It automatically deactivates on January 1.",
    cta: "View promo",
    close: "Close",
    href: "/en/promo",
  },
} as const;

export function PromoPopup() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  const lang = useMemo(() => (pathname?.startsWith("/en") ? "en" : "es"), [pathname]);
  const c = COPY[lang];

  useEffect(() => {
    if (!isPromoActive()) return;
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // ignore storage errors
    }
    const id = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={c.title}
        >
          <button
            type="button"
            aria-label={c.close}
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={dismiss}
          />
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-orange-500/30 bg-[#0f172a]/98 p-6 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.95)] sm:p-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-28"
              style={{ background: "radial-gradient(70% 100% at 50% 0%, rgba(249,115,22,0.22), transparent 70%)" }}
            />
            <button
              type="button"
              onClick={dismiss}
              aria-label={c.close}
              className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-orange-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <p className="relative inline-flex rounded-full border border-orange-500/35 bg-orange-500/10 px-3.5 py-1 font-mono text-[11px] tracking-[0.16em] text-orange-300 uppercase">
              {c.badge}
            </p>
            <h2 className="relative mt-4 pr-8 text-2xl font-bold leading-tight tracking-tight text-slate-100 sm:text-[1.7rem]">
              {c.title}
            </h2>
            <p className="relative mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">{c.body}</p>

            <div className="relative mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={c.href}
                onClick={dismiss}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 glow-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                {c.cta} <span aria-hidden>→</span>
              </Link>
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                {c.close}
              </button>
            </div>
            <p className="relative mt-4 font-mono text-[11px] text-slate-500">
              {lang === "es" ? "Válida todo diciembre · se desactiva el 1 de enero" : "Valid all December · deactivates January 1"}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
