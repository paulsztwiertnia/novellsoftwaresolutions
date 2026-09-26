import type { Metadata } from "next";
import { BulletList, CtaBand, Eyebrow, FeatureGrid, OutlineButton, SectionTitle } from "@/components/blocks";
import { upload } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Home - Novell Software Solutions" },
  description:
    "We are a digital agency that offers design, marketing strategy, and software solutions to businesses and individuals. Employing our innovation-driven strategy to create software solutions, we offer personalized services to our clientele and their target demographics.",
};

const offers = [
  {
    title: "Website & App Development",
    body: "Transform Your Vision into Reality with Expert Website and App Development With user-friendly, responsive websites and dynamic apps to drive your business forward.",
    image: upload("2023/04/pic-6.png"),
    href: "/website-and-app-development",
  },
  {
    title: "Digital Marketing",
    body: "Amplify Your Brand's Reach, Engagement, and Conversions. Elevate your online presence through tailored digital marketing strategies for superior results.",
    image: upload("2023/04/pic-8.png"),
    href: "/digital-marketing",
  },
  {
    title: "Search Engine Optimization",
    body: "Boost Your Businesses Visibility, Rank Higher, and Attract Organic Traffic. Harness the power of SEO to rise in search rankings and reach your target audience.",
    image: upload("2023/04/pic-9.png"),
    href: "/search-engine-optimization",
  },
  {
    title: "Hosting & Domain Services",
    body: "Our hosting and domain services go beyond reliability; they offer peace of mind. We ensure your website remains accessible, secure, and responsive, so you can focus growing your online footprint and engaging your audience.",
    image: upload("2023/04/pic-7.png"),
    href: "/hosting-and-domain-services",
  },
];

const solutions = [
  {
    title: "Web & Front End Applications",
    body: "We specialize in crafting responsive web applications tailored to tackle your intricate business challenges. Our proficient teams are well-versed in modern frameworks, guaranteeing seamless experiences across various devices and smooth integration with backend data sources.",
    image: upload("2023/10/Screenshot-2023-10-13-at-1.19.13-PM.png"),
  },
  {
    title: "Databases",
    body: "Elevate your data management with cutting-edge database solutions for streamlined and secure operations. Our database services ensure efficient and secure data management, empowering your business growth and success.",
    image: upload("2023/10/database-icon-vector-5053735-removebg-preview-1-1.png"),
  },
  {
    title: "Machine Learning",
    body: 'By using machine learning technology, businesses are enabled to construct automated models adept at swiftly processing extensive datasets. These models dynamically "learn" how to effectively apply data-driven insights to overcome complex challenges, thereby enhancing operational efficiency and facilitating informed decision-making.',
    image: upload("2023/10/machine-learning-icon-free-vector-removebg-preview-2.png"),
  },
  {
    title: "Ecommerce Applications",
    body: "From customized implementations to seamless system integration and continuous support, our expert teams ensure the delivery of a dynamic and robust content ecosystem that scales effortlessly.",
    image: upload("2023/04/pic-35.png"),
  },
];

const stats = [
  { value: "5,000,000+", label: "Users" },
  { value: "100%", label: "Positive Feedback" },
  { value: "$100k+", label: "In Sales" },
];

export default function Home() {
  return (
    <main>
      <section
        className="bg-hero bg-cover bg-center"
        style={{ backgroundImage: `url(${upload("2024/06/Home-3-scaled-2-2.png")})` }}
      >
        <div className="mx-auto grid min-h-[640px] max-w-6xl items-center px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <h1 className="font-display text-4xl uppercase leading-[1.15] tracking-wide text-brand md:text-5xl">
              your partner in digital solutions
            </h1>
            <p className="mt-6 max-w-xl text-[15px] font-medium leading-relaxed text-muted">
              We are a digital agency that offers design, marketing strategy, and software solutions to businesses and
              individuals. Employing our innovation-driven strategy to create software solutions, we offer personalized
              services to our clientele and their target demographics.
            </p>
            <div className="mt-8">
              <OutlineButton href="/contact">Contact Us</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionTitle className="text-center uppercase">What We Offer</SectionTitle>
          <FeatureGrid items={offers} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <Eyebrow>Additional features</Eyebrow>
            <SectionTitle className="mt-3">Delivering AI-Powered Solutions for Your Business</SectionTitle>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              In a rapidly evolving digital landscape, staying ahead is not just an option but a necessity. Our mission
              is to empower businesses like yours with cutting-edge technology and innovative digital marketing
              techniques. From harnessing the power of AI for data-driven insights to optimizing every your operations,
              we’re your trusted partner in success.
            </p>
            <BulletList
              items={[
                "Scale your marketing campaigns with outbound AI lead generation",
                "Predict market trends and customer behavior with advanced data analysis.",
                "Optimize operations for efficiency and cost savings with AI automation.",
                "Safeguard your digital assets with proactive AI-driven cybersecurity.",
              ]}
            />
            <div className="mt-8">
              <OutlineButton href="/contact">Contact Us</OutlineButton>
            </div>
          </div>
          <img
            src={upload("2023/04/pic-21.jpg")}
            alt="AI powered illustration"
            className="w-full rounded-md object-cover"
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow>What we do</Eyebrow>
          <SectionTitle className="mt-3 max-w-3xl">Software Solutions Tailored To Your Industry</SectionTitle>
          <p className="mt-4 max-w-4xl text-[17px] leading-relaxed text-muted">
            Our adept tech team possesses the know-how and track record to fulfill diverse requirements. We’ve crafted
            digital solutions across industries like insurance, construction, banking, home automation, and e-commerce,
            tackling any project complexity. Our commitment to timely, cost-effective delivery is bolstered by swift
            prototyping and agile development methods.
          </p>
          <FeatureGrid items={solutions} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <img
            src={upload("2023/04/pic-19.jpg")}
            alt="Innovative databases and computer servers"
            className="w-full rounded-md object-cover"
          />
          <div>
            <Eyebrow>Why choose us</Eyebrow>
            <SectionTitle className="mt-3">We Lead the Way in Digital Innovation</SectionTitle>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              At the intersection of technology and marketing, we redefine possibilities. With a proven track record
              spanning industries, our expertise in software solutions is your gateway to success.
            </p>
            <BulletList
              items={[
                "Elevate your digital presence with tailored strategies for maximum impact and growth.",
                "Unleash the power of data-driven decisions to outpace your competition and captivate your audience.",
                "Transform your ideas into reality with cutting-edge software solutions designed to solve complex challenges.",
                "Trust in our experience to navigate the ever-evolving tech landscape and stay ahead of the curve.",
              ]}
            />
            <div className="mt-8">
              <OutlineButton href="/contact">Book A Consultation</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${upload("2023/04/map.jpg")})` }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
          <Eyebrow>Worldwide Experience</Eyebrow>
          <SectionTitle className="mt-3">Our Impact in Numbers</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-muted">
            Explore why people choose Novell Software Solutions for their next project
          </p>
          <dl className="mt-12 grid gap-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-poppins text-lg text-ink">{stat.label}</dt>
                <dd className="mt-2 font-sans text-5xl font-medium text-[#5182ff] md:text-6xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
