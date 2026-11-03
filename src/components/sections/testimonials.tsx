const quotes = [
  { name: "Cliente A", text: "Cargó en menos de 1s y cerramos más consultas." },
  { name: "Cliente B", text: "El preview nos evitó 3 rondas de revisiones." },
];

export function Testimonials() {
  return (
    <section id="casos" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold md:text-3xl">Casos</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {quotes.map((q) => (
          <blockquote key={q.name} className="rounded-lg border p-6">
            <p className="text-sm">“{q.text}”</p>
            <footer className="mt-3 text-xs text-muted-foreground">— {q.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
