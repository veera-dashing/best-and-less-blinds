import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cocoa">
      <div className="mx-auto flex min-h-[62vh] max-w-2xl flex-col items-center justify-center px-6 py-28 text-center">
        <p className="eyebrow text-tomato">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-cream sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-oat">
          The page you&rsquo;re looking for may have moved or no longer exists.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-tomato px-7 py-3.5 text-sm font-semibold text-cocoa-deep transition-colors hover:bg-blush"
          >
            Back to home
          </Link>
          <Link
            href="/our-services"
            className="rounded-full border border-oat/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-tomato hover:text-tomato"
          >
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
