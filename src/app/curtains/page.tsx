import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CategoryArt } from "@/components/CategoryArt";
import { productCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Curtains",
  description:
    "Beautifully draped, made-to-measure curtains — from sheer elegance to full block-out — tailored exactly to your windows.",
  alternates: { canonical: "/curtains" },
};

const curtainTypes = [
  {
    title: "Sheer Curtains",
    text: "Soft, light-filtering sheers that diffuse daylight and add a layer of effortless elegance while keeping your view.",
  },
  {
    title: "Block-out Curtains",
    text: "Dense, beautifully lined drapery that blocks light and adds insulation — perfect for bedrooms and media rooms.",
  },
  {
    title: "S-Fold Curtains",
    text: "A clean, contemporary wave that drapes uniformly for a modern, tailored finish on tracks or rods.",
  },
  {
    title: "Pinch Pleat",
    text: "A timeless, structured heading that brings a classic, luxurious fullness to any room.",
  },
];

export default function CurtainsPage() {
  const curtains = productCategories.find((c) => c.slug === "curtains")!;

  return (
    <>
      <PageHeader
        crumb="Curtains"
        eyebrow="Curtains"
        title="Inspired design for curtains"
        intro={curtains.blurb}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-bark/10 bg-sand shadow-[0_30px_60px_-30px_rgba(43,36,32,0.4)]">
                <CategoryArt slug="curtains" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow text-brass-dark">Soften your space</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
                Drapery that frames your view
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-bark">
                Curtains add warmth, texture and acoustic comfort to a room.
                We&rsquo;ll help you choose the right fabric, fullness and
                heading style — then craft and install it to perfectly suit your
                windows and how you live.
              </p>
              <Link
                href="/contacts"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brass-dark"
              >
                Book a curtain consultation <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {curtainTypes.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 110}>
                <div className="h-full rounded-3xl border border-bark/10 bg-linen p-7">
                  <h3 className="font-serif text-xl text-espresso">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
