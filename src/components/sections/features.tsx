const items = [
  { title: "Lighthouse 95+", text: "Performance, SEO, accesibilidad y buenas prácticas." },
  { title: "Previews por URL", text: "Aprueba cada cambio antes de publicar." },
  { title: "Entrega rápida", text: "Plantillas reutilizables, sin reconstruir desde cero." },
];

export function Features() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold md:text-3xl">Qué incluye</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-lg border p-6">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
