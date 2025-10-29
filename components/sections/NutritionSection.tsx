"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NUTRITION_FEATURES } from "@/constants/nutrition";
import { useTranslations } from "next-intl";

type NutritionSlide = {
  image: string;
  activeFeature: number;
};

const NUTRITION_SLIDES: NutritionSlide[] = NUTRITION_FEATURES.map(
  (feature, i) => ({
    image: feature.image,
    activeFeature: i,
  })
);

export function NutritionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = NUTRITION_SLIDES;
  const features = NUTRITION_FEATURES;
  const t = useTranslations("nutrition");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentImages = slides[currentSlide];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="text-center mb-16">
          <h2 className="font-chloe font-normal text-[40px] lg:text-[60px] text-[#1d1d1d] leading-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-[#95908e] text-lg font-medium">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#f8f8f8] border border-gray-200 rounded-[36px] p-2 lg:p-6 flex items-center justify-center min-h-[350px] lg:min-h-[600px] relative overflow-visible">
            <button
              onClick={prevSlide}
              className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-[50px] lg:h-[50px] bg-[rgba(29,29,29,0.08)] hover:bg-[rgba(29,29,29,0.15)] rounded-full flex items-center justify-center transition-colors border border-[#efeeeb] z-20"
            >
              <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7" />
            </button>

            <div className="relative w-full h-[302px] lg:h-[550px]">
              <Image
                src={currentImages.image}
                alt="Feature image"
                fill
                className="object-contain transition-opacity duration-500"
                unoptimized
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-[50px] lg:h-[50px] bg-[#1d1d1d] hover:bg-black rounded-full flex items-center justify-center transition-colors z-20"
            >
              <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </button>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-full text-left rounded-3xl p-6 border transition-all duration-300 ${
                  currentImages.activeFeature === index
                    ? "bg-[#e4eeeb] border-[#cae0dd] shadow-sm"
                    : "bg-white border-[#f1ede2] shadow-sm hover:border-[#cae0dd] hidden lg:block"
                }`}
              >
                <h3 className="text-gray-900 text-[22px] font-semibold leading-[32px] mb-[15px]">
                  {t.rich(`features.${feature.translationKey}.title`, {
                    highlight: (chunks) => (
                      <span className="text-[#d77f82]">{chunks}</span>
                    ),
                  })}
                </h3>
                <p className="text-black/50 text-base leading-snug">
                  {t(`features.${feature.translationKey}.description`)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
