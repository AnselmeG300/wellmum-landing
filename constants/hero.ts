export interface HeroFeature {
  id: number;
  image: string;
  blurColor: string;
  translationKey: string;
}

export const HERO_FEATURES: HeroFeature[] = [
  {
    id: 1,
    image: "/images/HeroSection/1.png",
    blurColor: "bg-[#D77F82]",
    translationKey: "feature1",
  },
  {
    id: 2,
    image: "/images/HeroSection/2.png",
    blurColor: "bg-[#8B6AB6]",
    translationKey: "feature2",
  },
  {
    id: 3,
    image: "/images/HeroSection/3.png",
    blurColor: "bg-[#568B7C]",
    translationKey: "feature3",
  },
];
