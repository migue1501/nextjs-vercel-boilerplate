import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Why } from "@/components/sections/why";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

// The root serves the Spanish home directly (no redirect): `/` IS the
// canonical ES URL, so it renders the full landing instead of hopping to /es.
export const instant = false;

export default function Home() {
  return (
    <>
      <Header lang="es" />
      <main>
        <Hero lang="es" />
        <Marquee lang="es" />
        <Services lang="es" />
        <Process lang="es" />
        <Portfolio lang="es" />
        <Why lang="es" />
        <Faq lang="es" />
        <Contact lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
