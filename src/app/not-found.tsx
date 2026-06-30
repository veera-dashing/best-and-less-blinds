import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex min-h-[62vh] max-w-2xl flex-col items-center justify-center px-6 py-28 text-center">
        <p className="eyebrow text-brass-dark">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-espresso sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-bark">
          The page you&rsquo;re looking for may have moved or no longer exists.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-espresso px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-brass-dark"
          >
            Back to home
          </Link>
          <Link
            href="/our-services"
            className="rounded-full border border-bark/20 px-7 py-3.5 text-sm font-semibold text-espresso transition-colors hover:border-brass hover:text-brass-dark"
          >
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
