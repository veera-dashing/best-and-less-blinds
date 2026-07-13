import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ProductImage } from "@/components/ProductImage";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Buying Guides",
  description:
    "Tips and buying guides on curtains, blinds and shutters — choosing the right window furnishings, maximising light, blackout curtains, motorised blinds and more.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        crumb="Blog"
        eyebrow="Blog & Guides"
        title="Window dressing, made simple"
        intro="Practical tips and buying guides to help you choose, style and get the most from your curtains, blinds and shutters."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-oat/10 bg-cocoa-light transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-cocoa-deep">
                    <ProductImage
                      src={post.image}
                      alt={post.title}
                      artSlug={post.art}
                      priority={i === 0}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cocoa/90 px-3 py-1 text-xs font-medium text-oat">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-taupe">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden>·</span>
                      <span>{post.readMins} min read</span>
                    </div>
                    <h2 className="mt-2 font-serif text-xl leading-snug text-cream group-hover:text-tomato">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-oat">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tomato">
                      Read article
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
