"use client";

import { cn } from "@/lib/utils";
import { motion, LayoutGroup } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ShuffleHero = ({
  subtitle = "Better every day",
  title = "Let's change it up a bit",
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error repellat voluptatibus ad.",
}: {
  subtitle?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          {subtitle}
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight">
          {title}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6 leading-relaxed">
          {description}
        </p>
        <button
          className={cn(
            "bg-primary text-primary-foreground font-medium py-2 px-6 rounded-md",
            "transition-all hover:bg-primary/90 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          View More
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

// Fisher-Yates shuffle — returns a new array, never mutates
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// 16 items to fill the 4×4 grid perfectly
const squareData = [
  { id: 1,  src: "/images/brands/MAN.png" },
  { id: 2,  src: "/images/brands/Peterbilt.png" },
  { id: 3,  src: "/images/brands/Scania.png" },
  { id: 4,  src: "/images/brands/Volvo.png" },
  { id: 5,  src: "/images/brands/Western.png" },
  { id: 6,  src: "/images/brands/ford.png" },
  { id: 7,  src: "/images/brands/honda.png" },
  { id: 8,  src: "/images/brands/tesla.png" },
  { id: 9,  src: "/images/brands/DAF.png" },
  { id: 10, src: "/images/brands/Freightliner.png" },
  { id: 11, src: "/images/brands/Hino.png" },
  { id: 12, src: "/images/brands/Mercedes.png" },
];

export const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  // Initialize with the original order — no shuffle on SSR to avoid hydration mismatch
  const [items, setItems] = useState(squareData);

  useEffect(() => {
    const tick = () => {
      if (!isHoveredRef.current) {
        // Shuffle only the order; keys stay the same so Framer Motion animates positions
        setItems((prev) => shuffleArray(prev));
      }
      timeoutRef.current = setTimeout(tick, 5000);
    };

    timeoutRef.current = setTimeout(tick, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []); // ← runs ONCE on mount; isHoveredRef is read inside the closure without causing re-runs

  return (
    <LayoutGroup>
      {/* overflow-anchor: none prevents the browser's scroll anchoring
          algorithm from jumping the page when Framer Motion repositions cards */}
      <div
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        className="grid grid-cols-4 gap-2 md:gap-4 cursor-pointer"
        style={{ overflowAnchor: "none" }}
      >
        {items.map((sq) => (
          <motion.div
            key={sq.id}
            layoutId={`brand-${sq.id}`}
            transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
            className="aspect-square w-full rounded-xl overflow-hidden bg-white border border-slate-100 p-3 md:p-5"
            style={{
              backgroundImage: `url(${sq.src})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              overflowAnchor: "none",
            }}
          />
        ))}
      </div>
    </LayoutGroup>
  );
};
