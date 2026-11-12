"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { getCopy, type Lang } from "@/lib/content";

export function ContactForm({ lang }: { lang: Lang }) {
  const t = getCopy(lang).contact.form;
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      if (res.ok) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/12 bg-[#020617]/70 px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-600 transition-all outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/25";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">{t.name}</label>
          <Input id="cf-name" placeholder={t.name} className={field} {...register("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">{t.email}</label>
          <Input id="cf-email" type="email" placeholder={t.email} className={field} {...register("email")} />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-msg" className="sr-only">{t.message}</label>
        <Textarea
          id="cf-msg"
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${field} min-h-32 resize-y`}
          {...register("message")}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="glow-orange inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-[#0b1220] transition-all hover:bg-orange-400 hover:shadow-[0_18px_46px_-14px_rgba(249,115,22,0.9)] focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? t.sending : t.submit}
        {!isSubmitting && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" />
          </svg>
        )}
      </button>

      {status === "ok" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400" role="status">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m5 13 4 4L19 7" />
          </svg>
          {t.ok}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">{t.error}</p>
      )}
    </form>
  );
}
