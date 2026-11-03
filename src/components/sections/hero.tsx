import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Webs rápidas que convierten
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Sitios en Next.js desplegados en Vercel con previews por URL, Lighthouse 95+ y entrega en días.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="#contacto" className="rounded-md bg-primary px-6 py-3 text-primary-foreground">
          Pedir preview gratis
        </Link>
        <Link href="#casos" className="rounded-md border px-6 py-3">
          Ver casos
        </Link>
      </div>
    </section>
  );
}
