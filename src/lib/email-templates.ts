import { SITE, type Lang } from "@/lib/content";

export type ContactEmailData = {
  name: string;
  email: string;
  message: string;
  lang: Lang;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const text = {
  es: {
    newLead: "Nuevo mensaje desde el formulario de contacto",
    replyHint: "Responde directamente a este correo: llegará al cliente que escribió.",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    received: "Recibido",
    site: "Sitio",
    thanks: "¡Hola, {name}! Recibimos tu mensaje",
    confirm: "Te confirmamos que tu consulta llegó a NSAT Computers. Te responderemos en nuestro horario de atención.",
    summary: "Tu mensaje",
    respond: "Si necesitas algo más, escríbenos a este correo o llámanos.",
    hours: "Horario: lunes a viernes de 8:00 a 17:00 y sábados de 8:00 a 12:00 (hora de Venezuela).",
    signature: "Equipo NSAT Computers",
    subjectInternal: "Nuevo contacto web",
    subjectAck: "Recibimos tu mensaje - NSAT Computers",
  },
  en: {
    newLead: "New message from the contact form",
    replyHint: "Reply directly to this email: it will reach the customer who wrote to you.",
    name: "Name",
    email: "Email",
    message: "Message",
    received: "Received",
    site: "Site",
    thanks: "Hi {name}, we received your message",
    confirm: "We confirm that your enquiry reached NSAT Computers. We will reply during our business hours.",
    summary: "Your message",
    respond: "If you need anything else, reply to this email or call us.",
    hours: "Hours: Monday to Friday 8:00–17:00 and Saturday 8:00–12:00 (Venezuela time).",
    signature: "NSAT Computers team",
    subjectInternal: "New website enquiry",
    subjectAck: "We received your message - NSAT Computers",
  },
} as const;

function shell(preheader: string, body: string): string {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>NSAT Computers</title>
</head>
<body style="margin:0;padding:0;background:#0E1726;font-family:Arial,Helvetica,sans-serif;color:#E2E8F0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0E1726;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0F172A;border:1px solid #1E293B;border-radius:16px;overflow:hidden;">
        <tr><td style="padding:22px 26px;border-bottom:1px solid #1E293B;">
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#F97316;margin-right:10px;"></span>
          <strong style="color:#FFFFFF;font-size:16px;letter-spacing:.3px;">NSAT Computers</strong>
          <div style="color:#94A3B8;font-size:12px;margin-top:4px;">${escapeHtml(SITE.url)}</div>
        </td></tr>
        <tr><td style="padding:26px;">${body}</td></tr>
        <tr><td style="padding:18px 26px;border-top:1px solid #1E293B;color:#94A3B8;font-size:12px;line-height:1.6;">
          ${escapeHtml(SITE.phone)} &middot; ${escapeHtml(SITE.email)}<br />
          ${escapeHtml(SITE.address)}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function field(label: string, value: string): string {
  return `<div style="margin:0 0 14px;">
    <div style="color:#F97316;font-size:11px;font-weight:bold;letter-spacing:.8px;text-transform:uppercase;margin-bottom:4px;">${escapeHtml(label)}</div>
    <div style="color:#E2E8F0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(value)}</div>
  </div>`;
}

export function contactNotificationHtml(data: ContactEmailData): string {
  const c = text[data.lang];
  const when = new Date().toLocaleString(data.lang === "es" ? "es-VE" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Caracas",
  });

  const body = `
    <h1 style="margin:0 0 12px;color:#FFFFFF;font-size:22px;line-height:1.3;">${escapeHtml(c.newLead)}</h1>
    <p style="margin:0 0 22px;color:#94A3B8;font-size:13px;line-height:1.6;">${escapeHtml(c.replyHint)}</p>
    <div style="background:#111C31;border:1px solid #1E293B;border-radius:12px;padding:18px 20px;">
      ${field(c.name, data.name)}
      ${field(c.email, data.email)}
      ${field(c.message, data.message)}
      <div style="color:#64748B;font-size:11px;margin-top:6px;">${escapeHtml(c.received)}: ${escapeHtml(when)} &middot; ${escapeHtml(c.site)}: ${escapeHtml(SITE.url)}</div>
    </div>`;

  return shell(c.newLead, body);
}

export function contactAcknowledgementHtml(data: ContactEmailData): string {
  const c = text[data.lang];
  const body = `
    <h1 style="margin:0 0 12px;color:#FFFFFF;font-size:21px;line-height:1.35;">${escapeHtml(c.thanks.replace("{name}", data.name))}</h1>
    <p style="margin:0 0 20px;color:#CBD5E1;font-size:14px;line-height:1.7;">${escapeHtml(c.confirm)}</p>
    <div style="background:#111C31;border-left:3px solid #F97316;border-radius:0 10px 10px 0;padding:16px 18px;margin-bottom:20px;">
      <div style="color:#F97316;font-size:11px;font-weight:bold;letter-spacing:.8px;text-transform:uppercase;margin-bottom:6px;">${escapeHtml(c.summary)}</div>
      <div style="color:#E2E8F0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
    </div>
    <p style="margin:0 0 10px;color:#CBD5E1;font-size:14px;line-height:1.7;">${escapeHtml(c.respond)}</p>
    <p style="margin:0;color:#94A3B8;font-size:12px;line-height:1.6;">${escapeHtml(c.hours)}</p>
    <p style="margin:24px 0 0;color:#F97316;font-size:13px;font-weight:bold;">${escapeHtml(c.signature)}</p>`;

  return shell(c.thanks.replace("{name}", data.name), body);
}

export function contactNotificationText(data: ContactEmailData): string {
  const c = text[data.lang];
  return [
    c.newLead,
    "",
    `${c.name}: ${data.name}`,
    `${c.email}: ${data.email}`,
    "",
    data.message,
    "",
    `${c.received}: ${new Date().toISOString()}`,
    `${c.site}: ${SITE.url}`,
  ].join("\n");
}

export function contactAcknowledgementText(data: ContactEmailData): string {
  const c = text[data.lang];
  return [
    c.thanks.replace("{name}", data.name),
    "",
    c.confirm,
    "",
    `${c.summary}:`,
    data.message,
    "",
    c.respond,
    c.hours,
    "",
    c.signature,
  ].join("\n");
}

export function contactSubject(data: ContactEmailData, kind: "internal" | "ack"): string {
  const c = text[data.lang];
  return kind === "internal"
    ? `${c.subjectInternal}: ${data.name}`
    : c.subjectAck;
}
