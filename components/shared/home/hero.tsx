import { Button } from "@/components/ui/button";
import HeloImage from "@/public/images/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.2] lg:leading-[1.1]">
              Affordable truck <br className="hidden lg:block" /> service
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-slate-500 leading-relaxed mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:block" />
              Nunc odio in et, lectus sit lorem id integer.
            </p>
            <div className="pt-2 md:pt-4">
              <Button size="lg" className="text-white text-base md:text-lg px-8 h-12 md:h-14">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full min-h-[250px] sm:min-h-[350px] lg:h-[500px] mt-8 lg:mt-0">
            <div className="absolute inset-0 lg:-right-[50%] md:w-[150%] lg:w-[180%] h-full flex justify-end lg:justify-start">
              <Image
                src={HeloImage}
                alt="White Trucks Fleet"
                fill
                className="object-contain lg:object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
