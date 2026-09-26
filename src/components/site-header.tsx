"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services, upload } from "@/lib/site";

const logo = upload("novell-logo-horizontal-e1696363534483.png");

function itemClass(active: boolean) {
  return `font-display text-[13px] tracking-wide transition-colors ${
    active ? "text-brand-deep" : "text-black hover:text-brand-deep"
  }`;
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      aria-hidden
      className="h-2 w-3 shrink-0 transition-transform"
      style={{ transform: open ? "rotate(180deg)" : undefined }}
    >
      <path d="M1 1.25 6 6.25 11 1.25" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesActive = services.some((item) => pathname === item.href);
  const servicesShown = servicesOpen || servicesHover;

  useEffect(() => {
    setServicesOpen(false);
    setServicesHover(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Novell Software Solutions" className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="/" className={itemClass(pathname === "/")} aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
          >
            <button
              type="button"
              className={`${itemClass(servicesActive)} inline-flex items-center gap-2 whitespace-nowrap`}
              aria-expanded={servicesShown}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <Caret open={servicesShown} />
            </button>
            <div className={`absolute right-0 top-full z-20 min-w-64 pt-3 ${servicesShown ? "visible opacity-100" : "invisible opacity-0"}`}>
              <ul id="services-menu" className="list-none rounded-md border border-line bg-white py-2 pl-0 shadow-lg">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 text-sm font-medium ${
                        pathname === item.href ? "text-brand" : "text-ink hover:text-brand"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/contact"
            className={itemClass(pathname === "/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line bg-white px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="list-none space-y-3 pl-0">
            <li>
              <Link href="/" className={itemClass(pathname === "/")} onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-2 font-display text-[13px] text-black"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((value) => !value)}
              >
                Services
                <Caret open={servicesOpen} />
              </button>
              <ul className={`mt-2 list-none space-y-2 border-l border-line pl-4 ${servicesOpen ? "block" : "hidden"}`}>
                {services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ink hover:text-brand" onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/contact" className={itemClass(pathname === "/contact")} onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
