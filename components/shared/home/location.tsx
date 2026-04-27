"use client";

import { Button } from "@/components/ui/button";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  useMap,
  type MapRef,
} from "@/components/ui/map";
import { Clock, ExternalLink, Navigation, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── Map style options ───────────────────────────────────────────────────────
const mapStyles = {
  default: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
};
type StyleKey = keyof typeof mapStyles;

// ─── 9 Service Locations ─────────────────────────────────────────────────────
const locations = [
  {
    id: 1,
    name: "RS Fleet — Zurich Central",
    city: "Zurich",
    country: "Switzerland",
    hours: "8:00 AM – 6:00 PM",
    rating: 4.9,
    reviews: 156,
    lng: 8.5417,
    lat: 47.3769,
    image:
      "https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=600&fit=crop",
  },
  {
    id: 2,
    name: "RS Fleet — Geneva Hub",
    city: "Geneva",
    country: "Switzerland",
    hours: "7:00 AM – 7:00 PM",
    rating: 4.8,
    reviews: 98,
    lng: 6.1432,
    lat: 46.2044,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&fit=crop",
  },
  {
    id: 3,
    name: "RS Fleet — Basel Workshop",
    city: "Basel",
    country: "Switzerland",
    hours: "8:00 AM – 5:00 PM",
    rating: 4.7,
    reviews: 74,
    lng: 7.5886,
    lat: 47.5596,
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&fit=crop",
  },
  {
    id: 4,
    name: "RS Fleet — Bern Service",
    city: "Bern",
    country: "Switzerland",
    hours: "8:00 AM – 6:00 PM",
    rating: 4.8,
    reviews: 112,
    lng: 7.4474,
    lat: 46.9481,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&fit=crop",
  },
  {
    id: 5,
    name: "RS Fleet — Lausanne Center",
    city: "Lausanne",
    country: "Switzerland",
    hours: "7:30 AM – 6:30 PM",
    rating: 4.6,
    reviews: 63,
    lng: 6.6323,
    lat: 46.5197,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&fit=crop",
  },
  {
    id: 6,
    name: "RS Fleet — Lucerne Depot",
    city: "Lucerne",
    country: "Switzerland",
    hours: "8:00 AM – 5:30 PM",
    rating: 4.9,
    reviews: 89,
    lng: 8.3093,
    lat: 47.0502,
    image:
      "https://images.unsplash.com/photo-1609429019995-8c40f49535a5?q=80&w=600&fit=crop",
  },
  {
    id: 7,
    name: "RS Fleet — St. Gallen North",
    city: "St. Gallen",
    country: "Switzerland",
    hours: "8:00 AM – 6:00 PM",
    rating: 4.7,
    reviews: 51,
    lng: 9.3767,
    lat: 47.4245,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&fit=crop",
  },
  {
    id: 8,
    name: "RS Fleet — Winterthur Bay",
    city: "Winterthur",
    country: "Switzerland",
    hours: "7:00 AM – 6:00 PM",
    rating: 4.8,
    reviews: 77,
    lng: 8.7269,
    lat: 47.5006,
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&fit=crop",
  },
  {
    id: 9,
    name: "RS Fleet — Lugano South",
    city: "Lugano",
    country: "Switzerland",
    hours: "8:00 AM – 5:00 PM",
    rating: 4.6,
    reviews: 42,
    lng: 8.9511,
    lat: 46.0037,
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&fit=crop",
  },
];

// ─── Missing sprite image suppressor ─────────────────────────────────────────
function MissingImageHandler() {
  const { map } = useMap();
  useEffect(() => {
    if (!map) return;
    const handle = (e: { id: string }) => {
      if (!map.hasImage(e.id)) {
        const empty = new ImageData(new Uint8ClampedArray(4), 1, 1);
        map.addImage(e.id, empty as unknown as HTMLImageElement);
      }
    };
    map.on("styleimagemissing", handle);
    return () => {
      map.off("styleimagemissing", handle);
    };
  }, [map]);
  return null;
}

// ─── Main Component ───────────────────────────────────────────────────────────
const Location = () => {
  const mapRef = useRef<MapRef>(null);
  const [mapStyle, setMapStyle] = useState<StyleKey>("default");
  const [activeId, setActiveId] = useState<number>(1);
  const selectedStyle = mapStyles[mapStyle];
  const is3D = mapStyle === "openstreetmap3d";

  const activeLocation =
    locations.find((l) => l.id === activeId) ?? locations[0];

  // Fly to selected location
  useEffect(() => {
    mapRef.current?.flyTo({
      center: [activeLocation.lng, activeLocation.lat],
      zoom: 14,
      pitch: is3D ? 60 : 0,
      duration: 1200,
    });
  }, [activeId, is3D, activeLocation.lng, activeLocation.lat]);

  // Initial 3D pitch animation
  useEffect(() => {
    const t = setTimeout(() => {
      mapRef.current?.easeTo({ pitch: 0, duration: 1000 });
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-slate-50 py-10 md:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* ── Section Header ── */}
        <div className="mb-8 md:mb-12 text-center lg:text-left lg:max-w-xl">
          <span className="block text-xs md:text-sm text-primary font-semibold uppercase tracking-widest mb-2">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Service Locations
          </h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mt-3 mx-auto lg:mx-0" />
        </div>

        {/* ── Two-column layout: text left, map right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left: description + active location details */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                With service centers across Switzerland, RS Fleet ensures your
                trucks and heavy vehicles are never far from expert care. Each
                location is fully equipped for diagnostics, repair, and
                preventative maintenance.
              </p>
            </div>

            {/* Active location detail card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  fill
                  src={activeLocation.image}
                  alt={activeLocation.name}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                    {activeLocation.country}
                  </p>
                  <h3 className="text-lg font-black uppercase leading-tight">
                    {activeLocation.city}
                  </h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  {activeLocation.name}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-foreground">
                      {activeLocation.rating}
                    </span>
                    <span className="text-muted-foreground">
                      ({activeLocation.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3.5" />
                    <span>{activeLocation.hours}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 font-bold uppercase text-xs tracking-wide"
                  >
                    <Navigation className="size-3.5 mr-1" />
                    Directions
                  </Button>
                  <Button size="sm" variant="outline" className="px-3">
                    <ExternalLink className="size-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map — fills full height of the left column */}
          <div className="self-stretch min-h-[320px] sm:min-h-[420px] w-full rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2 relative">
            <Map
              ref={mapRef}
              center={[activeLocation.lng, activeLocation.lat]}
              zoom={14}
              pitch={0}
              styles={
                selectedStyle
                  ? { light: selectedStyle, dark: selectedStyle }
                  : undefined
              }
              className="w-full h-full"
            >
              <MapControls
                position="bottom-right"
                showZoom
                showCompass
                showLocate
                showFullscreen
        />
              {/* Style switcher */}
              <div className="absolute top-2 right-2 z-10">
                <select
                  value={mapStyle}
                  onChange={(e) => setMapStyle(e.target.value as StyleKey)}
                  className="bg-background text-foreground rounded-md border px-2 py-1 text-sm shadow"
                >
                  <option value="default">Default</option>
                  <option value="openstreetmap">OpenStreetMap</option>
                  <option value="openstreetmap3d">3D View</option>
                </select>
              </div>

              <MissingImageHandler />

              {/* All markers */}
              {locations.map((loc) => (
                <MapMarker key={loc.id} longitude={loc.lng} latitude={loc.lat}>
                  <MarkerContent>
                    <button
                      onClick={() => setActiveId(loc.id)}
                      className={`
                        flex items-center justify-center size-7 rounded-full border-2 border-white shadow-md
                        font-black text-xs transition-all duration-200
                        ${
                          loc.id === activeId
                            ? "bg-primary text-primary-foreground scale-125"
                            : "bg-slate-800 text-white hover:scale-110"
                        }
                      `}
                    >
                      {loc.id}
                    </button>
                  </MarkerContent>
                  <MarkerPopup className="w-56 p-0">
                    <div className="relative h-24 overflow-hidden rounded-t-md">
                      <Image
                        fill
                        src={loc.image}
                        alt={loc.name}
                        sizes="224px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 space-y-1.5">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                        {loc.country}
                      </p>
                      <p className="font-bold text-foreground text-sm">
                        {loc.name}
                      </p>
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="size-3 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{loc.rating}</span>
                        <span className="text-muted-foreground">
                          ({loc.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </MarkerPopup>
                </MapMarker>
              ))}
            </Map>
          </div>
        </div>

        {/* ── 9 Location Cards — horizontal scroll ── */}
        <div className="mt-10 md:mt-14 -mx-4 px-4 overflow-x-auto pb-3">
          <div className="flex gap-4 w-max lg:w-full lg:grid lg:grid-cols-9">
            {locations.map((loc) => {
              const isActive = loc.id === activeId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className={`
                    group relative flex flex-col w-[160px] lg:w-auto rounded-2xl
                    overflow-hidden  text-left transition-all duration-300
                    ${isActive
                      ? " shadow-lg shadow-primary/15"
                      : " bg-white hover:border-primary/30 hover:shadow-md"
                    }
                  `}
                >
                  {/* Image */}
                  <div className="relative h-24 w-full shrink-0">
                    <Image
                      fill
                      src={loc.image}
                      alt={loc.city}
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 33vw, 11vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 ${isActive ? "bg-primary/30" : "bg-black/20 group-hover:bg-black/10"} transition-colors duration-300 `} />
                    {/* Number badge */}
                    <div className={`
                      absolute top-2 left-2 size-6 rounded-full flex items-center justify-center
                      text-[10px] font-black border-2 border-white shadow-sm
                      ${isActive ? "bg-primary text-primary-foreground" : "bg-white text-foreground"}
                    `}>
                      {loc.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-3 flex flex-col gap-1 ${isActive ? "bg-primary" : "bg-white"}`}>
                    <p className={`text-[11px] font-black uppercase tracking-tight leading-tight truncate
                      ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                      {loc.city}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className={`size-3 ${isActive ? "fill-white text-white" : "fill-amber-400 text-amber-400"}`} />
                      <span className={`text-[10px] font-bold ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                        {loc.rating}
                      </span>
                    </div>
                    <p className={`text-[9px] uppercase tracking-widest truncate
                      ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {loc.hours}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
