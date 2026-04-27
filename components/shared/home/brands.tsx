"use client";

import { ShuffleHero } from "@/components/shuffle-grid";

const Brands = () => {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto">
        <ShuffleHero
          subtitle="Expertise Across All Brands"
          title="Professional Truck Repair & Service"
          description="We specialize in comprehensive repair and maintenance for all major European truck brands. From routine diagnostics to complex mechanical overhauls, our certified technicians use genuine parts to ensure your fleet remains reliable and road-ready."
        />
      </div>
    </section>
  );
};

export default Brands;
