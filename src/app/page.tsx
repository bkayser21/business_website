import HeroAnimated from "@/components/animations/HeroAnimated";
import ServicesAnimated from "@/components/sections/ServicesAnimated";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import { FadeUpOnScroll } from "@/components/animations";

export default function Home() {
  return (
    <>
      <HeroAnimated />
      <ServicesAnimated />
      <FadeUpOnScroll><About /></FadeUpOnScroll>
      <FadeUpOnScroll><Process /></FadeUpOnScroll>
      <FadeUpOnScroll><Contact /></FadeUpOnScroll>
    </>
  );
}
