import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { ProductImage } from "@/components/ProductImage";
import { SITE_URL, business } from "@/lib/content";
import { blogPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
    ...(post.image ? { image: `${SITE_URL}${post.image}` } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]),
        }}
      />
      <PageHeader crumb="Blog" eyebrow={post.category} title={post.title} />

      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="flex items-center gap-2 text-sm text-stone">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readMins} min read</span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-[2rem] border border-bark/10 bg-sand">
            <ProductImage
              src={post.image}
              alt={post.title}
              artSlug={post.art}
              sizes="(min-width: 768px) 768px, 100vw"
              priority
            />
          </div>

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="font-serif text-2xl text-espresso">
                    {section.heading}
                  </h2>
                )}
                <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                  {section.paras.map((para, j) => (
                    <p key={j} className="text-lg leading-relaxed text-bark">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-espresso p-8 text-center text-cream">
            <h2 className="font-serif text-2xl">Ready for a free measure & quote?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/70">
              {business.availability}. We&rsquo;ll bring the samples to you.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/contacts"
                className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-espresso transition-colors hover:bg-brass-light"
              >
                Book a consultation
              </Link>
              <a
                href={business.phoneHref}
                className="rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-brass-light hover:text-brass-light"
              >
                Call {business.phone}
              </a>
            </div>
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brass-dark hover:text-espresso"
          >
            <span aria-hidden>←</span> All articles
          </Link>
        </div>

        {/* More articles */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-8">
          <h2 className="font-serif text-2xl text-espresso">More articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-bark/10 bg-linen transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <ProductImage
                    src={p.image}
                    alt={p.title}
                    artSlug={p.art}
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base leading-snug text-espresso group-hover:text-brass-dark">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
