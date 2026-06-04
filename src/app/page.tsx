import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/Process";
import WhyApexMade from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <WhyApexMade />
      <FAQ />
      <CTABand />
    </>
  );
}
