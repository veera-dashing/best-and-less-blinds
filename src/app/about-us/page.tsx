import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ProductImage } from "@/components/ProductImage";
import { aboutValues, features } from "@/lib/content";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Best & Less Blinds & Shutters specialises in custom-made, affordable quality blinds, plantation shutters and curtains — combining real craftsmanship with modern technology.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        eyebrow="About Us"
        title="Welcome to Best & Less Blinds & Shutters"
        intro="We specialise in custom-made, affordable quality blinds, plantation shutters and curtains for commercial and domestic use — combining real craftsmanship with the precision of modern technology."
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-oat p-3 shadow-2xl">
              <div className="group relative h-full w-full overflow-hidden rounded-[1.4rem]">
                <ProductImage
                  src={photos.plantationShutters}
                  alt="Custom plantation shutters fitted in a Sydney home"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/55 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cocoa-light/95 p-5">
                  <p className="font-serif text-2xl text-cream">
                    Honest advice
                  </p>
                  <p className="mt-1 text-sm text-oat">
                    at the heart of our core business values.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-tomato">Our Approach</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">
                Crafted with care, guided by honesty
              </h2>
            </Reveal>
            <div className="mt-8 space-y-8">
              {aboutValues.map((v, i) => (
                <Reveal key={v.title} delay={i * 120}>
                  <div className="border-l-2 border-tomato/40 pl-5">
                    <h3 className="font-serif text-xl text-cream">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-oat leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-cocoa-light py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-tomato">Why Choose Us</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">
              Designed around you
            </h2>
            <p className="mt-4 text-lg text-oat">
              Our interior designers recommend products considering versatility,
              ease of use, longevity and aesthetic appeal — always working
              within your budget.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="h-full rounded-3xl border border-oat/10 bg-cocoa p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream font-serif text-lg text-tomato-dark">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-cream">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-oat">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 rounded-3xl bg-cream p-10 text-center text-cocoa lg:p-14">
              <h3 className="font-serif text-3xl sm:text-4xl">
                Maximum durability. 100% satisfaction.
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-cocoa/70">
                Every product is designed for maximum durability and backed by a
                Guarantee Certificate provided after installation. From
                traditional to contemporary, we tailor each piece to your home.
              </p>
              <Link
                href="/contacts"
                className="mt-8 inline-block rounded-full bg-tomato px-7 py-3.5 text-sm font-semibold text-cocoa-deep transition-colors hover:bg-blush"
              >
                Book your free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
