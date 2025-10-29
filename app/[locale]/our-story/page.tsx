import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OurStoryHero } from "@/components/sections/OurStorySection/OurStoryHero";
import { OurStoryCards } from "@/components/sections/OurStorySection/OurStoryCards";
import { FoundersMessage } from "@/components/sections/OurStorySection/FoundersMessage";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ourStory" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function OurStory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <OurStoryHero />
        <OurStoryCards />
        <FoundersMessage />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
