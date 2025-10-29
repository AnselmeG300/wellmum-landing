"use client";

import { useState, FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

export function JoinBetaForm() {
  const t = useTranslations("metadata.joinBeta");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    lastBornDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Configuration EmailJS
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          last_born_date: formData.lastBornDate,
          to_name: "WellMum Team",
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", lastBornDate: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] p-8 w-full max-w-[584px] border">
      <h2 className="text-[#111827] text-[24px] font-bold leading-[32px] mb-6">
        {t("formTitle")}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-[#374151] text-[14px] font-normal leading-[20px]"
            >
              {t("firstName")}
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder={t("firstNamePlaceholder")}
              className="w-full px-[17px] py-4 border border-[#d1d5db] rounded-[8px] text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7aa89b] focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-[#374151] text-[14px] font-normal leading-[20px]"
            >
              {t("lastName")}
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder={t("lastNamePlaceholder")}
              className="w-full px-[17px] py-4 border border-[#d1d5db] rounded-[8px] text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7aa89b] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[#374151] text-[14px] font-normal leading-[20px]"
          >
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder={t("emailPlaceholder")}
            className="w-full px-[17px] py-4 border border-[#d1d5db] rounded-[8px] text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7aa89b] focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastBornDate"
            className="text-[#374151] text-[14px] font-normal leading-[20px]"
          >
            {t("lastBornDate")}
          </label>
          <input
            type="date"
            id="lastBornDate"
            required
            value={formData.lastBornDate}
            onChange={(e) =>
              setFormData({ ...formData, lastBornDate: e.target.value })
            }
            className="w-full px-[21px] py-[13px] border border-[#d1d5db] rounded-[8px] text-[16px] text-[#111827] bg-[#efefef] focus:outline-none focus:ring-2 focus:ring-[#7aa89b] focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#f43f5e] hover:bg-[#e11d48] text-white rounded-[8px] px-6 py-3 text-[16px] font-normal leading-[24px] flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />
          ) : (
            <Check className="w-5 h-5 flex-shrink-0" />
          )}
          {isSubmitting ? t("submitting") : t("submitButton")}
        </button>

        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
            {t("successMessage")}
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
            {t("errorMessage")}
          </div>
        )}
      </form>
    </div>
  );
}
