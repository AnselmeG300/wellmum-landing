"use client";

import { NUTRITION_FEATURES } from "@/constants/nutrition";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function FeaturesList() {
  const features = NUTRITION_FEATURES;
  const t = useTranslations("nutrition");

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full rounded-3xl p-6 border bg-white border-[#f1ede2] shadow-sm flex justify-between items-center"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-900 text-[22px] font-semibold leading-[32px]">
              {t.rich(`features.${feature.translationKey}.title`, {
                highlight: (chunks) => (
                  <span className="text-[#d77f82]">{chunks}</span>
                ),
              })}
            </h3>
            <p className="text-black/50 text-base leading-snug">
              {t(`features.${feature.translationKey}.description`)}
            </p>
          </div>
          <Image
            src={`/images/NutritionSection/${index + 1}.png`}
            alt="Feature image"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
