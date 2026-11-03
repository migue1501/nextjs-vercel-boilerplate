import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">Tu Marca</Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="#servicios" className="text-sm hover:underline">Servicios</Link>
          <Link href="#casos" className="text-sm hover:underline">Casos</Link>
          <Link href="#contacto" className="text-sm hover:underline">Contacto</Link>
        </nav>
        <Link href="#contacto" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          Empezar
        </Link>
      </div>
    </header>
  );
}
