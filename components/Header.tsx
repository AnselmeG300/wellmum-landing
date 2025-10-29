"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { StoreButton } from "./StoreButton";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "@/constants/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("navigation");

  const desktopLinks = NAV_LINKS.filter((link) =>
    ["ourStory", "blog", "contact"].includes(link.key)
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px]">
          <div className="flex items-center justify-between py-4 gap-6">
            <Logo />

            <nav className="hidden lg:flex items-center gap-6 text-[#3e3e3e] font-normal">
              {desktopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#d77f82] transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <StoreButton store="appstore" />
              <StoreButton store="playstore" />
            </div>

            <div className="flex lg:hidden items-center gap-2.5">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-9 h-9 bg-[#e5989b] rounded-full flex items-center justify-center"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
