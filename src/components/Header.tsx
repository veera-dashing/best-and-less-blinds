"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, nav, productCategories } from "@/lib/content";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  // Only the home page has a light hero behind the header; every other page
  // opens with the dark PageHeader banner, so the header must stay solid there
  // or its dark logo/nav text disappears against the dark background.
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen || !isHome
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(74,63,55,0.08),0_8px_30px_rgba(43,36,32,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="shrink-0" aria-label={business.name}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.label === "Products") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-brass-dark" : "text-bark hover:text-espresso"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5 6 7.5 9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      productsOpen
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-1"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1 rounded-3xl border border-bark/10 bg-linen p-3 shadow-[0_24px_60px_rgba(43,36,32,0.16)]">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/our-services#${cat.slug}`}
                          className="group rounded-2xl p-4 transition-colors hover:bg-sand"
                        >
                          <span className="block font-serif text-lg text-espresso group-hover:text-brass-dark">
                            {cat.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-stone">
                            {cat.items
                              .slice(0, 3)
                              .map((i) => i.name)
                              .join(" · ")}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-brass-dark" : "text-bark hover:text-espresso"
                }`}
              >
                {item.label}
                {item.label === "Curtains" && (
                  <span className="ml-1.5 rounded-full bg-brass/15 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brass-dark">
                    Trending
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="text-sm font-medium text-bark transition-colors hover:text-brass-dark"
          >
            {business.phone}
          </a>
          <Link
            href="/contacts"
            className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-brass-dark hover:shadow-lg"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-espresso lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-bark/10 bg-cream transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-bark transition-colors hover:bg-sand"
            >
              {item.label}
              {item.label === "Curtains" && (
                <span className="ml-2 rounded-full bg-brass/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-brass-dark">
                  Trending
                </span>
              )}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-bark/10 pt-4">
            <a href={business.phoneHref} className="px-4 text-sm text-stone">
              Call {business.phone}
            </a>
            <Link
              href="/contacts"
              className="rounded-full bg-espresso px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
