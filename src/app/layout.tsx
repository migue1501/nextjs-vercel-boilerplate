import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

export const viewport: Viewport = {
  themeColor: "#090e19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = buildMetadata({
  title: "Desarrollo Web Profesional",
  description:
    "NSAT Computers: sitios web rápidos, bilingües y modernos en Next.js — tiendas, portafolios y páginas corporativas en Porlamar, Nueva Esparta.",
});

type Params = Promise<{ lang?: string }>;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  const htmlLang = lang === "en" ? "en" : "es";

  return (
    <html lang={htmlLang} className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
