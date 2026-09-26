import type { Metadata } from "next";
import { CtaBand, FeatureGrid, OutlineButton, PageHero, SectionTitle } from "@/components/blocks";
import { upload } from "@/lib/site";

export const metadata: Metadata = {
  title: "Search Engine Optimization",
  description:
    "Maximize your online visibility and reach with tailored search engine optimization strategies to drive growth and boost your digital presence.",
};

const benefits = [
  {
    title: "Enhanced Visibility, Increased Traffic",
    body: "Gain a prominent online presence and attract a larger audience with our SEO strategies, ensuring that your website is easily discoverable and drives a steady stream of interested visitors to your pages.",
    image: upload("seo-2.png"),
  },
  {
    title: "Data-Driven Results",
    body: "Leverage the power of data-driven insights to achieve optimal SEO outcomes, allowing you to make informed decisions and implement tailored strategies that effectively boost your website’s visibility and organic traffic.",
    image: upload("big-data.png"),
  },
  {
    title: "Competitive Rates",
    body: "Gain a competitive advantage with our cost-effective SEO solutions, enabling you to achieve high visibility and increased traffic at competitive rates, ensuring maximum return on your investment.",
    image: upload("seo-4.png"),
  },
];

const reasons = [
  {
    title: "1. Rank Higher On Search Engines",
    body: "SEO helps improve a website's visibility on search engines, making it easier for potential customers to find the business when searching for relevant products or services.",
  },
  {
    title: "2. Credibility and Trust",
    body: "Appearing higher in search results signals credibility and trust to users, as they often perceive top-ranking websites as more reliable and authoritative sources within their industry.",
  },
  {
    title: "3. Better User Experience",
    body: "Implementing SEO practices such as mobile optimization and fast loading times not only improves search rankings but also enhances the overall user experience, leading to increased user engagement and satisfaction.",
  },
];

export default function SeoPage() {
  return (
    <main>
      <PageHero
        title="Search Engine Optimization"
        headline="Maximize Your Business's Rankings with Our SEO solutions"
        body="Maximize Your Online Visibility and Reach with Tailored Search Engine Optimization Strategies to Drive Growth and Boost Your Digital Presence."
        image={upload("pic-35.png")}
        imageAlt="Ecommerce and phone data illustration"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Why Choose Us?</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Explore The Benefits Of Our SEO</p>
          <FeatureGrid items={benefits} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <img src={upload("computer-vector.png")} alt="Computer with statistics" className="w-full" />
          <div>
            <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
              Increase Your Search Engine Ranking With Our Innovative SEO Solutions Using Artificial Intelligence and
              Machine Learning!
            </h2>
            <div className="mt-8">
              <OutlineButton href="/contact">Book A Consultation</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Why Do You Need SEO?</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Explore why SEO Matters</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-md border border-line p-6">
                <h3 className="font-display text-lg text-ink">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
