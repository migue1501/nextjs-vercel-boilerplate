"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getCopy, SITE, type Lang } from "@/lib/content";

export function Footer({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  // The clock is read only in the effect, so the prerender never sees it.
  const yearRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (yearRef.current) yearRef.current.textContent = String(new Date().getFullYear());
  }, []);

  const services = t.services.items.slice(0, 5).map((s) => ({
    label: s.title,
    href: "link" in s && s.link ? s.link.href : "#servicios",
    external: "link" in s && !!s.link,
  }));

  const legal = [
    { label: t.footer.privacy, href: `/${lang}/privacidad` },
    { label: t.footer.terms, href: `${SITE.mainSite}/terminos-y-condiciones/`, external: true },
  ];

  const social = [
    {
      label: "WhatsApp",
      href: SITE.whatsapp,
      path: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Z",
      color: "#25d366",
    },
    {
      label: "Email",
      href: `mailto:${SITE.email}`,
      path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm8 7L4 6.5V18h16V6.5L12 11Zm0-2 8-4.5H4L12 9Z",
      color: "#94a3b8",
    },
    {
      label: "Teléfono",
      href: SITE.phoneHref,
      path: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2Z",
      color: "#94a3b8",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-nsat-ink">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Link href={`/${lang}`} className="flex items-center gap-2.5" aria-label={SITE.name}>
              <span className="flex size-9 items-center justify-center rounded-xl bg-orange-500 font-mono text-sm font-black text-[#0b1220]">
                N
              </span>
              <span className="leading-none">
                <span className="block text-[15px] font-bold text-slate-100">NSAT Computers</span>
                <span className="block font-mono text-[9.5px] tracking-[0.18em] text-slate-500 uppercase">
                  Porlamar · Venezuela
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              {t.footer.tagline}
            </p>

            <div className="mt-6 flex gap-2.5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/12 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-orange-500/50 hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* services */}
          <nav aria-label={t.footer.servicesTitle}>
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-orange-500 uppercase">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-slate-500 transition-colors hover:text-orange-400"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* links */}
          <nav aria-label={t.footer.linksTitle}>
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-orange-500 uppercase">
              {t.footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href={`/${lang === "es" ? "en" : "es"}`} className="text-sm text-slate-500 transition-colors hover:text-orange-400">
                  {t.footer.langLink}
                </Link>
              </li>
              <li>
                <a href={SITE.portfolio} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 transition-colors hover:text-orange-400">
                  {t.footer.portfolio} ↗
                </a>
              </li>
              <li>
                <a href={SITE.mainSite} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 transition-colors hover:text-orange-400">
                  {t.footer.mainSite} ↗
                </a>
              </li>
              <li>
                <a href={`${SITE.mainSite}/#contacto`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 transition-colors hover:text-orange-400">
                  {t.nav.contacto}
                </a>
              </li>
            </ul>
          </nav>

          {/* legal + contact */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.18em] text-orange-500 uppercase">
              {t.footer.legalTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-slate-500 transition-colors hover:text-orange-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <address className="mt-6 space-y-1.5 not-italic">
              <a href={SITE.phoneHref} className="block font-mono text-[12.5px] text-slate-400 transition-colors hover:text-orange-400">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block font-mono text-[12.5px] break-all text-slate-400 transition-colors hover:text-orange-400">
                {SITE.email}
              </a>
              <p className="font-mono text-[11.5px] text-slate-600">{SITE.hours[lang]}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11.5px] text-slate-600">
            © <span ref={yearRef}>2026</span> {SITE.name}. {t.footer.rights}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-slate-600">
            <span>{t.footer.made}</span>
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-orange-400"
            >
              {t.footer.credits}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
