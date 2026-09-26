import Link from "next/link";

export function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-[10px] border-2 border-brand bg-white px-8 py-3 font-display text-sm text-brand transition hover:bg-brand hover:text-white"
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-sm uppercase tracking-[0.12em] text-brand md:text-lg">{children}</p>;
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-3xl leading-tight text-ink md:text-4xl ${className}`}>{children}</h2>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 list-none space-y-3 pl-0">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
          <span aria-hidden className="mt-1 text-brand">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; body: string; image: string; href?: string }[];
}) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {items.map((item) => {
        const inner = (
          <>
            <img src={item.image} alt="" className="mx-auto h-24 w-auto object-contain" />
            <h3 className="mt-4 font-display text-lg leading-snug text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
          </>
        );
        return item.href ? (
          <Link key={item.title} href={item.href} className="rounded-md bg-white p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            {inner}
          </Link>
        ) : (
          <article key={item.title} className="rounded-md bg-white p-8 text-center shadow-sm">
            {inner}
          </article>
        );
      })}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
        <h2 className="font-display text-2xl uppercase tracking-wide text-brand">Get in touch</h2>
        <div className="mx-auto my-5 h-px w-24 bg-black/70" />
        <p className="font-display text-lg uppercase tracking-wide text-brand">Let&apos;s work together</p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-black">
          Get in touch with our team to discuss your upcoming project requirements
        </p>
        <div className="mt-8">
          <OutlineButton href="/contact">Contact Us</OutlineButton>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  headline,
  body,
  image,
  imageAlt,
  cta = { href: "/contact", label: "Contact Us" },
}: {
  title: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <h1 className="font-display text-sm uppercase tracking-[0.14em] text-brand">{title}</h1>
          <p className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">{headline}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">{body}</p>
          <div className="mt-8">
            <OutlineButton href={cta.href}>{cta.label}</OutlineButton>
          </div>
        </div>
        <img src={image} alt={imageAlt} className="w-full rounded-md object-cover" />
      </div>
    </section>
  );
}
