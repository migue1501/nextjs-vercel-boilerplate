import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { SITE, type Lang } from "@/lib/content";
import {
  contactAcknowledgementHtml,
  contactAcknowledgementText,
  contactNotificationHtml,
  contactNotificationText,
  contactSubject,
  type ContactEmailData,
} from "@/lib/email-templates";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] Falta la variable RESEND_API_KEY en Vercel");
    return NextResponse.json(
      { ok: false, error: "El formulario aún no está configurado para enviar correos." },
      { status: 500 },
    );
  }

  const lang: Lang =
    body && typeof body === "object" && "lang" in body && body.lang === "en" ? "en" : "es";

  const data: ContactEmailData = {
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
    lang,
  };

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_EMAIL || SITE.email;
  const from = process.env.RESEND_FROM_EMAIL || "NSAT Web <onboarding@resend.dev>";

  const sent = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: contactSubject(data, "internal"),
    text: contactNotificationText(data),
    html: contactNotificationHtml(data),
  });

  if (sent.error) {
    console.error("[contact] Error de Resend al notificar el lead:", sent.error.message);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar tu mensaje. Escríbenos por WhatsApp, por favor." },
      { status: 502 },
    );
  }

  // Confirmación automática al cliente: solo se habilita si se configura un
  // remitente con dominio verificado en Resend (onboarding@resend.dev no puede
  // enviar a direcciones distintas de la cuenta).
  const ackFrom = process.env.RESEND_ACK_FROM_EMAIL;
  if (ackFrom) {
    const ack = await resend.emails.send({
      from: ackFrom,
      to: [data.email],
      subject: contactSubject(data, "ack"),
      text: contactAcknowledgementText(data),
      html: contactAcknowledgementHtml(data),
    });
    if (ack.error) {
      console.error("[contact] Error de Resend en la confirmación:", ack.error.message);
    }
  }

  return NextResponse.json({ ok: true, id: sent.data?.id });
}
