"use client";

import { StoreButton } from "../StoreButton";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function DownloadSection() {
  const t = useTranslations("consultation");
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="relative p-6 lg:h-[337px] rounded-[32px] overflow-hidden bg-[#e3e2d8] flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="lg:h-[381px]">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/Wellmum-QRCode.png"
                alt="WellMum QR Code"
                className="object-cover w-60 rounded-2xl"
                priority
                width={670}
                height={371}
              />
            </div>
          </div>

          {/* <div className="absolute left-[-179px] bottom-[117px] w-[282.62px] h-[169.366px] rotate-[36.837deg] rounded-[282.62px] opacity-80 bg-[#D77F82] blur-[65px] lg:left-[-106px] lg:bottom-[-122px] lg:w-[454px] lg:h-[199px] lg:rotate-0 lg:rounded-[454px]" /> */}

          <div className="">
            <div className="backdrop-blur-[50px] bg-white/60 rounded-[24px] p-4 lg:p-6 shadow-sm">
              <div className="flex flex-col gap-5 mb-10">
                <h2 className="text-[#1d1d1d] text-[32px] font-semibold leading-[32px]">
                  {t("title")}
                </h2>
                <p className="text-[#95908e] text-[18px] lg:text-[20px] font-medium leading-[1.35]">
                  {t("description")}
                </p>
              </div>
              <div className="flex gap-[7px]">
                <StoreButton store="appstore" />
                <StoreButton store="playstore" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
