import type { Metadata } from "next";
import { ContactForm, contactFields } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us today to discuss your upcoming project or transformation requirements.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.14em] text-brand">Let&apos;s work together</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">How Can we help you</h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Contact Us today to discuss your upcoming project or transformation requirements.
            </p>
          </div>
          <ContactForm fields={contactFields} source="Contact Us" />
        </div>
      </section>
    </main>
  );
}
