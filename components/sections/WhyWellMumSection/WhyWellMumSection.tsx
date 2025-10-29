"use client";

import { WHY_FEATURES } from "@/constants/features";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { FeatureCard } from "./FeatureCard";
import { CarouselNavigation } from "@/components/CarouselNavigation";
import { useTranslations } from "next-intl";

export function WhyWellMumSection() {
  const { api, setApi, current, count } = useCarousel();
  const t = useTranslations("why");

  // Grouper les features par 3 pour mobile
  const groupedFeatures = [];
  for (let i = 0; i < WHY_FEATURES.length; i += 3) {
    groupedFeatures.push(WHY_FEATURES.slice(i, i + 3));
  }

  return (
    // py-16 lg:py-24
    <section id="why" className="pb-16 lg:pb-24 pt-4 lg:pt-8">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="text-center mb-16">
          <h2 className="font-chloe font-normal text-[40px] lg:text-[60px] text-[#1d1d1d] leading-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-[#95908e] text-lg font-medium">{t("subtitle")}</p>
        </div>

        {/* Version Desktop */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {WHY_FEATURES.map((feature, index) => (
            <FeatureCard key={index} index={index} feature={feature} />
          ))}
        </div>

        {/* Version Mobile - Carrousel par groupe de 3 */}
        <div className="lg:hidden">
          <div className="mb-8">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {groupedFeatures.map((group, groupIndex) => (
                  <CarouselItem key={groupIndex} className="pl-4 basis-full">
                    <div className="flex flex-col gap-5">
                      {group.map((feature, index) => (
                        <FeatureCard
                          key={index}
                          index={index}
                          feature={feature}
                          iconSize="sm"
                        />
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <CarouselNavigation api={api} current={current} count={count} />
        </div>
      </div>
    </section>
  );
}
