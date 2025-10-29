"use client";

import { EXPERTS } from "@/constants/experts";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { CarouselNavigation } from "@/components/CarouselNavigation";
import { useTranslations } from "next-intl";

export function ExpertsSection() {
  const { api, setApi, current, count } = useCarousel();
  const t = useTranslations("experts");

  return (
    <section
      id="experts"
      className="py-16 lg:py-24 bg-[#f8f8f8] overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="text-center mb-16">
          <h2 className="font-chloe font-normal text-[40px] lg:text-[60px] text-[#1d1d1d] leading-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-[#95908e] text-lg font-medium">{t("subtitle")}</p>
        </div>

        <div className="mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6" classNameRef="overflow-visible">
              {EXPERTS.map((expert, index) => (
                <CarouselItem key={index} className="pl-6 basis-auto">
                  <div className="bg-white w-[384px] shrink-0 border border-[#efeeeb] rounded-3xl overflow-hidden shadow-sm p-6">
                    <div className="h-[312px] relative overflow-hidden mb-4 bg-gradient-to-br from-[#f6f4f4] to-[#e9e9e9] rounded-3xl">
                      <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <Image
                          src={expert.image}
                          alt={`${t(`${expert.translationKey}.name`)} portrait`}
                          fill
                          className="object-cover z-10"
                        />
                        <div
                          className="absolute inset-0 blur-3xl"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0), ${expert.background})`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[#1d1d1d] text-[22px] font-semibold">
                          {t(`${expert.translationKey}.name`)}
                        </h3>
                        <p className="text-[#d77f82] text-base font-semibold">
                          {t(`${expert.translationKey}.title`)}
                        </p>
                      </div>
                      <div className="border-t border-gray-200"></div>
                      <p className="text-[#3e3e3e] text-base italic leading-relaxed">
                        {t(`${expert.translationKey}.description`)}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <CarouselNavigation api={api} current={current} count={count} />
      </div>
    </section>
  );
}
