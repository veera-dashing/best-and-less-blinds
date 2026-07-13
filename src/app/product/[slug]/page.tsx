import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ProductImage } from "@/components/ProductImage";
import { business, shopProducts } from "@/lib/content";
import { shopPhoto } from "@/lib/images";

// Pre-render all 10 product pages at build time, keeping their /product/<slug>/ URLs.
export function generateStaticParams() {
  return shopProducts.map((p) => ({ slug: p.slug }));
}

function getProduct(slug: string) {
  return shopProducts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  const image = shopPhoto(product.category);
  return {
    title: product.name,
    description: product.desc,
    alternates: { canonical: `/product/${product.slug}` },
    ...(image ? { openGraph: { title: product.name, description: product.desc, images: [image] } } : {}),
  };
}

function artSlug(category: string) {
  if (category === "Blinds") return "blinds";
  if (category === "Accessories") return "shutters";
  return "curtains";
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = shopProducts
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        crumb="Shop"
        eyebrow={product.category}
        title={product.name}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-start">
          <div className="group relative aspect-square overflow-hidden rounded-[2rem] border border-oat/10 bg-cocoa-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
            <ProductImage
              src={shopPhoto(product.category)}
              alt={product.name}
              artSlug={artSlug(product.category)}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          <div>
            <p className="eyebrow text-tomato">{product.category}</p>
            <h1 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-oat">
              {product.desc}
            </p>

            <div className="mt-8 rounded-3xl border border-oat/10 bg-cocoa-light p-6">
              <p className="font-serif text-xl text-cream">
                Enquire for pricing &amp; availability
              </p>
              <p className="mt-2 text-sm text-oat">
                Tell us your measurements and we&rsquo;ll confirm pricing,
                sizing and lead time — or recommend a custom-made alternative.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contacts"
                  className="rounded-full bg-tomato px-6 py-3 text-sm font-semibold text-cocoa-deep transition-colors hover:bg-blush"
                >
                  Enquire about this product
                </Link>
                <a
                  href={business.phoneHref}
                  className="rounded-full border border-oat/20 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-tomato"
                >
                  Call {business.phone}
                </a>
              </div>
            </div>

            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tomato hover:text-cream"
            >
              <span aria-hidden>←</span> Back to shop
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8">
            <h2 className="font-serif text-2xl text-cream">
              Related products
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/product/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-oat/10 bg-cocoa-light transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cocoa-deep">
                    <ProductImage
                      src={shopPhoto(p.category)}
                      alt={p.name}
                      artSlug={artSlug(p.category)}
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-base text-cream group-hover:text-tomato">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
