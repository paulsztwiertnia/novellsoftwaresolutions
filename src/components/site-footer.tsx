import Link from "next/link";
import { services, upload } from "@/lib/site";

const mark = upload("2023/10/novell-favicon-e1696374720996.png");

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <img src={mark} alt="" className="h-16 w-16" />
        <p className="text-[11px] leading-relaxed text-black md:pt-8">
          Through the utilization of our comprehensive range of strategy, design, and technology capacities, we achieve
          transformative results for our global clientele.
        </p>
        <div>
          <h2 className="text-center font-display text-xs font-light tracking-wide">Services</h2>
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
          <h2 className="text-center font-display text-xs font-light tracking-wide">Company</h2>
          <p className="mt-4 text-center text-[11px]">
            <Link href="/contact" className="hover:text-brand">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
