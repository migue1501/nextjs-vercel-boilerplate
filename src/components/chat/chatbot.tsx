"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getCopy, type Lang } from "@/lib/content";

type Link = { href: string; label: string; external: boolean };
type Answer = { text: string; showQuick?: boolean; link?: Link };
type Msg = { id: number; role: "user" | "bot"; text?: string; link?: Link; quick?: boolean };

let uid = 0;

/**
 * Chatbot de la landing. El mensaje emergente (teaser) aparece una sola
 * vez por visita: al cargar la página, después de unos segundos. Si el
 * visitante abre el chat (desde el teaser o desde el botón), el teaser
 * desaparece para siempre y NO vuelve aunque se cierre el chat; solo
 * reaparece al actualizar la página. Todo el estado vive en memoria
 * (sin localStorage), por lo que cada carga de página lo reinicia.
 */
export function ChatBot({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const openedRef = useRef(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // El teaser solo aparece si aún no se ha abierto el chat en esta visita.
  useEffect(() => {
    const id = setTimeout(() => {
      if (!openedRef.current) setTeaser(true);
    }, 2800);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  function openChat() {
    openedRef.current = true;
    setTeaser(false);
    setOpen(true);
    if (messages.length === 0) push("bot", t.chat.greet, true);
  }

  function push(role: Msg["role"], text: string, quick = false) {
    setMessages((m) => [...m, { id: ++uid, role, text, quick }]);
  }

  function answer(topicId: string) {
    const a = (t.chat.answers as Record<string, Answer>)[topicId] ?? t.chat.answers.default;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      push("bot", a.text, !!a.showQuick);
      if (a.link) setMessages((m) => [...m, { id: ++uid, role: "bot", link: a.link }]);
    }, 550);
  }

  function handleQuick(id: string) {
    push("user", t.chat.quick.find((q) => q.id === id)?.label || id);
    answer(id);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    push("user", text);
    setInput("");
    const lower = text.toLowerCase();
    const topic = t.chat.keywords.find((k) => k.words.some((w) => lower.includes(w)));
    answer(topic?.id || "default");
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? t.chat.close : t.chat.launch}
        aria-expanded={open}
        className="fixed right-5 bottom-5 z-[60] flex size-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_16px_40px_-12px_rgba(249,115,22,0.8)] transition-all hover:scale-105 hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </motion.svg>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 size-3 rounded-full border-2 border-[#090e19] bg-[#25d366]" />
        )}
      </button>

      {/* Mensaje emergente: solo la primera vez por visita */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-5 bottom-22 z-[59] w-[min(19rem,calc(100vw-2.5rem))]"
          >
            <button
              type="button"
              onClick={openChat}
              className="group w-full rounded-2xl rounded-br-sm border border-white/12 bg-[#0b1220]/95 p-4 text-left shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors hover:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              <span className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white"
                >
                  N
                </span>
                <span className="block">
                  <span className="block text-[13.5px] leading-snug text-slate-200">
                    {t.chat.teaser}
                  </span>
                  <span className="mt-2 block font-mono text-[11px] tracking-wide text-orange-400 group-hover:text-orange-300">
                    {t.chat.teaserCta}
                  </span>
                </span>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={t.chat.launch}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-5 bottom-22 z-[60] flex max-h-[min(34rem,calc(100dvh-7rem))] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0b1220]/97 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          >
            {/* header */}
            <header className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-orange-500/18 to-transparent px-4 py-3.5">
              <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white"
              >
                N
              </span>
              <div className="min-w-0 leading-tight">
                <strong className="block truncate text-sm text-slate-100">NSAT Computers</strong>
                <small className="flex items-center gap-1.5 font-mono text-[10.5px] text-slate-400">
                  <span className="size-1.5 rounded-full bg-[#25d366]" aria-hidden />
                  {t.chat.sub}
                </small>
              </div>
            </header>

            {/* mensajes */}
            <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col gap-2 ${m.role === "user" ? "items-end" : "items-start"}`}
                >
                  {m.link ? (
                    m.link.external ? (
                      <a
                        href={m.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-2xl rounded-bl-sm border border-orange-500/45 bg-orange-500/12 px-3.5 py-2.5 text-[13.5px] font-medium text-orange-300 transition-colors hover:bg-orange-500/22"
                      >
                        {m.link.label}
                      </a>
                    ) : (
                      <a
                        href={m.link.href}
                        onClick={() => setOpen(false)}
                        className="inline-block rounded-2xl rounded-bl-sm border border-orange-500/45 bg-orange-500/12 px-3.5 py-2.5 text-[13.5px] font-medium text-orange-300 transition-colors hover:bg-orange-500/22"
                      >
                        {m.link.label}
                      </a>
                    )
                  ) : (
                    <span
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                        m.role === "user"
                          ? "rounded-br-sm bg-orange-500 font-medium text-[#0b1220]"
                          : "rounded-bl-sm border border-white/10 bg-white/[0.06] text-slate-200"
                      }`}
                    >
                      {m.text}
                    </span>
                  )}
                  {m.quick && (
                    <div className="flex flex-wrap gap-2 pl-1">
                      {t.chat.quick.map((q) => (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => handleQuick(q.id)}
                          className="rounded-full border border-orange-500/45 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-300 transition-colors hover:bg-orange-500/22 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex">
                  <span className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-4 py-3.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="size-1.5 rounded-full bg-slate-400"
                        animate={reduce ? {} : { opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                      />
                    ))}
                  </span>
                </div>
              )}
            </div>

            {/* input */}
            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chat.placeholder}
                aria-label={t.chat.placeholder}
                className="min-w-0 flex-1 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={t.chat.send}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:outline-none"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m5 12 14 0M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
