import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cuánto tarda?", a: "Entre 4 y 7 días para una landing, 2-3 semanas para sitio completo." },
  { q: "¿Puedo editar contenido?", a: "Sí, con CMS headless o Notion, sin tocar código." },
  { q: "¿Incluye hosting?", a: "Deploy en Vercel. El hosting puede ir a tu cuenta o a la nuestra (retainer)." },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-2xl font-bold md:text-3xl">Preguntas frecuentes</h2>
      <Accordion className="mt-6">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
