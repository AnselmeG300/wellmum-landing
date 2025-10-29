import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { WhyWellMumSection } from "@/components/sections/WhyWellMumSection/WhyWellMumSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { NutritionSection } from "@/components/sections/NutritionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { BlogSection } from "@/components/sections/BlogSection/BlogSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        {/* <BrandsSection /> */}
        <WhyWellMumSection />
        {/* <StatsSection /> */}
        <NutritionSection />
        <TestimonialsSection />
        <ExpertsSection />
        <BlogSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
