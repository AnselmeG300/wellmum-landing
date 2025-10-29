"use client";

import { Link } from "@/i18n/routing";
import { Clock } from "lucide-react";
import { getCategoryColor, type CategoryColor } from "@/constants/blog";

interface BlogCardProps {
  slug?: string;
  title: string;
  excerpt: string;
  readTime: number | string;
  image?: string;
  isNew?: boolean;
  categories?: Array<{
    title: string;
    slug: string;
    color: CategoryColor;
  }>;
  asLink?: boolean;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  readTime,
  image = "📝",
  isNew,
  categories,
  asLink = true,
}: BlogCardProps) {
  const content = (
    <article className="bg-white border border-[#efeeeb] rounded-3xl overflow-hidden">
      <div className="relative h-[180px] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {image}
        </div>

        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <span className="bg-white/80 backdrop-blur-sm text-[#d9a441] text-sm font-semibold px-3 py-1.5 rounded-3xl">
              New
            </span>
          )}
          {categories?.map((cat) => {
            const colors = getCategoryColor(cat.color);
            return (
              <span
                key={cat.slug}
                className={`bg-white/80 backdrop-blur-sm ${colors.text} text-sm font-semibold px-3 py-1.5 rounded-3xl`}
              >
                {cat.title}
              </span>
            );
          })}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="bg-white border border-[#efeeeb] rounded-3xl px-3 py-1.5 inline-flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span className="text-[#3e3e3e] text-base">
            {typeof readTime === "number" ? `${readTime} min` : readTime}
          </span>
        </div>
        <h3 className="text-[#1d1d1d] text-[22px] font-semibold leading-tight group-hover:text-[#d77f82] transition-colors">
          {title}
        </h3>
        <p className="text-black/40 text-lg font-semibold leading-snug">
          {excerpt}
        </p>
      </div>
    </article>
  );

  if (asLink && slug) {
    return (
      <Link href={`/blog/${slug}`} className="group">
        {content}
      </Link>
    );
  }

  return <div className="group">{content}</div>;
}
