"use client";

import { useEffect, useState, RefObject } from "react";

interface TestimonialsBackgroundProps {
  navigationRef: RefObject<HTMLDivElement | null>;
}

export function TestimonialsBackground({
  navigationRef,
}: TestimonialsBackgroundProps) {
  const [backgroundWidth, setBackgroundWidth] = useState<number | null>(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (navigationRef.current) {
        const rect = navigationRef.current.getBoundingClientRect();
        const rightPosition = rect.right + 60; // Position droite + 60px
        setBackgroundWidth(rightPosition);
      }
    };

    // Calculer au montage
    calculateWidth();

    // Recalculer lors du resize
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [navigationRef]);

  return (
    <div
      className="absolute top-0 left-0 h-full bg-[#E4EEEB] rounded-tr-3xl rounded-br-3xl"
      style={{
        width: backgroundWidth ? `${backgroundWidth}px` : "83.333%",
      }}
    ></div>
  );
}