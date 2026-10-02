import Link from "next/link";
import { services, siteName, upload } from "@/lib/site";

const mark = upload("novell-favicon-e1696374720996.png");

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <div className="flex items-center gap-6 md:col-span-2">
          <img src={mark} alt="" className="h-16 w-16 shrink-0" />
          <div>
            <h2 className="m-0 font-display text-xs font-light tracking-wide">{siteName}</h2>
            <p className="mb-0 mt-2 text-[11px] leading-relaxed text-black">
              Through the utilization of our comprehensive range of strategy, design, and technology capacities, we achieve
              transformative results for our global clientele.
            </p>
          </div>
        </div>
        <div>
          <h2 className="m-0 text-center font-display text-xs font-light tracking-wide">Services</h2>
          <ul className="mt-4 list-none space-y-2 pl-0 text-center text-[11px]">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand">
                  {item.footer}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="m-0 text-center font-display text-xs font-light tracking-wide">Company</h2>
          <ul className="mt-4 list-none space-y-2 pl-0 text-center text-[11px]">
            <li>
              <Link href="/projects" className="hover:text-brand">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
