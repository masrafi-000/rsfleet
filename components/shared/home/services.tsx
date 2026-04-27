import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-foreground">
            Comprehensive Services
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            We provide a wide range of specialized solutions to keep your fleet
            running smoothly and efficiently at all times.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Used Spare Parts */}
          <Card className="bg-slate-50 border-none shadow-none rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 min-h-[440px] md:min-h-[320px] flex flex-col md:flex-row relative">
            <div className="flex-1 z-10">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                  Used Spare Parts for Trucks from Europe
                </CardTitle>
                <CardDescription className="text-slate-500 text-sm lg:text-base leading-relaxed mt-4">
                  High-quality original used components sourced directly from reliable European suppliers.
                </CardDescription>
              </CardHeader>
            </div>
            <div className="relative w-full md:w-[45%] h-[240px] md:h-auto self-center md:self-stretch overflow-visible">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-[90%] md:left-auto md:translate-x-0 md:right-0 md:bottom-0 md:w-[80%] md:h-full lg:w-[80%] lg:h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/images/card-1.png"
                  alt="Used Spare Parts"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-contain object-center md:object-bottom-right mix-blend-multiply drop-shadow-2xl"
                />
              </div>
            </div>
          </Card>

          {/* Card 2: Car Wash */}
          <Card className="bg-slate-50 border-none shadow-none rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 min-h-[440px] md:min-h-[320px] flex flex-col md:flex-row relative">
            <div className="flex-1 z-10">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                  Truck and Passenger Car Wash
                </CardTitle>
                <CardDescription className="text-slate-500 text-sm lg:text-base leading-relaxed mt-4">
                  Professional cleaning services for vehicles of all sizes using specialized equipment.
                </CardDescription>
              </CardHeader>
            </div>
            <div className="relative w-full md:w-[45%] h-[240px] md:h-auto self-center md:self-stretch overflow-visible">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] h-full md:left-auto md:translate-x-0 md:right-[-20%] md:bottom-0 md:w-[140%] md:h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/images/card-2.png"
                  alt="Car Wash"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center md:object-bottom-right mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </div>
          </Card>

          {/* Card 3: Accessories Store */}
          <Card className="bg-slate-50 border-none shadow-none rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 min-h-[440px] md:min-h-[320px] flex flex-col md:flex-row relative">
            <div className="flex-1 z-10">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                  Accessories Store
                </CardTitle>
                <CardDescription className="text-slate-500 text-sm lg:text-base leading-relaxed mt-4">
                  Wide range of interior and exterior accessories to customize and upgrade your vehicle.
                </CardDescription>
              </CardHeader>
            </div>
            <div className="relative w-full md:w-[45%] h-[240px] md:h-auto self-center md:self-stretch overflow-visible">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] h-[95%] md:left-auto md:translate-x-0 md:right-0 md:bottom-[-10%] md:w-[120%] md:h-[90%] lg:h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/images/card-3.png"
                  alt="Accessories Store"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center md:object-bottom-right mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </div>
          </Card>

          {/* Card 4: Oil Change */}
          <Card className="bg-slate-50 border-none shadow-none rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 min-h-[440px] md:min-h-[320px] flex flex-col md:flex-row relative">
            <div className="flex-1 z-10">
              <CardHeader className="p-6 md:p-8 lg:p-10">
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase">
                  Passenger Car Oil Change Point
                </CardTitle>
                <CardDescription className="text-slate-500 text-sm lg:text-base leading-relaxed mt-4">
                  Quick and professional oil change services with premium lubricants and filters.
                </CardDescription>
              </CardHeader>
            </div>
            <div className="relative w-full md:w-[45%] h-[240px] md:h-auto self-center md:self-stretch overflow-visible">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-full md:left-auto md:translate-x-0 md:right-[-2%] md:bottom-[-5%] md:w-[90%] md:h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/images/card-4.png"
                  alt="Oil Change"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain object-center md:object-bottom-right mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Services;
