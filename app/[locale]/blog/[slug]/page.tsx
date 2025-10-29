import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  findPostBySlug,
  getRelatedPosts,
  getCategoryColor,
} from "@/constants/blog";
import { ShareButton } from "@/components/ShareButton";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = findPostBySlug(slug);
  const t = await getTranslations({ locale, namespace: "metadata.blogPost" });

  if (!post) {
    return {
      title: t("titleTemplate").replace("%s", "Article Not Found"),
      description: t("defaultDescription"),
    };
  }

  return {
    title: t("titleTemplate").replace("%s", post.title),
    description: post.excerpt || t("defaultDescription"),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return notFound();
  const relatedPosts = getRelatedPosts(slug, 1);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="max-w-[1480px] mx-auto px-4 lg:px-[120px] py-12 lg:py-16">
        {/* Header with image and content side by side */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          {/* Image */}
          <div className="w-full lg:w-[584px] h-[200px] lg:h-[303px] rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center text-6xl lg:text-8xl shrink-0">
            💑
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Tags */}
            <div className="flex gap-[7px] flex-wrap">
              {post.isNew && (
                <div className="bg-[#f8f8f8] px-4 py-2.5 rounded-3xl">
                  <span className="text-[#d9a441] text-base font-normal">
                    New
                  </span>
                </div>
              )}
              {post.categories?.map((cat) => {
                const colors = getCategoryColor(cat.color);
                return (
                  <div
                    key={cat.slug}
                    className="bg-[#f8f8f8] px-4 py-2.5 rounded-3xl"
                  >
                    <span className={`${colors.text} text-base font-normal`}>
                      {cat.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Title and excerpt */}
            <div className="flex flex-col justify-between flex-1">
              <h1 className="font-chloe font-normal text-[35px] lg:text-[45px] text-[#1d1d1d] leading-[1.067] mb-4">
                {post.title}
              </h1>

              <div className="flex flex-col gap-4 text-base text-black/40 leading-[1.35]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="flex flex-col gap-4 text-base text-black/40 leading-[1.35] mb-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
            augue.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            Nullam quis imperdiet augue.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
            augue.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </p>
        </div>

        {/* Bottom section with likes, comments, share and read next */}
        <div className="flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-gray-200">
          <ShareButton slug={slug} />

          {relatedPosts.length > 0 && (
            <Link
              href={`/blog/${relatedPosts[0].slug}`}
              className="bg-[#f8f8f8] border border-[#efeeeb] rounded-2xl px-3 py-2.5 flex items-center gap-[30px] hover:border-gray-300 transition-colors group"
            >
              <div className="flex items-center gap-2 font-semibold text-base">
                <span className="text-[#e5989b]">Read next:</span>
                <span className="text-[#1d1d1d] group-hover:text-[#d77f82] transition-colors">
                  {relatedPosts[0].title}
                </span>
              </div>
              <div className="ml-auto flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-[#1d1d1d]" />
              </div>
            </Link>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
