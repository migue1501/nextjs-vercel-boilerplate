"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { getCopy, type Lang } from "@/lib/content";

export function Faq({ lang }: { lang: Lang }) {
  const t = getCopy(lang);

  return (
    <section id="faq" className="relative scroll-mt-24 bg-nsat-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-orange-500 uppercase">
            {t.faq.kicker}
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.06] font-bold tracking-tight">
            {t.faq.title}
          </h2>
          <div
            aria-hidden
            className="mt-8 hidden size-28 items-center justify-center rounded-3xl border border-orange-500/25 bg-orange-500/10 font-mono text-4xl text-orange-400/80 lg:flex float-slow"
          >
            ?
          </div>
        </div>

        <Reveal>
          <Accordion className="rounded-2xl border border-white/10 bg-nsat-slate/60 px-5 sm:px-6">
            {t.faq.items.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="!border-white/10">
                <AccordionTrigger className="py-5 text-[15px] text-slate-100 hover:no-underline">
                  <span className="flex items-start gap-3 text-left">
                    <span className="mt-0.5 font-mono text-xs text-orange-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-400">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
