"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const cards = [
  {
    icon: "/images/OurStory/1.svg",
    key: "card1",
  },
  {
    icon: "/images/OurStory/2.svg",
    key: "card2",
  },
  {
    icon: "/images/OurStory/3.svg",
    key: "card3",
  },
];

export function OurStoryCards() {
  const t = useTranslations("ourStory.cards");
  return (
    <section className="py-12 lg:py-[60px] bg-white">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[24px] p-6 relative overflow-hidden min-h-[296px] flex flex-col gap-5"
            >
              <h3 className="text-[#1d1d1d] text-[22px] font-semibold leading-[1.35]">
                {t(`${card.key}.title`)}
              </h3>
              <p className="text-[#95908e] text-[16px] font-normal leading-[1.35]">
                {t(`${card.key}.description`)}
              </p>

              {/* Icon positioned at bottom right */}
              <div className="absolute -right-6 -bottom-6 w-[135px] h-[135px]">
                <Image
                  src={card.icon}
                  alt={t(`${card.key}.title`)}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
