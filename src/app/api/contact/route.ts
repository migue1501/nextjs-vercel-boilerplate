import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  // Resend integration (optional): uncomment and set RESEND_API_KEY + CONTACT_EMAIL.
  // const resend = new Resend(process.env.RESEND_API_KEY!);
  // await resend.emails.send({ from: "Web <onboarding@resend.dev>", to: process.env.CONTACT_EMAIL!, subject: `Nuevo lead: ${parsed.data.name}`, html: `<p>${parsed.data.email}</p><p>${parsed.data.message}</p>` });

  return NextResponse.json({ ok: true });
}
