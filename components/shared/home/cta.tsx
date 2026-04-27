import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/cobe-globe";
import { ArrowRight, Phone, Shield, Star, Timer, Truck } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "12+", label: "Years of Service" },
  { value: "9", label: "Service Locations" },
  { value: "4.8", label: "Average Rating" },
  { value: "24/7", label: "Emergency Support" },
];

const trust = [
  { icon: Shield, text: "Certified Technicians" },
  { icon: Timer, text: "Fast Turnaround" },
  { icon: Truck, text: "All Truck Brands" },
  { icon: Star, text: "5-Star Rated" },
];



const CTA = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Copy ── */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-primary border-primary/30 bg-primary/5 font-semibold uppercase tracking-widest text-xs"
              >
                Ready to get started
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                Keep Your Fleet{" "}
                <span className="text-primary">Running Strong</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                From routine maintenance to full engine overhauls — our
                certified technicians are ready to minimise your downtime and
                maximise your fleet&apos;s performance across 9 locations in
                Switzerland.
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {trust.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            {/* <div className="grid grid-cols-4 gap-2 bg-slate-50 border border-slate-100 rounded-2xl p-5">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-foreground">{value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div> */}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="group font-bold uppercase tracking-wider px-8"
                asChild
              >
                <Link href="/contacts">
                  Book a Service
                  <ArrowRight className="size-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold uppercase tracking-wider px-8"
                asChild
              >
                <Link href="tel:+41000000000">
                  <Phone className="size-4 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>

          {/* ── Right: Globe ── */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-primary/8 blur-3xl scale-90 pointer-events-none" />
              <Globe
                markerColor={[0.9, 0.25, 0.1]}
                baseColor={[0.92, 0.94, 0.97]}
                glowColor={[0.88, 0.91, 0.96]}
                arcColor={[0.9, 0.25, 0.1]}
                dark={0}
                mapBrightness={8}
                speed={0.004}
                className="w-full drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
