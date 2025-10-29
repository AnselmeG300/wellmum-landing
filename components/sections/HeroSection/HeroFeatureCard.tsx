"use client";

import Image from "next/image";
import parse from "html-react-parser";
import { type HeroFeature } from "@/constants/hero";
import { useTranslations } from "next-intl";

interface HeroFeatureCardProps {
  feature: HeroFeature;
}

export function HeroFeatureCard({ feature }: HeroFeatureCardProps) {
  const t = useTranslations("hero.features");

  return (
    <div className="rounded-[36px] flex flex-col items-start justify-between border border-[#EFEEEB] p-6 h-[345px] w-full relative overflow-hidden group">
      <Image
        src={feature.image}
        alt={t(`${feature.translationKey}.badge`)}
        width={384}
        height={384}
        className="absolute object-cover size-full inset-0 group-hover:scale-110 transition-transform duration-300"
      />
      <div
        className={`absolute -left-[66px] -bottom-[84px] w-96 h-38 rounded-full ${feature.blurColor} blur-3xl`}
      ></div>
      <button className="bg-white border border-[#efeeeb] rounded-[32px] px-[18px] py-2 text-lg font-medium text-[#1d1d1d] self-start z-10">
        {t(`${feature.translationKey}.badge`)}
      </button>
      <p className="text-white text-xl font-semibold z-10">
        {parse(t(`${feature.translationKey}.description`))}
      </p>
    </div>
  );
}
