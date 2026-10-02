export const siteName = "Novell Software Solutions";

export const siteUrl = "https://novellsoftwaresolutions.com";

export const services = [
  {
    href: "/website-and-app-development",
    label: "Web App Development",
    footer: "Web App Design",
  },
  {
    href: "/digital-marketing",
    label: "Digital Marketing",
    footer: "Digital Marketing",
  },
  {
    href: "/search-engine-optimization",
    label: "Search Engine Optimization",
    footer: "Search Engine Optimization",
  },
  {
    href: "/hosting-and-domain-services",
    label: "Hosting and Domain Services",
    footer: "Hosting & Domains",
  },
] as const;

export function upload(filename: string) {
  return `/uploads/${encodeURIComponent(filename)}`;
}
