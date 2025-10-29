"use client";

import Image from "next/image";
import { Quote } from "@/components/icons/quote";
import { useTranslations } from "next-intl";

export function FoundersMessage() {
  const t = useTranslations("ourStory.founders");
  return (
    <section className="py-12 lg:py-[60px] bg-[#f8f8f8]">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="flex flex-col gap-10">
          <h2 className="font-chloe font-normal text-[48px] lg:text-[60px] leading-[normal] text-[#1d1d1d] text-left">
            {t("title")}
          </h2>

          <div className="bg-white border border-[#efeeeb] rounded-[24px] p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-start">
            {/* Founders images */}
            <div className="flex items-center justify-center lg:justify-start gap-0 shrink-0 mx-auto lg:mx-0">
              <div className="relative w-[140px] h-[140px] lg:w-[170px] lg:h-[170px] rounded-full border-8 border-white -mr-8 lg:-mr-[41px] z-10 overflow-hidden bg-[#f5f5f5]">
                <Image
                  src="/images/OurStory/founder-1.png"
                  alt="Sarah, WellMum Co-Founder"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative w-[140px] h-[140px] lg:w-[170px] lg:h-[170px] rounded-full border-8 border-white overflow-hidden bg-[#f5f5f5]">
                <Image
                  src="/images/OurStory/founder-2.png"
                  alt="Manuela, WellMum Co-Founder"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Message content */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex gap-2 lg:gap-[10px] items-start">
                <div className="shrink-0 w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] text-[#CAE0DD] rotate-180 scale-y-[-1]">
                  <Quote className="w-full h-full" />
                </div>
                <p className="flex-1 text-[#3e3e3e] text-[16px] lg:text-[18px] font-medium leading-[1.35]">
                  {t("quote")}
                </p>
                <div className="shrink-0 w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] text-[#CAE0DD]">
                  <Quote className="w-full h-full" />
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#efeeeb]" />

              <p className="text-[#1d1d1d] text-[20px] lg:text-[22px] font-semibold leading-[1.35]">
                {t("signature")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
