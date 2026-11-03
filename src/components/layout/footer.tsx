"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number>(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
        © {year} Tu Marca. Todos los derechos reservados.
      </div>
    </footer>
  );
}
