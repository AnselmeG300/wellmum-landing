"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function OurStoryHero() {
  const t = useTranslations("ourStory.hero");
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#ffd4e5] via-[#ffd4e5] to-[#e8d4f0]">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px] py-10 lg:py-[40px] relative">
        {/* Decorative ellipses */}
        <div className="absolute right-[120px] top-0 w-[309px] h-[165px] rotate-[90.172deg] opacity-20 pointer-events-none hidden lg:block">
          <div className="w-full h-full rounded-full bg-[#d77f82] blur-[50px]" />
        </div>
        <div className="absolute right-0 top-[-20px] w-[108px] h-[91px] rotate-[90.172deg] opacity-20 pointer-events-none hidden lg:block">
          <div className="w-full h-full rounded-full bg-[#d77f82] blur-[30px]" />
        </div>

        {/* Main image - positioned absolutely on desktop */}
        <div className="hidden lg:block absolute right-[30px] top-1/2 -translate-y-1/2 w-[520px] h-[289px] z-10">
          <Image
            src="/images/OurStory/image.png"
            alt="WellMum mothers"
            fill
            className="object-cover object-center rounded-[24px]"
            priority
          />
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-10 relative z-20">
          <h1 className="font-chloe font-normal text-[48px] lg:text-[60px] leading-[48px] text-[#1d1d1d] text-center lg:text-left">
            {t("title")}
          </h1>

          <div className="flex flex-col gap-4 w-full lg:w-[741px]">
            <p className="text-[16px] lg:text-[18px] font-medium text-[rgba(0,0,0,0.5)] leading-[1.35] text-center lg:text-left">
              {t("paragraph1")}
            </p>
            <p className="text-[16px] lg:text-[18px] font-medium text-[rgba(0,0,0,0.5)] leading-[1.35] text-center lg:text-left">
              {t("paragraph2")}
            </p>
          </div>

          <Image
            src="/images/OurStory/image.png"
            alt="WellMum mothers"
            width={520}
            height={289}
            className="object-cover w-full lg:hidden"
            priority
          />
        </div>
      </div>
    </section>
  );
}
