"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "/images/brands/DAF.png" },
  { id: 2, src: "/images/brands/Freightliner.png" },
  { id: 3, src: "/images/brands/Hino.png" },
  { id: 4, src: "/images/brands/MAN.png" },
  { id: 5, src: "/images/brands/Mercedes.png" },
  { id: 6, src: "/images/brands/Peterbilt.png" },
  { id: 7, src: "/images/brands/Scania.png" },
  { id: 8, src: "/images/brands/Volvo.png" },
  { id: 9, src: "/images/brands/Western.png" },
  { id: 10, src: "/images/brands/ford.png" },
  { id: 11, src: "/images/brands/honda.png" },
  { id: 12, src: "/images/brands/tesla.png" },
];

const generateSquares = (data: typeof squareData, shouldShuffle = true) => {
  const displayData = shouldShuffle ? shuffle([...data]) : data;
  return displayData.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="aspect-square w-full rounded-xl overflow-hidden bg-white border border-slate-100 p-3 md:p-5 flex items-center justify-center"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  // Initialize with false to prevent Math.random() mismatch during hydration
  const [squares, setSquares] = useState(generateSquares(squareData, false));

  const shuffleSquares = () => {
    if (!isHovered) {
      setSquares(generateSquares(squareData));
    }
    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid grid-cols-4 gap-2 md:gap-4 cursor-pointer"
    >
      {squares.map((sq) => sq)}
    </div>
  );
};
