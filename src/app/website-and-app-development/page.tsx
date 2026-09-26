import type { Metadata } from "next";
import { CtaBand, FeatureGrid, OutlineButton, PageHero, SectionTitle } from "@/components/blocks";
import { upload } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web App Development",
  description:
    "Transform your vision into reality with expert website and app development. User-friendly, responsive websites and dynamic apps to drive your business forward.",
};

const capabilities = [
  {
    title: "Expert User Experience (UX) and User Interface (UI) Design",
    body: "Turn your vision into reality through our expert website and app development services. Our user-friendly, responsive websites and dynamic apps are designed to propel your business towards greater success and growth.",
    image: upload("vector6.png"),
  },
  {
    title: "User Testing & Rapid Prototyping",
    body: "We establish clear usability targets, ensuring that the solutions we validate align closely with your project objectives. Throughout the developmental journey, we construct interactive prototypes to validate concepts and streamline user experiences, ensuring optimal functionality and engagement.",
    image: upload("vector5.png"),
  },
  {
    title: "Search Engine Optimization",
    body: "An SEO-friendly website enhances online visibility, driving increased organic traffic and improving search engine rankings. It ensures better user experience, higher credibility, and a competitive edge, ultimately leading to improved brand recognition and higher conversion rates.",
    image: upload("vector3.png"),
  },
  {
    title: "Mobile Device Responsiveness",
    body: "Easily accessible anytime, anywhere. Impress your audience with our website responsiveness. Enjoy optimal user experience across all devices, elevating engagement, and ensuring your content is always accessible.",
    image: upload("vector4.png"),
  },
];

const steps = [
  {
    title: "1. Discovery Consultation",
    body: "Initiate the journey with an in-depth discussion, understanding your goals, and aligning our strategies to your vision, laying the groundwork for a successful and purposeful web development experience.",
  },
  {
    title: "2. Protoyping & Development",
    body: "Our team of experts crafts a visually stunning and functional website, seamlessly integrating your brand identity, user experience, and industry best practices, ensuring a captivating online presence that resonates with your audience.",
  },
  {
    title: "3. Function/Design Updates & Client Changes",
    body: "Refine and perfect your website with meticulous attention to detail, incorporating necessary adjustments and enhancements, guaranteeing a flawless and seamless user experience that aligns perfectly with your business objectives and customer expectations.",
  },
  {
    title: "4. Product Launch",
    body: "With careful precision, we unveil your polished website to the online world, implementing a strategic and seamless launch plan, ensuring a smooth transition and maximum impact, setting the stage for a successful online presence and heightened brand visibility.",
  },
];

export default function WebAppDevelopmentPage() {
  return (
    <main>
      <PageHero
        title="Website and App Development"
        headline="Revolutionizing Your Business Through Cutting-Edge Software Solutions"
        body="Transform Your Vision Into Reality With Expert Website And App Development. User-Friendly, Responsive Websites And Dynamic Apps To Drive Your Business Forward."
        image={upload("pic-20.jpg")}
        imageAlt="Mobile app development"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Why Choose Us?</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Explore our development capabilities</p>
          <FeatureGrid items={capabilities} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <img src={upload("computer-vector.png")} alt="Computer with statistics" className="w-full" />
          <div>
            <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
              Increase Your Brand Recognition with Our Expert Website and App Development Services
            </h2>
            <div className="mt-8">
              <OutlineButton href="/contact">Book A Consultation</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <SectionTitle>Our Development Lifecycle</SectionTitle>
          <p className="mt-3 font-display text-xl text-ink">Get a finished product in as little as 1 week!</p>
          <ol className="mt-10 grid list-none gap-6 pl-0 md:grid-cols-2">
            {steps.map((step) => (
              <li key={step.title} className="rounded-md border border-line bg-surface p-6">
                <h3 className="font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
