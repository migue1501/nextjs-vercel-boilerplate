"use client";

import { Stagger, Item } from "@/components/motion/reveal";
import { getCopy, type Lang } from "@/lib/content";

export function Pricing({ lang }: { lang: Lang }) {
  const t = getCopy(lang);

  return (
    <section id="precios" className="relative scroll-mt-24 bg-nsat-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
            {t.pricing.kicker}
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-5 text-slate-400 sm:text-lg">{t.pricing.subtitle}</p>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.plans.map((plan) => (
            <Item
              key={plan.name}
              className={`group relative flex flex-col rounded-2xl border p-6 transition-colors duration-300 sm:p-7 ${
                plan.highlight
                  ? "border-orange-500/50 bg-gradient-to-b from-orange-500/10 to-transparent shadow-[0_0_60px_-20px_rgba(249,115,22,0.55)]"
                  : "border-white/10 bg-white/[0.03] hover:border-orange-500/30"
              }`}
            >
              <h3 className="text-base font-semibold text-slate-100">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-sm text-slate-500">{plan.label}</span>
                <span className="text-4xl font-bold tracking-tight text-orange-400">
                  {plan.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">{plan.text}</p>

              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-orange-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-0.5 font-mono text-[10px] tracking-widest text-white uppercase">
                  Popular
                </span>
              )}
            </Item>
          ))}
        </Stagger>

        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl font-mono text-xs leading-relaxed text-slate-500">
            {t.pricing.note}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
          >
            {t.pricing.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
