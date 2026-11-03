import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
