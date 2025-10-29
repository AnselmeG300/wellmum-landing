"use client";

import { useEffect } from "react";
import { Menu, ChevronRight } from "lucide-react";
import { StoreButton } from "./StoreButton";
import { NAV_LINKS } from "@/constants/navigation";
import { Logo } from "./Logo";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-0 bg-[#F7E3E380] flex flex-col">
        <div className="px-4 bg-white">
          <div className="flex items-center justify-between py-4">
            <Logo />
            <div className="flex items-center gap-2.5">
              <button
                onClick={onClose}
                className="w-9 h-9 bg-[#e5989b] rounded-full flex items-center justify-center"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-6 py-8 overflow-y-auto">
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between text-[22px] font-semibold text-[#1d1d1d] hover:text-[#d77f82] transition-colors"
              >
                <span>{t(link.key)}</span>
                <ChevronRight className="w-7 h-7" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="px-6 pb-8">
          <div className="bg-white rounded-3xl p-5 border border-[#efeeeb]">
            <div className="mb-6">
              <h3 className="text-[22px] font-semibold text-[#1d1d1d] leading-tight mb-3">
                {tCommon("getTheApp")}
              </h3>
              <p className="text-sm text-[#95908e] leading-snug">
                {tCommon("downloadTagline")}
              </p>
            </div>
            <div className="flex gap-2">
              <StoreButton store="appstore" className="flex-1 h-[46px]" />
              <StoreButton store="playstore" className="flex-1 h-[46px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
