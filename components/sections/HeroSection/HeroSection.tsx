"use client";

import { Star, Play } from "lucide-react";
import Image from "next/image";
import { HERO_FEATURES } from "@/constants/hero";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { CarouselNavigation } from "@/components/CarouselNavigation";
import { HeroFeatureCard } from "./HeroFeatureCard";

export function HeroSection() {
  const { api, setApi, current, count } = useCarousel();
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px] pb-10 lg:pb-20 pt-6 flex flex-col items-center gap-8">
        <div className="w-full bg-[#F8F8F8] rounded-[36px] border border-[#f0f0f0] overflow-hidden">
          <div className="relative flex flex-col lg:flex-row items-center gap-10 p-8 lg:py-10 lg:px-12">
            <div className="flex-1 z-10">
              <div className="mb-10">
                <h1 className="font-chloe font-normal text-[40px] lg:text-[70px] leading-[1] text-[#1d1d1d] mb-6">
                  {t.rich("title", {
                    highlight: (chunks) => (
                      <span className="text-[#d77f82]">{chunks}</span>
                    ),
                  })}
                </h1>
                <p className="text-[#95908e] text-base lg:text-xl font-medium leading-relaxed max-w-2xl">
                  {t("description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#pricing"
                  className="bg-[#7aa89b] text-white rounded-2xl text-center px-8 py-3.5 text-lg font-semibold hover:bg-[#6a9a8b] transition-colors shrink-0"
                >
                  {t("startForFree")}
                </Link>
                <Link
                  href="#testimonials"
                  className="bg-[#e4eeeb] text-[#7aa89b] rounded-2xl px-8 py-3.5 text-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#d4dfe1] transition-colors shrink-0"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center bg-[#7aa89b] shrink-0">
                    <Play className="size-5 fill-[#d4dfe1] ml-0.5" />
                  </div>
                  {t("seeTestimonials")}
                </Link>
              </div>
            </div>

            <div className="flex-1 relative w-full lg:w-auto">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/images/HeroSection/image.svg"
                  alt="WellMum Hero"
                  className="object-cover size-full absolute inset-0"
                  width={787}
                  height={525}
                  priority
                />

                <div className="absolute bottom-8 left-4 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-[#8b6ab6] text-3xl font-bold">
                      24/7
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-[#1d1d1d]">
                        {t("support")}
                      </div>
                      <div className="text-[#95908e]">{t("aiCoach")}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-44 right-4 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-[#4aa3b5] text-3xl font-bold">12</div>
                    <div className="text-sm">
                      <div className="font-medium text-[#1d1d1d]">
                        {t("weeks")}
                      </div>
                      <div className="text-[#95908e]">{t("programme")}</div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-white/90 rounded-full px-4 py-2.5 shadow-sm absolute top-0 right-0">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-[18px] h-[18px] text-yellow-300 fill-yellow-300 -ml-1 first:ml-0"
                      />
                    ))}
                  </div>
                  <span className="text-[#3e3e3e] text-sm lg:text-base">
                    {t("recommendedBy")}{" "}
                    <span className="font-semibold text-[#d77f82]">500+</span>{" "}
                    {t("mums")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* HERO FEATURES */}

        {/* Version Desktop */}
        {/* <div className="hidden md:grid w-full grid-cols-1 md:grid-cols-3 gap-6">
          {HERO_FEATURES.map((feature) => (
            <HeroFeatureCard key={feature.id} feature={feature} />
          ))}
        </div> */}

        {/* Version Mobile - Carrousel */}
        {/* <div className="md:hidden w-full">
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
                {HERO_FEATURES.map((feature) => (
                  <CarouselItem key={feature.id} className="pl-4 basis-full">
                    <HeroFeatureCard feature={feature} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <CarouselNavigation api={api} current={current} count={count} />
        </div> */}
      </div>
    </section>
  );
}
