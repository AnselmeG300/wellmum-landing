"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Search } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogPost } from "@/constants/blog";
import { BlogCard } from "@/components/BlogCard";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("blog");

  const filteredPosts = BLOG_POSTS.filter((post: BlogPost) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.categories?.some((cat) => cat.slug === selectedCategory);
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px] py-8 lg:py-16">
        <h1 className="font-chloe font-normal text-left text-[40px] lg:text-[60px] text-[#1d1d1d] leading-tight mb-8 lg:mb-10">
          {t("pageTitle")}
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-8 lg:mb-12">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide lg:flex-wrap">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`flex items-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 rounded-2xl text-base lg:text-lg font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category.slug
                    ? "bg-[#e4eeeb] text-[#7aa89b]"
                    : "bg-[#f0f0f0] text-[#95908e] hover:bg-[#e4eeeb]"
                }`}
              >
                <span className="text-lg lg:text-xl">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full lg:flex-1 lg:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-[#efeeeb] bg-white rounded-2xl text-sm lg:text-base text-[#95908e] placeholder:text-[#95908e] focus:outline-none focus:ring-2 focus:ring-[#7aa89b] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#95908e]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={`${post.slug}-${index}`}
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
      </div>

      <Footer />
    </main>
  );
}
