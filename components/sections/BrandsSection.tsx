"use client";

import { BRANDS } from "@/constants/brands";
import { useTranslations } from "next-intl";

export function BrandsSection() {
  const t = useTranslations("brands");

  return (
    <section className="py-10">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <p className="text-center text-[#1d1d1d] text-lg mb-8">{t("title")}</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {BRANDS.map((brand, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-2xl px-6 py-3 min-h-[56px] flex items-center justify-center"
            >
              <span className="text-[#a5aab3] font-semibold text-xl lg:text-3xl whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
