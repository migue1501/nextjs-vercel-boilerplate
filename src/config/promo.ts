import { SITE } from "@/lib/content";
import type { Lang } from "@/lib/content";

/**
 * Promo landing config.
 * - Toggle `enabled` to activate/deactivate https://nsatwebdesign.vercel.app/promo
 * - Optional env override: set PROMO_ENABLED="false" in Vercel to disable quickly without a code change.
 * - Re-edit this file for future promotions and set `enabled: true` again.
 */
export const promoConfig = {
  enabled: true,
  slug: "promo",
  whatsapp: SITE.whatsapp,
  whatsappDisplay: SITE.phone,
  email: SITE.email,
  prices: {
    landingPromo: "$149",
    landingPromoOld: "$199",
    landingWithDomain: "$199",
    brandPack: "$79",
  },
  /** Último día de vigencia (inclusive). La promo se desactiva automáticamente el 1 de enero. */
  closeDate: "2026-12-31",
  /** Fecha/hora a partir de la cual la promo se considera inactiva (auto). */
  disableAt: "2027-01-01T00:00:00",
  spotsTotal: 6,
} as const;

export function isPromoActive(now: Date = new Date()): boolean {
  if (process.env.PROMO_ENABLED === "false") return false;
  if (now >= new Date(promoConfig.disableAt)) return false;
  if (process.env.PROMO_ENABLED === "true") return true;
  return promoConfig.enabled;
}

/** @deprecated Usa isPromoActive para respetar la fecha de expiración automática. */
export function isPromoEnabled(): boolean {
  return isPromoActive();
}

export type PromoCopy = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaHint: string;
  disabledTitle: string;
  disabledText: string;
  disabledCta: string;
  highlights: { label: string; value: string }[];
  includesTitle: string;
  includes: string[];
  termsTitle: string;
  terms: string[];
  priceNote: string;
};

export const PROMO_COPY: Record<Lang, PromoCopy> = {
  es: {
    metaTitle: "Promo Landing Express $149 | NSAT Web Design",
    metaDescription:
      "Promo de lanzamiento: tu landing page profesional publicada en 72 horas desde $149 USD. Todo incluido: página, hosting, subdominio y WhatsApp Business. 5 cupos.",
    badge: "Promo de lanzamiento",
    title: "Tu landing page profesional en 72 horas",
    subtitle:
      "Publicamos tu página lista para vender con un precio cerrado y todo lo esencial incluido. Cupos limitados.",
    cta: "Quiero mi web por WhatsApp",
    ctaHint: 'Escríbenos "QUIERO MI WEB" y te respondemos hoy con alcance, tiempo y precio.',
    disabledTitle: "Esta promoción no está activa",
    disabledText:
      "La oferta de lanzamiento no está disponible en este momento. Pero podemos ayudarte con tu página web: escríbenos y te enviamos una cotización.",
    disabledCta: "Hablar por WhatsApp",
    highlights: [
      { label: "Precio promo", value: "$149" },
      { label: "Entrega", value: "72 horas" },
      { label: "Cupos prioritarios", value: "6" },
      { label: "Vigencia", value: "Todo diciembre" },
    ],
    includesTitle: "Qué incluye",
    includes: [
      "Landing page profesional lista para publicar",
      "Hosting incluido + subdominio gratis (Vercel)",
      "WhatsApp Business configurado y listo para recibir mensajes",
      "Diseño responsive (se ve bien en celular)",
      "Entrega en 72 horas",
      "Pago 50% al arrancar y 50% al verla online",
    ],
    termsTitle: "Detalles de la promo",
    terms: [
      "Landing Express en promoción: $149 USD (antes $199) con hosting + subdominio gratis (Vercel).",
      "Si quieres tu dominio propio: $199 USD incluye dominio .com estándar (1er año, sujeto a disponibilidad y precio del dominio) + hosting de la landing por 1 año. Dominios premium u otras extensiones se cotizan aparte según su costo.",
      "Los primeros 6 proyectos tienen prioridad de entrega en 72 horas. La promo está activa todo diciembre y, si la agenda lo permite, podremos tomar solicitudes adicionales.",
      "Promo extendida durante todo diciembre de 2026. Se desactiva automáticamente el 1 de enero de 2027.",
      "Alcance base: 1 landing page con secciones acordadas, entrega estimada en 72 horas según disponibilidad/material entregado y 1 ronda de ajustes razonables. Funciones extra, copy, integraciones o cambios mayores se cotizan aparte.",
      "El hosting incluido cubre la publicación de la landing; renovaciones de dominio/hosting y servicios adicionales se coordinan según el caso. Precio cerrado según alcance acordado, sin sorpresas.",
    ],
    priceNote:
      "Precios en USD. El dominio .com (si aplica) y renovaciones futuras se coordinan según el caso. Oferta sujeta a disponibilidad de cupos.",
  },
  en: {
    metaTitle: "Landing Express Promo $149 | NSAT Web Design",
    metaDescription:
      "Launch promo: your professional landing page published in 72 hours from $149 USD. All included: page, hosting, subdomain and WhatsApp Business. 5 spots.",
    badge: "Launch promo",
    title: "Your professional landing page in 72 hours",
    subtitle:
      "We publish your page ready to sell with a fixed price and everything essential included. Limited spots.",
    cta: "I want my website on WhatsApp",
    ctaHint: 'Message us "QUIERO MI WEB" and we\'ll reply today with scope, timeline and price.',
    disabledTitle: "This promotion is not active",
    disabledText:
      "The launch offer is not available right now. But we can still help with your website: message us and we'll send you a quote.",
    disabledCta: "Chat on WhatsApp",
    highlights: [
      { label: "Promo price", value: "$149" },
      { label: "Delivery", value: "72 hours" },
      { label: "Priority spots", value: "6" },
      { label: "Valid", value: "All December" },
    ],
    includesTitle: "What's included",
    includes: [
      "Professional landing page ready to publish",
      "Hosting included + free subdomain (Vercel)",
      "WhatsApp Business configured and ready to receive messages",
      "Responsive design (looks great on mobile)",
      "Delivered in 72 hours",
      "50% to start and 50% when you see it live",
    ],
    termsTitle: "Promo details",
    terms: [
      "Landing Express promo: $149 USD (was $199) with hosting + free subdomain (Vercel).",
      "Want your own domain: $199 USD includes a standard .com domain (1st year, subject to availability and domain price) + 1 year of landing hosting. Premium domains or other TLDs are quoted separately based on cost.",
      "The first 6 projects get priority 72-hour delivery. The promo runs all December and, if schedule allows, we can take additional requests.",
      "Promo extended through all December 2026. It automatically deactivates on January 1, 2027.",
      "Base scope: 1 landing page with agreed sections, estimated 72-hour delivery depending on availability/provided materials, and 1 round of reasonable revisions. Extra features, copy, integrations, or major changes are quoted separately.",
      "Included hosting covers publishing the landing; domain/hosting renewals and additional services are handled as agreed. Fixed price for the agreed scope, no surprises.",
    ],
    priceNote:
      "Prices in USD. .com domain (if applicable) and future renewals are handled as agreed. Offer subject to availability.",
  },
};

export function getPromoWhatsAppLink(lang: Lang) {
  const text =
    lang === "es"
      ? "Hola 👋 Vengo de nsatwebdesign.vercel.app/promo. QUIERO MI WEB. ¿Me das alcance, tiempo y precio?"
      : "Hi 👋 I came from nsatwebdesign.vercel.app/promo. I want my website. Can you share scope, timeline and price?";
  return `${promoConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
