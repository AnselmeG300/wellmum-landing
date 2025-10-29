export interface FooterLink {
  href: string;
  translationKey: string;
}

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { href: "/", translationKey: "home" },
  { href: "/our-story", translationKey: "ourStory" },
  { href: "/#features", translationKey: "features" },
  { href: "/#testimonials", translationKey: "successStories" },
  { href: "/#contact", translationKey: "contactUs" },
];

export const FOOTER_PROGRAMS: FooterLink[] = [
  { href: "/#features", translationKey: "postpartumRecovery" },
  { href: "/#why", translationKey: "strengthConfidence" },
  { href: "/#features", translationKey: "mamaWarrior" },
  { href: "/#contact", translationKey: "freeConsultation" },
];

export const FOOTER_CONTACT = {
  email: "sarah@WellMum.com",
  phone: "(555) 123-4567",
  location: "San Francisco, CA",
};
