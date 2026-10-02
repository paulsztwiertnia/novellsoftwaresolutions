import type { Metadata } from "next";
import { CtaBand, Eyebrow, SectionTitle } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected websites and applications from Novell Software Solutions, including discovery platforms, local businesses, and community organizations.",
};

const projects = [
  {
    title: "Servd",
    body: "Servd is a happy hour discovery platform with over 1,700 verified deals. Key features include an AI-powered search engine, real-time text alerts, advanced filters, itinerary planning, and saving deals to custom collections.",
    image: "/projects/servd.avif",
    href: "https://www.getservd.ca/",
    site: "getservd.ca",
  },
  {
    title: "3D Walkthrough",
    body: "3D Walkthrough lets users create 3D virtual tours of any space using an iPhone — no dedicated camera and no technician visit. Buyers and guests open a shareable link and walk through every room in the browser, with no app or download required.",
    image: "/projects/3dwalkthrough.avif",
    href: "https://www.3dwalkthrough.ca",
    site: "3dwalkthrough.ca",
  },
  {
    title: "Canadian Arab Federation",
    body: "Established in 1967, the Canadian Arab Federation is a non-partisan, non-profit, membership-based organization dedicated to representing Canadian Arabs on public policy issues.",
    image: "/projects/caf.avif",
    href: "https://www.canadianarabsfederation.com",
    site: "canadianarabsfederation.com",
  },
  {
    title: "Strive Run Club",
    body: "Strive Run Club is a community-run, Etobicoke-based running club for all levels. The site helps the club stand out locally and connect with runners through events, training sessions, and group runs.",
    image: "/projects/strive.avif",
    href: "https://www.striverunclub.com",
    site: "striverunclub.com",
  },
  {
    title: "Toronto Sweep & Scrub",
    body: "Toronto Sweep and Scrub is a family-owned business specializing in professional sweeping and scrubbing for parking garages, warehouses, and public spaces across the GTA. The site presents their equipment and services for commercial clients.",
    image: "/projects/tss.avif",
    href: "https://www.torontosweepandscrub.com/",
    site: "torontosweepandscrub.com",
  },
  {
    title: "MYC Interactive",
    body: "MYC Interactive is a digital marketing agency focused on web design, development, social media, SEO, PPC advertising, and marketing strategy. The site presents a full set of digital services built to improve brand visibility and growth.",
    image: "/projects/myci.png",
    href: "https://www.mycinteractive.com/",
    site: "mycinteractive.com",
  },
  {
    title: "Market Your Car",
    body: "Market Your Car Inc. is a vehicle graphics and marketing company specializing in car, bus, truck, and trailer wraps. Established in 2008, the company operates from an 8,000 sq. ft. facility built for large-scale installations.",
    image: "/projects/myc.png",
    href: "https://www.marketyourcar.ca/",
    site: "marketyourcar.ca",
  }
] as const;

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>Our work</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Websites and applications we have shipped
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
            A selection of products and marketing sites built for discovery platforms, local businesses, and community
            organizations. Each one was designed, developed, and launched to give the client a clear presence online.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionTitle>Projects</SectionTitle>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <a href={project.href} target="_blank" rel="noreferrer" className="block bg-surface">
                  <img
                    src={project.image}
                    alt={`${project.title} website`}
                    className="aspect-16/10 w-full object-cover object-top"
                  />
                </a>
                <div className="p-6">
                  <h2 className="font-display text-lg leading-snug text-ink">{project.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.body}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex font-display text-xs uppercase tracking-wide text-brand hover:text-brand-deep"
                  >
                    Visit {project.site}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
