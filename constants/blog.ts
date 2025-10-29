export type CategoryColor = "blue" | "pink" | "green" | "purple" | "orange";

export interface PostCategory {
  title: string;
  slug: string;
  color: CategoryColor;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: number;
  isNew?: boolean;
  publishedAt?: string;
  imageEmoji?: string;
  categories?: PostCategory[];
}

export const BLOG_CATEGORIES: Array<{ title: string; slug: string; icon: string }> = [
  { title: "All", slug: "all", icon: "🏠" },
  { title: "Sexuality", slug: "sexuality", icon: "💑" },
  { title: "Breastfeeding", slug: "breastfeeding", icon: "🤱" },
  { title: "Mental", slug: "mental", icon: "🧠" },
];

export function getCategoryColor(color: CategoryColor) {
  const colors: Record<CategoryColor, { bg: string; text: string }> = {
    blue: { bg: "bg-[#4aa3b5]/20", text: "text-[#4aa3b5]" },
    pink: { bg: "bg-[#d97e81]/20", text: "text-[#d97e81]" },
    green: { bg: "bg-[#7aa89b]/20", text: "text-[#7aa89b]" },
    purple: { bg: "bg-[#8b6ab6]/20", text: "text-[#8b6ab6]" },
    orange: { bg: "bg-[#d9a441]/20", text: "text-[#d9a441]" },
  };
  return colors[color] || colors.blue;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "power-naps-for-moms",
    title: "Power Naps for Moms: The Guide",
    excerpt: "How to recharge in 10–15 minutes and gain mental clarity",
    readTime: 3,
    isNew: true,
    imageEmoji: "🧘‍♀️",
    publishedAt: "2025-01-10",
    categories: [{ title: "Mental", slug: "mental", color: "blue" }],
  },
  {
    slug: "couples-talking-again",
    title: "Couples: start talking again… for real",
    excerpt: '3 tools to avoid "roommate mode" and rebuild closeness',
    readTime: 6,
    isNew: true,
    imageEmoji: "💑",
    publishedAt: "2025-01-12",
    categories: [{ title: "Sexuality", slug: "sexuality", color: "pink" }],
  },
  {
    slug: "power-naps-2",
    title: "Power Naps for Moms: The Guide",
    excerpt: "How to recharge in 10–15 minutes and gain mental clarity",
    readTime: 3,
    isNew: true,
    imageEmoji: "🧘‍♀️",
    publishedAt: "2025-01-15",
    categories: [{ title: "Mental", slug: "mental", color: "blue" }],
  },
  {
    slug: "nutrition-tips",
    title: "Nutrition Tips for New Moms",
    excerpt: "Simple, balanced meals and hydration tips for daily energy",
    readTime: 4,
    isNew: true,
    imageEmoji: "🥗",
    publishedAt: "2025-01-18",
    categories: [{ title: "Breastfeeding", slug: "breastfeeding", color: "green" }],
  },
  {
    slug: "couples-talking-2",
    title: "Couples: start talking again… for real",
    excerpt: '3 tools to avoid "roommate mode" and rebuild closeness',
    readTime: 6,
    isNew: true,
    imageEmoji: "💑",
    publishedAt: "2025-01-20",
    categories: [{ title: "Sexuality", slug: "sexuality", color: "pink" }],
  },
  {
    slug: "nutrition-guide",
    title: "Nutrition Basics: A Simple Guide",
    excerpt: "Macros, micronutrients, and how to keep it realistic",
    readTime: 5,
    isNew: true,
    imageEmoji: "🥗",
    publishedAt: "2025-01-22",
    categories: [{ title: "Mental", slug: "mental", color: "blue" }],
  },
];

export function findPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 1): BlogPost[] {
  const current = findPostBySlug(slug);
  if (!current) return [];
  const sameCategorySlug = current.categories?.[0]?.slug;
  const candidates = BLOG_POSTS.filter((p) => p.slug !== slug);
  const prioritized = sameCategorySlug
    ? [
        ...candidates.filter((p) =>
          p.categories?.some((c) => c.slug === sameCategorySlug)
        ),
        ...candidates.filter(
          (p) => !p.categories?.some((c) => c.slug === sameCategorySlug)
        ),
      ]
    : candidates;
  return prioritized.slice(0, limit);
}

