import Brands from "@/components/shared/home/brands";
import CTA from "@/components/shared/home/cta";
import Hero from "@/components/shared/home/hero";
import Location from "@/components/shared/home/location";
import Services from "@/components/shared/home/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Brands />
      <Location />
      <CTA />
    </main>
  );
}
