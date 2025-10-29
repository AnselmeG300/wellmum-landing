"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonProps {
  slug: string;
}

export function ShareButton({ slug }: ShareButtonProps) {
  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Lien copié dans le presse-papier !");
    } catch (error) {
      toast.error("Erreur lors de la copie du lien");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-[#7aa89b] text-white px-6 py-2.75 rounded-2xl font-semibold text-sm hover:bg-[#6a9a8b] transition-colors flex items-center gap-2"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}
