import type { Metadata } from "next";
import { CtaBand, OutlineButton, PageHero, SectionTitle } from "@/components/blocks";
import { upload } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hosting and Domain Services",
  description:
    "Hosting and domain service with 24/7 monitoring, daily backups, and 99.9% guaranteed uptime. We fine-tune your account so your website is fast and reliable.",
};

const plans = [
  {
    name: "Starter Plan",
    price: "$599",
    features: [
      "Unlimited Bandwidth",
      "Unlimited Free SSL",
      "50 GB SSD Storage",
      "Standard DDoS protection",
      "Weekly Backups",
      "1 Email Account",
      "Web Application Firewall",
      "Cloudflare Protected Nameservers",
      "Malware Scanners",
      "99.9% Uptime Guarantee",
      "Secure Access Managers",
      "Global Data Centers",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Premium Plan",
    price: "$849",
    features: [
      "Unlimited Bandwidth",
      "Unlimited Free SSL",
      "200 GB NVMe Storage",
      "Enhanced DDoS protection",
      "Content Delivery Network",
      "Daily Backups",
      "Free Email Accounts",
      "100 Subdomains",
      "Web Application Firewall",
      "Cloudflare Protected Nameservers",
      "Malware Scanners",
      "99.9% Uptime Guarantee",
      "Secure Access Managers",
      "Global Data Centers",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$1,299",
    features: [
      "Dedicated IP Address",
      "Unlimited Bandwidth",
      "Unlimited Free SSL",
      "200 GB NVMe Storage",
      "Enhanced DDoS Protection",
      "Content Delivery Network",
      "Daily Backups",
      "Priority Support",
      "300 Subdomains",
      "Free Email Accounts",
      "Web Application Firewall",
      "Cloudflare Protected Nameservers",
      "Malware Scanners",
      "99.9% Uptime Guarantee",
      "Secure Access Managers",
      "Global Data Centers",
      "24/7 Customer Support",
    ],
  },
];

const reasons = [
  {
    title: "1. Uptime Guarantee",
    body: "Our reliable hosting services ensure your website stays operational round the clock, minimizing downtime and ensuring that your customers can access your services anytime, anywhere.",
  },
  {
    title: "2. Enhanced User Experience",
    body: "Experience lightning-fast loading times and seamless browsing with our high-performing hosting solutions, providing your visitors with a smooth and enjoyable online experience that keeps them coming back for more.",
  },
  {
    title: "3. Optimized Security Measures",
    body: "With our robust hosting infrastructure, rest assured that your data and customer information are safeguarded with top-notch security protocols, protecting your business from potential cyber threats and ensuring data integrity at all times.",
  },
  {
    title: "4. Business Growth",
    body: "Invest in our high-performance hosting services to accelerate your business growth, as a fast and reliable website not only attracts more traffic but also fosters trust and credibility among your target audience, leading to increased conversions and revenue.",
  },
];

export default function HostingPage() {
  return (
    <main>
      <PageHero
        title="Hosting & Domain Solutions"
        headline="Expert Digital Hosting & Domain Solutions with Reasonable Prices"
        body="Our hosting & domain service includes 24/7 proactive hardware and software monitoring, daily backups, and 99.9% guaranteed up-time. Our service differs from other companies by means of optimized performance analysis. We fine-tune your account to ensure your website is fast and reliable."
        image={upload("2023/04/pic-35.png")}
        imageAlt="Hosting illustration"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>View Our Plans</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Explore our hosting solutions</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="flex flex-col rounded-md border border-line bg-surface p-6">
                <h3 className="font-display text-xl text-ink">{plan.name}</h3>
                <p className="mt-3 font-display text-3xl text-brand">
                  {plan.price} <span className="text-base text-muted">/ year</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span aria-hidden className="text-brand">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <OutlineButton href="/contact">Contact Us</OutlineButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <img src={upload("2023/11/hosting-2.png")} alt="" className="w-full" />
          <div>
            <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
              Experience the Benefits of Fast Loading Speeds with Our Hosting Solutions for Enhanced User Experience!
            </h2>
            <div className="mt-8">
              <OutlineButton href="/contact">Book A Consultation</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Explore Why Reliable & Highly Performing Hosting Solutions are Important</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Get a finished product in as little as 1 week!</p>
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
