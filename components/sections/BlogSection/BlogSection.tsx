"use client";

import { BLOG_POSTS } from "@/constants/blog";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { CarouselNavigation } from "@/components/CarouselNavigation";
import { BlogCard } from "@/components/BlogCard";

export function BlogSection() {
  const { api, setApi, current, count } = useCarousel();
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const t = useTranslations("blog");

  return (
    <section id="blog" className="pt-16 pb-6 lg:pt-24 lg:pb-8">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-chloe font-normal text-[40px] lg:text-[60px] text-[#1d1d1d] leading-tight">
            {t("title")}
          </h2>
          <Link
            href="/blog"
            className="bg-[#e4eeeb] text-[#7aa89b] rounded-2xl px-8 py-4 text-lg font-semibold hover:bg-[#d4dfe1] transition-colors"
          >
            {t("subtitle")}
          </Link>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              readTime={post.readTime}
              image={
                post.imageEmoji ??
                (index % 3 === 0 ? "🧘‍♀️" : index % 3 === 1 ? "💑" : "🥗")
              }
              isNew={post.isNew}
              categories={post.categories}
            />
          ))}
        </div>

        {/* Version Mobile - Carrousel */}
        <div className="md:hidden">
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
                {featuredPosts.map((post, index) => (
                  <CarouselItem key={post.slug} className="pl-4 basis-full">
                    <BlogCard
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      readTime={post.readTime}
                      image={
                        post.imageEmoji ??
                        (index % 3 === 0 ? "🧘‍♀️" : index % 3 === 1 ? "💑" : "🥗")
                      }
                      isNew={post.isNew}
                      categories={post.categories}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <CarouselNavigation api={api} current={current} count={count} />
        </div>
      </div>
    </section>
  );
}
