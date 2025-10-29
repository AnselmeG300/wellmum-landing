"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testimonials";
import { Quote } from "@/components/icons/quote";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { CarouselNavigation } from "@/components/CarouselNavigation";
import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useTranslations } from "next-intl";
import { TestimonialsBackground } from "./TestimonialsBackground";

export function TestimonialsSection() {
  const { api, setApi, current, count } = useCarousel();
  const navigationRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="py-8 lg:py-12 mb-16 lg:mb-32 mt-8 lg:mt-16 overflow-hidden relative"
    >
      {isDesktop && <TestimonialsBackground navigationRef={navigationRef} />}
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px] grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20">
        {/* Header Section */}
        <div className="flex flex-col gap-10 bg-[#E4EEEB] lg:bg-transparent rounded-4xl p-6 lg:p-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <div className="inline-flex">
                <div className="bg-[#cae0dd] rounded-full px-4 py-2.5">
                  <p className="text-[#7aa89b] text-base font-semibold leading-[1.35]">
                    {t("badge")}
                  </p>
                </div>
              </div>
              <h2 className="font-chloe font-normal text-[40px] lg:text-[45px] text-[#1d1d1d] leading-tight">
                {t("title")}
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-black/50 text-base leading-[1.35]">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
            </div>
          </div>
          <Link
            href="/our-story"
            className="inline-flex items-center justify-center bg-[#1d1d1d] text-white rounded-2xl px-8 py-4 text-lg font-semibold hover:bg-black transition-colors w-fit"
          >
            {t("readOurStory")}
          </Link>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="mb-8">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent
                className="-ml-6"
                classNameRef="overflow-visible"
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem
                    key={testimonial.translationKey}
                    className="pl-6 basis-auto transition-opacity duration-500"
                    style={{ opacity: isDesktop && index < current ? 0 : 1 }}
                  >
                    <div
                      className="bg-white border border-[#efeeeb] rounded-3xl p-6 flex flex-col gap-4 w-96 shrink-0"
                      style={{
                        boxShadow: "4px 6px 10px 0 rgba(184, 195, 191, 0.30)",
                      }}
                    >
                      <div className="flex flex-col gap-4 h-[188px]">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex gap-1.5 items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-6 h-6 text-[#F8E48E] fill-[#F8E48E]"
                              />
                            ))}
                          </div>
                          <Quote className="text-[#CAE0DD]" />
                        </div>

                        <p className="text-[#3e3e3e] text-lg italic leading-[28px]">
                          {t(`items.${testimonial.translationKey}.quote`)}
                        </p>
                      </div>

                      <div className="h-[1px] bg-[#efeeeb] w-full"></div>

                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center text-2xl">
                          {testimonial.image}
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-[#1d1d1d] text-base font-semibold leading-[1.35]">
                            {t(`items.${testimonial.translationKey}.author`)}
                          </p>
                          <p className="text-[#d77f82] text-sm leading-[20px]">
                            {t(`items.${testimonial.translationKey}.role`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div ref={navigationRef}>
            <CarouselNavigation
              api={api}
              current={current}
              count={count}
              variant="green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
