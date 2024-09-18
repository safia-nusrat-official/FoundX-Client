export type SiteConfig = typeof siteConfig;

const commonNavItems =  [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Found Items",
    href: "/found-items",
  },
  {
    label: "Parallel Route",
    href: "/parallel",
  },
]

export const siteConfig = {
  name: "Found X",
  description: "Make beautiful websites regardless of your design experience.",
  navItems:[...commonNavItems],
  navMenuItems:  [...commonNavItems]
};
