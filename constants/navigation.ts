export interface NavLink {
  key: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "features", href: "/#features" },
  { key: "whyWellMum", href: "/#why" },
  { key: "testimonials", href: "/#testimonials" },
  { key: "ourStory", href: "/our-story" },
  { key: "ourExperts", href: "/#experts" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contact" },
];
