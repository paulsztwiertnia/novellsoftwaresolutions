import type { Metadata } from "next";
import { CtaBand, FeatureGrid, OutlineButton, PageHero, SectionTitle } from "@/components/blocks";
import { upload } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Experience seamless integration and enhanced digital marketing strategies for business growth with our Facebook and Google Ads.",
};

const benefits = [
  {
    title: "Precise Ad Targeting",
    body: "Advertising on Facebook and Google allows precise targeting based on age, interests, behavior, and location. Utilize Pay-Per-Click advertising to effectively engage your specific customer base.",
    image: upload("2023/11/marketing-1.png"),
  },
  {
    title: "Advanced Ad Analysis",
    body: "Stay informed about your generated impressions, clicks, and conversions. Additionally, benefit from split testing analytics such as landing page heat maps and targeting tests.",
    image: upload("2023/11/marketing-2.png"),
  },
  {
    title: "Enhanced Brand Recognition",
    body: "Building your brand establishes a strong connection with your target audience, fostering trust and credibility. With a recognizable brand, customers feel more assured and are inclined to choose your products or services, establishing long-term loyalty and ensuring a competitive edge in the market.",
    image: upload("2023/11/marketing-4.png"),
  },
  {
    title: "Affordable & Measurable Ads",
    body: "While running paid advertising campaigns, you can precisely target your desired audience. The costs associated with these ads vary depending on the specific objective or ad type in use. We utilize machine learning algorithms to deliver the best-performing ads for your campaign.",
    image: upload("2023/11/marketing-3.png"),
  },
];

const reasons = [
  {
    title: "1. Powerful Targeting Capabilities",
    body: "Customers browse the internet for products and services, often clicking on appealing ads. Want your ads to succeed? Turn to pay per click (PPC) marketing! PPC ads on various platforms enable businesses to target specific audiences. Businesses can aim at audiences based on their devices, locations, and campaign types. Campaign-based targeting includes display networks, search networks, product listing ads, and search networks with display opt-in ads. Location-based targeting can be highly specific, down to postal codes and device-based targeting, including laptops, desktops, and mobile devices. Search network targeting is based on keywords that rank your website or landing pages in search results. Display network targeting uses text, images, and videos displayed on other websites, primarily focusing on demographics and audiences. Through precise PPC targeting, businesses have experienced a 50 percent increase in conversion rates and a significant surge in overall website traffic.",
  },
  {
    title: "2. Easy To Measure & Track",
    body: "Similar to other marketing methods, PPC ads require monitoring and evaluation. Rest assured, unlike many other strategies, this is relatively straightforward. Leveraging Google Ads and Google Analytics enables tracking and assessing specific key performance indicators (KPIs) pertinent to your campaign. Several critical KPIs to monitor during your PPC campaigns include: cost per click, click-through rate, impressions, conversion rate, clicks, quality score, and cost per acquisition. With these tools, you can effortlessly oversee every aspect of your campaign's performance. Neglecting to track and monitor your PPC campaigns can adversely impact your marketing endeavors.",
  },
  {
    title: "3. Flexibility For All Industries",
    body: "An advantage of this strategy for businesses, regardless of size, is its cost-effectiveness. Enterprises with ample marketing budgets can run expansive PPC campaigns, while those with limited resources can utilize more modest PPC advertising budgets. As noted earlier, PPC allows companies to promptly connect with their target audience, provided they employ the appropriate keywords. Keywords play a crucial role in a digital marketing campaign. To assess the efficacy of keywords intended for use in other campaigns, testing them with PPC ads can offer valuable insights.",
  },
  {
    title: "4. Impact of PPC Advertising Insights",
    body: "The benefits derived from PPC advertising extend beyond campaign results. It furnishes valuable insights into audience behavior, demographics, and data that can elevate other marketing strategies. By leveraging click, impression, and conversion data, businesses can enrich their content and SEO initiatives. PPC campaigns are interconnected with various teams, such as sales, customer service, and CRM, resulting in an improved understanding that guides informed decision-making and ensures a seamless customer journey. While data accumulation is abundant in the current business landscape, the true value lies in utilizing the insights for informed action.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <main>
      <PageHero
        title="Digital Marketing"
        headline="Revolutionize Your Digital Presence with Our Pay-Per-Click Advertising"
        body="Experience Seamless Integration and Enhanced Digital Marketing Strategies for Business Growth with Our Facebook & Google Ads"
        image={upload("2023/04/Illustration-2.jpg")}
        imageAlt="Digital marketing illustration"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Explore The Benefits of Digital Advertising</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Increase Your Conversions With Paid Ads</p>
          <FeatureGrid items={benefits} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <img
            src={upload("2023/04/pic-19.jpg")}
            alt="Innovative databases and computer servers"
            className="w-full rounded-md object-cover"
          />
          <div>
            <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
              Maximize Your ROI By Unleashing the Power of Paid Advertising in Digital Marketing
            </h2>
            <div className="mt-8">
              <OutlineButton href="/contact">Book A Consultation</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Why Choose Paid Advertising?</SectionTitle>
          <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-muted">
            Pay-Per-Click advertising entails paying a fee each time a user clicks on an ad. It stands as an interactive
            advertising approach with meticulous targeting and remarkable adaptability.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title}>
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
