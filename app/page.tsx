import Brands from "@/components/shared/home/brands";
import Hero from "@/components/shared/home/hero";
import Services from "@/components/shared/home/services";
import Location from "@/components/shared/home/location";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Brands />
      <Location />
    </main>
  );
}
