"use client";

import { STATS } from "@/constants/stats";
import { useTranslations } from "next-intl";

export function StatsSection() {
  const t = useTranslations("stats");
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="bg-[#F7E3E380] rounded-3xl p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center first:pb-6 first:pt-0 last:pt-6 last:pb-0 py-6 md:py-0 md:pt-0 md:first:pb-0 md:last:pt-0 gap-4 border-[#F3CDCD] border-b md:border-r md:border-b-0 last:border-0"
              >
                <div className="text-[#e5989b] text-[42px] font-bold leading-tight">
                  {stat.value}
                </div>
                <div className="text-[#3e3e3e] text-lg font-medium">
                  {t(stat.translationKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
