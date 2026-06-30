import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ProductImage } from "@/components/ProductImage";
import { business, SITE_URL } from "@/lib/content";
import { categoryLabels, getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Not found" };
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      ...(service.image ? { images: [service.image] } : {}),
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}/`,
      ...(service.image ? { image: `${SITE_URL}${service.image}` } : {}),
      areaServed: { "@type": "City", name: "Sydney" },
      provider: {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        name: business.name,
        telephone: business.phone,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: `${SITE_URL}/our-services/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `${SITE_URL}/services/${service.slug}/`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        crumb={service.title}
        eyebrow={categoryLabels[service.category]}
        title={service.title}
        intro={service.lead}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Body copy */}
          <div>
            <div className="space-y-5">
              {service.body.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-bark">
                  {para}
                </p>
              ))}
            </div>

            {service.specs && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl text-espresso">
                  At a glance
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {service.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 rounded-xl border border-bark/10 bg-linen px-4 py-3 text-sm text-espresso"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-dark">
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
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <div className="group overflow-hidden rounded-[2rem] border border-bark/10 bg-sand shadow-[0_30px_60px_-30px_rgba(43,36,32,0.4)]">
              <div className="relative aspect-[4/3]">
                <ProductImage
                  src={service.image}
                  alt={`${service.title} — Best & Less Blinds & Shutters`}
                  artSlug={service.art}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-espresso p-7 text-cream">
              <h2 className="font-serif text-2xl">Free measure &amp; quote</h2>
              <p className="mt-2 text-sm text-cream/70">
                {business.availability}. Tell us about your windows and
                we&rsquo;ll bring the samples to you.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contacts"
                  className="rounded-full bg-brass px-6 py-3 text-center text-sm font-semibold text-espresso transition-colors hover:bg-brass-light"
                >
                  Request a quote
                </Link>
                <a
                  href={business.phoneHref}
                  className="rounded-full border border-cream/25 px-6 py-3 text-center text-sm font-semibold text-cream transition-colors hover:border-brass-light hover:text-brass-light"
                >
                  Call {business.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related services */}
        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8">
            <h2 className="font-serif text-2xl text-espresso">
              More {categoryLabels[service.category].toLowerCase()}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-3xl border border-bark/10 bg-linen p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-serif text-lg text-espresso group-hover:text-brass-dark">
                    {s.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-bark">
                    {s.lead}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brass-dark">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
