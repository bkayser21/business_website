import { FadeUpOnScroll } from "@/components/animations/FadeUpOnScroll";
import { StaggeredCards } from "@/components/animations/StaggeredCards";

export default function ServicesAnimated() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUpOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Services</h2>
          <p className="max-w-xl mx-auto text-neutral-500 text-lg">
            From a simple landing page to a full-featured SaaS product — I cover the full stack.
          </p>
        </FadeUpOnScroll>
        <StaggeredCards />
      </div>
    </section>
  );
}
