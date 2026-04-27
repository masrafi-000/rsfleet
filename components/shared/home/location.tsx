"use client";

import { Button } from "@/components/ui/button";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  useMap,
  type MapRef,
} from "@/components/ui/map";
import { Clock, ExternalLink, MapPin, Navigation, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Silences the "Image X could not be loaded" console errors from the
// OpenFreeMap Liberty style referencing sprite icons that aren't bundled.
function MissingImageHandler() {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    const handle = (e: { id: string }) => {
      if (!map.hasImage(e.id)) {
        // Add a 1×1 transparent PNG so the style doesn't break
        const empty = new ImageData(new Uint8ClampedArray(4), 1, 1);
        map.addImage(e.id, empty as unknown as HTMLImageElement);
      }
    };

    map.on("styleimagemissing", handle);
    return () => { map.off("styleimagemissing", handle); };
  }, [map]);

  return null;
}

const Location = () => {
  const mapRef = useRef<MapRef>(null);

  // Coordinates for Zurich
  const center: [number, number] = [8.5417, 47.3769];

  // OpenFreemap Liberty 3D Style
  const openStreetMap3D = "https://tiles.openfreemap.org/styles/liberty";

  useEffect(() => {
    // Smoothly animate to a 3D perspective once loaded
    mapRef.current?.easeTo({ pitch: 60, duration: 1500 });
  }, []);

  const serviceLocation = {
    name: "RS Fleet Service",
    label: "Main Workshop",
    category: "Truck Repair & Maintenance",
    rating: 4.9,
    reviews: 156,
    hours: "8:00 AM - 6:00 PM",
    // New verified working image link
    image:
      "https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=800&auto=format&fit=crop",
    lng: center[0],
    lat: center[1],
  };

  return (
    <section className="bg-slate-50 py-10 md:py-12 lg:py-16 overflow-hidden">
      <div className="w-full pl-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <div className="ml-50  space-y-8 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-none">
                Где мы?
              </h2>
              <div className="h-2 w-24 bg-blue-600 rounded-full mx-auto lg:mx-0" />
            </div>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed  lg:mx-0">
              <p>
                Our flagship truck repair center is strategically located in
                Zurich&apos;s industrial district, providing easy access for
                heavy-duty vehicles and long-haul trailers.
              </p>
              <p>
                Equipped with 12 full-sized service bays and advanced diagnostic
                computers, our facility is engineered to keep your fleet on the
                road with minimal turnaround time.
              </p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest bg-white px-6 py-4">
                <MapPin className="text-blue-600 animate-bounce" />
                <span>Zurich, Switzerland</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Map with Proper Marker */}
          <div className="h-[500px]  md:h-[600px] w-full  overflow-hidden  order-1 lg:order-2">
            <Map
              ref={mapRef}
              center={center}
              zoom={15}
              pitch={60}
              styles={{
                light: openStreetMap3D,
                dark: openStreetMap3D,
              }}
              className="w-full h-full"
            >
              <MissingImageHandler />
              <MapMarker
                longitude={serviceLocation.lng}
                latitude={serviceLocation.lat}
              >
                <MarkerContent>
                  {/* Proper Marker Design: 3D Pin Style */}
                  <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110">
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-[100%] blur-[2px]" />
                    <div className="bg-blue-600 p-2.5 rounded-t-full rounded-bl-full shadow-lg border-2 border-white rotate-45 flex items-center justify-center">
                      <MapPin className="text-white size-5 -rotate-45" />
                    </div>
                  </div>
                  <MarkerLabel
                    position="bottom"
                    className="mt-2 font-bold text-slate-900 bg-white/90 px-2 py-0.5 rounded-md shadow-sm border border-slate-100"
                  >
                    {serviceLocation.label}
                  </MarkerLabel>
                </MarkerContent>

                <MarkerPopup className="w-72 p-0 overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                  <div className="relative h-40 w-full">
                    <Image
                      fill
                      src={serviceLocation.image}
                      alt={serviceLocation.name}
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black uppercase px-2 py-1 rounded shadow-lg">
                      Top Rated
                    </div>
                  </div>
                  <div className="space-y-4 p-5 bg-white">
                    <div>
                      <p className="text-blue-600 pb-1 text-[10px] font-black tracking-[0.2em] uppercase">
                        {serviceLocation.category}
                      </p>
                      <h3 className="text-slate-900 leading-tight font-black uppercase text-lg italic">
                        {serviceLocation.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-black text-slate-900 text-sm">
                          {serviceLocation.rating}
                        </span>
                        <span className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">
                          ({serviceLocation.reviews} Reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase">
                        <Clock className="size-3" />
                        <span>{serviceLocation.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-[10px] tracking-wider py-5 rounded-xl transition-all active:scale-95 shadow-md shadow-blue-200"
                      >
                        <Navigation className="size-3.5 mr-2" />
                        Directions
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-3 border-slate-100 bg-slate-50 hover:bg-white text-slate-600 rounded-xl py-5 transition-all active:scale-95"
                      >
                        <ExternalLink className="size-4" />
                      </Button>
                    </div>
                  </div>
                </MarkerPopup>
              </MapMarker>
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
