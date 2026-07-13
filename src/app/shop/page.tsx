import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ProductImage } from "@/components/ProductImage";
import { shopProducts } from "@/lib/content";
import { shopPhoto } from "@/lib/images";

export const metadata: Metadata = {
  title: "Shop — Ready-Made Range",
  description:
    "Browse our ready-made curtains, venetian blinds and accessories. Enquire today for pricing and availability.",
  alternates: { canonical: "/shop" },
};

// Map a product category to the closest CSS-art slug for its thumbnail.
function artSlug(category: string) {
  if (category === "Blinds") return "blinds";
  if (category === "Accessories") return "shutters";
  return "curtains";
}

export default function ShopPage() {
  return (
    <>
      <PageHeader
        crumb="Shop"
        eyebrow="Ready-Made Range"
        title="Curtains, blinds & accessories"
        intro="A selection of our ready-made curtains, timber venetians and accessories. Enquire for current pricing, sizing and availability — or ask us about a custom-made alternative."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shopProducts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/product/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-oat/10 bg-cocoa-light transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cocoa-deep">
                    <ProductImage
                      src={shopPhoto(p.category)}
                      alt={p.name}
                      artSlug={artSlug(p.category)}
                      priority={i === 0}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cocoa/90 px-3 py-1 text-xs font-medium text-oat">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-lg text-cream group-hover:text-tomato">
                      {p.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-oat">
                      {p.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tomato">
                      Enquire
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
    </>
  );
}
