import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
  store: "appstore" | "playstore";
  variant?: "light" | "dark";
  className?: string;
}

export function StoreButton({
  store,
  variant = "dark",
  className,
}: StoreButtonProps) {
  const logoSrc =
    store === "appstore"
      ? variant === "dark"
        ? "/logos/app-store.svg"
        : "/logos/app-store-white.svg"
      : variant === "dark"
        ? "/logos/play-store.svg"
        : "/logos/play-store-white.svg";

  const storeUrl =
    store === "appstore"
      ? "https://apps.apple.com"
      : "https://play.google.com";

  return (
    <a
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block hover:opacity-80 transition-opacity shrink-0",
        className
      )}
    >
      <Image
        src={logoSrc}
        alt={store === "appstore" ? "Download on App Store" : "Get it on Google Play"}
        width={120}
        height={40}
        className="h-full w-full"
      />
    </a>
  );
}
