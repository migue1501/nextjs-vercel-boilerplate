"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Lang } from "@/lib/content";
import { getCopy } from "@/lib/content";

type Line = { prompt: string; cmd: string; out: string[] };

const CHARS = 34; // ms per character typed

export function Terminal({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const reduce = useReducedMotion();
  const lines: Line[] =
    lang === "es"
      ? [
          { prompt: "npx", cmd: "create-next-app tu-negocio", out: ["✓ Proyecto inicializado"] },
          { prompt: "npm", cmd: "run disenar --bilingue", out: ["✓ Español + English", "✓ Paleta de tu marca"] },
          { prompt: "npm", cmd: "run build --optimize", out: ["✓ Lighthouse 95+", "✓ SEO + accesibilidad"] },
          { prompt: "vercel", cmd: "deploy --prod", out: ["✓ En línea en 48h", "→ nsatwebdesign.vercel.app"] },
        ]
      : [
          { prompt: "npx", cmd: "create-next-app your-business", out: ["✓ Project initialized"] },
          { prompt: "npm", cmd: "run design --bilingual", out: ["✓ Spanish + English", "✓ Your brand palette"] },
          { prompt: "npm", cmd: "run build --optimize", out: ["✓ Lighthouse 95+", "✓ SEO + accessibility"] },
          { prompt: "vercel", cmd: "deploy --prod", out: ["✓ Live in 48h", "→ nsatwebdesign.vercel.app"] },
        ];

  const [done, setDone] = useState<number[]>([0, 0, 0, 0]); // typed chars per line
  const [revealed, setRevealed] = useState<number[]>([0, 0, 0, 0]); // output lines shown
  const [active, setActive] = useState(0);
  const timers = useRef<number[]>([]);

  // Reduced motion renders the finished transcript directly — no state writes.
  const shownDone = reduce ? lines.map((l) => l.cmd.length) : done;
  const shownRevealed = reduce ? lines.map((l) => l.out.length) : revealed;
  const shownActive = reduce ? lines.length : active;

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    const ids: number[] = [];

    const typeLine = (i: number) => {
      if (cancelled || i >= lines.length) return;
      setActive(i);
      const target = lines[i].cmd.length;
      let c = 0;
      const step = () => {
        if (cancelled) return;
        c += 1;
        setDone((d) => d.map((v, k) => (k === i ? c : v)));
        if (c < target) {
          ids.push(window.setTimeout(step, CHARS));
        } else {
          // reveal outputs one by one
          let o = 0;
          const showOut = () => {
            if (cancelled) return;
            o += 1;
            setRevealed((r) => r.map((v, k) => (k === i ? o : v)));
            if (o < lines[i].out.length) {
              ids.push(window.setTimeout(showOut, 260));
            } else {
              ids.push(window.setTimeout(() => typeLine(i + 1), 520));
            }
          };
          ids.push(window.setTimeout(showOut, 320));
        }
      };
      ids.push(window.setTimeout(step, i === 0 ? 700 : 120));
    };

    typeLine(0);
    timers.current = ids;
    return () => {
      cancelled = true;
      ids.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, reduce]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      {/* orange glow behind the window */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(249,115,22,0.38), transparent 70%)",
        }}
      />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020617]/95 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate font-mono text-[11px] tracking-wide text-slate-400 sm:text-xs">
            {t.hero.terminalTitle}
          </span>
        </div>

        {/* body */}
        <div className="space-y-3.5 px-4 py-5 font-mono text-[12.5px] leading-relaxed sm:px-5 sm:text-[13.5px]">
          {lines.map((l, i) => {
            const typed = shownDone[i] ?? 0;
            const shown = shownRevealed[i] ?? 0;
            const isFinished = typed >= l.cmd.length;
            const visible = i <= shownActive;
            if (!visible) return null;

            return (
              <div key={i} className="space-y-1.5">
                <div className="flex flex-wrap items-baseline gap-x-2 break-words">
                  <span className="text-[#22c55e]">➜</span>
                  <span className="text-sky-400">~/nsat</span>
                  <span className="text-orange-400">{l.prompt}</span>
                  <span className="text-slate-200">
                    {l.cmd.slice(0, typed)}
                    {typed < l.cmd.length && <i className="caret not-italic" />}
                  </span>
                </div>
                {isFinished &&
                  l.out.slice(0, shown).map((o, k) => (
                    <div key={k} className="pl-4 text-emerald-400/90">
                      {o}
                    </div>
                  ))}
              </div>
            );
          })}

          {/* idle cursor line */}
          {shownActive >= lines.length && (
            <div className="flex items-baseline gap-2">
              <span className="text-[#22c55e]">➜</span>
              <span className="text-sky-400">~/nsat</span>
              <i className="caret not-italic" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
