import Link from "next/link";
import { business, nav, productCategories } from "@/lib/content";
import { Logo } from "./Logo";

function SocialIcon({ name }: { name: "facebook" | "youtube" | "maps" }) {
  const common = "h-4.5 w-4.5";
  if (name === "facebook")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor">
        <path d="M14 9h3l.5-3H14V4.3c0-.9.3-1.5 1.6-1.5H17V.1C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H8v3h2.3v9H14V9z" />
      </svg>
    );
  if (name === "youtube")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor">
        <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 .1 12a31 31 0 0 0 .4 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-5.5 31 31 0 0 0-.4-5.5zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-cream text-cocoa/80">
      {/* CTA band */}
      <div className="border-b border-cocoa/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-tomato-dark">Free Measure & Quote</p>
            <h2 className="mt-2 font-serif text-3xl text-cocoa md:text-4xl">
              Ready to dress your windows?
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={business.phoneHref}
              className="rounded-full border border-cocoa/25 px-6 py-3 text-sm font-semibold text-cocoa transition-colors hover:border-tomato-dark hover:text-tomato-dark"
            >
              {business.phone}
            </a>
            <Link
              href="/contacts"
              className="rounded-full bg-tomato px-6 py-3 text-sm font-semibold text-cocoa-deep transition-colors hover:bg-blush"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            aria-label={business.name}
            className="inline-block rounded-lg bg-white p-2.5 shadow-sm"
          >
            <Logo className="!h-10" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cocoa/60">
            Custom-made, affordable quality blinds, plantation shutters and
            curtains for homes, offices and apartments.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cocoa/15 transition-colors hover:border-tomato-dark hover:text-tomato-dark"
            >
              <SocialIcon name="facebook" />
            </a>
            <a
              href={business.social.youtube}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cocoa/15 transition-colors hover:border-tomato-dark hover:text-tomato-dark"
            >
              <SocialIcon name="youtube" />
            </a>
            <a
              href={business.social.googleMaps}
              aria-label="Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cocoa/15 transition-colors hover:border-tomato-dark hover:text-tomato-dark"
            >
              <SocialIcon name="maps" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-cocoa/50">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-tomato-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-cocoa/50">Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/our-services#${cat.slug}`}
                  className="transition-colors hover:text-tomato-dark"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-cocoa/50">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-cocoa/70">
            <li>{business.address}</li>
            <li>
              <a
                href={business.phoneHref}
                className="transition-colors hover:text-tomato-dark"
              >
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="transition-colors hover:text-tomato-dark"
              >
                {business.email}
              </a>
            </li>
          </ul>
          <ul className="mt-5 space-y-1.5 text-xs text-cocoa/50">
            <li>{business.availability}</li>
            <li>{business.showroom}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cocoa/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cocoa/45 sm:flex-row sm:px-8">
          <p>
            {business.name} © 2026. All Rights Reserved.
          </p>
          <p>Made with care in Sydney, NSW.</p>
        </div>
      </div>
    </footer>
  );
}
