import { ContactForm } from "@/components/forms/contact-form";

export function Cta() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-2xl border bg-muted/30 p-8 md:p-12">
        <h2 className="text-2xl font-bold md:text-3xl">¿Quieres ver tu web en preview?</h2>
        <p className="mt-2 text-muted-foreground">Te envío un link con versión rápida en 48h. Sin compromiso.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
