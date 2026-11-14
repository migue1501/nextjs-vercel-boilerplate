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
  closeDate: "2026-11-20",
  spotsTotal: 5,
} as const;

export function isPromoEnabled(): boolean {
  if (process.env.PROMO_ENABLED === "false") return false;
  if (process.env.PROMO_ENABLED === "true") return true;
  return promoConfig.enabled;
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
      { label: "Cupos", value: "5" },
      { label: "Cierre", value: "Vie 20/11/2026" },
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
      "Landing Express en promoción: $149 USD (antes $199) con hosting + subdominio gratis.",
      "Si quieres tu dominio .com propio: $199 USD (incluye dominio .com primer año + hosting).",
      "Solo 5 cupos. Cuando se acaban, vuelve al precio regular.",
      "Promo válida hasta el viernes 20 de noviembre de 2026 (o hasta agotar cupos).",
      "Pack Marca opcional: +$79 (logo, colores, tipografías y piezas básicas).",
      "Precio cerrado, sin sorpresas.",
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
      { label: "Spots", value: "5" },
      { label: "Ends", value: "Fri Nov 20, 2026" },
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
      "Landing Express promo: $149 USD (was $199) with hosting + free subdomain.",
      "Want your own .com domain: $199 USD (includes first-year .com domain + hosting).",
      "Only 5 spots. When they're gone, regular price applies.",
      "Valid until Friday, November 20, 2026 (or while spots last).",
      "Optional Brand Pack: +$79 (logo, colors, typography and basic assets).",
      "Fixed price, no surprises.",
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
