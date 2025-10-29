"use client";

import { type WhyFeatureCard } from "@/constants/features";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  index: number;
  feature: WhyFeatureCard;
  iconSize?: "sm" | "md";
}

export function FeatureCard({ index, feature, iconSize = "md" }: FeatureCardProps) {
  const t = useTranslations("why.features");

  return (
    <div className="bg-[#f8f8f8] group rounded-3xl p-6 relative overflow-hidden h-[275px] flex flex-col justify-between">
      <div>
        <h3 className="text-gray-900 text-[28px] font-semibold leading-tight mb-5">
          {t(`${feature.translationKey}.title`)}
        </h3>
        <p className="text-gray-600 text-lg font-medium leading-snug">
          {t(`${feature.translationKey}.description`)}
        </p>
      </div>
      <img
        src={feature.icon}
        alt={t(`${feature.translationKey}.title`)}
        className={cn(
          "absolute -bottom-10 -right-6 group-hover:scale-110 transition-transform",
          iconSize === "sm" ? "w-[100px]" : "w-[100px] md:w-[130px]",
          index === 2 && "-bottom-4 right-0"
        )}
      />
    </div>
  );
}
