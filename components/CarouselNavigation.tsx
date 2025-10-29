import { ChevronLeft, ChevronRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";

interface CarouselNavigationProps {
  api: CarouselApi | undefined;
  current: number;
  count: number;
  variant?: "default" | "green";
}

export function CarouselNavigation({
  api,
  current,
  count,
  variant = "default",
}: CarouselNavigationProps) {
  const isGreen = variant === "green";

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={() => api?.scrollPrev()}
        disabled={!api?.canScrollPrev()}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
          isGreen
            ? "bg-[#CAE0DD] hover:bg-[#b8d4d0] border-[#CAE0DD]"
            : "bg-black/5 hover:bg-black/10 border-[#efeeeb]"
        }`}
      >
        <ChevronLeft className={`w-6 h-6 ${isGreen ? "text-[#7aa89b]" : ""}`} />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 rounded-full transition-all ${
              index === current
                ? "w-10 bg-[#1d1d1d]"
                : isGreen
                ? "w-3 bg-[#CAE0DD]"
                : "w-3 bg-[#efeeeb]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => api?.scrollNext()}
        disabled={!api?.canScrollNext()}
        className="w-12 h-12 bg-[#1d1d1d] hover:bg-black rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
