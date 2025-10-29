"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { StoreButton } from "./StoreButton";
import {
  FOOTER_CONTACT,
  FOOTER_QUICK_LINKS,
  FOOTER_PROGRAMS,
} from "@/constants/footer";
import { COMPANY_URLS } from "@/config/company";
import { Logo } from "./Logo";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1480px] mx-auto px-4 lg:px-[120px] py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-2">
              <StoreButton variant="light" store="appstore" />
              <StoreButton variant="light" store="playstore" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.translationKey}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">{t("programs")}</h3>
            <ul className="space-y-2">
              {FOOTER_PROGRAMS.map((link) => (
                <li key={link.translationKey}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4">{t("contact")}</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#F43F5E]" />
                {FOOTER_CONTACT.email}
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#F43F5E]" />
                {FOOTER_CONTACT.phone}
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#F43F5E]" />
                {FOOTER_CONTACT.location}
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href={COMPANY_URLS.FACEBOOK_URL}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_URLS.TWITTER_URL ?? "#"}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_URLS.INSTAGRAM_URL}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300 text-sm lg:text-base">
            © {year} WellMum. {t("allRightsReserved")} |{" "}
            <Link href="#">{t("privacyPolicy")}</Link> |{" "}
            <Link href="#">{t("termsOfService")}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
