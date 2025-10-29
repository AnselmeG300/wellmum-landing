import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JoinBetaForm } from "@/components/JoinBetaForm";
import { FeaturesList } from "@/components/FeaturesList";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.joinBeta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function JoinBetaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <section className="pb-16 lg:pb-24 pt-8 lg:pt-12">
          <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Features List - Left Side */}
              <div className="order-2 lg:order-1">
                <FeaturesList />
              </div>

              {/* Form - Right Side */}
              <div className="order-1 lg:order-2 flex justify-center">
                <JoinBetaForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
