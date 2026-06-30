import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ProductImage } from "@/components/ProductImage";
import { business, productCategories } from "@/lib/content";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our full range of custom-made shutters, blinds, outdoor systems, flyscreens and curtains — professionally measured and installed across Sydney. Free in-home consultation, 7 days a week.",
  alternates: { canonical: "/our-services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Products"
        eyebrow="Our Products & Services"
        title="Curtains, shutters, blinds & outdoor"
        intro="Made-to-measure curtains, shutters and blinds for every room. Every product is custom-made to your exact measurements and professionally installed — designed for maximum durability and 100% customer satisfaction, backed by our Guarantee Certificate."
      />

      {/* quick nav */}
      <section className="sticky top-[68px] z-30 border-b border-bark/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 sm:px-8">
          {productCategories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="whitespace-nowrap rounded-full border border-bark/15 px-4 py-1.5 text-sm font-medium text-bark transition-colors hover:border-brass hover:text-brass-dark"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      <div className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-6 sm:px-8 lg:space-y-28">
          {productCategories.map((cat, i) => {
            // Individual service pages that belong to this category.
            const catServices = services.filter((s) => s.category === cat.slug);

            return (
              <section key={cat.slug} id={cat.slug} className="scroll-mt-32">
                {/* intro row */}
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-bark/10 bg-sand shadow-[0_30px_60px_-30px_rgba(43,36,32,0.4)]">
                      <ProductImage
                        src={cat.image}
                        alt={`${cat.title} by Best & Less Blinds`}
                        artSlug={cat.slug}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/10 to-transparent" />
                    </div>
                  </Reveal>

                  <Reveal delay={120}>
                    <p className="eyebrow text-brass-dark">0{i + 1} — Range</p>
                    <h2 className="mt-3 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
                      {cat.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-bark">
                      {cat.blurb}
                    </p>
                    <Link
                      href="/contacts"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brass-dark"
                    >
                      Enquire about {cat.title.toLowerCase()}
                      <span aria-hidden>→</span>
                    </Link>
                  </Reveal>
                </div>

                {/* linked product cards → individual service pages */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {catServices.map((item, j) => (
                    <Reveal key={item.slug} delay={(j % 3) * 90}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="group flex h-full flex-col rounded-3xl border border-bark/10 bg-linen p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(43,36,32,0.25)]"
                      >
                        <h3 className="font-serif text-xl text-espresso group-hover:text-brass-dark">
                          {item.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-bark">
                          {item.lead}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark">
                          View details
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* free consultation band */}
      <section className="bg-espresso py-16 text-cream lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl">
            We offer a free consultation
          </h2>
          <p className="mt-4 text-cream/70">
            {business.availability}. Call us today on{" "}
            <a href={business.phoneHref} className="text-brass-light">
              {business.phone}
            </a>{" "}
            or send us a quick enquiry.
          </p>
          <Link
            href="/contacts"
            className="mt-7 inline-block rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-espresso transition-colors hover:bg-brass-light"
          >
            Request a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
