import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ProductImage } from "@/components/ProductImage";
import { features, productCategories, testimonials } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Welcome / intro */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-brass-dark">Welcome</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
                Quality blinds and shutters for your home, office or apartment
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-bark">
                We offer blind and shutter services for your home, office, shop,
                and other residential and commercial premises — regardless of
                where you are located. We are committed to providing you with
                the best quality products and service, and 100% customer
                satisfaction.
              </p>
              <Link
                href="/about-us"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-dark hover:text-espresso"
              >
                More about us <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          {/* feature cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="group h-full rounded-3xl border border-bark/10 bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(43,36,32,0.25)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-espresso font-serif text-lg text-brass-light">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-espresso">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curtains spotlight — the current trend, given top billing */}
      <section className="bg-espresso py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-cream/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <ProductImage
                  src={photos.curtains}
                  alt="Made-to-measure curtains by Best & Less"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-brass-dark shadow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  Trending now
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow text-brass-light">In focus</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                Curtains, the season&rsquo;s favourite
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-cream/75">
                Soft, light-filled and endlessly versatile — made-to-measure
                curtains are the look everyone&rsquo;s asking for. From sheer
                elegance to full block-out, we tailor every drape to your
                windows and bring the samples to you.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-cream/80">
                {[
                  "Sheer, block-out, S-fold & pinch-pleat",
                  "Layer sheers with block-out on a double track",
                  "Free in-home measure & quote, 7 days a week",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass-light">
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                        <path
                          d="M2.5 6.2 5 8.5l4.5-5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/curtains"
                  className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-espresso transition-colors hover:bg-brass-light"
                >
                  Explore curtains
                </Link>
                <Link
                  href="/contacts"
                  className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-brass-light hover:text-brass-light"
                >
                  Book a free measure
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products showcase */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brass-dark">Our Range</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Crafted for every window, tailored to your space
            </h2>
            <p className="mt-4 text-lg text-bark">
              From flowing made-to-measure curtains to plantation shutters,
              motorised blinds and outdoor systems — all custom-made and
              professionally installed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 3) * 120}>
                <Link
                  href={`/our-services#${cat.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-bark/10 bg-linen transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(43,36,32,0.28)]"
                >
                  <div className="relative aspect-[5/3] overflow-hidden bg-sand">
                    <ProductImage
                      src={cat.image}
                      alt={cat.title}
                      artSlug={cat.slug}
                      priority={i === 0}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/10 to-transparent" />
                    {cat.slug === "curtains" && (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-brass-dark shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                        Trending
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl text-espresso group-hover:text-brass-dark">
                      {cat.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-bark">
                      {cat.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark">
                      View {cat.title.toLowerCase()}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process band */}
      <section className="bg-espresso py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brass-light">How it works</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">
              Simple, honest and stress-free
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Free consultation",
                d: "We visit, measure up and listen to how you live in your space — then recommend options that suit your style and budget.",
              },
              {
                t: "Custom made",
                d: "Your blinds, shutters or curtains are crafted to exact measurements, combining real craftsmanship with modern technology.",
              },
              {
                t: "Professional install",
                d: "We install with care and hand over a Guarantee Certificate for maximum durability and total peace of mind.",
              },
            ].map((step, i) => (
              <Reveal key={step.t} delay={i * 130}>
                <div className="relative pl-14">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-brass-light/40 font-serif text-brass-light">
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-cream">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-brass-dark">Kind Words</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Loved by customers across Sydney
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-3xl border border-bark/10 bg-linen p-8">
                  <div className="flex gap-1 text-brass">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-espresso">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-bark">
                    — {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
