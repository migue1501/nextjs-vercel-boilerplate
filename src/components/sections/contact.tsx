"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { IMAGES, SITE, getCopy, type Lang } from "@/lib/content";

function Icon({ d, filled = false }: { d: React.ReactNode; filled?: boolean }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {d}
    </svg>
  );
}

export function Contact({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const waText =
    lang === "es"
      ? "Hola 👋 Vengo de nsatwebdesign.vercel.app. Quiero cotizar mi página web."
      : "Hi 👋 I came from nsatwebdesign.vercel.app. I'd like a quote for my website.";

  const rows = [
    { label: t.contact.phoneLabel, value: SITE.phone, href: SITE.phoneHref, icon: <Icon d={<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.8a2 2 0 0 1 1.7 2Z" />} /> },
    { label: t.contact.emailLabel, value: SITE.email, href: `mailto:${SITE.email}`, icon: <Icon d={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>} /> },
    { label: t.contact.addressLabel, value: SITE.address, href: "https://maps.google.com/?q=Porlamar,+Nueva+Esparta,+Venezuela", icon: <Icon d={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>} /> },
    { label: t.contact.hoursLabel, value: SITE.hours[lang], icon: <Icon d={<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>} /> },
  ];

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-nsat-ink py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 55% at 85% 15%, rgba(249,115,22,0.16), transparent 65%), radial-gradient(50% 50% at 8% 90%, rgba(37,211,102,0.10), transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
            {t.contact.kicker}
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-nsat-slate/70 p-6 backdrop-blur sm:p-8">
              <ContactForm lang={lang} />

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                  {t.contact.infoTitle}
                </p>
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-[#06251a] transition-all hover:bg-[#22c05b] hover:shadow-[0_16px_40px_-14px_rgba(37,211,102,0.75)] focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] focus-visible:outline-none"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Z" />
                  </svg>
                  {t.contact.form.whatsapp}
                </a>
              </div>
            </div>
          </Reveal>

          {/* info + image */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6">
              <ul className="space-y-3">
                {rows.map((r) => {
                  const inner = (
                    <span className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-400">
                        {r.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[10.5px] tracking-wider text-slate-500 uppercase">
                          {r.label}
                        </span>
                        <span className="mt-0.5 block text-sm break-words text-slate-200">
                          {r.value}
                        </span>
                      </span>
                    </span>
                  );

                  return (
                    <li key={r.label}>
                      {r.href ? (
                        <a
                          href={r.href}
                          target={r.href.startsWith("http") ? "_blank" : undefined}
                          rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block rounded-2xl border border-white/10 bg-nsat-slate/60 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-orange-500/40"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="rounded-2xl border border-white/10 bg-nsat-slate/60 px-4 py-3.5">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="relative mt-auto overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={IMAGES.ingeniero.src}
                  alt={IMAGES.ingeniero.alt}
                  width={1280}
                  height={853}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-nsat-ink via-nsat-ink/35 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-slate-300">{SITE.address}</span>
                  <span className="font-mono text-[10px] text-slate-500">{IMAGES.ingeniero.credit}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
